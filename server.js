const port = 3000;
const express = require("express");
const app = express();
const db = require("./models");
const cors = require("cors");

const routes = [
  require("./Routers/user-routes"),
  require("./Routers/product-routes"),
  require("./Routers/register-routes"),
  require("./Routers/clients-routes"),
  require("./Routers/Devis-routes"),
  require("./Routers/contDevis-routes")
];

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes.forEach((route) => {
  app.use("/", route);
});

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
