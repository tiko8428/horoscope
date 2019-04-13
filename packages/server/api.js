const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./src/moduls/schema");
const PORT = process.env.PORT || "6001";
const app = express();

app.get("/", (rec, res) => {
  res.send(`<div><h1> Horoscope api </h1></div>`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`server is run on port ${PORT}`);
});
