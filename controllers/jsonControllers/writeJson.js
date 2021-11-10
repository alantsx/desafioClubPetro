const fs = require("fs");
const { dataInsertion } = require("./dataInsertion");

exports.writeJson = (data) => {
    fs.writeFile('data/users.json', dataInsertion(data), (error, response) => {
        if (error) {
            throw error;
        } else {
            return ("Usuários registrados!");
        }
    });
}