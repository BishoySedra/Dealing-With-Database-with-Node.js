import { Router } from "express";
import * as tagsOfPostsController from './tagsOfPosts.controller.js';

const router = Router();

router.post('/posts/tags/add', tagsOfPostsController.addTagsForPosts);
router.get('/posts/:id/tags', tagsOfPostsController.getTagsByPostId);
router.get('/tags/:id/posts', tagsOfPostsController.getPostsByTagId);
router.get('/users/:id/posts', tagsOfPostsController.getPostsByUserId);

export default router;