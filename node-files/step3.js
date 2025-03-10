const fs = require("fs");
const axios = require("axios");

function handleOutput(data, outputPath) {
  if (outputPath) {
    fs.writeFile(outputPath, data, "utf8", (err) => {
      if (err) {
        console.error(`Error writing to ${outputPath}`);
        console.error(err.message);
        process.exit(1);
      }
    });
  } else {
    console.log(data);
  }
}

function cat(path, outputPath) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${path}`);
      console.error(err.message);
      process.exit(1);
    } else {
      handleOutput(data, outputPath);
    }
  });
}

async function webCat(url, outputPath) {
  try {
    let res = await axios.get(url);
    handleOutput(res.data, outputPath);
  } catch (err) {
    console.error(`Error reading ${url}`);
    console.error(err.message);
    process.exit(1);
  }
}

let paths;
let outputPath;

if (process.argv[2] === "--out") {
  outputPath = process.argv[3];
  paths = process.argv.slice(4);
} else {
  paths = process.argv.slice(2);
}

for (let path of paths) {
  if (path.slice(0, 4) === "http") {
    webCat(path, outputPath);
  } else {
    cat(path, outputPath);
  }
}
