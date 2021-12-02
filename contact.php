 <?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'priyam', 'mcmdav','test');


// get the post records
$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtEmail'];
$txtPhone = $_POST['txtPhone'];
$txtpwd = $_POST['txtpwd'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`fldName`, `fldEmail`, `fldPhone`, `fldtxtpwd`) VALUES ('$txtName', '$txtEmail', '$txtPhone', '$txtpwd')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>