<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', 'localhost');
define('DB_USER', 'id20206396_dbappi');
define('DB_PASS', 'aHoN#$@uW4HN@>cG');
define('DB_NAME', 'id20206396_api');



function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();

        $policies = [];
        $sql = "SELECT id, sku, name ,price,type,size,weight,height,width,length FROM product ";
        if($result = mysqli_query($con,$sql))
        {   
        $i = 0;
        while($row = mysqli_fetch_assoc($result))
        {
            $policies[$i]['id']    = $row['id'];
            $policies[$i]['sku'] = $row['sku'];
            $policies[$i]['name'] = $row['name'];
            $policies[$i]['price'] = $row['price'];
            $policies[$i]['type']    = $row['type'];
            $policies[$i]['size']    = $row['size'];
            $policies[$i]['weight']    = $row['weight'];
            $policies[$i]['height']    = $row['height'];
            $policies[$i]['width']    = $row['width'];
            $policies[$i]['length']    = $row['length'];
            $i++;
        }
        echo json_encode($policies);
        }
        else
        {

        }



?>
