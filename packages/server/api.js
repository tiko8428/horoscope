const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./src/modules/schema");
const PORT = process.env.PORT || "6001";
const cors = require("cors");
const signData = require("./src/utils/getData");
const app = express();
app.use(cors());

app.get("/", (rec, res) => {
  res.send(`<div><h1> Horoscope api </h1></div>`);
});

// app.get("/test", async (rec, res) => {
//   const temp = await signData();
//   res.send(`<div><p> ${JSON.stringify(temp)} </p></div>`);
// });

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
