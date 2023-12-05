let mysql = require('mysql')

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'login_node_jwt',
    user: 'root',
    password: ''
})

conexion.connect(function(err) {
    if(err) {
        throw err;
    } else {
        console.log("Conexion exitosa");
    }
});

/* consulta de datos de usuario */
const consultaUsuario = "SELECT * FROM users"
conexion.query(consultaUsuario, function(error, lista) {
    if(error) {
        throw error;
    } else {
        console.log(lista);
    }
});

/* INSERTAR DATOS */
const insertar = "INSERT INTO libros(titulo, autor, categoria, precio) VALUES('libro de Java', 'Luisina', 'Programación', 12000)";
conexion.query(insertar, function(error) {
    if(error) {
        throw error;
    }

    console.log("Los datos fueron guardados exitosamente");
});

/* MODIFICAR DATOS */
const modificar = "UPDATE libros SET titulo='libro de Angular', autor='Dominicode', precio='18000' WHERE id='3' ";
conexion.query(modificar, function(error) {
    if(error) {
        throw error;
    }

    console.log("Los datos fueron modificados exitosamente!!!");
});

/* ELIMINAR REGISTROS */
const eliminar = "DELETE FROM libros WHERE id= 2";
conexion.query(eliminar, function(error) {
    if(error) {
        throw error;
    }

    console.log("El registro fue eliminado exitosamente.");
});

/* CONSULTAR DATOS DE LIBROS */
const consulta = "SELECT * FROM libros"
conexion.query(consulta, function(error, lista) {
    if(error) {
        throw error;
    } else {
        console.log(lista);
    }
});

conexion.end()