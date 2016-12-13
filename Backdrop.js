function Backdrop() {
	this.stars = new StarEmitter(0, 0, 10275, 2581.8);
}

Backdrop.prototype.draw = function(width, height) {
	var self = this;
	
	Draw.push();
	Draw.scale(width / 10275);
	
	Sky();
	Buildings();
	Sea();
	Shards();
	Center_Path();
	Shorelines();
	
	Draw.pop();
	
	function Sky() {
		Draw.fill("#000000");
		Draw.rect(0, 0, 10275, 2581.8);
		
		self.stars.draw();
		
		Draw.fill("#FFF2E9");
		Draw.noStroke();
		Draw.ellipse(2288, 2250, 2115.6);
	}
	
	function Buildings() {
		Low_Buildings();
		function Low_Buildings() {
			Draw.fill("#131A1E");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(7937.2, 2236.8);
			Draw.vertex(7832.2, 2311.8);
			Draw.vertex(7937.2, 2314.8);
			Draw.vertex(7892.2, 2404.8);
			Draw.vertex(6611, 2389.8);
			Draw.vertex(6563, 2242.8);
			Draw.vertex(6593, 2200.8);
			Draw.vertex(6251, 2200.8);
			Draw.vertex(6155, 2347.8);
			Draw.vertex(5948, 2350.8);
			Draw.vertex(3904.8, 2359.8);
			Draw.vertex(3856.8, 2251.8);
			Draw.vertex(3883.8, 2222);
			Draw.vertex(3464, 2222);
			Draw.vertex(2832, 2525.8);
			Draw.vertex(1460.4, 2455.4);
			Draw.vertex(1363.5, 2234.4);
			Draw.vertex(1230.2, 2234.4);
			Draw.vertex(1230.2, 2450.4);
			Draw.vertex(1137, 2450.4);
			Draw.vertex(1027.1, 2335.7);
			Draw.vertex(63.2, 2335.7);
			Draw.vertex(111.2, 2468.4);
			Draw.vertex(0, 2468.4);
			Draw.vertex(0, 2581.8);
			Draw.vertex(10275, 2581.8);
			Draw.vertex(10275, 2245.6);
			Draw.endShape();
		}
		
		Opera_House();
		function Opera_House() {
			Shell_4();
			function Shell_4() {
				Draw.fill("#000000");
				Draw.beginShape();
				Draw.vertex(1363.5, 2085.8);
				Draw.vertex(1222.5, 2058.8);
				Draw.bezierVertex(892.5, 2178.8, 499.4, 2582.3, 499.4, 2582.3);
				Draw.vertex(700.4, 2582.4);
				Draw.bezierVertex(886.5, 2265.8, 1363.5, 2085.8, 1363.5, 2085.8);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(1363.5, 2085.8);
				Draw.bezierVertex(861.8, 2305.1, 707.7, 2582.2, 707.7, 2582.2);
				Draw.vertex(690.7, 2582.3);
				Draw.bezierVertex(927, 2239, 1349, 2083, 1349, 2083);
				Draw.vertex(1363.5, 2085.8);
				Draw.endShape();
			}
			
			Shell_3();
			function Shell_3() {
				Draw.fill("#0C0C0C");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(1270.5, 1818.7);
				Draw.vertex(985.5, 1893.7);
				Draw.bezierVertex(667.5, 2061.7, 253.4, 2582.2, 253.4, 2582.2);
				Draw.vertex(652.4, 2582.1);
				Draw.vertex(799.4, 2232.7);
				Draw.bezierVertex(910.5, 1977.8, 1270.5, 1818.7, 1270.5, 1818.7);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(1270.5, 1818.7);
				Draw.bezierVertex(985.5, 1971, 880, 2116.5, 880, 2116.5);
				Draw.bezierVertex(768, 2307.5, 661, 2582.2, 661, 2582.2);
				Draw.vertex(643.5, 2582.2);
				Draw.bezierVertex(707.7, 2371, 824.2, 2153.5, 824.2, 2153.5);
				Draw.bezierVertex(985.4, 1930, 1232, 1828.7, 1232, 1828.7);
				Draw.vertex(1270.5, 1818.7);
				Draw.endShape();
			}
			
			Shell_2();
			function Shell_2() {
				Draw.fill("#161616");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(985.5, 1650.7);
				Draw.bezierVertex(757.5, 1722.7, 565.5, 1920.7, 565.5, 1920.7);
				Draw.bezierVertex(253.5, 2163.7, 145.5, 2582.3, 145.5, 2582.3);
				Draw.vertex(439.5, 2582.3);
				Draw.bezierVertex(439.5, 2337.8, 673.5, 1986.8, 673.5, 1986.8);
				Draw.bezierVertex(738, 1856.5, 985.5, 1650.7, 985.5, 1650.7);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(985.5, 1650.7);
				Draw.vertex(952, 1659.2);
				Draw.bezierVertex(458, 2094.6, 430, 2582.2, 430, 2582.2);
				Draw.vertex(448, 2582.2);
				Draw.bezierVertex(508, 2058.8, 985.5, 1650.7, 985.5, 1650.7);
				Draw.endShape();
			}
			
			Shell_1();
			function Shell_1() {
				Draw.fill("#232323");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(-25.6, 2370.8);
				Draw.bezierVertex(52.4, 2025.8, 283.4, 1779.7, 283.4, 1779.7);
				Draw.bezierVertex(490.4, 1467.7, 964.5, 1359.7, 964.5, 1359.7);
				Draw.bezierVertex(553.5, 1560.7, 196.4, 2582.3, 196.4, 2582.3);
				Draw.vertex(-85.6, 2582.3);
				Draw.vertex(-25.6, 2370.8);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(172.4, 2582.3);
				Draw.bezierVertex(293.3, 2203.7, 521.3, 1825.1, 521.3, 1825.1);
				Draw.bezierVertex(755.3, 1460.6, 915.9, 1372.7, 915.9, 1372.7);
				Draw.vertex(964.4, 1359.7);
				Draw.bezierVertex(532, 1606, 196.4, 2582.3, 196.4, 2582.3);
				Draw.vertex(172.4, 2582.3);
				Draw.endShape();
			}
		}
		
		Striped_Tower();
		function Striped_Tower() {
			Draw.fill("#090A0A");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(2122.6, 2581.8);
			Draw.vertex(1453.5, 2581.8);
			Draw.bezierVertex(1453.5, 2581.8, 1644.5, 2507.1, 1644.5, 2456.1);
			Draw.vertex(1651.5, 1470.2);
			Draw.vertex(1933.5, 1677.2);
			Draw.vertex(1936.7, 2465.1);
			Draw.bezierVertex(1933.8, 2525.2, 2122.6, 2581.8, 2122.6, 2581.8);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1651.5, 1480);
			Draw.vertex(1664.4, 1480);
			Draw.vertex(1660.4, 1476.7);
			Draw.vertex(1650.9, 1476.7);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1650.9, 1489.5);
			Draw.vertex(1677.8, 1489.5);
			Draw.vertex(1673.3, 1486.2);
			Draw.vertex(1650.9, 1486.2);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1651.3, 1500);
			Draw.vertex(1692.1, 1500);
			Draw.vertex(1687.1, 1496.3);
			Draw.vertex(1650.9, 1496.3);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1650.2, 1656.5);
			Draw.vertex(1912.1, 1656.5);
			Draw.vertex(1904.3, 1650.8);
			Draw.vertex(1650.1, 1650.8);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1650.1, 1629.5);
			Draw.vertex(1871.3, 1629.5);
			Draw.vertex(1863.1, 1623.5);
			Draw.vertex(1650.4, 1623.5);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1650.1, 1604.8);
			Draw.vertex(1834.9, 1604.8);
			Draw.vertex(1827, 1599);
			Draw.vertex(1650.1, 1599);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1650.1, 1582.8);
			Draw.vertex(1805, 1582.8);
			Draw.vertex(1798.2, 1577.9);
			Draw.vertex(1650.1, 1577.9);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1650.9, 1562.8);
			Draw.vertex(1777.7, 1562.8);
			Draw.vertex(1770.2, 1557.3);
			Draw.vertex(1650.9, 1557.3);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1651, 1543.5);
			Draw.vertex(1751.4, 1543.5);
			Draw.vertex(1745.1, 1538.9);
			Draw.vertex(1650.9, 1538.9);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1651.1, 1527.5);
			Draw.vertex(1729.6, 1527.5);
			Draw.vertex(1722.8, 1522.6);
			Draw.vertex(1650.9, 1522.6);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(1651.2, 1512.5);
			Draw.vertex(1709.2, 1512.5);
			Draw.vertex(1703.6, 1508.4);
			Draw.vertex(1650.9, 1508.4);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1650.1, 1681.4, 283.5, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1649.8, 1720.5, 283.8, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1649.9, 1763.4, 283.8, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1649.8, 1804.2, 283.8, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1649.8, 1850.7, 283.8, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1647.6, 1960.1, 286, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1649.9, 1901.5, 283.8, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1647.6, 2022.7, 286.1, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1645.9, 2259.9, 290, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1647.1, 2094.2, 286.6, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1646.5, 2172.5, 286.2, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1645.1, 2346.5, 291.6, 5.3);
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.rect(1646.2, 2444.2, 290.5, 5.3);
		}
		
		Jellyfish_Building();
		function Jellyfish_Building() {
			Draw.fill("#031423");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(2145.4, 2434);
			Draw.vertex(2064.6, 2581.9);
			Draw.vertex(3372, 2581.9);
			Draw.vertex(3290.5, 2446.8);
			Draw.bezierVertex(3290.5, 2446.8, 3356.5, 2444.1, 3354.5, 2420.1);
			Draw.vertex(3355.5, 2369.1);
			Draw.bezierVertex(3355.5, 2369.1, 2729.8, 2361.5, 2083.5, 2346.1);
			Draw.vertex(2089.5, 2402.1);
			Draw.bezierVertex(2089.4, 2402, 2091.4, 2430, 2145.4, 2434);
			Draw.endShape();
			
			Transparent_Roofs();
			function Transparent_Roofs() {
				Draw.fill("rgba(65, 163, 77, 0.75)");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(1992.2, 2336.8);
				Draw.bezierVertex(2766, 2370, 3471.2, 2365.8, 3471.2, 2365.8);
				Draw.bezierVertex(3111.4, 2308, 2731.7, 2180.3, 2731.7, 2180.3);
				Draw.bezierVertex(2469.4, 2030.5, 2289.4, 2204, 2289.4, 2204);
				Draw.bezierVertex(2175.4, 2290, 1992.2, 2336.8, 1992.2, 2336.8);
				Draw.endShape();
				
				Draw.fill("rgba(147, 127, 27, 0.75)");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(3471.2, 2364.6);
				Draw.bezierVertex(3471.2, 2364.6, 3437.6, 2367.8, 3386.1, 2340.9);
				Draw.bezierVertex(3334.6, 2314, 3032.7, 2074, 2752.9, 2180.3);
				Draw.bezierVertex(2752.9, 2180.3, 2642.6, 2210, 2473.3, 2213.3);
				Draw.bezierVertex(2473.3, 2213.3, 2046.7, 2196, 2013.4, 2336.8);
				Draw.endShape();
			}
			
			Layer_Stripes();
			function Layer_Stripes() {
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(1992.2, 2349);
				Draw.bezierVertex(2739.6, 2365.8, 3471.2, 2378, 3471.2, 2378);
				Draw.vertex(3471.2, 2364.6);
				Draw.bezierVertex(2738.1, 2356.3, 1992.2, 2332, 1992.2, 2332);
				Draw.vertex(1992.2, 2349);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(2145.4, 2434);
				Draw.bezierVertex(2736.6, 2476.6, 3290.4, 2446.7, 3290.4, 2446.7);
				Draw.vertex(3296.5, 2456.9);
				Draw.bezierVertex(2724.5, 2488.6, 2139.1, 2445.4, 2139.1, 2445.4);
				Draw.vertex(2145.4, 2434);
				Draw.endShape();
			}
			
			Base_Stripes();
			function Base_Stripes() {
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2937.8, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2987.8, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(3037.9, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(3087.9, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(3138, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(3188, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(3238, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(3288.1, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2536.8, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2586.8, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2636.8, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2686.9, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2736.9, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2787, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2837, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2887, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2136.4, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2186.5, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2236.5, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2286.6, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2336.6, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2386.6, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2436.7, 2528.8, 10, 53.5);
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.rect(2486.7, 2528.8, 10, 53.5);
			}
		}
		
		Center_Pyramid();
		function Center_Pyramid() {
			Draw.fill("#FFFFFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(4890.6, 1778.6);
			Draw.vertex(4892, 950);
			Draw.vertex(4989, 859);
			Draw.vertex(5001.4, 504);
			Draw.vertex(5001.4, 1010);
			Draw.endShape();
			
			Draw.fill("#031423");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(4897.9, 956.6);
			Draw.vertex(4897.9, 1734);
			Draw.vertex(5104.9, 1734);
			Draw.vertex(5104.9, 956.6);
			Draw.vertex(5008, 860);
			Draw.vertex(5001.4, 504);
			Draw.vertex(4996, 861);
			Draw.endShape();
			
			Draw.fill("#031423");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(5940.9, 2581.6);
			Draw.vertex(5009.4, 1645);
			Draw.vertex(5007.2, 1645);
			Draw.vertex(4075.8, 2581.6);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(5745.9, 2581.5);
			Draw.vertex(5778.9, 2581.5);
			Draw.vertex(5778.9, 2407.3);
			Draw.vertex(5745.9, 2377.2);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(5668.9, 2581.5);
			Draw.vertex(5702, 2581.5);
			Draw.vertex(5702, 2325.4);
			Draw.vertex(5668.9, 2295.4);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(5564.7, 2581.5);
			Draw.vertex(5600.9, 2581.5);
			Draw.vertex(5600.9, 2221.5);
			Draw.vertex(5564.7, 2191.5);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(5477.9, 2581.5);
			Draw.vertex(5514.1, 2581.5);
			Draw.vertex(5514.1, 2133.2);
			Draw.vertex(5477.9, 2103.2);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(5382.5, 2581.5);
			Draw.vertex(5419.7, 2581.5);
			Draw.vertex(5419.7, 2038.8);
			Draw.vertex(5382.5, 1998.8);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(5292.4, 2581.5);
			Draw.vertex(5329.6, 2581.5);
			Draw.vertex(5329.6, 1949);
			Draw.vertex(5292.4, 1919);
			Draw.endShape();
			
			Draw.fill("none");
			Draw.stroke("#000000");
			Draw.strokeWeight("2");
			Draw.beginShape();
			Draw.vertex(5046.7, 2407.3);
			Draw.vertex(5046.7, 2554.8);
			Draw.vertex(5212.7, 2554.8);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(4270.8, 2581.5);
			Draw.vertex(4237.7, 2581.5);
			Draw.vertex(4237.7, 2402.1);
			Draw.vertex(4270.8, 2372.1);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(4347.7, 2581.5);
			Draw.vertex(4314.7, 2581.5);
			Draw.vertex(4314.7, 2320);
			Draw.vertex(4347.7, 2300);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(4452, 2581.5);
			Draw.vertex(4415.8, 2581.5);
			Draw.vertex(4415.8, 2228);
			Draw.vertex(4452, 2188);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(4538.8, 2581.5);
			Draw.vertex(4502.6, 2581.5);
			Draw.vertex(4502.6, 2128);
			Draw.vertex(4538.8, 2098);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(4634.2, 2581.5);
			Draw.vertex(4597, 2581.5);
			Draw.vertex(4597, 2038.8);
			Draw.vertex(4634.2, 2008.8);
			Draw.endShape();
			
			Draw.fill("#000000");
			Draw.beginShape();
			Draw.vertex(4724.2, 2581.5);
			Draw.vertex(4687, 2581.5);
			Draw.vertex(4687, 1948.3);
			Draw.vertex(4724.2, 1918.2);
			Draw.endShape();
			
			Draw.fill("none");
			Draw.stroke("#000000");
			Draw.strokeWeight("2");
			Draw.beginShape();
			Draw.vertex(4970, 2407.3);
			Draw.vertex(4970, 2554.8);
			Draw.vertex(4804, 2554.8);
			Draw.endShape();
			
			Draw.fill("#F7896F");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(5292.4, 2581.5);
			Draw.vertex(5045.7, 2352);
			Draw.vertex(5164.5, 2352);
			Draw.vertex(5178.7, 2300.8);
			Draw.vertex(5049.7, 2250);
			Draw.vertex(5262.7, 2184);
			Draw.vertex(5114, 2092.1);
			Draw.vertex(4902.7, 2092.1);
			Draw.vertex(4754, 2184);
			Draw.vertex(4967, 2250);
			Draw.vertex(4838, 2300.8);
			Draw.vertex(4852.1, 2352);
			Draw.vertex(4971, 2352);
			Draw.vertex(4724.2, 2581.5);
			Draw.endShape();
			
			Draw.fill("#031423");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(4741, 2574);
			Draw.vertex(4984, 2347);
			Draw.vertex(4858, 2347);
			Draw.vertex(4845, 2306);
			Draw.vertex(4984, 2250);
			Draw.vertex(4770, 2181.3);
			Draw.vertex(4904.7, 2098.6);
			Draw.vertex(5112.7, 2098.6);
			Draw.vertex(5247.3, 2181.3);
			Draw.vertex(5032, 2248.6);
			Draw.vertex(5169.3, 2304.6);
			Draw.vertex(5159.3, 2345.3);
			Draw.vertex(5033.3, 2346.6);
			Draw.vertex(5276.7, 2574);
			Draw.endShape();
			
			Draw.fill("#F7896F");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(5007.2, 2213);
			Draw.vertex(4864, 2160);
			Draw.vertex(4949.6, 2010);
			Draw.vertex(4907, 1830);
			Draw.vertex(5008.5, 1924.9);
			Draw.vertex(5008.2, 1924.9);
			Draw.vertex(5109.7, 1830);
			Draw.vertex(5067.1, 2010);
			Draw.vertex(5152.7, 2160);
			Draw.vertex(5009.4, 2213);
			Draw.endShape();
			
			Draw.noFill();
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(5007.9, 2203.3);
			Draw.vertex(5137.5, 2156);
			Draw.vertex(5052, 2006);
			Draw.vertex(5092, 1862);
			Draw.vertex(5008.8, 1940);
			Draw.vertex(4926, 1862);
			Draw.vertex(4964, 2007);
			Draw.vertex(4881, 2155);
			Draw.endShape();
			
			Draw.fill("#031423");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(4956, 2010);
			Draw.vertex(4916.7, 1846);
			Draw.vertex(5008, 1934);
			Draw.vertex(5100.7, 1846);
			Draw.vertex(5059.3, 2010);
			Draw.vertex(5142.7, 2155.3);
			Draw.vertex(5008.7, 2207);
			Draw.vertex(4871.5, 2158);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(4897.9, 1252.1);
			Draw.vertex(5104.9, 1042.1);
			Draw.vertex(5104.9, 1022.6);
			Draw.vertex(4897.9, 1234.1);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(4897.9, 1313.6);
			Draw.vertex(5104.9, 1108.1);
			Draw.vertex(5104.9, 1126.1);
			Draw.vertex(4897.9, 1331.6);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(5008.2, 1598.8);
			Draw.vertex(5008.3, 1598.9);
			Draw.vertex(5008.5, 1598.8);
			Draw.endShape();
			
			Draw.fill("#A8FDFF");
			Draw.noStroke();
			Draw.beginShape();
			Draw.vertex(5979.9, 2581.6);
			Draw.vertex(5008.3, 1598.9);
			Draw.vertex(4036.7, 2581.6);
			Draw.vertex(5979.9, 2581.6);
			Draw.vertex(5009.4, 1645);
			Draw.vertex(5329.6, 1967);
			Draw.vertex(5329.6, 2581.5);
			Draw.vertex(5382.5, 2581.5);
			Draw.vertex(5382.5, 2020.2);
			Draw.vertex(5514.1, 2152.5);
			Draw.vertex(5514.1, 2581.5);
			Draw.vertex(5564.7, 2581.5);
			Draw.vertex(5564.7, 2203.3);
			Draw.vertex(5702, 2341.4);
			Draw.vertex(5702, 2581.5);
			Draw.vertex(5745.9, 2581.5);
			Draw.vertex(5745.9, 2385.4);
			Draw.vertex(5940.9, 2581.5);
			Draw.vertex(4075.8, 2581.5);
			Draw.vertex(4270.8, 2385.4);
			Draw.vertex(4270.8, 2581.5);
			Draw.vertex(4314.7, 2581.5);
			Draw.vertex(4314.7, 2341.4);
			Draw.vertex(4452, 2203.3);
			Draw.vertex(4452, 2581.5);
			Draw.vertex(4502.6, 2581.5);
			Draw.vertex(4502.6, 2152.5);
			Draw.vertex(4634.2, 2020.2);
			Draw.vertex(4634.2, 2581.5);
			Draw.vertex(4687.1, 2581.5);
			Draw.vertex(4687.1, 1967);
			Draw.vertex(5007.3, 1645);
			Draw.vertex(5009.4, 1645);
			Draw.endShape();
			
		}
		
		Tube_Towers();
		function Tube_Towers() {
			Tallest();
			function Tallest() {
				Draw.fill("#031423");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7386.1, 2583.3);
				Draw.vertex(7703.9, 2583.3);
				Draw.vertex(7703.9, 1312.7);
				Draw.vertex(7386.1, 1484);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7702.6, 1308);
				Draw.bezierVertex(7700.1, 1303.7, 7694.1, 1301.6, 7685.2, 1301.6);
				Draw.bezierVertex(7655.1, 1301.6, 7592.3, 1325.5, 7525, 1364.4);
				Draw.bezierVertex(7438, 1414.7, 7376.3, 1470.9, 7387.4, 1490);
				Draw.bezierVertex(7389.9, 1494.3, 7395.9, 1496.4, 7404.8, 1496.4);
				Draw.bezierVertex(7434.9, 1496.4, 7497.7, 1472.5, 7565, 1433.6);
				Draw.bezierVertex(7652, 1383.4, 7713.7, 1327.1, 7702.6, 1308);
				Draw.endShape();
				
				Draw.fill("#000000");
				Draw.beginShape();
				Draw.vertex(7648.1, 1352.3);
				Draw.bezierVertex(7623.8, 1373, 7590.7, 1395.7, 7555, 1416.3);
				Draw.bezierVertex(7490.1, 1453.8, 7437.6, 1472.7, 7411.8, 1475.9);
				Draw.bezierVertex(7416.7, 1469.4, 7425.6, 1459.6, 7441.9, 1445.7);
				Draw.bezierVertex(7466.2, 1425, 7499.3, 1402.3, 7535, 1381.7);
				Draw.bezierVertex(7599.9, 1344.2, 7652.4, 1325.3, 7678.2, 1322.1);
				Draw.bezierVertex(7678.2, 1322.1, 7664.4, 1338.4, 7648.1, 1352.3);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7463.8, 1598.3);
				Draw.bezierVertex(7506.5, 1671.2, 7566.4, 1809.6, 7609, 2055.4);
				Draw.bezierVertex(7636.1, 2211.5, 7670.1, 2326, 7703.8, 2409.6);
				Draw.vertex(7703.8, 2325.4);
				Draw.bezierVertex(7680.5, 2254.1, 7657.6, 2164.6, 7638.2, 2053);
				Draw.bezierVertex(7571, 1665.4, 7461.3, 1534.4, 7417.3, 1496.1);
				Draw.vertex(7385.9, 1484);
				Draw.vertex(7385.9, 1503.3);
				Draw.bezierVertex(7399.3, 1513.7, 7430, 1540.6, 7463.8, 1598.3);
				Draw.endShape();
			}
			
			Taller();
			function Taller() {
				Draw.fill("#031423");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(6946.5, 2582.4);
				Draw.vertex(7281.4, 2582.4);
				Draw.vertex(7281.4, 1853);
				Draw.vertex(6946.5, 2033.3);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(6946.5, 2033.3);
				Draw.vertex(6946.5, 2050.5);
				Draw.bezierVertex(6954.7, 2054.7, 6977.8, 2067.8, 7003.6, 2098.5);
				Draw.bezierVertex(7034.2, 2134.8, 7077, 2204, 7107.5, 2327.3);
				Draw.bezierVertex(7121.5, 2383.9, 7139.3, 2434.3, 7160.3, 2477.2);
				Draw.bezierVertex(7177.2, 2511.8, 7196.3, 2541.6, 7217, 2565.9);
				Draw.bezierVertex(7222.5, 2572.3, 7227.8, 2578, 7232.9, 2583.1);
				Draw.vertex(7262.7, 2583.1);
				Draw.bezierVertex(7253.6, 2575.6, 7242.7, 2565.4, 7230.9, 2551.4);
				Draw.bezierVertex(7200.3, 2515.1, 7157.5, 2445.9, 7127, 2322.6);
				Draw.bezierVertex(7113, 2266, 7095.2, 2215.6, 7074.2, 2172.7);
				Draw.bezierVertex(7057.3, 2138.1, 7038.2, 2108.3, 7017.5, 2084);
				Draw.bezierVertex(7003.2, 2067.3, 6989, 2055, 6978.3, 2046.8);
				Draw.vertex(6946.5, 2033.3);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7279.9, 1848);
				Draw.bezierVertex(7276.9, 1842.8, 7269.7, 1840.3, 7259.3, 1840.3);
				Draw.bezierVertex(7226.4, 1840.3, 7161, 1864.6, 7091.5, 1904.8);
				Draw.bezierVertex(6999.9, 1957.7, 6935.6, 2018.1, 6948.1, 2039.6);
				Draw.bezierVertex(6951.1, 2044.8, 6958.3, 2047.3, 6968.7, 2047.3);
				Draw.bezierVertex(7001.6, 2047.3, 7067, 2023, 7136.5, 1982.8);
				Draw.bezierVertex(7228.1, 1929.9, 7292.3, 1869.5, 7279.9, 1848);
				Draw.endShape();
				
				Draw.fill("#000000");
				Draw.beginShape();
				Draw.vertex(7225, 1896.8);
				Draw.bezierVertex(7199.5, 1919.1, 7164.5, 1943.5, 7126.5, 1965.5);
				Draw.bezierVertex(7093.8, 1984.4, 7061, 2000.3, 7031.7, 2011.4);
				Draw.bezierVertex(6996.5, 2024.8, 6977.8, 2027.1, 6969.4, 2027.3);
				Draw.bezierVertex(6973.7, 2020.2, 6983.3, 2008.1, 7002.9, 1990.9);
				Draw.bezierVertex(7028.4, 1968.6, 7063.4, 1944.2, 7101.4, 1922.2);
				Draw.bezierVertex(7134.1, 1903.3, 7166.9, 1887.4, 7196.2, 1876.3);
				Draw.bezierVertex(7231.4, 1862.9, 7250.1, 1860.6, 7258.5, 1860.4);
				Draw.bezierVertex(7258.5, 1860.4, 7244.6, 1879.6, 7225, 1896.8);
				Draw.endShape();
			}
			
			Shorter();
			function Shorter() {
				Draw.fill("#031423");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7063.9, 2582.3);
				Draw.vertex(7063.9, 2110);
				Draw.vertex(6786.1, 2261.9);
				Draw.vertex(6786.1, 2582.2);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7062.5, 2104.9);
				Draw.bezierVertex(7059.7, 2100, 7052.9, 2097.6, 7043.1, 2097.6);
				Draw.bezierVertex(7014.8, 2097.6, 6961.5, 2117, 6905.1, 2149.6);
				Draw.bezierVertex(6829.2, 2193.4, 6776.6, 2244.5, 6787.7, 2263.6);
				Draw.bezierVertex(6791, 2269.3, 6799.6, 2272.2, 6811.9, 2272.2);
				Draw.bezierVertex(6840.9, 2272.2, 6890.9, 2256.6, 6944.1, 2225.9);
				Draw.bezierVertex(7020, 2182, 7073.5, 2124, 7062.5, 2104.9);
				Draw.endShape();
				
				Draw.fill("#000000");
				Draw.beginShape();
				Draw.vertex(7014.4, 2149.3);
				Draw.bezierVertex(6992.9, 2170, 6964.4, 2191, 6934.1, 2208.5);
				Draw.bezierVertex(6910.1, 2222.4, 6885.3, 2233.8, 6862.5, 2241.5);
				Draw.bezierVertex(6842.4, 2248.3, 6824.5, 2252.1, 6811.9, 2252.1);
				Draw.bezierVertex(6810.8, 2252.1, 6809.9, 2252.1, 6809, 2252);
				Draw.bezierVertex(6812.7, 2246.1, 6820.5, 2236.3, 6835.5, 2222.9);
				Draw.bezierVertex(6856.1, 2204.5, 6884.4, 2184.6, 6915.1, 2166.9);
				Draw.bezierVertex(6972.2, 2133.9, 7018.8, 2118.6, 7041, 2117.7);
				Draw.bezierVertex(7041, 2117.7, 7029.4, 2134.9, 7014.4, 2149.3);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(6792.9, 2302.7);
				Draw.bezierVertex(6812.2, 2324.3, 6839.4, 2365.5, 6858.7, 2439);
				Draw.bezierVertex(6878.6, 2514.6, 6906.7, 2558.3, 6927.5, 2582.2);
				Draw.vertex(6952.8, 2582.2);
				Draw.bezierVertex(6930.2, 2562.3, 6896.5, 2519.6, 6873.5, 2432.5);
				Draw.bezierVertex(6852.8, 2353.9, 6823.3, 2309.7, 6802.2, 2286.5);
				Draw.bezierVertex(6796.5, 2280.2, 6791, 2275, 6786.1, 2270.8);
				Draw.vertex(6786.1, 2295.6);
				Draw.bezierVertex(6788.3, 2297.8, 6790.6, 2300.2, 6792.9, 2302.7);
				Draw.endShape();
			}
			
			Shortest();
			function Shortest() {
				Draw.fill("#031423");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7117, 2583.1);
				Draw.vertex(7407.6, 2583.1);
				Draw.vertex(7407.6, 2325.5);
				Draw.vertex(7117.2, 2477.1);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7406.2, 2319.3);
				Draw.bezierVertex(7403.5, 2314.6, 7397, 2312.3, 7387.5, 2312.3);
				Draw.bezierVertex(7358.6, 2312.3, 7302.2, 2333.1, 7242.3, 2367.7);
				Draw.bezierVertex(7162.8, 2413.6, 7107.3, 2466.3, 7118.4, 2485.4);
				Draw.bezierVertex(7121.1, 2490.1, 7127.6, 2492.4, 7137.1, 2492.4);
				Draw.bezierVertex(7166, 2492.4, 7222.4, 2471.6, 7282.3, 2437);
				Draw.bezierVertex(7361.8, 2391.1, 7417.2, 2338.4, 7406.2, 2319.3);
				Draw.endShape();
				
				Draw.fill("#A8FDFF");
				Draw.noStroke();
				Draw.beginShape();
				Draw.vertex(7146.1, 2532.1);
				Draw.bezierVertex(7137.6, 2519.1, 7127.5, 2509, 7117.2, 2501.2);
				Draw.vertex(7117.1, 2523.6);
				Draw.bezierVertex(7124.5, 2529.9, 7131.6, 2537.4, 7137.6, 2546.6);
				Draw.bezierVertex(7148.2, 2562.9, 7161.4, 2574.6, 7174.3, 2583);
				Draw.vertex(7224.5, 2583);
				Draw.bezierVertex(7215, 2581.2, 7171.3, 2570.8, 7146.1, 2532.1);
				Draw.endShape();
				
				Draw.fill("#000000");
				Draw.beginShape();
				Draw.vertex(7356.2, 2361.1);
				Draw.bezierVertex(7334.4, 2380.2, 7304.6, 2401, 7272.3, 2419.7);
				Draw.bezierVertex(7244.3, 2435.9, 7216.1, 2449.5, 7191, 2459);
				Draw.bezierVertex(7170.9, 2466.6, 7153.2, 2471.3, 7141.3, 2472.3);
				Draw.bezierVertex(7145.7, 2466, 7153.9, 2456.4, 7168.4, 2443.7);
				Draw.bezierVertex(7190.2, 2424.6, 7220, 2403.8, 7252.3, 2385.1);
				Draw.bezierVertex(7280.3, 2368.9, 7308.5, 2355.3, 7333.6, 2345.8);
				Draw.bezierVertex(7353.7, 2338.2, 7371.4, 2333.5, 7383.3, 2332.5);
				Draw.bezierVertex(7383.3, 2332.5, 7370.7, 2348.3, 7356.2, 2361.1);
				Draw.endShape();
			}
		}
	}
	
	function Sea() {
		Draw.fill("#21343A");
		Draw.noStroke();
		Draw.rect(0, 2581.8, 10275, 2518.2);
	}
	
	function Shards() {
		Draw.opacity(0.5);
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8507.2, 1565.8);
		Draw.vertex(8531.2, 2792.2);
		Draw.vertex(8594.2, 2792.2);
		Draw.vertex(8573.2, 1380);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8798.3, 2958.8);
		Draw.vertex(8786.3, 765.3);
		Draw.vertex(8768.3, 581.6);
		Draw.vertex(8732.3, 1267.7);
		Draw.vertex(8732.3, 2976.3);
		Draw.vertex(8798.3, 2976.1);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8647, 2836);
		Draw.vertex(8647, 2072);
		Draw.vertex(8665.2, 1972.2);
		Draw.vertex(8694.2, 2836);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8837.3, 2822.2);
		Draw.vertex(8837.3, 1859);
		Draw.vertex(8861.3, 1751.7);
		Draw.vertex(8903.3, 1824.4);
		Draw.vertex(8918.3, 2822.2);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8897.3, 2752);
		Draw.vertex(8897.3, 1453.5);
		Draw.vertex(8897.3, 1391.7);
		Draw.vertex(8918.3, 1447.3);
		Draw.vertex(8918.3, 2752);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9200.3, 2099.8);
		Draw.vertex(9248.3, 2146.1);
		Draw.vertex(9248.3, 2880.2);
		Draw.vertex(9188.3, 2880.2);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9100, 2880);
		Draw.vertex(9100, 2404.1);
		Draw.vertex(9146.3, 2287.6);
		Draw.vertex(9146.3, 2880);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9292, 2792);
		Draw.vertex(9248.3, 1120);
		Draw.vertex(9308, 1471);
		Draw.vertex(9352, 2792);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9332, 3156);
		Draw.vertex(9300.2, 2452);
		Draw.vertex(9368, 2329.7);
		Draw.vertex(9384, 3156);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9707.3, 780.6);
		Draw.vertex(9647.3, 912.6);
		Draw.vertex(9647.3, 3484.6);
		Draw.vertex(9707.3, 3332.6);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9660, 1508);
		Draw.vertex(9604, 1613.4);
		Draw.vertex(9632, 2604.1);
		Draw.vertex(9692, 2604.1);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9720, 1972.2);
		Draw.vertex(9648, 2172.1);
		Draw.vertex(9668, 2822.2);
		Draw.vertex(9720, 2822.2);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9884, 1104.3);
		Draw.vertex(9912, 992);
		Draw.vertex(9912, 3113.8);
		Draw.vertex(9864, 3113.1);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9784, 3676);
		Draw.vertex(9740, 2448);
		Draw.vertex(9836, 2377.4);
		Draw.vertex(9864, 3676);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(10111.2, 3240.2);
		Draw.vertex(10111.2, 2132.6);
		Draw.vertex(10141.2, 1853.7);
		Draw.vertex(10180, 2132.6);
		Draw.vertex(10180, 3240.2);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9936, 3788);
		Draw.vertex(9936, 1796);
		Draw.vertex(9996, 1751.7);
		Draw.vertex(9996, 3788);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9508, 2743.8);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9604, 3294.2);
		Draw.vertex(9584, 1751.7);
		Draw.vertex(9632, 1823.5);
		Draw.vertex(9648, 3294.2);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9740, 3052);
		Draw.vertex(9740, 1471);
		Draw.vertex(9780, 1610.7);
		Draw.vertex(9802, 3052);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(10080, 3584);
		Draw.vertex(10080, 1436);
		Draw.vertex(10128, 1312);
		Draw.vertex(10128, 3584);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8957.3, 1724);
		Draw.vertex(8942.3, 2924.8);
		Draw.vertex(9008.3, 2975.8);
		Draw.vertex(8975.3, 1618.3);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9420, 2975.8);
		Draw.vertex(9420, 2051.8);
		Draw.vertex(9484, 1956);
		Draw.vertex(9524, 2975.8);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9508, 3268);
		Draw.vertex(9472, 2254.2);
		Draw.vertex(9524, 2344.1);
		Draw.vertex(9556, 3268);
		Draw.endShape();
		
		Draw.fill("#7FAAF7");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9100, 3052);
		Draw.vertex(9074.3, 1530.6);
		Draw.vertex(9122.3, 1618.3);
		Draw.vertex(9170.3, 3052);
		Draw.endShape();
		
		Draw.fill("#7D48FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(9584, 3402.2);
		Draw.vertex(9508, 1259.7);
		Draw.vertex(9556, 1312);
		Draw.vertex(9616, 3402.2);
		Draw.endShape();
		
		Draw.fill("#B799FF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8418.3, 2912);
		Draw.vertex(8396.2, 1853.7);
		Draw.vertex(8452, 1772);
		Draw.vertex(8488, 1823.5);
		Draw.vertex(8488, 2912);
		Draw.endShape();
		
		Draw.opacity(1);
	}
	
	function Center_Path() {
		Draw.opacity(0.2);
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(2384, 2702);
		Draw.vertex(2691.7, 2582.4);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(1932.8, 2902);
		Draw.vertex(2384, 2702);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(1671.5, 3162);
		Draw.vertex(1592.9, 3062.3);
		Draw.vertex(1932.8, 2902);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(2340, 3430);
		Draw.vertex(1671.5, 3162);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(2636.7, 3932.1);
		Draw.vertex(2340, 3430);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(3785.7, 5100);
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(2111, 5100);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(2111, 5100);
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(2636.7, 3932.1);
		Draw.vertex(1425, 5100);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(3785.7, 5100);
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(6228.5, 5100);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(7630.2, 2702);
		Draw.vertex(7322.5, 2582.4);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(8081.4, 2902);
		Draw.vertex(7630.2, 2702);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(8342.7, 3162);
		Draw.vertex(8421.2, 3062.3);
		Draw.vertex(8081.4, 2902);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(7674.2, 3430);
		Draw.vertex(8342.7, 3162);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(7377.4, 3932.1);
		Draw.vertex(7674.2, 3430);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(6228.5, 5100);
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(7903.2, 5100);
		Draw.endShape();
		
		Draw.fill("#C4C4C4");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(7903.2, 5100);
		Draw.vertex(5007.1, 2581.8);
		Draw.vertex(7377.4, 3932.1);
		Draw.vertex(8589.2, 5100);
		Draw.endShape();
		
		Draw.opacity(1);
	}
	
	function Shorelines() {
		Draw.fill("#111111");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(1788.1, 3140.2);
		Draw.bezierVertex(1522, 3080, 1963.7, 2916.3, 1963.7, 2916.3);
		Draw.bezierVertex(1963.7, 2916.3, 2531.4, 2663, 2729.8, 2582.3);
		Draw.vertex(2648.4, 2582.3);
		Draw.bezierVertex(1368.8, 3025.8, 1486.7, 3163.2, 1562, 3184);
		Draw.bezierVertex(2322, 3394, 2318.8, 3650.1, 2318.8, 3650.1);
		Draw.bezierVertex(2378.8, 3944, 1700.9, 4507.9, 1700.9, 4507.9);
		Draw.bezierVertex(1444.1, 4725.8, 1303.4, 4961.3, 1236.2, 5099.9);
		Draw.vertex(2019.4, 5099.9);
		Draw.bezierVertex(1989.3, 4798.2, 2330.8, 4495.9, 2330.8, 4495.9);
		Draw.bezierVertex(2900.7, 3944, 2678.7, 3584.1, 2678.7, 3584.1);
		Draw.bezierVertex(2546.7, 3374.2, 1788.1, 3140.2, 1788.1, 3140.2);
		Draw.endShape();
		
		Draw.fill("#111111");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(8226.1, 3140.2);
		Draw.bezierVertex(8492.2, 3080, 8050.5, 2916.3, 8050.5, 2916.3);
		Draw.bezierVertex(8050.5, 2916.3, 7482.8, 2663, 7284.4, 2582.3);
		Draw.vertex(7365.8, 2582.3);
		Draw.bezierVertex(8645.2, 3025.8, 8527.4, 3163.2, 8452.1, 3184);
		Draw.bezierVertex(7692.1, 3394, 7695.3, 3650.1, 7695.3, 3650.1);
		Draw.bezierVertex(7635.3, 3944, 8313.2, 4507.9, 8313.2, 4507.9);
		Draw.bezierVertex(8570, 4725.8, 8710.7, 4961.3, 8777.9, 5099.9);
		Draw.vertex(7994.7, 5099.9);
		Draw.bezierVertex(8024.8, 4798.2, 7683.3, 4495.9, 7683.3, 4495.9);
		Draw.bezierVertex(7113.4, 3944, 7335.4, 3584.1, 7335.4, 3584.1);
		Draw.bezierVertex(7467.4, 3374.2, 8226.1, 3140.2, 8226.1, 3140.2);
		Draw.endShape();
	}
};
