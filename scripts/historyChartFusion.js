// REFERENCE FOR CODE: https://www.fusioncharts.com/dev/chart-attributes/msline (Used for our history chart. (client gave us permission to use FusionCharts))
FusionCharts.ready(function() {
    var visitChart = new FusionCharts({
      type: 'msline',
      renderAt: 'chart-container',
      width: '700',
      height: '400',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "theme": "fusion",
          "caption": "Waterman Group",
          "subCaption": "Action Timeline",
          "xAxisName": "Day"
        },
        "categories": [{
          "category": [{
              "label": "Mon"
            },
            {
              "label": "Tue"
            },
            {
              "label": "Wed"
            },
            {
              "label": "Thu"
            },
            {
              "label": "Fri"
            },
            {
              "label": "Sat"
            },
            {
              "label": "Sun"
            }
          ]
        }],
        "dataset": [{
            "seriesname": "RED",
            "anchorBgColor": "#FF2D00",
            "color": "#FF2D00",
            "data": [{
                "value": "10"
              },
              {
                "value": "9"
              },
              {
                "value": "12"
              },
              {
                "value": "20"
              },
              {
                "value": "18"
              },
              {
                "value": "8"
              },
              {
                "value": "1"
              }
            ]
          },
          {
            "seriesname": "GREEN",
            "anchorBgColor": "#00CC16",
            "color": "#00CC16",
            "data": [{
                "value": "18"
              },
              {
                "value": "30"
              },
              {
                "value": "10"
              },
              {
                "value": "2"
              },
              {
                "value": "12"
              },
              {
                "value": "11"
              },
              {
                "value": "12"
              }
            ]
          },
          {
            "seriesname": "AMBER",
            "anchorBgColor": "#FFB900",
            "color": "#FFB900",
            "data": [{
                "value": "12"
              },
              {
                "value": "27"
              },
              {
                "value": "5"
              },
              {
                "value": "1"
              },
              {
                "value": "6"
              },
              {
                "value": "9"
              },
              {
                "value": "10"
              }
            ]
          },
        ],
      },
      
    }).render();
  });
  