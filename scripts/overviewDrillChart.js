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
          "exportEnabled": "0",
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
              "exportEnabled": "0",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
                "label": "Legal Register",
                "color": "#0f6054",
                "value": "1",
                "link": "newchart-xml-lr"
              }, {
                "label": "Risk Manager",
                "color": "#0f6054",
                "value": "1",
                "link": "newchart-xml-rm"
              }, {
                "label": "Compliance Auditor",
                "color": "#0f6054",
                "value": "1",
                "link": "newchart-xml-ca"
              }, {
                "label": "Improvement Tracker",
                "color": "#0f6054",
                "value": "1",
                "link": "newchart-xml-it"
              }],
              "linkeddata": [{
                "id": "lr", // Environment RAG
                "linkedchart": {
                  "chart": {
                    "caption": "Environment - Legal Register",
                    "subcaption": "Actions",
                    "xaxisname": "Category",
                    "yaxisname": "Actions:",
                    "numberprefix": "",
                    "theme": "fusion",
                    "showPlotBorder": "1",
                    "exportEnabled": "0",
                    "pieborderthickness": "4",
                    "pieborderColor": "#ffffff",
                    "numberPrefix": "",
                    "numberSuffix": "",
                    "rotateValues": "0"
                  },
                  "data": [{
                      "label": "Outstanding",
                      "color": "#fc2c03",
                      "value": "10"
                    }, {
                      "label": "Due",
                      "color": "#fcba03",
                      "value": "2"
                    }, {
                      "label": "Complete",
                      "color": "#03fc20",
                      "value": "8"
                    }]
                }
              },{
                "id": "rm", // Environment RAG
                "linkedchart": {
                  "chart": {
                    "caption": "Environment - Risk Manager",
                    "subcaption": "Actions",
                    "xaxisname": "Category",
                    "yaxisname": "Actions:",
                    "numberprefix": "",
                    "theme": "fusion",
                    "showPlotBorder": "1",
                    "exportEnabled": "0",
                    "pieborderthickness": "4",
                    "pieborderColor": "#ffffff",
                    "numberPrefix": "",
                    "numberSuffix": "",
                    "rotateValues": "0"
                  },
                  "data": [{
                      "label": "Outstanding",
                      "color": "#fc2c03",
                      "value": "1"
                    }, {
                      "label": "Due",
                      "color": "#fcba03",
                      "value": "1"
                    }, {
                      "label": "Complete",
                      "color": "#03fc20",
                      "value": "1"
                    }]
                }
              },{
                "id": "ca", // Environment RAG
                "linkedchart": {
                  "chart": {
                    "caption": "Environment - Compliance Auditor",
                    "subcaption": "Actions",
                    "xaxisname": "Category",
                    "yaxisname": "Actions:",
                    "numberprefix": "",
                    "theme": "fusion",
                    "showPlotBorder": "1",
                    "exportEnabled": "0",
                    "pieborderthickness": "4",
                    "pieborderColor": "#ffffff",
                    "numberPrefix": "",
                    "numberSuffix": "",
                    "rotateValues": "0"
                  },
                  "data": [{
                      "label": "Outstanding",
                      "color": "#fc2c03",
                      "value": "1"
                    }, {
                      "label": "Due",
                      "color": "#fcba03",
                      "value": "1"
                    }, {
                      "label": "Complete",
                      "color": "#03fc20",
                      "value": "1"
                    }]
                }
              },{
                "id": "it", // Environment RAG
                "linkedchart": {
                  "chart": {
                    "caption": "Environment - Improvement Tracker",
                    "subcaption": "Actions",
                    "xaxisname": "Category",
                    "yaxisname": "Actions:",
                    "numberprefix": "",
                    "theme": "fusion",
                    "showPlotBorder": "1",
                    "exportEnabled": "0",
                    "pieborderthickness": "4",
                    "pieborderColor": "#ffffff",
                    "numberPrefix": "",
                    "numberSuffix": "",
                    "rotateValues": "0"
                  },
                  "data": [{
                      "label": "Outstanding",
                      "color": "#fc2c03",
                      "value": "1"
                    }, {
                      "label": "Due",
                      "color": "#fcba03",
                      "value": "1"
                    }, {
                      "label": "Complete",
                      "color": "#03fc20",
                      "value": "1"
                    }]
                }
              },]
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
              "exportEnabled": "0",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
              "label": "Outstanding",
              "color": "#fc2c03",
              "value": "1"
            }, {
              "label": "Due",
              "color": "#fcba03",
              "value": "1"
            }, {
              "label": "Complete",
              "color": "#03fc20",
              "value": "1"
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
              "exportEnabled": "0",
              "pieborderthickness": "4",
              "pieborderColor": "#ffffff",
              "numberPrefix": "",
              "numberSuffix": "",
              "rotateValues": "0"
            },
            "data": [{
              "label": "Outstanding",
              "color": "#fc2c03",
              "value": "1"
            }, {
              "label": "Due",
              "color": "#fcba03",
              "value": "1"
            }, {
              "label": "Complete",
              "color": "#03fc20",
              "value": "1"
            }]
        }
        }]
      }
    });
  
    satisfactionChart.render();
  
  });
  