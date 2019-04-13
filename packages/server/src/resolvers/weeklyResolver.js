const axios = require("axios");
const parser = require("xml2json");
const { WEEKLY_PAST_URL, WEEKLY_CURRENT_URL } = require("../constants");

const pastWeeklyResolver = () =>
  axios
    .get(WEEKLY_PAST_URL)
    .then(res => res.data)
    .then(res => parser.toJson(res))
    .then(res => JSON.parse(res).horo);

const currentWeeklyResolver = () =>
  axios
    .get(WEEKLY_CURRENT_URL)
    .then(res => res.data)
    .then(res => parser.toJson(res))
    .then(res => JSON.parse(res).horo);

module.exports = {
  pastWeeklyResolver,
  currentWeeklyResolver
};
