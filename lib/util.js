const fs = require('fs-extra');
const path = require('path');

async function writeFiles(dir, files) {
  Object.keys(files).forEach((fileName) => {
    const filePath = path.join(dir, fileName);
    fs.ensureDirSync(path.dirname(filePath));
    fs.writeFileSync(filePath, files[fileName]);
  });
}
module.exports = {
  writeFiles,
};
