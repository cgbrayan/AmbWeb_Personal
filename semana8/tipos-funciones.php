<?php
//funcion simple
function saludar($nombre): string
{
    return "Hola " . $nombre . PHP_EOL;
}

echo saludar("Profe");

//funcion anonima
$suma = function ($a, $b): mixed {
    return $a + $b;
};

echo $suma(5, 10);

//funcion flecha:
$duplicar = fn($n): float|int => $n * 2;

echo $duplicar(4);

//funciones integradas
echo strlen(string: "Hola Mundo");