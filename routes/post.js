const express = require('express');
const router = express.Router();
const Post = require('../models/post')
const auth = require("../middlewares/auth-middleware");
const cors = require('cors');

router.post('/', async (req, res) => { // 게시물 작성
    const {  userId,title, tag, contents, thumbnail, introduce  } = req.body;
    // let { user } = res.locals

    await Post.create({
        userId,//test용
        // userId: user.userId,
        title,
        tag,
        contents,
        // thumbnail,
        introduce 
    });

    res.status(200).json({ mssage: "게시물이 저장되었습니다."});
});


module.exports = router;
