<?php

class Add_AdminSite extends Controller
{

    function __construct()
    {
        parent::__construct();
    }


    function index()
    {
        $getAdminSite = $this->model->getProjectsLanding();
        $data = [$getAdminSite];
        $this->view('adminPage/index', $data);
        echo $getAdminSite;
    }

    function getImage()
    {
        $getAdminSite = $this->model->getImageProjectLanding();
        $data = [$getAdminSite];
        $this->view('adminPage/index', $data);
        echo $getAdminSite;
    }

    function getImageAll()
    {
        $getAdminSite = $this->model->getImageProjectLandingAll();
        $data = [$getAdminSite];
        $this->view('adminPage/index', $data);
        echo $getAdminSite;
    }

    public function getAllProjects()
    {
        $getAllProjects = $this->model->getAllProjects();
        $data = [$getAllProjects];
        $this->view('adminPage/index', $data);
        echo $getAllProjects;
    }

    function sendAllOurClient()
    {
        $sendAllOurClient = $this->model->getAllOurClient();
        $data = [$sendAllOurClient];
        $this->view('adminPage/index', $data);
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
        $this->view('adminPage/index');
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


