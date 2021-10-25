
// 入口文件 可以加载其他文件
// 导入模块
let jsModule =  require("./lib/index")
console.log(jsModule);

//  es6 导入模块
import ES6Module from "./lib/index2.js"
console.log(ES6Module);

// 导入css文件
import "./css/index.css"

// 打包图片
import  img from"./img/1.png"
console.log(img);

// 导入es6新语法
import es6gj from "./lib/index4"
console.log(es6gj);

// import './style.scss';


document.getElementById('img').src = img




