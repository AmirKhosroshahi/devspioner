<?php

class API extends CONTROLLER
{

    function __construct()
    {
        parent::__construct();
    }


    function get_client_ip()
    {
        if(!empty($_SERVER['HTTP_CLIENT_IP'])){
            //ip from share internet
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
            //ip pass from proxy
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        }else{
            $ip = $_SERVER['REMOTE_ADDR'];
        }

        $url = 'http://ip-api.com/json/'.$ip;
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $page_content = curl_exec($ch);
        curl_close($ch);
        echo $page_content;
    }


    function index()
    {
        $getAdminSite = $this->model->getProjectsLanding();
        $data = [$getAdminSite];
        echo $getAdminSite;
    }

    function getImage()
    {
        $getAdminSite = $this->model->getImageProjectLanding();
        $data = [$getAdminSite];
        echo $getAdminSite;
    }

    function getImageAll()
    {
        $getAdminSite = $this->model->getImageProjectLandingAll();
        $data = [$getAdminSite];
        echo $getAdminSite;
    }

    public function getAllProjects()
    {
        $getAllProjects = $this->model->getAllProjects();
        $data = [$getAllProjects];
        echo $getAllProjects;
    }

    function sendAllOurClient()
    {
        $sendAllOurClient = $this->model->getAllOurClient();
        $data = [$sendAllOurClient];
        echo $sendAllOurClient;
    }

    function dataPost($dataPostApi)
    {
        $dataPostApi = json_decode(file_get_contents("php://input"), true);
        return $dataPostApi;
    }

    function contactUs()
    {
        $dataPostApi = $this->dataPost($_POST);
        $res = $this->model->senData($dataPostApi);
        echo $res;
    }

    function sendAttrProject($id = '')
    {
        $res = $this->model->sendAttrProjects($_POST, $_FILES, $id);
    }

    function selectProjectInfo($id)
    {
        $res = $this->model->selectProjectId($id);
        echo $res;
    }

    function sendImageProjects()
    {
        $res = $this->model->sendImageProjects($_FILES);
    }

    function getContactUsUsers()
    {
        $res = $this->model->getAllContactUS_User();
        echo $res;
    }

    function deleteContactUs($id)
    {
        $this->model->deleteContactUs_user($id);
    }

    function deleteProject($id)
    {
        $this->model->deleteProjects($id);
    }

    function deleteImageInfo($id)
    {
        $this->model->deleteImage($id);
    }

    function loginAdminSite()
    {
        $dataPostApi = $this->dataPost($_POST);
        $res = $this->model->loginAdminSiteInfo($dataPostApi);
        echo $res;
    }

    function checkLoginAdmin()
    {
        $res = $this->model->dataLoginSet();
        return $res;
    }


}


