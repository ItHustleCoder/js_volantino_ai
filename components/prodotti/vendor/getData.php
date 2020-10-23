<?php

include '../bin/config.php';

$searchText = $_POST['speechText'];

// search query
$query = 'SELECT * FROM posts WHERE title like "%' . $searchText . '%" or content like "%' . $searchText . '%" or link like "%' . $searchText . '%"';

$result = mysqli_query($con, $query);

$html = '';
if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_array($result)) {
    $id = $row['id'];
    $title = $row['title'];
    $content = $row['content'];
    $shortcontent = substr($content, 0, 160) . "...";
    $link = $row['link'];

    // Creating HTML structure
    
    $html .= '<div id="post_' . $id . '" class="post">';
    //FIXME:
    $html .= '<input type="checkbox" class="call-checkbox" data-id= '.$id.'>';
    $html .= '<h1>' . $title . '</h1>';
    $html .= '<p>' . $shortcontent . '</p>';
    //TODO:
    $html .= '<img src="' . $link . '" class="img_foto" alt="foto">';
    // $html .= '<a href="' . $link . '" class="more" target="_blank">More</a>';
    $html .= '</div>';
  }
} else {
  $html .= '<div >';
  $html .= '<p class="msg_err">No Record Found.</p>';
  $html .= '</div>';
}

echo $html;
exit;
