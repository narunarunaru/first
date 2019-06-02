<!DOCTYPE html>
<html lang="ja">
	<head>
			<meta charset="utf-8">
			<meta="" name="viewport" content="width=device-width",initial-scale="1">
			<meta name="description" content="快適で居心地が良く新しい出会いが生まれる場所">
			<meta name="keywords" content="ゲストハウス,宿泊,旅行,出会い">
		    <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&amp;subset=japanese" rel="stylesheet">
				<link rel="stylesheet" href="css/form.css">
	</head>
	<body>
  <div>
<?php
require_once("../../lib/util.php");
if (!cken($_POST)){
	$encoding = mb_internal_encoding();
	$err = "Encoding Error! The expected encoding is" .$encoding;
	exit($err);
}
$_post = es($_POST);
 ?>

 <?php
 $isError = false;
 if (isset($_POST['name'])){
	 $name = trim($_POST['name']);
	 if ($name===" "){
		 $isError = true;
	 }
 }else{

	 $isError = true;
 }
  ?>
	<?php if ($isError): ?>
		<span class="error">情報を入力してください。</span>
		<form method="POST" action="nameCheckForm.php">
			<input type="submit" value="戻る">
		</form>
	<?php else: ?>
		<span>
			あなたのご予約情報は、<?php echo $name;  ?>です。
		</span>
	<?php endif; ?>







  </div>
  </body>
  </html>
