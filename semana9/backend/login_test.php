<?php
require("login.php");
//tests
if(login("juanito1@gmail.com", "123456")){
    echo "Login correcto";
}else{
    echo "Login incorrecto";
}