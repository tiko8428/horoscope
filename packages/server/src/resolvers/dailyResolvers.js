const axios = require("axios");
const parser = require("xml2json");
const { DAILY_COMMON_URL } = require("../constants.js");

const dailyResolver = () =>
  axios
    .get(DAILY_COMMON_URL)
    .then(res => res.data)
    .then(res => parser.toJson(res))
    .then(res => JSON.parse(res).horo);

module.exports = { dailyResolver };
