require("dotenv").config({ path: "./config/config.env" });
import {app} from "./app";

const PORT =process.env.PORT || 5000


/**
 * handling uncaught exception
 */
process.on("uncaughtException", (error:any) => {
  console.error(`Uncaught exception error ${error.message}`);
  console.log("The app is shutting down due to uncaught Exception error");
  process.exit(1);
});

const server = app.listen(PORT, () => {
//   console.clear();
  console.log(
    `The server is listening on http://localhost:${PORT} on ${process.env.NODE_ENV} mode`
  );
});

/**
 * handling unhandled rejection error
 */
process.on("unhandledRejection", (error:any) => {
  console.error(`Unhandled rejection error: ${error.message}`);
  console.log("The app is shutting down due to unhandled rejection");
  server.close(() => {
    process.exit(1);
  });
});