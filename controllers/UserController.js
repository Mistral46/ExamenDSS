const myConnection = require('../database/config')


const allUsers = async (request,response) =>{
    console.log(request.body)
    myConnection.query(
        `select id, username from users `,
        function(err, results) {
           if(err){
            response.render('error',{locals:err})
           }else{
            data = {
                message:"Consulta exitosa",
                users : results
            }
            console.log(data)
            response.render('users',{locals:data})
           } 
        }
      );

}
const addUser =  (request,response) =>{
    myConnection.query(
        `insert into usuarios(usuario,contrasena) 
        values (?,?) `,
        [
            request.body._username,
            request.body._password,
        ],
        function(err, results) {
           if(err){
            response.render('error',{locals:err})
           }else{
            respuesta = {
                message:"Usuario agregado"
            }
            response.json(respuesta)
           } 
        }
      );

}
const deleteUser =  (request,response) =>{
     myConnection.query(
        `delete from users where id = ? `,
        [
            request.body._id,
        ],
        function(err, results) {
           if(err){
            response.render('error',{locals:err})
           }else{
            respuesta = {
                message:"Usuario eliminado"
            }
            response.json(respuesta)
           } 
        }
      );

}

module.exports = {
    allUsers,
    addUser,
    deleteUser,
}

