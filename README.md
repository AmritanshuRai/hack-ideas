# Hack Ideas

This application lets users to create challenge ideas for hackathon.

## Getting started

Follow the below instructions to run this application.

- unzip the folder
- run `npm install` to install dependencies
- run `npm start` to run the code

## Wireframes

These are the wireframes

- [Homepage](https://wireframe.cc/0xyhd4)
- [Create challenge](https://wireframe.cc/neR6wA)
- [Register/login](https://wireframe.cc/bHOOoQ)

## Key highlights

These are some of the things I liked working on this project

- Used **useReducer** to create logic for sort functionality.
- Style is all written in CSS without using any external CSS library
- Created custom hook(**useLocalStorage**) to work like a single source of application state
- Used **react portals** to create modal and toast notification

## Working of this application

- User need to login/register for adding challenges or to give votes. Username must be unique.
- Use the sort functionality to sort by oldest, latest, most upvotes most downvotes.
- Allow users to enter into application with 'employee id'(password is not necessary).
- Allow users to add a new challenges/ideas.

* A challenge will have a title, description and tags
* You can maintain fixed pre-defined tags (like 'feature', 'tech' etc.)
* Users can upvote a challenge
* Show the list of all challenges on home page
* Allow users to sort challenges with votes count, creation date
