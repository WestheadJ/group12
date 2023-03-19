 <!-- Reference link: 
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->

<?php
  require 'navbar.php';
?>
<!-- <form class ="frm" action ="dashboard.php" method = "post">
        Graph Title<input Title = " Title" type = "text"> <br> 
        Graph X Axis Label<input  X Label = "X Axis Label" type = "text"> <br>
        Graph Y Axis Label<input  Y Label = "Y Axis Label" type = "text"> <br>
        Graph Description <input  Description = "Chart/Graph Description" type = "text"> <br>

        <input type = "Submit"> -->

        <div class="container">
        <div class = "title"> 
        <h1>Edit Graph OR Chart</h1>
        </div>
  <form action="dashboard.php" method =" post">
    <div class="row">
      <div class="col-251">
      <script src="../scripts/editChart.js"></script>
            <canvas id="editBarChart"></canvas>
      </div>
      <div class="col-75">
        <input cla type="text" id="gTitle" name="graphTitle" placeholder="Your Graph Title..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <!-- <label for="Graph X Axis Label">Graph X Axis Label:</label> -->
      </div>
      <div class="col-75">
        <input type="text" id="xAxis" name="XAxis" placeholder="Your Graph X Axis Label..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <!-- <label for="Graph Y Axis Label">Graph Y Axis Label:</label> -->
      </div>
      <div class="col-75">
        <input type="text" id="yAxis" name="YAxis" placeholder="Your Graph Y Axis Label..">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <!-- <label for="Graph Type">Graph Type:</label> -->
      </div>
      <div class="col-75">
        <select id="Graph Type" name="Graph Type">
          <option value="Bar Chart">Bar Chart</option>
          <option value="Pie Chart">Pie Chart</option>
          <option value="Gauge Chart">Gauge Chart</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <!-- <label for="Graph Description">Graph Description:</label> -->
      </div>
      <div class="col-75">
        <textarea id="Graph Description" name="Graph Description" placeholder="Enter any details.." style="height:200px"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="submit" value="Update">
      <a href="dashboard.php">Cancel</a>
    </div>
  </form>
</div>
