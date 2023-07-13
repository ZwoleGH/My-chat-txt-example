const mysql=require("mysql2"); 
const config=require("../config");
let conn=mysql.createConnection(config.db);

conn.connect(err=>{
  if(err){
    console.log(err);
  }

  console.log("Sql bağlandı");
});

module.exports=conn.promise();