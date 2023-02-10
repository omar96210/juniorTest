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

$conn = connect();
$postdata = file_get_contents("php://input");
$obj = json_decode($postdata);
$sku =$obj->productsku;
$name =$obj->productname;
$price = $obj->productprice;
$type =$obj->producttype;
$size =$obj->productsize;
$weight =$obj->productweight;
$height =$obj->productheight;
$width =$obj->productwidth;
$length =$obj->productlength;

$price=(int) $price;
$type=(int) $type;
$size=(int) $size;
$weight=(int) $weight;
$height=(int) $height;
$width=(int) $width;
$length=(int) $length;

$sql = "INSERT INTO product (sku, name, price,type,size,weight,height,width,length)
VALUES ('$sku', '$name', '$price','$type','$size','$weight','$height','$width','$length')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}



?>
