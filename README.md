# Pony Maze Game
## Technologies
- Node.js (10.22.0)
- Typescript (4.1.3)
- Jest (26.6.3)
- Lodash (4.17.20)

## Setup
1. Install node packages
`npm install`
1. Build project
`npm run build`
1. Run application
`npm run start`

## NPM commands
- Clean up build files `npm clean`
- Build project files `npm run build`
- Start application `npm run start`
- Start application in develop mode `npm run dev`
- Run unit tests `npm run test`
- Run single unit test `npm run test:watch <path to test file>`

## Configuration
Application configuration file: `.env`

## Endpoints
1. Create new maze game: `POST /pony-challenge/maze`
	Request body parameters:
	```
	{
		"maze-width": 15,
		"maze-height": 20,
		"maze-player-name": "string"
	}
	```
	Possible responses:
	- `400 - Invalid request body parameters`
	- `201 - Successfully created new game`
	```
	{
		"maze_id": 1
	}
	```
1. Get current maze status `GET /pony-challenge/maze/:mazeId`
	Request parameter: `mazeId` (ID of maze which info you want to receive)
	Possible responses:
	- `400 - Invalid maze ID parameter`
	- `404 - Maze with ID not found`
	- `203 - Successfully found desired maze and returned data`
	```
	{
		"playerLocation": {
			"x": 0,
			"y": 0
		},
		"monsterLocation": {
			"x": 0,
			"y": 0
		},
		"walkableDirections": ["left", "right", "top", "bottom"];
	  }
	```
1. Make next move in the maze: `POST /pony-challenge/maze/:mazeId`
	Request parameter: `mazeId` (ID of maze in which you want to make a move)
	Request body parameters:
	```
	{
		"direction": "left"
	}
	```
	Possible directions: `left, right, up, down`
	Possible responses:
	- `400 - Invalid maze ID parameter`
	- `400 - You are trying to move into not walkable direction`
	- `404 - Maze with ID not found`
	- `200 - Game is already finished`
	- `200 - You won/lost the game`
	- `200 - Successfully made a move`
	
1. Print current maze view `GET /pony-challenge/maze/:mazeId/print`
	Request parameter: `mazeId` (ID of maze which you want to print)
	Possible responses:
	- `400 - Invalid maze ID parameter`
	- `404 - Maze with ID not found`
	- `200 - Successfully returned maze HTML`
