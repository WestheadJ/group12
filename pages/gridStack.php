<?php require 'index.php'; ?>
<script src=".../node_modules/gridstack/dist/gridstack-h5.js"></script>
<link href=".../node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" />
<style type="text/css">
    .grid-stack {
        background: #FAFAD2;
    }

    .grid-stack-item-content {
        background-color: #18BC9C;
    }
</style>

<div class="grid-stack"></div>

<script type="text/javascript">
    require('gridstack');
    var items = [{
            content: 'my first widget'
        }, // will default to location (0,0) and 1x1
        {
            w: 2,
            content: 'another longer widget!'
        } // will be placed next at (1,0) and 2x1
    ];
    var grid = GridStack.init();
    grid.load(items);
</script>