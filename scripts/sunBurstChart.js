anychart.onDocumentReady(function () {

    // create data
    var data = [
      {name: "Company A", children: [
        {name: "Technical", children: [
          {name: "Team Leaders"},
          {name: "Architects"},
          {name: "Developers"},
          {name: "Testers"}
        ]},
        {name: "Sales", children: [
          {name: "Analysts"},
          {name: "Executives"}
        ]},
        {name: "HR"},
        {name: "Management"}
      ]}
    ];

    // create a chart and set the data
    chart = anychart.sunburst(data, "as-tree");

    // set the selection mode
    chart.interactivity().selectionMode("none");

    // set the chart title
    chart.title().useHtml(true);
    chart.title("Sunburst: Selection Mode = " +
                chart.interactivity().selectionMode() + "<br><br>" +
                "<span style='font-size:12; font-style:italic'>" +
                "Company Structure");


    // set the container id
    chart.container("container");

    // initiate drawing the chart
    chart.draw();
});

// set the selection mode
function interactivitySelectionMode(mode) {
  chart.interactivity().selectionMode(mode);
  // update the chart title
  chart.title("Sunburst: Selection Mode = " +
              chart.interactivity().selectionMode() + "<br><br>" +
              "<span style='font-size:12; font-style:italic'>" +
              "Company Structure");
}