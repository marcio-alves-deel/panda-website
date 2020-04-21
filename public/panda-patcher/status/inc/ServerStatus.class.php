<?php
class ServerStatus {
	var $hostRag;
	var $hostSql;
	var $userSql;
	var $passSql;
	var $baseSql;
	
	# M�todo construtor da classe.
	function __construct($hostRag,$hostSql,$userSql,$passSql,$baseSql) {
		$this->hostRag = gethostbyname($hostRag);
		$this->hostSql = gethostbyname($hostSql);
		$this->userSql = $userSql;
		$this->passSql = $passSql;
		$this->baseSql = $baseSql;
	}
	
	# M�todo para conectar com o host:porta.
	function connect( $host,$port ) {
		# $fp receber� o retorno da fun��o fsockopen.
		$fp = @fsockopen( $host, $port, $errno, $errstr, 1.0 );
		# $close receber� o retorno do m�todo $this->close;
		$close = $this->close( $fp );
		# Ir� retornar o valor de $fp.
		return $fp;
	}
	
	# M�todo para fechar a conex�o.
	function close( $fp ) {
		# Chama a fun��o fclose para fechar a conex�o gerada em $fp.
		@fclose( $fp );
	}
	
	# M�todo de retorno do Status atrav�s de $port.
	function getStatus($server) {
		switch($server){
			case "map": $port=5121; break;
		}
		# Retorna o retorno do m�todo $this->connect.
		 return (!empty($port))?$this->connect( $this->hostRag, $port ):'0';
	}
	
}

?>