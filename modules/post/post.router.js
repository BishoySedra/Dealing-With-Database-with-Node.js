import { Router } from "express";
import * as postController from "./post.controller.js";

const router = Router();

router.post('/posts', postController.addPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePostById);
router.delete('/posts/:id', postController.deletePostById);

export default router;
