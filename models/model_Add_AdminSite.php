<?php

class model_Add_AdminSite extends Model
{
    function __construct()
    {
        parent::__construct();
    }

    function getProjectsLanding()
    {
        $sql = 'select * from projects ORDER BY id desc limit 4';
        $result = $this->doSelect($sql, []);
        header('Content-type: application/json');
        return json_encode(['projectsLanding'=>$result]);
    }

    function getImageProjectLanding()
    {
        $sql = 'select image from projects ORDER BY id asc limit 4';
        $result = $this->doSelect($sql, []);
        header('Content-type: application/json');
        return json_encode(['imageLandingProjects'=>$result]);
    }

    function getAllProjects()
    {
        $sql = 'select * from projects ORDER BY id desc ';
        $result = $this->doSelect($sql, []);
        header('Content-type: application/json');
        return json_encode(['AllProjects'=>$result]);
    }

}
