<?php

class Model
{
    public static $conn = '';

    function __construct()
    {
        $serverName = 'localhost';
        $userName = 'root';
        $password = '';
        $dbName = 'mysite';
        self::$conn = new PDO('mysql:host=' . $serverName . ';dbname=' . $dbName, $userName, $password);
        self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

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

}
