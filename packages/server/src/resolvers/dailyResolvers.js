const axios = require("axios");
const parser = require("xml2json");
const { DAILY_COMMON_URL } = require("../constants.js");
const signData = require("../utils/getData");

const dailyResolver = async () => {
  const data = await signData();
  return data.horo;
};

module.exports = { dailyResolver };
