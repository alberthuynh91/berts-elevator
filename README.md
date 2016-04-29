# berts-elevator
My implementation of an elevator in Javascript. I am following the guidelines I found in a [**StackExchange**](http://codereview.stackexchange.com/questions/75303/elevator-program-code-challenge) post.

## Guidelines

For this portion of the code challenge, you will develop code that renders an elevator panel that matches the provided mockup (I was not given a mockup, so I made my own). You will then be adding JS code to make the elevator panel function according to the functional requirements below. You can control which way the elevator moves by selecting the “floor” buttons on the panel. As soon as a button is selected, the elevator will begin moving toward that floor.

#### UI Requirements:

A display panel that indicates the number of the current floor Green and red lights indicating whether the elevator is going up (green) or down (red) Four floor buttons (I modified it to have five button/five floors)

#### Functional Requirements:

- A floor can be selected from the elevator panel
- When a floor is selected, its button is highlighted.
- Clicking on a floor button in the panel will cause the floors in the background to scroll up and down.
- Multiple floors can be selected and will be executed in the order that they were selected.
- The chosen button should remain highlighted until the floor is reached.
- The current floor is shown on the display panel.
- The elevator's current direction (up/down) is indicated by highlighting the corresponding green and red indicators in the display panel.
- A visual cue is provided when you have arrived at the selected floor.
- Selecting a button anchor does not navigate or change the URL.

## Improvements
- Currently the elevator work a queue. I would like it to work off a priority queue, like a elevator would in real life. For example, with the queue implementation of the elevator, if a person were on floor 1, presses floor 5 and then immediately presses floor 4, the elevator will move in the following order: 1->5->4. In a real life elevator the elevator would move in this order: 1->4->5.
- UI Improvements: Add opening and sliding doors to simulate a real elevator.
