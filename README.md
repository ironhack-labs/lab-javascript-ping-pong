![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Ping Pong Game



## Learning Goals

After this learning unit, you will be able to:

- Build your own Ping Pong game, using HTML, CSS and JavaScript
- Create the logic of the game using JavaScript classes
- Separate the logic of the game from the JavaScript DOM operations
- Structure JavaScript files according to the game classes

## Introduction

![Ping Pong Pic](https://i.imgur.com/XOUlFqu.png)

In this Learning Unit, we are going to build one of the first games ever created: the [Ping Pong](https://en.wikipedia.org/wiki/Pong).

We have a ball and two paddles at each side of a table. 

- The left paddle belongs to the user, and is going to be controlled with the keyboard arrows
- The right paddle belongs to the computer, and is going to be automatically controlled by the application
- The ball is going to move in a random direction at the beginning. It will rebound when reaches the top or bottom side of the board or is hit by a paddle

The goal is to score 7 points against the computer. A point is won if the ball reaches the right or left side of the board. Each player has to avoid the ball to reach his side of the board returning the ball with the paddle.


## The Board

- In the `board.js` file, let's code the functions we will need to handle the game. The Board will hold three elements: the user paddle, the computer's paddle and the ball
- In this file we will create the function to start, restart and stop the game and a function to check the game status. This function will be executed recurrently to render the updated elements

## The Ball

- In the `ball.js` file we will hold the functions to make the ball move and recognize the edges. If this happens, rebound in the opposite direction.
- These functions are:
	- Set a random direction to start the movement
	- Keep moving the ball in the same direction until it reaches an obstable, or the right and left sides of the board
	- Score a point to a paddle when needed
	- Restart the ball position when a point is scored

## The Paddle

- In the `paddle.js` file we will create the functions to relocate the paddles in their initial positions if a point is scored
- It will also detect when a paddle is hit by the ball

## User interactions

The user has only two input possibilities: Arrow up or Arrow down. This will move his paddle in the desired position.

In the `index.js` file we will create the methods to receive user's input.

## The computer has to play

Also, in the `index.js` we will create the method to make the computer play. The computer's paddle position should follow the ball at anytime to emulate intelligence.


## Summary

In this learning unit we created a Ping Pong game by separating at first the logic from the rendering. We also implemented a recurrent function with an interval to update and render the elements in the screen.

## Extra Resources

- [Ping Pong with Canvas](http://cssdeck.com/labs/ping-pong-game-tutorial-with-html5-canvas-and-sounds) - A tutorial to create another version of the ping pong game using canvas.
