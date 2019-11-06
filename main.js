var pg = require("pg");
var connectionString =
  "postgres://username_password_stuff_here@musicxsoftware.postgres.database.azure.com:5432/userdatabase?ssl=true";

var client = new pg.Client(connectionString);
client.connect();

// var query = "INSERT INTO users (username,email) VALUES ('gokhan','gokhankoc@windowslive.com')";
var query;

function selectAll(tableName) {
  var query = "SELECT * FROM "+ tableName + ";";
  client.query(query, (err,res) => {
    for (i=0; i< res.rows.length; i++){
      console.log(res.rows[i].username, res.rows[i].email);
    }
  });
}

function createTable(tableName) {
  var query = "CREATE TABLE " + tableName + " (userid SERIAL,username varchar(30),email varchar(30))";
  client.query(query, (err,res) => {
    console.log(res);
  });
  console.log(arguments);
}

function deleteTable(tableName) {
  var query = "DROP TABLE " + tableName + ";";
  client.query(query, (err,res) => {
    console.log(res);
  });
}

function addUser(user,mail) {
  var query = "INSERT INTO goodboy (username,email) VALUES (" + user + ',' + mail + ");";
  client.query(query, (err,res) => {
    console.log(res);
  });
}

// createTable("goodboy");
// addUser("'jan'", "'jan@jan.com'");
// deleteTable("goodboy");
selectAll("goodboy");
