<?php
$servername = "sp2023.mysql.database.azure.com";
$username = "Group12";
$password = "gR0up12_Sp";
$dbname = "group12";
$port = 3306;
// Create connection
$con = new mysqli($servername, $username, $password, $dbname, $port);
// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

//gets data from file 
$json = file_get_contents("../configs/graphs/bar.json");
$graph = 1;

// THIS IS HOW YOU WOULD WRITE TO THE GRAPH TABLE
// $stmt = $con->prepare("INSERT INTO graph(graph,graph_data) VALUES (?,?)");
// $stmt->bind_param("is",$graph, $json);
// $stmt->execute();

//create sql statment
$sql = "SELECT * FROM graph";
$result = mysqli_query($con, $sql);

//prints result object
print_r($result);
echo("<br>");

//goes though each row in object and prints the graph and graph data.
if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo "graph: " . $row["graph"] . "<br>". "graph_data:" . $row["graph_data"] . "<br>";
        //writes  current row to print.json 
        $fp = fopen("../configs/dashboards/print.json", 'w');
        fwrite($fp, $row["graph_data"]);
        fclose($fp);
    }
} else {
    echo "0 results";
}
