require('dotenv').config();
const express = require('express');
var fs = require('fs');
const nunjucks = require('nunjucks');
const app = express();
// const port = process.env.SERVER_PORT || 3000;
const mysql = require('mysql');
const bodyParser = require('body-parser');
// const {response} = require('express');
// const error = require('response');
//const response = require('express');
// var router = express.Router();
var path = require('path');
var sql = 'select * from member';

nunjucks.configure('views', {
	express: app,
	watch: true,
});

var http = require('http');
// const board = require('./board.js');
const response = require('response');
const { title } = require('process');
//var server = http.createServer(app).listen(80);
//console.log("server is running...")

//mysql 접속 정보
//var mysql = require('mysql');
//const request = require('request');

// app.use('/', router)
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

let connection = mysql.createConnection({
	//host: '127.0.0.1',
	host: 'localhost',
	user: 'root',
	port: '3306',
	password: '4163786pp!',
	database: 'helplist',
});

//mysql 접속하기
connection.connect();

// let async = require('async');
// function HelpLoadFunction(callback) {
//     models.Help.findAll().then(function(result){    //result가 board 테이블의 모든 값을 json으로 반환
//         let jsonObj = [];                //board 테이블의 데이터를 담을 배열
//         let task = function(call){
//                 if(result.length==0)    //게시판에 글이 하나도 없을 때0값 리턴
//                     callback(0)
//                 else{
//                     for(let i=0;i<result.length;i++)        //데이터의 개수만큼 반복문
//                         jsonObj.push(result[i].dataValues)    //jsonObj 배열에 select * from board 값을 저장
//                     call(null,jsonObj);                        //위의 쿼리문 결과를 다음 함수로 넘겨줌
//                 }
//             }
//         async.waterfall(task,function(err){
//             if(err)
//                 console.log(err)
//         })
//     }).catch(function(err){
//         console.log(err);
//     })
// }
// //exports.boardLoadFunction = boardLoadFunction;

// app.get('/view',function(request,response){
//     help.HelpLoadFunction(function(result){
//         res.render('view',{data:JSON.stringify(result)})
//     })
// })

// if(path === 'http://127.0.0.1:3000/board'){
//     board.home(request,response);
// }
// exports.home = function(request,response){
//     connection.query("select *, @idx:=@idx+1 as idx2, date_format(today, '%H:%m %m-%d-%Y ') as today, hit from help, (select @idx:=0)A", (error,results)=>{
//         var list = board.list(results);
//         var html = board.HTML(list,
//             '${board.HelpTable(results)}'
//             )
//         if(error){
//                 console.log(error);
//         }else{
//                 console.log(results);
//                 response.render('board.js',{
//                 rows: rows?rows:{}
//             })
//         }
//         })
//         response.writeHead(200);
//         response.end(html);
// }
app.listen(3000, () => {
	console.log('server start port : 3000');
});
