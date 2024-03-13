// TODO: install express, import express, and create a new express app
const express = require("express")
const app = express()
const port = 3000
const path = require('path');

const posts = {

}

let nextPostId = 0

app.use(express.json())

app.get("/posts", (req, res) => {
	res.json(posts)
})

app.post("/posts", (req, res) => {
	const postId = nextPostId
	nextPostId++

	posts[postId] = {
		id: postId,
		name: req.body.name,
		content: req.body.content,
		timestamp: Date.now(),
		comments: []
	}

	console.log("Added a post by " + req.body.name)

	res.json({
		postId: postId
	})
})

app.listen(port, () => {
	console.log("Express running on port " + port)
})

// hint: remember to tell express what middleware to use

// TODO: define a GET request handler for the r

// TODO: define a POST request handler at the /my-post endpoint
// have this request handler read the 'message' attribute of the body of the request

// TODO: make the server listen on your selected port number
