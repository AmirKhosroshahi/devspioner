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
    }

    function getImage()
    {
        $getAdminSite = $this->model->getImageProjectLanding();
        $data = [$getAdminSite];
        $this->view('adminPage/index', $data);
    }

    function getAllProjects()
    {
        $getAllProjects = $this->model->getAllProjects();
        $data = [$getAllProjects];
        $this->view('adminPage/index', $data);
    }

}
