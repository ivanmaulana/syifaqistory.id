<?php
$link = mysqli_connect('localhost', 'syifaqistory_db', 'syifaqistory_db', 'syifaqistory_db');

$name = mysqli_real_escape_string($link, $_POST['fromname']);
$notes = mysqli_real_escape_string($link, $_POST['field1_value']);
$attend = mysqli_real_escape_string($link, $_POST['field0_value']);

if ($name != '' && $attend != '') {
  $query = "INSERT INTO guest (name, notes, attend) VALUES ('$name', '$notes', '$attend')";
  $result = mysqli_query($link, $query);

  if (!$result) {
    http_response_code(404);
    die(mysqli_error());
  }
  else {
    echo('ok');
    http_response_code(200);
  }

  mysqli_close($link);
}
else {
  echo('failed');
}


?>
