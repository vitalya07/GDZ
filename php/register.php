<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);

    // Сохраняем данные в сессии
    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;

    // Если необходимо, можно сохранить данные в БД
    // Здесь нужно добавить код для подключения и вставки в БД

    echo json_encode(['success' => true]);
    exit;
}

if (isset($_SESSION['name'])) {
    // Если пользователь уже зарегистрирован, выводим его имя
    echo json_encode(['name' => $_SESSION['name']]);
    exit;
}

echo json_encode(['name' => null]);