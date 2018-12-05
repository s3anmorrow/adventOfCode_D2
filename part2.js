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
      let differences = 0;
      let position = 0;
      for (let n=0; n<log.length - 1; n++) {
        let line1 = log[n].split("");

        for (let r=0; r<log.length - 1; r++) {
          if (r == n) continue;
          let line2 = log[r].split("");

          differences = 0;
          // go through each letter to see if all same (except one)
          for (let p=0; p<line1.length; p++) {
            if (line1[p] != line2[p]) {
              differences++;
              position = p;
            }
            if (differences > 1) break;
          }

          console.log("dif! " + differences);

          if (differences == 1) {
            // we found the match (one char dif)
            line1.splice(position,1);
            line2.splice(position,1);
            console.log(line1.join(""));
            console.log(line2.join(""));
            console.log(position);
            process.exit();
          }
        }
      }

      // log.forEach(e => {
      //   console.log(e);
      // });

    });
}

readInput();