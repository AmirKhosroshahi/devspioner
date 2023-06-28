<?php

class model_Add_AdminSite extends Model
{
    public $url = 'http://212.90.103.135';

    function __construct()
    {
        parent::__construct();

    }

    function selectProjectId($id)
    {
        $sql = 'select * from projects where id=?';
        $result = $this->doSelect($sql, [$id], 1);
        return json_encode(['infoProject' => $result]);
    }

    function getProjectsLanding()
    {
        $sql = 'select * from projects ORDER BY id desc limit 4';
        $result = $this->doSelect($sql);
        foreach ($result as $key => $item) {
            $tech = $item['technology'];
            $sql2 = 'select * from technology where code IN (' . $tech . ') ';
            $resultTech = $this->doSelect($sql2);
            $result[$key]['technology'] = $resultTech;
        }
        return json_encode(['projectsLanding' => $result]);
    }

    function getAllProjects()
    {
        $sql = 'select * from projects ORDER BY id desc';
        $result = $this->doSelect($sql, []);
        foreach ($result as $key => $item) {
            $tech = $item['technology'];
            $sql2 = 'select * from technology where code IN (' . $tech . ') ';
            $resultTech = $this->doSelect($sql2);
            $result[$key]['technology'] = $resultTech;
        }
        return json_encode(['AllProjects' => $result]);
    }

    function getImageProjectLanding()
    {
        $sql = 'select image,id from  image_projects  ORDER BY id asc limit 6';
        $result = $this->doSelect($sql, []);
        return json_encode(['imageLandingProjects' => $result]);
    }

    function getImageProjectLandingAll()
    {
        $sql = 'select image,id from  image_projects  ORDER BY id asc';
        $result = $this->doSelect($sql, []);
        return json_encode(['imageLandingProjects' => $result]);
    }

    function getAllOurClient()
    {
        $sql = 'select * from our_clients LIMIT 8';
        $result = $this->doSelect($sql, []);
        return json_encode(['AllOurClient' => $result]);
    }

    function validationFrom($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    function validData($string)
    {

        $BlackList = ['/', ':', '.', ',', '(', ')', '#', '$', '.', '<', '>', "'", '"', '{', '}', '[', ']', '<script>', 'domain', 'document', 'URL', 'url', 'HTTP', 'http', 'object', 'array', 'from', 'where', 'WHERE', 'id', 'ID', '*', '`', '&', '^', '-', '%', '!', '?', '@', 'SELECT', 'select', 'UPDATE', 'update', 'ALTER', 'alert', 'DELETE', 'delete', 'sql', 'applet', 'body', 'bgsound', 'base', 'basefont', 'embed', 'frame', 'frameset', 'head', 'html', 'id', 'iframe', 'ilayer', 'layer', 'link', 'meta', 'name', 'object', 'script', 'style', 'title', 'xml', 'action', 'background', 'codebase', 'dynsrc', 'lowsrc', 'console', 'console.log()'];
        if (!in_array($string, $BlackList) and !is_numeric($string)) {
            $str = str_replace($BlackList, '', $string);

        } else {
            $str = 'NotValid';
        }

        return $str;
    }

    function senData($data)
    {

        $name = $this->validationFrom($data['name']);
        $email = $this->validationFrom($data['email']);
        $text = $this->validationFrom($data['text']);
        $valid = 1;
        $ErrorArray = [];
        if (isset($email) and !empty($email)) {
            if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)) {
                $valid = 0;
                array_push($ErrorArray, ['The email is not valid']);
            }
        } else {
            $valid = 0;
            array_push($ErrorArray, ['Email is empty']);
        }
        if (isset($name) and !empty($name)) {

            if ($this->validData($name) === 'NotValid') {
                $valid = 0;
                array_push($ErrorArray, ['The name is not valid']);
            }
        } else {
            $valid = 0;
            array_push($ErrorArray, ['The name is empty']);
        }
        if (isset($text) and !empty($text)) {
            if ($this->validData($text) === 'NotValid') {
                $valid = 0;
                array_push($ErrorArray, ['The description is not valid']);
            }
        } else {
            $valid = 0;
            array_push($ErrorArray, ['Description is empty']);
        }

