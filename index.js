$(document).ready(function(){
  new Chart(document.getElementById("randar-chart"), {
      "type": "radar",
      "data": {
          "labels": ["容器技术","编程语言", "分布式系统","机器学习",  "性能调优", "操作系统"],
          "datasets": [{
                  "label": "目前研究方向",
                  "data": [95, 70, 90, 25, 90,  45],
                  "fill": true,
                  "backgroundColor": "rgba(255, 99, 132, 0.2)",
                  "borderColor": "rgb(255, 99, 132)",
                  "pointBackgroundColor": "rgb(255, 99, 132)",
                  "pointBorderColor": "#fff",
                  "pointHoverBackgroundColor": "#fff",
                  "pointHoverBorderColor": "rgb(255, 99, 132)"
              }]
      },
      "options": {
          "elements": {
              "line": {
                  "tension": 0,
                  "borderWidth": 3
              }
          },
          "legend":{
            // "display": false
            "position":"bottom",
            "fontSize": 14,
            "fontColor": "#000000"
          },
          "layout": {
             "padding": {
                 "bottom": 10
             }
         },
         "scale": {
            "ticks": {
                "display": false
            },
            "pointLabels": {
              "fontSize": 14,
              "fontColor": "#000000",
            }
        }
      }
  });

  function showMeToo(){
    var me = document.getElementById("me")
    var meToo = document.getElementById("me-too")
    me.style.display = "none";
    meToo.style.display = "inline";
  }

  function showMe(){
    var me = document.getElementById("me")
    var meToo = document.getElementById("me-too")
    me.style.display = "inline";
    meToo.style.display = "none";
  }

  $(".left-menu,.blog-entry").click(function(){
    $(".left-side-bar").show().addClass('animated slideInLeft');
  });

  $(".right-close").click(function(){
    $(".left-side-bar").removeClass('animated slideInLeft').hide(500);
  })

  $(".right-menu").click(function(){
    $(".right-side-bar").show().addClass('animated slideInRight');
  });

  $(".left-close").click(function(){
    $(".right-side-bar").removeClass('animated slideInRight').hide(500);
  })
})
