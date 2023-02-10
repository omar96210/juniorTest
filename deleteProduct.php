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
$deleteID = file_get_contents("php://input");
$obj = json_decode($deleteID);

$conn = connect();
$DeleID=$obj->deleteID;
$length= count($DeleID);
for ($x = 0; $x <= $length; $x++) {
  $idint=(int) $DeleID[$x];
  echo $idint;
$sql = "DELETE FROM product WHERE id=$idint";
if($result = mysqli_query($conn,$sql))
{
 
  echo json_encode("done");
}
else
{
  echo json_encode("Notdone");

}

  
}
//  $sql = "DELETE FROM product WHERE id=$DeleID'";
// if($result = mysqli_query($con,$sql))
// {
 
//   echo json_encode("done");
// }
// else
// {
//   echo json_encode("Notdone");

// }

      
// $sql = "DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste'";
 
//  $sql1 = " 
// ALTER TABLE arabic AUTO_INCREMENT = 0;
//  ";
// if($result = mysqli_query($con,$sql))
// {
 
//   echo json_encode("done");
// }
// else
// {
//   echo json_encode("Notdone");

// }
// if($result = mysqli_query($con,$sql1))
// {
 
//   echo json_encode("done");
// }
// else
// {
//   echo json_encode("Notdone");

// }

?>
