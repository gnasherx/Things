import express from "express";

const app = express();
import constants from "./configuration/constants";
import "./configuration/database";
import middlewaresConfig from "./configuration/middlewares";
import { TodoRoutes, SectionRoutes } from "./models";

middlewaresConfig(app);

app.use("/api", [TodoRoutes, SectionRoutes]);

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
