let express = require('express');
let path = require('path');
const open = require('open');

let app = express();
// console.log(path.join(__dirname, '../dist/'))
let distPath = path.join(__dirname, '../dist/');
app.use(express.static(distPath))
let PORT = 8080;
app.listen(PORT, () => {
    open('http://localhost:' + PORT)
    console.log('请访问' + 'http://localhost:' + PORT)
})