import executeQuery from "../../DB/dbHelper.js";

export async function addPost(req, res) {
    try {

        const { title, content, user_id } = req.body;
        const query = `insert into posts(title,content,user_id) values(?,?,?)`;
        const params = [title, content, user_id];
        const result = await executeQuery(query, params);

        res.json({ message: "Post added successfully!" });

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getPosts(req, res) {
    try {

        const query = `select * from posts`;
        const params = [];
        const result = await executeQuery(query, params);

        if (result.length) {
            res.json({ message: result });
        } else {
            res.json({ message: "No Posts Found!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getPostById(req, res) {
    try {

        const { id } = req.params;
        const query = `select * from posts where id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.length) {
            res.json({ message: result });
        } else {
            res.json({ message: "No Such Post Found!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function updatePostById(req, res) {
    try {

        const { id } = req.params;
        const { title, content, user_id } = req.body;
        const query = `UPDATE posts SET title = ?, content = ?, user_id = ? WHERE id = ?`;
        const params = [title, content, user_id, id];
        const result = await executeQuery(query, params);

        if (result.affectedRows) {
            res.json({ message: "Post Updated Successfully!" });
        } else {
            res.json({ message: "No Post Found to update!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function deletePostById(req, res) {
    try {

        const { id } = req.params;
        const query = `DELETE FROM posts WHERE id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.affectedRows) {
            res.json({ message: "Post Deleted Successfully!" });
        } else {
            res.json({ message: "No Post Found to delete!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}