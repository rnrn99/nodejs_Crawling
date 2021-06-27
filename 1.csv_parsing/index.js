const parse = require('csv-parse/lib/sync');
const fs = require('fs');

const csv = fs.readFileSync('data.csv');
const records = parse(csv.toString('utf-8'));

records.forEach((record, index) => {
    console.log(index, record);
    // link = record[1];
    // console.log(link)
});

