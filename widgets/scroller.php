<?php require_once('Connections/rosemarie1018.php'); ?>
<?php
mysql_select_db($database_rosemarie1018, $rosemarie1018);
$query_beautyShots = "SELECT * FROM scroller WHERE name != 'welcome' && status = 1 ORDER BY scroller.id";
$beautyShots = mysql_query($query_beautyShots, $rosemarie1018) or die(mysql_error());
$row_beautyShots = mysql_fetch_assoc($beautyShots);
$totalRows_beautyShots = mysql_num_rows($beautyShots);
?>

<div id="scroller">
  <div id="wrapper">
    <div class="port-scroll vertical">
      <ul class="items">
        <?php do { ?>
        <li class="scrollEl"><a><img src="/images/thumbnails/<?php echo $row_beautyShots['name']; ?>.jpg" width="170" height="130" alt="<?php echo $row_beautyShots['name']; ?>" title="<?php echo $row_beautyShots['title']; ?>"></a></li>
        <?php } while ($row_beautyShots = mysql_fetch_assoc($beautyShots)); ?>
      </div>
    </div>
  </div>
  <div id="beautyShotWrapper">
    <div id="beautyShot"><img src="/images/spacer.gif" width="100%" height="100%" alt="" /></div>
  </div>
  <div id="beautyShotDescription">
    <h3 id="descriptionTitle"></h3>
    <p id="descriptionText"></p>
  </div>
  <br class="clearfloat" />
</div>
<?php mysql_free_result($beautyShots); ?>
