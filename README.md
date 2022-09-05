# Hack Ideas

This application lets users to create challenge ideas for hackathon.

## Getting started

Follow the below instructions to run this application.

- unzip the folder
- run `npm install` to install dependencies
- run `npm start` to run the code
- To add challenge, login with existing username(_Amritanshu_, _Ami_ or _Anupam_) or register a new user.
- Some initial data is added to storage(_src/sample.js_)

## Wireframes

These are the wireframes

- [Homepage](https://wireframe.cc/0xyhd4)
- [Create challenge](https://wireframe.cc/neR6wA)
- [Register/login](https://wireframe.cc/bHOOoQ)

## Key highlights

These are some of the things I liked working on this project

- Used **useReducer** hook to create logic for sort functionality.
- Style is all written in CSS without using any external CSS library
- Made it responsive **without** using CSS media queries.
- Created custom hook(**useLocalStorage**) to work like a single source of application state
- Used **react portals** to create modal and toast notification

## Working of this application

- User need to login/register for adding challenges or to give votes. Username must be unique.
- Use the sort functionality to sort by oldest, latest, most upvotes most downvotes.
- Allow users to enter into application with 'employee id'(password is not necessary).
- Allow users to add a new challenges/ideas.

* A challenge will have a title, description and tags
* Maintained fixed pre-defined tags (like 'feature', 'tech' etc.)
* Users can upvote a challenge
* The list of all challenges shown on home page
