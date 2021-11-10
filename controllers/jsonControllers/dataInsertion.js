const fs = require("fs");
const { formatData } = require("./formatData");

exports.dataInsertion = (data) => {
    const dataStringified = JSON.stringify(data);
    const currentData = fs.readFileSync('data/users.json', 'utf-8');

    if (currentData == '') {
        return dataStringified;
    } else {
        return formatData(currentData, dataStringified);
    }
}