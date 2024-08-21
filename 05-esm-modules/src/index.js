// const database = require("./utils/database.js");
import { disconnectFromDatabase, databaseType } from "./utils/database.js";
import { getDataFromApi } from "./utils/api.js";

getDataFromApi();
disconnectFromDatabase("my-database");
