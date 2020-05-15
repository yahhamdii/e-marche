const rollup = require('rollup').rollup;

const rootFolder = './test/';
const fs = require('fs');


function rollupFile(folder) {
  folder = (folder != null ? (folder + '/') : '');
  fs.readdir(rootFolder + folder, (err, files) => {
    files.forEach((file) => {
      if (!(fs.statSync(rootFolder + folder + file).isDirectory())) {    
          rollup({
            entry: rootFolder + folder + file,
          }).then((bundle) => {
            bundle.write({
              format: 'cjs',
              dest: `dist/${folder}${file.replace('.js', '.test.js')}`,
            });
          }, (err) => {
            console.log(`${'\x1b[37m' + 'Errors: '}${  err.message}`);
            console.log(`\x1b[37m${err.loc.file}`);
            console.log(`\x1b[37m${err.frame}`);
          });
      } else {
        rollupFile(folder + file);
      }
    });
  });
}
var deleteFolderRecursive = function(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file,index){
      var curPath = path + "/" + file;
      if(fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdir(path,(err) => {
      if(path === './dist'){
        rollupFile();
      }
    });
  }else{
    rollupFile();
  }
};

deleteFolderRecursive('./dist');
