<?php

class Service {

    /*private $host = 'localhost';
    private $user = 'smarthost';
    private $pass = 'alex_Password1';
    private $db = 'smarthost';
    private $dsn = '';*/

    private $host = 'localhost';
    private $user = 'alex';
    private $pass = 'alex323000';
    private $db = 'test.dev';
    private $dsn = '';

    public function __construct()
    {
        $this -> dsn = 'mysql:host='.$this->host .'; dbname='.$this->db;
    }

    public function mysqlConnect()
    {
        return new mysqli($this->host, $this->user, $this->pass,$this->db);
    }

    public function mysqlConnectPdo()
    {
        return new PDO($this->dsn, $this->user, $this->pass);
    }

}//END Class