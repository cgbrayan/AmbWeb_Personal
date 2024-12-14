<?php
session_start();
require 'db.php';
function login($username, $password){
    try{
        global $pdo;
        $sql = "SELECT * FROM users where username = :username";
        $stmt = $pdo -> prepare($sql);
        $stmt -> execute(['username' => $username]);
        //$user va a ser un arreglo asociativo con los datos de usuario;
        $user = $stmt -> fetch(PDO::FETCH_ASSOC);
        if($user){
            if(password_verify($password, $user['password'])){
                $_SESSION['user_id'] = $user["id"];
                return true;
            }
        }
        return false;
    }catch(Exception $e){
        logError($e -> getMessage());
        return false;
    }
}
‎semana9/app-tareas/backend/login_test.php
+15
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,15 @@
<?php
require 'login.php';
if(login('juanito2@gmail.com', '123456')){
    echo 'Login Correcto' . PHP_EOL;
}else{
    echo 'Login incorrecto' . PHP_EOL;
}
if(login('juanito100@gmail.com', '55454545')){
    echo 'Login correcto'. PHP_EOL;
}else{
    echo 'Login incorrecto'. PHP_EOL;
}