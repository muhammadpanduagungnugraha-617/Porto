<?php
	$server = "http://pandu.bumdesa-waroengbarokah-cibunarjaya.my.id/";
	$user = "spgnnmxj_pandu";
	$pass = "zenith060107";
	$db = "spgnnmxj_pandu";

	$con = mysqli_connect($server,$user,$pass,$db);
	if ($con->connect_error) {
		echo "koneksi gagal";
		die("error!");
	}
?>