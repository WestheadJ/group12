 <!-- Reference link:
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->
 <?php
  require 'navbar.php';
  ?>
 <link rel="stylesheet" href="../styles/editGraph.css">

 <!-- <form class ="frm" action ="dashboard.php" method = "post">
        Graph Title<input Title = " Title" type = "text"> <br>
        Graph X Axis Label<input  X Label = "X Axis Label" type = "text"> <br>
        Graph Y Axis Label<input  Y Label = "Y Axis Label" type = "text"> <br>
        Graph Description <input  Description = "Chart/Graph Description" type = "text"> <br>

        <input type = "Submit"> -->
 <div class="main">
   <div class="container">
     <div class="item1">
       <h1>Edit Graph OR Chart</h1>

       <script src="../scripts/editChart.js"></script>
       <div class="graphItem">
         <canvas id="editBarChart"></canvas>
       </div>

     </div>
     <div class="formItem">
       <div class="inputItem">
         <form action="gridStack.php" method="post">

           <label>Chart title</label>
           <input cla type="text" id="gTitle" name="graphTitle" placeholder="Your Graph Title..">
           <label>X Axis</label>
           <input type="text" id="xAxis" name="XAxis" placeholder="Your Graph X Axis Label..">
           <label>Y Axis</label>
           <input type="text" id="yAxis" name="YAxis" placeholder="Your Graph Y Axis Label..">
           <label>Graph Type</label>
           <select id="Graph Type" name="Graph Type">
             <option value="Bar Chart">Bar Chart</option>
             <option value="Pie Chart">Pie Chart</option>
             <option value="Gauge Chart">Gauge Chart</option>
           </select>
           <label>Graph Description</label>
           <textarea id="Graph Description" name="Graph Description" placeholder="Enter any details.." style="height:200px"></textarea>
       </div>
       <div class="buttonItem">
         <div>
           <input type="submit" value="Update">
         </div>
         <div>
           <button class="cancel" href="gridStack.php">Cancel</button>
         </div>
         <div>
           <button class="cancel" href="#">Update</button>
         </div>
       </div>
       </form>
     </div>

   </div>
 </div>