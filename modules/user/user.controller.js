import executeQuery from "../../DB/dbHelper.js";

export async function addUser(req, res) {
    try {

        const { user_name, email } = req.body;
        const query = `insert into users(user_name,email) values(?,?)`;
        const params = [user_name, email];
        const result = await executeQuery(query, params);

        res.json({ message: "User Added Successfully!" });

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getUsers(req, res) {
    try {

        const query = `select * from users`;
        const params = [];
        const result = await executeQuery(query, params);

        if (result.length) {
            res.json({ message: result });
        } else {
            res.json({ message: "No Users Found!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function getUserById(req, res) {
    try {

        const { id } = req.params;
        const query = `select * from users where id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.length) {
            res.json({ message: result });
        } else {
            res.json({ message: "No Such User Found!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function updateUserById(req, res) {
    try {

        const { id } = req.params;
        const { user_name, email } = req.body;
        const query = `UPDATE users SET user_name = ?, email = ? WHERE id = ?`;
        const params = [user_name, email, id];
        const result = await executeQuery(query, params);

        if (result.affectedRows) {
            res.json({ message: "User Updated Successfully!" });
        } else {
            res.json({ message: "No User Found to update!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}

export async function deleteUserById(req, res) {
    try {

        const { id } = req.params;
        const query = `DELETE FROM users WHERE id = ?`;
        const params = [id];
        const result = await executeQuery(query, params);

        if (result.affectedRows) {
            res.json({ message: "User Deleted Successfully!" });
        } else {
            res.json({ message: "No User Found to delete!" });
        }

    } catch (error) {

        res.json({ message: error });

    }
}