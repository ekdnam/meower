# meower

![Screenshot](https://github.com/ekdnam/meower/blob/master/image.jpg)

 Twitter for Cats 🐱

Built using MongoDB, Expressjs, and Nodejs.

* MongoDB stores the mews.
* Expressjs creates the web app.
* Node is used at the server-side.

## Functionality:
* After posting a mew, the page shows the mew immediately.
* filters out bad words (use npm package 'bad-words').
* controls the number of requests that can be made to the server.
* npm package monk establishes a connection to MongoDB.

## How to mew?

Make sure that you have nodejs, and MongoDB installed on your machine. Set the bin directory in the MongoDB folder as an environment variable. On my machine, the path was

```
C:\Program Files\MongoDB\Server\4.4\bin
```

* Go the directory where you want to clone this repo. Open cmd, type 

```
git clone https://github.com/ekdnam/meower.git
```
* In the server directory, open cmd, and run the following command 

```
npm run server
```
* In the client directory, open cmd, and run the following command 

```
live-server
```

Voila! Now mew as much as you want to!

## Notes

* If you want to make changes to the server side javascript code, and simultaneously see the changes without having to run the server again and again, in the server directory, in the cmd, use

```
npm run dev
```

It uses Nodemon for the task.

* The client is @ `localhost:8080`, the server is @ `localhost:5000`

 ## Reference: 
 
 [TheCodingTrain](https://www.youtube.com/watch?v=JnEH9tYLxLk&ab_channel=TheCodingTrain)
