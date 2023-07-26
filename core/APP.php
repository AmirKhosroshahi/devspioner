<?php



class APP
{

    public $Controller = 'index';
    public $method = 'index';
    public $params = [];

    function __construct()
    {
        if (isset($_GET['url'])) {

            $url = $_GET['url'];
            $url = $this->parsUrl($url);
            $this->Controller = $url[0];
            unset($url[0]);

            if (isset($url[1])) {

                $this->method = $url[1];
                unset($url[1]);

            }

            $this->params = array_values($url);
        }
        $require = 'controllers/' . $this->Controller . '.php';

        if (file_exists($require)) {

            require_once($require);

            $object = new $this->Controller;
            $object->model($this->Controller);
            if (method_exists($object, $this->method)) {

                call_user_func_array([$object, $this->method], $this->params);

            }
        }

    }

    function parsUrl($url)
    {

        $url = filter_var($url, FILTER_SANITIZE_URL);
        $url = rtrim($url, '/');
        $url = explode('/', $url);
        return $url;

    }


}
