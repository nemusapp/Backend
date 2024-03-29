import { createConnection } from "typeorm";
import app from "./app";

createConnection().then(async (conn) => {
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started, listening on port ${process.env.PORT || 8080}.`);
  });
});
