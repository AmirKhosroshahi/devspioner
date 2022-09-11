<?php

class Controller
{

    function __construct()
    {

    }

    function view($viewsUrl, $data = [])
    {
        require_once('views/' . $viewsUrl . '.php');
    }

    function model($modelUrl)
    {
        require_once('models/model_' . $modelUrl . '.php');
        $className = 'model_' . $modelUrl;
        $this->model = new $className;

    }


}
