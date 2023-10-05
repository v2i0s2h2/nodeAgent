const fs = require('fs');
const path = require('path');

// specify the directory you want to rename files in
const directory = './dist';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    if (path.extname(file) === '.js') {
      const filePath = path.join(directory, file);
      const newFilePath = path.join(directory, `${path.basename(file, '.js')}.cjs`);

      fs.rename(filePath, newFilePath, err => {
        if (err) throw err;
      });
    }
  }
});
