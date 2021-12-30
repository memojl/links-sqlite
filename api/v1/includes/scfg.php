<?php 
$h_s='linksm.herokuapp.com';
if($_SERVER['HTTP_HOST']==$h_s || $_SERVER['HTTP_HOST']=='www.'.$h_s){
$db_host = "";// Localhost
$db_base = "db_links";    // Nombre de la Base de Datos
$db_user = "";      // Usuario de la Base de Datos
$db_pass = "";     	// Password de la Base de Datos 
}else{
$db_host = "localhost";     // Localhost
$db_base = "db_links";    // Nombre de la Base de Datos
$db_user = "root";        	// Usuario de la Base de Datos
$db_pass = "";     	// Password de la Base de Datos
}
$config = [
    "driver" => "sqlite",
    "host" => $db_host,
    "database" => $db_base,
    "username" => $db_user,
    "password" => $db_pass,
    "port" => "3306",
    "charset" => "utf8mb4"
];
$DBprefix = "";		// Prefijo para las tablas de la Base de datos.
$path_root = ($_SERVER['HTTP_HOST']=='localhost')?'MisSitios/links/':'';

/*DEFINICION DE VARIABLES PARA PHP7*/
define('DB_HOST',$db_host);
define('DB_USER',$db_user);
define('DB_PASSWORD',$db_pass);
define('DB_DB',$db_base);

?>