import executeQuery from "../../DB/dbHelper.js";

export async function addTagsForPosts(req, res) {
    try {

        const { post_id, tag_id } = req.body;
        const query = `insert into tagsofposts(post_id,tag_id) values(?,?)`;
        const params = [post_id, tag_id];
        const result = await executeQuery(query, params);

        res.json({ message: "Tag Added to Post Successfully!" });

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getTagsByPostId(req, res) {
    try {

        const { id } = req.params;
        const query = `SELECT id,tag_name FROM tags JOIN tagsofposts ON tags.id = tagsofposts.tag_id WHERE tagsofposts.post_id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.length) {
            return res.json({ message: result });
        }

        res.json({ message: "no tags found for that post or invalid post ID!" });

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getPostsByTagId(req, res) {
    try {

        const { id } = req.params;
        const query = `SELECT id,title,content FROM posts JOIN tagsofposts ON posts.id = tagsofposts.post_id WHERE tagsofposts.tag_id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.length) {
            return res.json({ message: result });
        }

        res.json({ message: "no posts found for that tag or invalid tag ID!" });

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getPostsByUserId(req, res) {
    try {

        const { id } = req.params;
        const query = `select title,content from posts where user_id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.length) {

            return res.json({ message: result });

        }

        res.json({ message: "no posts found for that user or invalid user ID!" });

    } catch (error) {

        res.json({ message: error });

    }
}