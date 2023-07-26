<?php

class CONTROLLER
{
    function __construct()
    {
        
    }

    function model($modelUrl)
    {
        require_once('models/MODEL_' . $modelUrl . '.php');
        $className = 'MODEL_' . $modelUrl;
        $this->model = new $className;
    }

}

