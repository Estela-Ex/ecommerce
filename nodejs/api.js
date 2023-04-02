
  const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
  const app = express();
  let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678m.m3281",
    database: "ecommerce",
  });

  connection.connect(function (error) {
    if (error) {
      console.log(`No se ha podido conectar a la base de datos: ${error}`);
    } else {
      console.log("Conectado a mysql!");
    }
  });
app.use(cors());
app.use(express.json());
  app.get("/user", function (request, response) {
    console.log(request.params.id);
    response.send({
      nombre: "Pepe",
      apellidos: "Moron",
      email: "pepe@gmail.com",
    });
  });

  app.get("/productos", function (request, response) {
    connection.query(
      "SELECT * FROM productos",
      [],
      function (error, results, fields) {
        if (error) {
          console.log(`Error al ejectuar la query: ${error}`);
        } else {
          response.send(results);
        }
      }
    );
  });
  app.listen(8000, function () {
    console.log("Api escuchando en puerto 8000");
  });


    