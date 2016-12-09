// The MIT License (MIT)
//
// Copyright (c) 2015 José Manuel Pérez
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// Modified by Keavon Chambers from original at https://github.com/JMPerez/beats-audio-api

// The code for finding out the BPM / tempo is taken from this post:
// http://tech.beatport.com/2014/web-audio/beat-detection-using-web-audio/

/* jshint browser: true */
/* jshint devel: true */
/* jshint -W097 */

var MusicAnalyzer = {};

MusicAnalyzer.run = function(arrayBuffer, callback) {
	// Create offline context
	var OfflineContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
	var offlineContext = new OfflineContext(2, 30 * 44100, 44100);
	
	offlineContext.decodeAudioData(arrayBuffer, function(buffer) {
		// Create buffer source
		var source = offlineContext.createBufferSource();
		source.buffer = buffer;
		
		// Beats, or kicks, generally occur around the 100 to 150 hz range.
		// Below this is often the bassline.  So let's focus just on that.
		
		// First a lowpass to remove most of the song.
		var lowpass = offlineContext.createBiquadFilter();
		lowpass.type = "lowpass";
		lowpass.frequency.value = 150;
		lowpass.Q.value = 1;
		
		// Run the output of the source through the low pass.
		source.connect(lowpass);
		
		// Now a highpass to remove the bassline.
		var highpass = offlineContext.createBiquadFilter();
		highpass.type = "highpass";
		highpass.frequency.value = 100;
		highpass.Q.value = 1;
		
		// Run the output of the lowpass through the highpass.
		lowpass.connect(highpass);
		
		// Run the output of the highpass through our offline context.
		highpass.connect(offlineContext.destination);
		
		// Start the source, and render the output into the offline context.
		source.start(0);
		offlineContext.startRendering();
	});
	
	offlineContext.oncomplete = function(e) {
		var buffer = e.renderedBuffer;
		var peaks = MusicAnalyzer.getPeaks([buffer.getChannelData(0), buffer.getChannelData(1)]);
		var groups = MusicAnalyzer.getIntervals(peaks);
		var top = groups.sort(function(intA, intB) {
			return intB.count - intA.count;
		}).splice(0, 5);
		var bpm = top[0].tempo;
		while (bpm > 120) {
			bpm /= 2;
		}
		callback(bpm * 2);
	};
};

MusicAnalyzer.getPeaks = function(data) {
	// What we're going to do here, is to divide up our audio into parts.
	
	// We will then identify, for each part, what the loudest sample is in that
	// part.
	
	// It's implied that that sample would represent the most likely 'beat'
	// within that part.
	
	// Each part is 0.5 seconds long - or 22,050 samples.
	
	// This will give us 60 'beats' - we will only take the loudest half of
	// those.
	
	// This will allow us to ignore breaks, and allow us to address tracks with
	// a BPM below 120.
	
	var partSize = 22050 / 2,
	parts = data[0].length / partSize,
	peaks = [];
	
	for (var i = 0; i < parts; i++) {
		var max = 0;
		for (var j = i * partSize; j < (i + 1) * partSize; j++) {
			var volume = Math.max(Math.abs(data[0][j]), Math.abs(data[1][j]));
			if (!max || (volume > max.volume)) {
				max = {
					position: j,
					volume: volume
				};
			}
		}
		peaks.push(max);
	}
	
	// Cut off the first and last quarter of the song
	peaks = peaks.slice(Math.round(peaks.length / 4), Math.round(peaks.length - peaks.length / 4));
	
	// We then sort the peaks according to volume...
	peaks.sort(function(a, b) {
		return b.volume - a.volume;
	});
	
	// ...take the loundest 2/3 of those...
	peaks = peaks.splice(0, peaks.length * 3 / 4);
	
	// ...and re-sort it back based on position.
	peaks.sort(function(a, b) {
		return a.position - b.position;
	});
	
	return peaks;
};

MusicAnalyzer.getIntervals = function(peaks) {
	// What we now do is get all of our peaks, and then measure the distance to
	// other peaks, to create intervals.  Then based on the distance between
	// those peaks (the distance of the intervals) we can calculate the BPM of
	// that particular interval.
	
	// The interval that is seen the most should have the BPM that corresponds
	// to the track itself.
	
	var groups = [];
	var group;
	
	function incrementIntervalCount(interval) {
		if (interval.tempo === group.tempo) {
			interval.count++;
			return true;
		} else {
			return false;
		}
	}
	
	peaks.forEach(function(peak, index) {
		for (var i = 1; index + i < peaks.length && i < 10; i++) {
			group = {
				tempo: (60 * 44100) / (peaks[index + i].position - peak.position),
				count: 1
			};
			
			while (group.tempo < 50) {
				group.tempo *= 2;
			}
			
			while (group.tempo > 200) {
				group.tempo /= 2;
			}
			
			group.tempo = Math.round(group.tempo * 10) / 10;
			
			if (!groups.some(incrementIntervalCount)) {
				groups.push(group);
			}
		}
	});
	
	return groups;
};
