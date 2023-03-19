<?php require 'index.php'; ?>
<!-- <script src="http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack-h5.js"></script>
<link href=" http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" /> -->
<link href="http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet"/>
<script src="http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack-all.js"></script>
<style type="text/css">
    .grid-stack {
        background: #FAFAD2;
    }

    .grid-stack-item-content {
        background-color: #18BC9C;
    }
</style>

<div class="grid-stack">
  <div class="grid-stack-item">
    <div class="grid-stack-item-content">Item 1</div>
  </div>
  <div class="grid-stack-item" gs-w="2">
    <div class="grid-stack-item-content">Item 2 wider</div>
  </div>
</div>

<script type="text/javascript">
    GridStack.init();
</script>