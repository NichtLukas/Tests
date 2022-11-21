const fs = require("fs");
const {
  DEFAULT_MAX_HUMANS,
  getRandomHumans,
} = require("../mock/human-generator");

const [, , firstArg] = process.argv;
const MAX_HUMANS = firstArg || DEFAULT_MAX_HUMANS;
const DB_FILE_PATH = "./src/app/db.json";

const DB_CONTENT = JSON.stringify(
  { humans: getRandomHumans(MAX_HUMANS) },
  null,
  2
);

if (fs.existsSync(DB_FILE_PATH)) {
  try {
    fs.unlinkSync(DB_FILE_PATH);
  } catch (error) {
    throw Error(`Unable to delete file '${DB_FILE_PATH}': ` + error);
  }
}

fs.writeFile(DB_FILE_PATH, DB_CONTENT, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
