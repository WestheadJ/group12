<?php require 'navbar.php'?>

<div class="filter-box">
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
<!-- This is where you can have a drop (form) to select a graph type base on pos on page, pass in url through (get) -->
<div id="chart-select">
  <form>
    <label for="graph-dropdown">Type Of Graph</label>
    <select id="graphs" name="graph-dropdown">
      <option value="gauge">Gauge</option>
      <option value="bar">Bar</option>
    </select>
  </form>
</div>
