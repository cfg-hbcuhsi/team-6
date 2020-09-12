var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
app.set('view engine', 'ejs');
var mysql = require('mysql');
var cors = require('cors');

var pool = mysql.createPool({
  connectionLimit : 10,  
  host: 'localhost',
  user: "root",
  password: "password",
  database: "users",
  port:'3306'
});

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

app.post('/signup',function(req,res){
    
    console.log("Inside Signup Post Request");
    console.log("Req Body : ",req.body.firstname);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;
   
    pool.getConnection(function(err,con){

        if(err)
         {
            throw err;        
         }
        else{

            var sql = "SELECT * from users where email="+mysql.escape(email);

            con.query(sql,function(err,result){

                if(result.length>0)
                {
                    res.status(200).send("Duplicate");
                }
                else{
                    var sql = "INSERT INTO users (first_name,last_name,email,password,role) VALUES ("+mysql.escape(firstname)+" , "+mysql.escape(lastname)+" , "+mysql.escape(email)+" , "+mysql.escape(password)+" , "+mysql.escape(role)+" ) ";                    
                    console.log(sql);
                    con.query(sql,function(err,result){
                        if(err)
                        {
                            throw err;                            
                        }
                        else{
                            console.log(JSON.stringify(result));
        
                            if(result.affectedRows == 0)
                            {
                               res.send("Invalid username"); 
                            }    
                            else{
                                con.release();
                                res.send("Success");
                            }
                        }                        
                    });
                }
            })            
        }
    })
});

app.post('/login',function(req,res){
    
    console.log("Inside Login Post Request");
   
    console.log("Req Body : ",req.body);
    var username = req.body.email;
    var password = req.body.password;
    
    pool.getConnection(function(err,con){

        if(err)
         {
            throw err;        
         }
        else{
            console.log("Succesful connection to database");

            var sql = "SELECT * from users WHERE email="+mysql.escape(username)+" and password="+mysql.escape(password);
            console.log(sql);
            con.query(sql,function(err,result){
                if(err)
                {                    
                    res.status(201).send("Error");
                }
                else{
                    console.log(JSON.stringify(result));
                    console.log(result.length);

                    if(result.length == 0)
                    {
                       res.status(201).send("Invalid credentials"); 
                    }    
                    else{
                        console.log(result);
                        
                        res.cookie('cookie',"admin",{maxAge: 900000, httpOnly: false, path : '/'});
                        con.release();
                        res.status(200).send("Success");
                        
                    }
                    
                }
                
            });
        }
    })
    
});

app.listen(3001);
console.log("Server Listening on port 3001");