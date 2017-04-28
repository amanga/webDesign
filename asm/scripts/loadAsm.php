<?php
	include_once "dao/AssessmentDao.php";
	
	$asmID = $_GET['id'];

	if($asmID==="all"){
		$asmDao = new AssessmentDao();
		$asm = $asmDao->getAsmDetails();
		echo json_encode($asm);
	}else{
		$asmDao = new AssessmentDao();
		$asm = $asmDao->getAsm($asmID);
		echo json_encode($asm);
	}
	

?>