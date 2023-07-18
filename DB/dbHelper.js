import connection from "./connection.js";

function executeQuery(query, params) {
    return new Promise((resolve, reject) => {
        connection.execute(query, params, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        })
    });
}

export default executeQuery;