# 18-Social-Network-API
  
  ## Description
  This project is a social media themed backend that uses mongodb. Users and thoughts can be created, updated, and deleted. Friends and thought reactions can be added and removed from users and thoughts aswell.

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  6. [Info](#info)
  
  ## Installation
  Run these commands in the terminal, in this order:
  * `npm i`
  * `npm start`
  
  The project will be running on localhost port 3001.

  ## Usage
  The following routes can be used in insomnia:
  * `localhost:3001/api/users/`
    * GET - returns all users
    * POST - create new user
  * `localhost:3001/api/users/:userId`
    * GET - return single user
    * PUT - update existing user
    * DELETE - delete user
  * `localhost:3001/api/users/:userId/friends`
    * PUT - add friend
  * `localhost:3001/api/users/:userId/friends/:friendId`
    * PUT - remove friend
  ---
  * `localhost:3001/api/thoughts/`
    * GET - returns all thoughts
    * POST - create new thought
  * `localhost:3001/api/thoughts/:thoughtId`
    * GET - return single thought
    * PUT - update existing thought
    * DELETE - delete thought
  * `localhost:3001/api/thoughts/:thoughtId/reactions`
    * PUT - add reaction
  * `localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`
    * PUT - remove reaction

  ## Info
  GitHub: [Emill0004](https://github.com/Emill0004)
  
  [Project GitHub](https://github.com/Emill0004/18-Social-Network-API)

  [Walkthrough Video](https://drive.google.com/file/d/1TE6iq61UaOgLQg2QsrRVdLWniw6-YuxJ/view)
