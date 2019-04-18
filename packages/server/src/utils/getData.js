const fs = require("fs");
const path = require("path");
const parser = require("xml2json");
const axios = require("axios");
const { DAILY_COMMON_URL } = require("../constants");

const currentData = function() {
  const data = new Date();
  const dataObj = {
    year: data.getUTCFullYear(),
    month: data.getUTCMonth(),
    day: data.getUTCDay()
  };
  return `${dataObj.year}-${dataObj.month}-${dataObj.day}`;
};

const getDataObjFromFile = function(filePath) {
  const signDataBuffer = fs.readFileSync(filePath);
  const signDataString = signDataBuffer.toString();
  const signDataObj = JSON.parse(signDataString);
  return signDataObj;
};

const getDataObjFromApi = function() {
  return axios
    .get(DAILY_COMMON_URL)
    .then(res => res.data)
    .then(res => parser.toJson(res));
};

const createJsonFile = data => {
  const name = path.join(__dirname, `../data/${currentData()}.json`);
  fs.writeFileSync(name, data);
};

const signData = async function() {
  let signData = {};
  const filePath = path.join(__dirname, `../data/${currentData()}.json`);
  const haveData = fs.existsSync(filePath);
  if (haveData) {
    try {
      signData = getDataObjFromFile(filePath);
      return signData;
    } catch (error) {
      console.error("ERROR CODE/001 ", error);
    }
  } else if (!haveData) {
    try {
      const tempData = await getDataObjFromApi();
      createJsonFile(tempData);
      return JSON.parse(tempData);
    } catch (e) {
      console.error(e);
    }
  } else {
    console.error("something go wrong");
    return false;
  }
};

module.exports = signData;
