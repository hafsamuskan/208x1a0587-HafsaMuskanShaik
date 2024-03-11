const express = require("express");
const res = require("express/lib/response");
const router = express.Router();


const Post = require('../model/Post');

//Get all the posts
router.get('/', async (req,res) => {
    try {
        // find() -> get all the data
        const posts = await Post.find();
        res.json(posts);
    }catch(err) {
        res.json({ message: err});
    }
});

// save a post 

router.post("/", async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err});
    }
});

// get a specific post

router.get("/:postId", async (req,res) => {
    try {
        // findById() -> get the specific data
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err) {
        res.json({ message: err});
    }
});


// Update the specific post

router.patch("/:postId", async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id : req.params.postId},
            {$set : {
                title: req.body.title,
                description: req.body.description,
            }}
        );
        res.json(updatedPost);
    }catch(err) {
        res.json({ message: err});
    }
});

// delete a post

router.delete("/:postId", async (req,res) => {
    try {
        const removePost = await Post.deleteOne({_id : req.params.postId});
        res.json(removePost);
    }catch(err) {
        console.log(err);
        res.json({ message: err});
    }
});


module.exports = router;