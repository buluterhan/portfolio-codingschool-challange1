const fs = require('fs');
const pug = require('pug');
const path = require('path');


const fakePortfolio = require(path.resolve('src/data/db.js'));
// const fakeEducation = require(path.resolve('src/data/educations.js'));
// const fakeWorkPlace = require(path.resolve('src/data/workPlaces.js'));

const compiledIndex = pug.renderFile('src/pug/template.pug', fakePortfolio);

fs.writeFile('public/index.html', compiledIndex, () => console.log('Index successfully compiled to HTML!'));
fs.writeFile('index.html', compiledIndex, () => console.log('Index successfully compiled to HTML at ROOT!'));
