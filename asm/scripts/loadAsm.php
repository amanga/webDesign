<?php
	include_once "dao/AssessmentDao.php";
	
	$asmID = $_GET['id'];
	$asmDao = new AssessmentDao();
	if(isset($_GET['single'])){
		$asm = $asmDao->getAsmIDDetails($asmID);
		echo json_encode($asm);
	}else if($asmID==="all"){	
		$asm = $asmDao->getAsmDetails();
		echo json_encode($asm);
	}else {
		$asm = $asmDao->getAsm($asmID);
		echo json_encode($asm);
	}

?>