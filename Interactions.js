var Interactions = {};

Interactions.interact = function() {
	Scene.players.forEach(function(player) {
		// Perform collision detection between player and components in the world
		var collisionDistances = Interactions.detectCollisions(player);
		
		// Act on any collisions between the player and components
		collisionDistances.collidedElements.forEach(function(component) {
			player.collide(component);
		});
		
		// Calculate the vertical position from the starting time
		var t = new Date().getTime() - player.initialTime;
		var y0 = player.initialPosition;
		var v0 = player.initialVelocity;
		var a = player.gravity;
		var proposedPlayerPosition = y0 + v0 * t + 0.5 * a * t * t;
		
		// Move to y height corresponding to the current time without going through any components
		if (collisionDistances.distanceToFloor !== -1 && proposedPlayerPosition > player.y + collisionDistances.distanceToFloor) {
			// Player would go through the floor, so move to floor
			player.y += collisionDistances.distanceToFloor;
			player.justTouchedFloor = true;
		} else if (collisionDistances.distanceToCeiling !== -1 && proposedPlayerPosition < player.y - collisionDistances.distanceToCeiling) {
			// Player would go through the ceiling, so move to ceiling
			player.y -= collisionDistances.distanceToCeiling;
			player.initialVelocity = 0;
			player.initialTime = new Date().getTime();
			player.initialPosition = player.y;
		} else {
			// Player will not hit anything, so move to proposed position
			player.y = proposedPlayerPosition;
		}
		
		// Evaluates when player first touches the floor
		if (collisionDistances.distanceToFloor >= 0 && player.justTouchedFloor) {
			// Set jump or rest trajectory
			if (player.jumpPressed && !player.jumpStillPressed) {
				// Player is about to move upwards quickly
				player.initialTime = new Date().getTime();
				player.initialPosition = player.y;
				player.initialVelocity = -0.01;
				player.jumpStillPressed = true;
				player.holdingGlide = true;
			} else {
				// Player is standing on a component
				player.initialVelocity = 0;
				player.initialTime = new Date().getTime();
				player.initialPosition = player.y;
			}
			
			// Reset glide and floor touched states
			player.gravity = Scene.gravity;
			player.startedGliding = false;
			player.justTouchedFloor = false;
			
			player.setAnimation("run");
		}
		
		// Handle gliding beginning at the apogee of the jump
		if (new Date().getTime() - player.initialTime > -player.initialVelocity / Scene.gravity) {
			// Turn on or off gliding mode
			if (player.jumpPressed) {
				// Run only once at the start
				if (!player.startedGliding) {
					// Set player gravity to 1/3 for the glide
					player.initialVelocity = player.initialVelocity + player.gravity * (new Date().getTime() - player.initialTime);
					player.initialPosition = player.y;
					player.gravity = Scene.gravity / 3;
					player.initialTime = new Date().getTime();
					player.startedGliding = true;
				}
			} else {
				// Run only once when the player stops gliding
				if (player.startedGliding) {
					player.initialVelocity = player.initialVelocity + player.gravity * (new Date().getTime() - player.initialTime);
					player.initialPosition = player.y;
					player.gravity = Scene.gravity;
					player.initialTime = new Date().getTime();
					//player.startedGliding = false; // Enables gliding again after letting go
				}
			}
		}
	});
};

Interactions.detectCollisions = function(player) {
	// Keep track of the smallest positive values of the component's distance to the player and which components collide inside
	var distanceToFloor = -1;
	var distanceToCeiling = -1;
	var collidedElements = [];
	
	// Go through each component, storing its position above and below the player
	Scene.components.forEach(function(component) {
		// Only check collision on components aligned horizontally to handle X axis collision
		if (player.x + player.width >= component.x && component.x + component.width >= player.x) {
			// Check for intersection between player and component
			if (player.y > component.y - component.height && player.y - player.height < component.y) {
				collidedElements.push(component);
			}
			
			// Stop checking this component for collision if it is not solid (so players cannot stand on it)
			if (!component.solid) return;
			
			// Calculate distance from player to closest floor below player
			var elementDistanceToFloor = component.y - component.height - player.y;
			if (elementDistanceToFloor >= 0 && (elementDistanceToFloor < distanceToFloor || distanceToFloor < 0)) {
				distanceToFloor = elementDistanceToFloor;
			}
			
			// Calculate distance from player to closest ceiling above player
			var elementDistanceToCeiling = player.y - player.height - component.y;
			if (elementDistanceToCeiling >= 0 && (elementDistanceToCeiling < distanceToCeiling || distanceToCeiling < 0)) {
				distanceToCeiling = elementDistanceToCeiling;
			}
		}
	});
	
	// Return the distance from the floor to the player, the distance from the ceiling to the player, and an array of all collided objects
	return { distanceToFloor: distanceToFloor, distanceToCeiling: distanceToCeiling, collidedElements: collidedElements };
};
