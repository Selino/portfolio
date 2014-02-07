<?php require_once('../Connections/rosemarie1018.php'); ?>
<?php
if (strlen($_REQUEST['name']) < 1) {
  print '[]';
  exit;
}

if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

$colname_Recordset1 = "-1";
if (isset($_GET['name'])) {
  $colname_Recordset1 = $_GET['name'];
}
mysql_select_db($database_rosemarie1018, $rosemarie1018);
$query_Recordset1 = sprintf("SELECT * FROM scroller WHERE name = %s", GetSQLValueString($colname_Recordset1, "text"));
$Recordset1 = mysql_query($query_Recordset1, $rosemarie1018) or die(mysql_error());
$row_Recordset1 = mysql_fetch_assoc($Recordset1);
$totalRows_Recordset1 = mysql_num_rows($Recordset1);$colname_Recordset1 = "-1";
if (isset($_GET['name'])) {
  $colname_Recordset1 = $_GET['name'];
}
?>
<?php do { ?>
  <?php echo json_encode($row_Recordset1); ?>
<?php } while ($row_Recordset1 = mysql_fetch_assoc($Recordset1)); ?>
<?php mysql_free_result($Recordset1); ?>
