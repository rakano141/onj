<?php
	$url = "https://hayabusa.open2ch.net/livejupiter/dat/1593687649.dat";
	//$url = "https://open2ch.net/dev/ranking.cgi";
	//$url = "http://open2ch.net/dev/toukei.cgi?d=2020-11-25";
	$conn = curl_init();
	curl_setopt($conn, CURLOPT_URL, $url);
	curl_setopt($conn, CURLOPT_RETURNTRANSFER, true);
	$res =  curl_exec($conn);
	curl_close($conn);
	//file_put_contents("/home/tk16/tk16.webcrow.jp/public_html/onj/contents.txt", $res);
	//$send = htmlentities($res);
	//$res=mb_convert_encoding($res, "utf-8", "shift-jis");
	echo $res;
	function str_cut($tar, $startStr, $endStr){
		$start = strpos($tar, $startStr);
		$end = strpos($tar, $endStr);
		$tar = substr($tar, $start, $end - $start);
		$tar = substr($tar, mb_strlen($startStr, 'utf8'));
		return $tar;
	}
?>
