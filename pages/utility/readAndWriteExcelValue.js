// utils/excelUtils.js
const xlsx = require('xlsx');
const fs = require('fs');

function readExcel(filePath) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return {
    data: xlsx.utils.sheet_to_json(sheet, { defval: '' }),
    workbook,
    sheetName: workbook.SheetNames[0],
  };
}

function writeExcel(filePath, jsonData, sheetName, workbook) {
  const updatedSheet = xlsx.utils.json_to_sheet(jsonData);
  workbook.Sheets[sheetName] = updatedSheet;
  xlsx.writeFile(workbook, filePath);
}

module.exports = { readExcel, writeExcel };
