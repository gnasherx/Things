import express from "express";

const app = express();
import constants from "./configuration/constants";
import "./configuration/database";
import middlewaresConfig from "./configuration/middlewares";
import { TodoRoutes } from "./models";

middlewaresConfig(app);

app.use("/api", TodoRoutes);

app.listen(constants.PORT, err => {
  if (err) {
    throw err;
  } else {
    console.log(`
            Server running on port: ${constants.PORT}
            ---
            Running on ${process.env.NODE_ENV}
        `);
  }
});
