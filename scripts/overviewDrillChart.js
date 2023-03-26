FusionCharts.ready(function() {
    var satisfactionChart = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-container',
      width: '900',
      height: '800',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Waterman Group",
          "subcaption": "Overview",
          "xaxisName": "Department",
          "yaxisName": "Actions:",
          "showPlotBorder": "1",
          "exportEnabled": "1",
          "pieborderthickness": "4",
          "pieborderColor": "#ffffff",
          "numberPrefix": "",
          "numberSuffix": "",
          "theme": "fusion"
        },
        "data": [{
          "label": "Environment",
          "value": "810000",
          "color": "#0f6054",
          "link": "newchart-xml-environment"
        }, {
          "label": "Health & Safety",
          "value": "620000",
          "color": "#445753",
          "link": "newchart-xml-hs"
        }, {
          "label": "Climatespace",
          "value": "350000",
          "color": "#0fe6e6",
          "link": "newchart-xml-climatespace"
        }],
        "linkeddata": [{
          "id": "environment", // Drill 1
          "linkedchart": {
            "chart": {
              "caption": "Environment",
              "subcaption": "Departments",
              "xaxisname": "Category",
              "yaxisname": "Actions:",
              "numberprefix": "",
              "theme": "fusion",
              "showPlotBorder": "1",
              "exportEnabled": "1",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
                "label": "Category 1",
                "color": "#0f6054",
                "value": "157000"
              }, {
                "label": "Category 2",
                "color": "#0f6054",
                "value": "172000"
              }, {
                "label": "Category 3",
                "color": "#0f6054",
                "value": "206000"
              }]
          }
        },{
          "id": "hs",
          "linkedchart": {
            "chart": {
              "caption": "Health & Safety", // Drill 1
              "subcaption": "Departments",
              "xaxisname": "Category",
              "yaxisname": "Actions:",
              "numberprefix": "",
              "theme": "fusion",
              "showPlotBorder": "1",
              "exportEnabled": "1",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
              "label": "Category 1",
              "color": "#445753",
              "value": "157000"
            }, {
              "label": "Category 2",
              "color": "#445753",
              "value": "172000"
            }, {
              "label": "Category 3",
              "color": "#445753",
              "value": "206000"
            }]
        }
        },{
          "id": "climatespace",
          "linkedchart": {
            "chart": {
              "caption": "Climatespace", // Drill 1
              "subcaption": "Departments",
              "xaxisname": "Category",
              "yaxisname": "Actions:",
              "numberprefix": "",
              "theme": "fusion",
              "showPlotBorder": "1",
              "exportEnabled": "1",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
              "label": "Category 1",
              "color": "#0fe6e6",
              "value": "157000"
            }, {
              "label": "Category 2",
              "color": "#0fe6e6",
              "value": "172000"
            }, {
              "label": "Category 3",
              "color": "#0fe6e6",
              "value": "206000"
            }]
        }
        },{
          "id": "environment2", // Drill 2
          "linkedchart": {
            "chart": {
              "caption": "Environment",
              "subcaption": "Waterman Group",
              "xaxisname": "Category",
              "yaxisname": "Actions:",
              "numberprefix": "",
              "theme": "fusion",
              "showPlotBorder": "1",
              "exportEnabled": "1",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
              "label": "Outstanding",
              "color": "#ff5050",
              "value": "157000"
            }, {
              "label": "Due",
              "color": "#ffcc00",
              "value": "172000"
            }, {
              "label": "Completed",
              "color": "#33cc33 ",
              "value": "206000"
            }]
          }
        }, {
          "id": "hs2",
          "linkedchart": {
            "chart": {
              "caption": "Health & Safety", // Drill 2
              "subcaption": "Waterman",
              "xaxisname": "Category",
              "yaxisname": "Actions:",
              "numberprefix": "",
              "theme": "fusion",
              "showPlotBorder": "1",
              "exportEnabled": "1",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
                "label": "Outstanding",
                "color": "#ff5050",
                "value": "157000"
              }, {
                "label": "Due",
                "color": "#ffcc00",
                "value": "172000"
              }, {
                "label": "Completed",
                "color": "#33cc33 ",
                "value": "206000"
              }]
          }
        }, {
          "id": "climatespace2",
          "linkedchart": {
            "chart": {
              "caption": "Climatespace", // Drill 2
              "subcaption": "Waterman Group",
              "xaxisname": "Category",
              "yaxisname": "Actions:",
              "numberprefix": "",
              "theme": "fusion",
              "showPlotBorder": "1",
              "exportEnabled": "1",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
                "label": "Outstanding",
                "color": "#ff5050",
                "value": "157000"
              }, {
                "label": "Due",
                "color": "#ffcc00",
                "value": "172000"
              }, {
                "label": "Completed",
                "color": "#33cc33 ",
                "value": "206000"
              }]
          }
        }]
      }
    });
  
    satisfactionChart.render();
  
  });
  