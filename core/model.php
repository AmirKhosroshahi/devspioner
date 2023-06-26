<?php

class Model
{
    public static $conn = '';

    function __construct()
    {
       
        $serverName = 'localhost';
        $userName = 'admin_devspioner';
        $password = 'devspioner_89089';
        $dbName = 'admin_devspioner';
        self::$conn = new PDO('mysql:host=' . $serverName . ';dbname=' . $dbName, $userName, $password);
        self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    function doSelect($sql, $values = [], $fetch = '', $fetchStyle = PDO::FETCH_ASSOC)
    {
        $stmt = self::$conn->prepare($sql);
        foreach ($values as $key => $value) {
            $stmt->bindValue($key + 1, $value);
        }
        $stmt->execute();
        if ($fetch == '') {

            $result = $stmt->fetchAll($fetchStyle);
        } else {

            $result = $stmt->fetch($fetchStyle);
        }
        return $result;
    }

    function doQuery($sql, $values = [])
    {

        $stmt = self::$conn->prepare($sql);

        foreach ($values as $key => $value) {
            $stmt->bindValue($key + 1, $value);
        }
        $stmt->execute();

    }

    public static function sessionInit()
    {

        @session_start();

    }

    public static function sessionSet($name, $value)
    {

        $_SESSION[$name] = $value;

    }

    public static function sessionGet($name)
    {

        if (isset($_SESSION[$name])) {

            return $_SESSION[$name];

        } else {

            return false;

        }

    }

}
