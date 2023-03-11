<!-- What we need 
    Button to add chart -> chart select (select chart) user click update -> display chart type.
    Return to dashboard
    Display chart
-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php include 'navbar.php'; ?>
<script src="../scripts/addGraphBtn.js"></script>
<?php
// Start the session
session_start();

// Get the chart type from the form submission
$chartType = $_POST["chart-type"];

// Generate the chart based on the chart type
if ($chartType == "pie") {
  // Generate a pie chart
  $chartData = ... // Generate the chart data
} else {
  // Generate a different type of chart
  $chartData = ... // Generate the chart data
}

// Output the chart HTML
echo '<div id="chart">' . $chartData . '</div>';

// Post the result of the chart to a remote server
$postData = array(
  "chartType" => $chartType,
  "chartData" => $chartData
);
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://example.com/post-chart-data.php");
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_exec($ch);
curl_close($ch);

// If the current chart type is pie, create another pie chart
if ($chartType == "pie") {
  $pieChartData = ... // Generate the pie chart data
  echo '<div id="pie-chart">' . $pieChartData . '</div>';
}

// Store chart/dashboard info in a session
$_SESSION["chartType"] = $chartType;
$_SESSION["chartData"] = $chartData;
$_SESSION["dashboard.php"] = 123; // Replace with the actual dashboard ID
?>
<a href="dashboard.php">Return to dashboard</a>
</body>
</html>