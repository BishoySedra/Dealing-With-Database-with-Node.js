import express from 'express';
import userRouter from './modules/user/user.router.js';
import postRouter from './modules/post/post.router.js';
import tagRouter from './modules/tag/tag.router.js';
import tagsOfPostsRouter from './modules/TagsAndPosts/tagsOfPosts.router.js';

const app = express();

app.use(express.json());

app.use(userRouter);
app.use(postRouter);
app.use(tagRouter);
app.use(tagsOfPostsRouter);

const port = 3000;
app.listen(port, () => console.log(`server running on port ${port}`));