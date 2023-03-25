<?php require 'navbar.php'; ?>
<!-- <link href="../node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" />
<script src="../node_modules/gridstack/dist/gridstack-all.js"></script> -->
<link href="../node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet"/>
<script src="../node_modules/gridstack/dist/es5/gridstack-poly.js"></script>
<script src="../node_modules/gridstack/dist/es5/gridstack-all.js"></script>
<style type="text/css">
    .grid-stack {
        background: #FAFAD2;
    }
</style>

<a class="btn btn-primary" onclick="addMainWidget()" href="#">Add Widget</a>
<a class="btn btn-primary" onclick="save()" href="#">Save Full</a>
<!-- Why does this line code not work, It prints to the html in the form below!!!! Just doesn't render-->
<!-- <div id="render"></div> -->

<!-- THIS WORKS -->
<!-- <div class="grid-stack">
    <div class="grid-stack-item" gs-w="3">
        <div class="grid-stack-item-content">{"type":"bar","data":{"labels":["Green","Amber","Red"],"datasets":[{"label":"Chart","data":"data","backgroundColor":["green","orange","red"],"borderWidth":1}]},"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}}</div>
    </div>
    <div class="grid-stack-item" gs-w="3">
        <div class="grid-stack-item-content">{"type":"gauge","data":{"datasets":[{"data":"data","value":"value","backgroundColor":["green","orange","red"],"borderWidth":2}]},"options":{"responsive":true,"title":{"display":true,"text":"Gauge chart"},"layout":{"padding":{"bottom":30}},"needle":{"radiusPercentage":2,"widthPercentage":3.2,"lengthPercentage":80,"color":"rgba(0, 0, 0, 1)"},"valueLabel":{"formatter":"Math.round"}}}</div>
    </div>
    <div class="grid-stack-item" gs-w="3">
        <div class="grid-stack-item-content">{"type":"line","data":{"labels":["Green","Amber","Red"],"datasets":[{"label":"Chart","data":"data","fill":false,"backgroundColor":["green","orange","red"],"borderWidth":1}]},"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}}</div>
    </div>
    <div class="grid-stack-item" gs-w="3">
        <div class="grid-stack-item-content">{"type":"pie","data":{"labels":["Green","Amber","Red"],"datasets":[{"label":"Chart","data":"data","backgroundColor":["green","orange","red"],"borderWidth":1}]},"options":{"scales":{"yAxes":[{"ticks":{"beginAtZero":true}}]}}}</div>
    </div>
</div> -->


<div class="grid-stack"></div>

<script src="scripts\charts.js"></script> 



<!-- <script type="text/javascript">
    GridStack.init();
</script> -->