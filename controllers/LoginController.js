const myConnection = require('../database/config')
const utils = require('../resource/utils')
const jwt = require('jsonwebtoken')

const loginForm = (request,response) =>{
    response.render('login')
}

const Login =  async (request,response)=>{
     const sql = `select id,username from users where username = ? and password = ?`  
     console.log(sql)
     const res =  myConnection.query(sql,
        [
            utils.validaInput(request.body.username),
            utils.validaInput(request.body.password)
        ],
        function(err, results) {
            console.log(results)
            console.log(err)
            if(results[0]){
                
                user = results[0]
                Object.assign(user, {exp: Math.floor(Date.now() / 1000) + (60*15)})
                token = jwt.sign(
                    user,
                    process.env.ACCESS_TOKEN_SECRET,
                    )
                respuesta = {
                    message:"Login Exitoso",
                    userData : JSON.stringify(results[0]),
                    token
                }
                response.render('form',{locals:respuesta})
            }else{
                respuesta = {
                    message:"Login Fallido",
                    userData : '',
                    token : ''
                }
                response.render('error',{locals:respuesta})
            }
        }
      );
}


module.exports = {
    loginForm,
    Login,
   
}

