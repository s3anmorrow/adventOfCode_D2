const fs = require("fs");

function readInput() {
  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("input.txt")
  });

  let log = [];
  lineReader
    .on("line", line => {
      log.push(line);
    })

    .on("close", () => {
      

    });
}

readInput();