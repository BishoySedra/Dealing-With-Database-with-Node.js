import executeQuery from "../../DB/dbHelper.js";

export async function addTag(req, res) {
    try {
        console.log("here!!");
        const { tag_name } = req.body;
        const query = `insert into tags(tag_name) values(?)`;
        const params = [tag_name];
        const result = await executeQuery(query, params);

        res.json({ message: "Tag Added Successfully!" });

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getTags(req, res) {
    try {

        const query = `select * from tags`;
        const params = [];
        const result = await executeQuery(query, params);

        if (result.length) {
            res.json({ message: result });
        } else {
            res.json({ message: "No Tags Found!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getTagById(req, res) {
    try {

        const { id } = req.params;
        const query = `select * from tags where id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.length) {
            res.json({ message: result });
        } else {
            res.json({ message: "No Such Tag Found!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function updateTagById(req, res) {
    try {

        const { id } = req.params;
        const { tag_name } = req.body;
        const query = `UPDATE tags SET tag_name = ? WHERE id = ?`;
        const params = [tag_name, id];
        const result = await executeQuery(query, params);

        if (result.affectedRows) {
            res.json({ message: "Tag Updated Successfully!" });
        } else {
            res.json({ message: "No Tag Found to update!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function deleteTagById(req, res) {
    try {

        const { id } = req.params;
        const query = `DELETE FROM tags WHERE id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.affectedRows) {
            res.json({ message: "Tag Deleted Successfully!" });
        } else {
            res.json({ message: "No Tag Found to delete!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}