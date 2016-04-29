function Elevator() {
  // Initialize all of the available floors
  this.floors = [1, 2, 3, 4, 5];
  // Current floor elevator is on
  this.currentFloor = this.floors[0];
  // Direction that elevator is moving: -1=down, 0=not moving, 1=up
  this.directionMoving = 0;
  // Floors that are queue for elevators to go to
  this.elevatorQueue = [];
  // Time it takes elevator to move from floor to floor in MS
  this.elevatorSpeed = 1000;
}

Elevator.prototype.selectFloor = function(floorNum) {
  var direction;
  // If elevator is not moving
  if (this.directionMoving === 0) {
    // Find direction elevator is moving, either up (1) or down (-1)
    if (this.currentFloor < floorNum) {
      direction = 1;
    } else {
      direction = -1;
    }
    // Go to floor
    this.moveToFloor(floorNum, direction);
  } else {
    // Else if elevator is moving, push floorNum into queue
    console.log("Added floor: " + floorNum + " to elevator queue.");
    this.elevatorQueue.push(floorNum);
  }
};

Elevator.prototype.moveToFloor = function(floorNum, direction) {
  var self = this;
  var moveDuration = Math.abs(this.currentFloor - floorNum) * this.elevatorSpeed;
  console.log("Moving to floor: " + floorNum + " in direction " + direction);

  // Set moving direction of elevator
  this.directionMoving = direction;
  // Light up panel
  if (direction === 1) {
    $("#up-indicator").addClass("arrowLitUp");
  } else if (direction === -1) {
    $("#down-indicator").addClass("arrowLitDown");
  }
    // Move up to the floor
    setTimeout(function () {
      // Set current floor to floorNum pressed
      self.currentFloor = floorNum;
      // Change direction to stopped
      self.directionMoving = 0;
      // Unlight arrows in display panel pressed
      $(".arrow").removeClass("arrowLitUp arrowLitDown");
      // Unlight elevator number button pressed
      $("button:contains('"+ floorNum +"')").removeClass("numberLit");

      console.log("Arrived at floor: ", floorNum);

      // Check if there are any floors in the queue and if elevator is NOT moving
      if (self.elevatorQueue.length > 0 && self.directionMoving === 0) {
        // Remove floor from queue and go to floor
        var nextFloor = self.elevatorQueue.shift();
        if (self.currentFloor < nextFloor) {
          direction = 1;
        } else {
          direction = -1;
        }
        self.moveToFloor(nextFloor, direction);
      }
    }, moveDuration);
};


$(function() {
  var hrElevator = new Elevator();

  $(".elevator-button").on("click", function (event) {
    var floorNum = $(event.target).text();
    hrElevator.selectFloor(floorNum);
    $(event.target).addClass("numberLit");
  });
});

