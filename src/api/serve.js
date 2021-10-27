const express = require('express');
const cors = require('cors')
const app = express();

 // posh 请求中间件

app.use(cors())  // 跨域
app.get('/instance',(req,res)=>{
    res.json({
        data:{
            title: "玛卡巴卡",
        }
    })
})

app.listen(3000, () => {
    console.log('Start the server');
})

