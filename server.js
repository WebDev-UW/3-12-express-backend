// Import express and create a new express app listening on port 3000
import express from "express"
import db from "./connect.js"
const app = express()
const port = 3000

// Handle incoming JSON data in POST requests
app.use(express.json())

// This endpoint handles GET requests to /posts and returns the last 50 posts sorted by timestamp descending
app.get("/posts", async (req, res) => {
	let collection = await db.collection("posts");

	let documents = await collection.find().limit(50).sort({
		timestamp: -1
	}).toArray();	

	res.json(documents)
})

// This endpoint handles POST requests to /posts and inserts a new post from the client into the database
app.post("/posts", async (req, res) => {
	// Define our post object
	let newPost = {
		name: req.body.name,
		content: req.body.content,
		timestamp: Date.now(),
		likes: 0,
		comments: []
	}

	// Fetch the posts collection
	let collection = await db.collection("posts");

	// Insert our post into the posts collection
	await collection.insertOne(newPost)
	res.send(200)
})

app.listen(port, () => {
	console.log("Express running on port " + port)
})