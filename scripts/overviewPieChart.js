FusionCharts.ready(function() {
    var topProductsChart = new FusionCharts({
      type: 'multilevelpie',
      renderAt: 'chart-container',
      id: "myChart",
      width: '600',
      height: '600',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Sales Breakup - Top Product Categories",
          "subcaption": "Last Quarter",
          "showPlotBorder": "1",
          "piefillalpha": "60",
          "pieborderthickness": "2",
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
            "color": "#33ccff",
            "value": "33",
            "category": 
              [
                {
                  "label": "Legal {br}Register", // Legal
                  "color": "#f8bd19",
                  "value": "11",
                  "category":[
                    {"label": "2nd Environment", // Final Category
                    "color": "#33ccff",
                    "value": "33",}
                ]
                }, 
                {
                  "label": "Compliance {br}Audits", // Comp
                  "color": "#f8bd19",
                  "value": "11",
                  "category":[
                    {"label": "2nd Environment", // Final Category
                    "color": "#33ccff",
                    "value": "33",}
                ]
                }, 
                {
                  "label": "Aspect {br}Register", // Aspect
                  "color": "#f8bd19",
                  "value": "11",
                  "category":[
                    {"label": "2nd Environment", // Final Category
                    "color": "#33ccff",
                    "value": "33",}
                ]
                }
              ]
            }, 
            {
              "label": "Health &{br}Safety", // Category
              "color": "#33ccff",
              "value": "33",
              "tooltext": "Apparel & Accessories, $$valueK, $percentValue",
              "category": [{
                "label": "Legal {br}Register", // Legal
                "color": "#33ccff",
                "value": "11",
                "category":[
                  {"label": "2nd Environment", // Final Category
                  "color": "#33ccff",
                  "value": "33",}
              ]
            }, {
              "label": "Compliance {br}Audits", // Comp
              "color": "#33ccff",
              "value": "11",
              "category":[
                {"label": "2nd Environment", // Final Category
                "color": "#33ccff",
                "value": "33",}
            ]
            }, {
              "label": "Aspect {br}Register", // Aspect
              "color": "#33ccff",
              "value": "11",
              "category":[
                {"label": "2nd Environment", // Final Category
                "color": "#33ccff",
                "value": "33",}
            ]
            }]
          }, {
            "label": "Climatespace", // Category
            "color": "#33ccff",
            "value": "33",
            "tooltext": "Baby Products, $$valueK, $percentValue",
            "category": [{
              "label": "Legal {br}Register", // Legal
              "color": "#ffcccc",
              "value": "11",
              "tooltext": "Bath & Grooming, $$valueK, $percentValue",
              "category":[
                {"label": "2nd Environment", // Final Category
                "color": "#33ccff",
                "value": "33",}
            ]
            }, {
              "label": "Compliance {br}Audits", // Comp
              "color": "#ffcccc",
              "value": "11",
              "category":[
                {"label": "2nd Environment", // Final Category
                "color": "#33ccff",
                "value": "33",}
            ]
            }, {
              "label": "Aspect {br}Register", // Aspect
              "color": "#ffcccc",
              "value": "11",
              "category":[
                {"label": "2nd Environment", // Final Category
                "color": "#33ccff",
                "value": "33",}
            ]
            }]
          }]
        }]
      }
    });
    topProductsChart.render();
  });