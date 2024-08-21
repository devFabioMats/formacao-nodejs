// const database = require("./utils/database.js");
import * as database from "./utils/database.js";

database.connectToDatabase("my-database");
database.disconnectFromDatabase("my-database");

console.log("hello emac");
