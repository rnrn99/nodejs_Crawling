const xlsx = require('xlsx');
const f = xlsx.readFile('data.xlsx');

// console.log(Object.keys(f.Sheets)); 
const sheets = f.Sheets.영화목록;

const rows = xlsx.utils.sheet_to_json(sheets);
// console.log(rows);

// arr.entries() => 내부 배열이 [index, value] 모양 iterator로 변환.
for(const [index, item] of rows.entries()) {
    console.log(index, item.제목, item.링크)
}

// rows.forEach((item, index) => {
//     console.log(index, item.제목, item.링크);
// })