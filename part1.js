const fs = require("fs");

function readInput() {
  const lineReader = require("readline").createInterface({
    input: require("fs").createReadStream("input.txt")
  });

  let log = [];
  lineReader
    .on("line", line => {
      // split it up here into letters!
      line = line.split("");
      // sort it
      line.sort();
      log.push(line);
    })

    .on("close", () => {

      let doubleCounter = 0;
      let tripleCounter = 0;
      let doubleFound = false;
      let tripleFound = false;

      log.forEach(line => {
        doubleFound = false;
        tripleFound = false;
        for (let n=0; n<line.length; n++) {
          if ((line[n] == line[n+1]) && (line[n] == line[n+2]) && (!tripleFound)) {
            tripleCounter++;
            tripleFound = true;
            n+=2;
          } else if ((line[n] == line[n+1]) && (!doubleFound)) {
            doubleCounter++;
            doubleFound = true;
            n++;
          }

          if (doubleFound && tripleFound) break;
        }
      });

      console.log(doubleCounter + " : " + tripleCounter);
      let checksum = doubleCounter * tripleCounter;
      console.log(checksum);
    });
}

readInput();