        if ($valid) {
            $sql = 'insert into contactus (name,email,text) VALUES (?,?,?)';
            $param = [$name, $email, $text];
            $this->doQuery($sql, $param);
            return json_encode('Successful submission');
        } else {
            return json_encode($ErrorArray);
        }

    }

    function sendAttrProjects($data, $file, $id)
    {
        if (!empty($data)) {

            $nameProject = $this->validationFrom($data['nameProject']);
            $linkProject = $this->validationFrom($data['linkProject']);
            $technology = join(',', $data['technology']);

            if (empty($id)) {

                $sql = 'insert into projects (title,link,technology) values (?,?,?)';
                $this->doQuery($sql, [$nameProject, $linkProject, $technology]);
                $lastId = self::$conn->lastInsertId();

                if (isset($file['imageProject'])) {

                    mkdir('public/image/image_project/' . $lastId . '/');
                    $fileAttr = $file['imageProject'];
                    $imageName = $fileAttr['name'];
                    $fileTyp = $fileAttr['type'];
                    $fileTmp_name = $fileAttr['tmp_name'];
                    $fileError = $fileAttr['error'];
                    $fileSize = $fileAttr['size'];
                    $uploadYes = 1;
                    $insertYes = 1;
                    $randomTime = time() * 2;
                    $newName = $randomTime;
                    $targetMine = 'public/image/image_project/';
                    $ImageSave_Nwe_Dir = $targetMine . $lastId . '/';
                    if ($fileTyp !== 'image/jpeg' and $fileTyp !== 'image/jpg' and $fileTyp !== 'image/png' and $fileTyp !== 'image/svg+xml') {
                        $uploadYes = 0;
                        $insertYes = 0;

                    }
                    if ($fileSize <= 0) {

                        $uploadYes = 0;
                        $insertYes = 0;
                    }
                    if ($fileSize > 41453494304) {
                        $uploadYes = 0;
                        $insertYes = 0;
                    }
                    if ($uploadYes == 1) {

                        $exe = pathinfo($imageName, PATHINFO_EXTENSION);
                        $target = $ImageSave_Nwe_Dir . $newName . '.' . $exe;
                        $nameImageTable = '/image/image_project/' . $lastId . '/' . $newName . '.' . $exe;
                        move_uploaded_file($fileTmp_name, $target);
                        $sql = 'update projects set image=?,tmp_image=? where id=?';
                        $this->doQuery($sql, [$nameImageTable, $target, $lastId]);

                    }

                }

                header('location:' . $this->url . '/dashboardamircv');

            } else {

                if (!empty($technology)){
                    $sql = 'update projects set title=?,link=?,technology=? where id=?';
                    $this->doQuery($sql, [$nameProject, $linkProject, $technology, $id]);
                    if (isset($file['imageProject'])) {

                        $fileAttr = $file['imageProject'];
                        $imageName = $fileAttr['name'];
                        $fileTyp = $fileAttr['type'];
                        $fileTmp_name = $fileAttr['tmp_name'];
                        $fileError = $fileAttr['error'];
                        $fileSize = $fileAttr['size'];
                        $uploadYes = 1;
                        $insertYes = 1;
                        $randomTime = time() * 2;
                        $newName = $randomTime;
                        $targetMine = 'public/image/image_project/';
                        $ImageSave_Nwe_Dir = $targetMine . $id . '/';
                        if ($fileTyp !== 'image/jpeg' and $fileTyp !== 'image/jpg' and $fileTyp !== 'image/png' and $fileTyp !== 'image/svg+xml') {
                            $uploadYes = 0;
                            $insertYes = 0;

                        }
                        if ($fileSize <= 0) {

                            $uploadYes = 0;
                            $insertYes = 0;
                        }
                        if ($fileSize > 41453494304) {
                            $uploadYes = 0;
                            $insertYes = 0;
                        }
                        if ($uploadYes == 1) {

                            $selectImage = 'select tmp_image from projects where id=?';
                            $result = $this->doSelect($selectImage, [$id], 1);
                            if (file_exists($result['tmp_image'])) {
                                unlink($result['tmp_image']);
                            }
                            $exe = pathinfo($imageName, PATHINFO_EXTENSION);
                            $target = $ImageSave_Nwe_Dir . $newName . '.' . $exe;
                            $nameImageTable = '/image/image_project/' . $id . '/' . $newName . '.' . $exe;
                            move_uploaded_file($fileTmp_name, $target);
                            $sql = 'update projects set image=?,tmp_image=? where id=?';
                            $this->doQuery($sql, [$nameImageTable, $target, $id]);

                        }

                    }
                }
                header('location:' . $this->url . '/dashboardamircv/');
            }

        }

    }

    function sendImageProjects($file)
    {

        if (isset($file['imageProjects'])) {


            $fileAttr = $file['imageProjects'];
            $imageName = $fileAttr['name'];
            $fileTyp = $fileAttr['type'];
            $fileTmp_name = $fileAttr['tmp_name'];
            $fileError = $fileAttr['error'];
            $fileSize = $fileAttr['size'];
            $uploadYes = 1;
            $insertYes = 1;
            $randomTime = time() * 2;
            $newName = $randomTime;
            $targetMine = 'public/image/image_info/';
            $ImageSave_Nwe_Dir = $targetMine;
            if ($fileTyp !== 'image/jpeg' and $fileTyp !== 'image/jpg' and $fileTyp !== 'image/png' and $fileTyp !== 'image/svg+xml') {
                $uploadYes = 0;
                $insertYes = 0;

            }
            if ($fileSize <= 0) {

                $uploadYes = 0;
                $insertYes = 0;
            }
            if ($fileSize > 41453494304) {
                $uploadYes = 0;
                $insertYes = 0;
            }
            if ($uploadYes == 1) {

                $exe = pathinfo($imageName, PATHINFO_EXTENSION);
                $target = $ImageSave_Nwe_Dir . $newName . '.' . $exe;
                move_uploaded_file($fileTmp_name, $target);
                $nameImageTable = $newName . '.' . $exe;
                $sql = 'insert into image_projects  (image,tmp_image) values (?,?)';
                $this->doQuery($sql, [$nameImageTable, $target]);

            }

        }
        header('location:' . $this->url . '/addimage');
    }

    function getAllContactUS_User()
    {
        $sql = 'select * from contactus order by id desc';
        $result = $this->doSelect($sql);
        return json_encode(['getAllContactUs' => $result]);
    }

    function deleteContactUs_user($data)
    {

        $sql = 'delete from contactus where id=?';
        $this->doQuery($sql, [$data]);
    }

    function deleteFolder($path)
    {

        if (is_dir($path) === true) {
            $files = array_diff(scandir($path), array('.', '..'));
            foreach ($files as $file)
                $this->deleteFolder(realpath($path) . '/' . $file);

            return rmdir($path);
        } else if (is_file($path) === true)
            return unlink($path);

        return false;
    }

    function deleteProjects($data)
    {
        $publicProductFolder = 'public/image/image_project/' . $data . '/';
        $this->deleteFolder($publicProductFolder);
        $sql = 'delete from projects where id=?';
        $this->doQuery($sql, [$data]);
        rmdir('image_project/' . $data);
    }

    function deleteImage($id)
    {

        $selectImage = 'select tmp_image from image_projects where id=?';
        $result = $this->doSelect($selectImage, [$id], 1);
        if (file_exists($result['tmp_image'])) {
            unlink($result['tmp_image']);
        }
        $sql = 'delete from image_projects where id=?';
        $this->doQuery($sql, [$id]);

    }

    function loginAdminSiteInfo($data)
    {
        $email = $this->validationFrom($data['email']);
        $password = $this->validationFrom($data['password']);

        $sqlAdmin = 'select * from adminpage where email=? and password=?';
        $resultAdmin = $this->doSelect($sqlAdmin, [$email, $password]);
        $ok = 1;
        $errorAdmin = [];
        if (empty($email) or empty($password)) {
            $ok = 0;
            array_push($errorAdmin, 'Email or password is empty .');
        }

        if (!empty($email) and !empty($password)) {

            if (empty($resultAdmin[0]) and !isset($resultAdmin[0])) {
                $ok = 0;
                array_push($errorAdmin, 'The email or password entered are not valid .');
            }

            if ($ok) {
                Model::sessionInit();
                Model::sessionSet('Admin', $resultAdmin[0]['id']);
                return json_encode(['admin_set', Model::sessionGet('Admin')]);
            }

        }
        return json_encode($errorAdmin);
    }

    function dataLoginSet()
    {
        Model::sessionInit();
        $admin = Model::sessionGet('Admin');
        return json_encode($admin);
    }

    function editSelect($data){
        $dataSelect = $data['ids'];
        $sql2 = 'select label,value,image from technology where code IN (' . $dataSelect . ') ';
        $resultTech = $this->doSelect($sql2);
        return json_encode($resultTech);
    }
}

