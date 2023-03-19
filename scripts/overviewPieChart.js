FusionCharts.ready(function() {
    var topProductsChart = new FusionCharts({
      type: 'multilevelpie',
      renderAt: 'chart-container',
      id: "myChart",
      width: '900',
      height: '900',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          // "innerRadius": "100",
          "clickURL": "../pages/dashboard.php",
          "caption": "Waterman Group",
          "exportEnabled": "1",
          "autoRotateLabels": "1",
          "useEllipsesWhenOverflow": "0",
          "skipOverlapLabels": "1",
          "subcaption": "Overview",
          "showPlotBorder": "1",
          "piefillalpha": "100",
          "pieborderthickness": "3",
          "piebordercolor": "#FFFFFF",
          "hoverfillcolor": "#CCCCCC",
          "numberprefix": "$",
          "plottooltext": "$label, $$valueK, $percentValue",
          "theme": "fusion" 
        },
        "category": [{
          "label": "Waterman Group", 
          "color": "#38f902",
          "value": "100",
          "category": 
          [
            {
            "label": "Environment", // Category
            "color": "#0066ff",
            "value": "33",
            "category": 
              [
                {
                  "label": "Legal {br}Register", // Legal
                  "color": "#0066ff",
                  "value": "11",
                  "category":[
                    {"label": "Completed", // G
                    "color": "green",
                    "value": "33",},
                    {"label": "Due", // A
                    "color": "#f8bd19",
                    "value": "33",},
                    {"label": "Outstanding", // R
                    "color": "#ff0000",
                    "value": "33",}
                ]
                }, 
                {
                  "label": "Compliance {br}Audits", // Comp
                  "color": "#0066ff",
                  "value": "11",
                  "category":[
                    {"label": "Completed", // G
                    "color": "green",
                    "value": "33",},
                    {"label": "Due", // A
                    "color": "#f8bd19",
                    "value": "33",},
                    {"label": "Outstanding", // R
                    "color": "#ff0000",
                    "value": "33",}
                ]
                }, 
                {
                  "label": "Aspect {br}Register", // Aspect
                  "color": "#0066ff",
                  "value": "11",
                  "category":[
                    {"label": "Completed", // G
                    "color": "green",
                    "value": "33",},
                    {"label": "Due", // A
                    "color": "#f8bd19",
                    "value": "33",},
                    {"label": "Outstanding", // R
                    "color": "#ff0000",
                    "value": "33",}
                ]
                }
              ]
            }, 
            {
              "label": "Health &{br}Safety", // Category
              "color": "#33ccff",
              "value": "33",
              "tooltext": "Health & Safety, $$valueK, $percentValue",
              "category": [{
                "label": "Legal {br}Register", // Legal
                "color": "#33ccff",
                "value": "11",
                "category":[
                  {"label": "Completed", // G
                  "color": "green",
                  "value": "33",},
                  {"label": "Due", // A
                  "color": "#f8bd19",
                  "value": "33",},
                  {"label": "Outstanding", // R
                  "color": "#ff0000",
                  "value": "33",}
              ]
            }, {
              "label": "Compliance {br}Audits", // Comp
              "color": "#33ccff",
              "value": "11",
              "category":[
                {"label": "Completed", // G
                "color": "green",
                "value": "33",},
                {"label": "Due", // A
                "color": "#f8bd19",
                "value": "33",},
                {"label": "Outstanding", // R
                "color": "#ff0000",
                "value": "33",}
            ]
            }, {
              "label": "Aspect {br}Register", // Aspect
              "color": "#33ccff",
              "value": "11",
              "category":[
                {"label": "Completed", // G
                "color": "green",
                "value": "33",},
                {"label": "Due", // A
                "color": "#f8bd19",
                "value": "33",},
                {"label": "Outstanding", // R
                "color": "#ff0000",
                "value": "33",}
            ]
            }]
          }, {
            "label": "Climatespace", // Category
            "color": "#99ccff",
            "value": "33",
            "tooltext": "Climatespace, $$valueK, $percentValue",
            "category": [{
              "label": "Legal {br}Register", // Legal
              "color": "#99ccff",
              "value": "11",
              "tooltext": "Legal Register, $$valueK, $percentValue",
              "category":[
                {"label": "Completed", // G
                "color": "green",
                "value": "33",},
                {"label": "Due", // A
                "color": "#f8bd19",
                "value": "33",},
                {"label": "Outstanding", // R
                "color": "#ff0000",
                "value": "33",}
            ]
            }, {
              "label": "Compliance {br}Audits", // Comp
              "color": "#99ccff",
              "value": "11",
              "category":[
                {"label": "Completed", // G
                "color": "green",
                "value": "33",},
                {"label": "Due", // A
                "color": "#f8bd19",
                "value": "33",},
                {"label": "Outstanding", // R
                "color": "#ff0000",
                "value": "33",}
            ]
            }, {
              "label": "Aspect {br}Register", // Aspect
              "color": "#99ccff",
              "value": "11",
              "category":[
                {"label": "Completed", // G
                "color": "green",
                "value": "33",},
                {"label": "Due", // A
                "color": "#f8bd19",
                "value": "33",},
                {"label": "Outstanding", // R
                "color": "#ff0000",
                "value": "33",}
            ]
            }]
          }]
        }]
      }
    });
    topProductsChart.render();
  });