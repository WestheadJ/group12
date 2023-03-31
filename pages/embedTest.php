<link rel="stylesheet" href="../styles/embed.css">
<header class="header">
    <div class="grid-container fluid" style="
    padding-right: 0px;
    padding-left: 0px;
">
        <nav class="flex-container align-justify align-middle">
            <div class="nav-title">
                Welcome <span>Bob Smith</span>
            </div>
            <div class="nav-buttons flex-container align-middle">
                <form class="button_to" method="post" action="/logout"><input type="hidden" name="_method"
                        value="delete"><input class="button button--primary" type="submit" value="Log out"><input
                        type="hidden" name="authenticity_token"
                        value="m5jqHMT+7U4W00XX1/aAIdb+i4DZJCllU3jciEm+1qtnhwJlpbfc4xrvv2RqObllGQwIGqf3iJdq3PL0b+8UXA==">
                </form>
            </div>
        </nav>




        <section class="hero">
            <div class="grid-default fluid">
                <div class="grid-default__aside show-for-medium">
                    <div class="left-img flex-container align-center align-middle">
                        <a href="/"><img class="greenspace-logo"
                                src="../assets/greenspace-logo-bd8c3b7e64d18b0bd0993784edfa49defe89d9dd55f1bf88aecaff44989e528e.svg"
                                alt="" width="141"></a>
                    </div>
                </div>

                <div class="grid-default__main">
                    <div class="right-img">
                        <img class=""
                            src="../assets/both2-87f381431a984593b1f4870e3d87da6910813b89c74f7723f5ace1f01ead0158.jpg"
                            alt="">
                    </div>
                </div>

                <!-- Hero Buttons Link -->
                <div class="hero-buttons">
                    <div class="hero-title show-for-medium">
                        Waterman Group
                    </div>
                    <div class="grid-container fluid">
                        <ul class="menu align-right">
                            <li>
                                <a class="button button--secondary--active" href="/watermangrp">Home</a>
                            </li>
                            <li>
                                <a class="button button--secondary" href="/my_dashboard/climate">Climatespace</a>
                            </li>
                            <li>
                                <a class="button button--secondary" href="/my_dashboard/watermanenv">Environmental</a>
                            </li>
                            <li>
                                <a class="button button--secondary" href="/my_dashboard/watermanhs">H&amp;S</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>




        <section class="main-nav__section show-for-medium">
            <ul class="menu align-center dropdown main-nav" id="improvement" data-dropdown-menu="" data-hover-delay="0"
                data-closing-time="0" role="menubar" data-e="k7v9v4-e">
                <li class="main-nav__link" role="menuitem">
                    <a href="/bulletin_board/watermangrp" class="">
                        Bulletin Board
                    </a>
                </li>
                <li class="main-nav__link main-nav__link--active is-dropdown-submenu-parent opens-right" role="menuitem"
                    aria-haspopup="true" aria-label="
        Improvement Tracker
          
        " data-is-click="false">
                    <a href="/improvement_tracker/my_actions/assigned_actions/watermangrp" class="">
                        Improvement Tracker
                        <i class="fa-solid fa-angle-down"></i>
                    </a>
                    <ul class="menu main-nav__dropdown submenu is-dropdown-submenu vertical first-sub" data-submenu=""
                        role="menu" style="visibility: hidden;">
                        <li class="main-nav__dropdown__link is-submenu-item is-dropdown-submenu-item" role="menuitem">
                            <a href="/improvement_tracker/planner/watermangrp" class="">&nbsp;Planner&nbsp;</a>
                        </li>
                        <li class="main-nav__dropdown__link is-submenu-item is-dropdown-submenu-item" role="menuitem">
                            <a href="/improvement_tracker/my_actions/assigned_actions/watermangrp" class="">Manage
                                Actions</a>
                        </li>
                        <li class="main-nav__dropdown__link is-submenu-item is-dropdown-submenu-item" role="menuitem">
                            <a href="/improvement_tracker/watermangrp/settings" class="">&nbsp;Settings&nbsp;</a>
                        </li>
                    </ul>
                </li>
                <li class="main-nav__link" role="menuitem">
                    <a href="/my_dashboard/watermangrp" class="">
                        Performance Dashboard
                    </a>
                </li>
                <li class="main-nav__link  is-dropdown-submenu-parent opens-right" role="menuitem" aria-haspopup="true"
                    aria-label="
        Docs
          
        " data-is-click="false">
                    <a href="/ims_docs/watermangrp" class="">
                        Docs
                        <i class="fa-solid fa-angle-down"></i>
                    </a>
                    <ul class="menu main-nav__dropdown submenu is-dropdown-submenu vertical first-sub" data-submenu=""
                        role="menu" style="visibility: hidden;">
                        <li class="main-nav__dropdown__link is-submenu-item is-dropdown-submenu-item" role="menuitem">
                            <a href="/ims_docs/watermangrp/categories" class="">&nbsp;Admin&nbsp;</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>




        <!-- <section class="show-for-small-only">
<div id="mobile-menu">
  <ul class="tree">
    <li class="folder closed">
      <div>
        <span class="title">
          <div>
            <span class="name indent-0">
              <a href="/bulletin_board/watermangrp" class="">
                Bulletin Board
              </a>
            </span>
          </div>
        </span>
      </div>

    </li>
    <li class="folder closed">
      <div>
          <a class="mobile-toggler toggler closed">»</a>
        <span class="title">
          <div>
            <span class="name indent-0">
                <strong>
              <a href="/improvement_tracker/my_actions/assigned_actions/watermangrp" class="">
                Improvement Tracker
              </a>
                </strong>
            </span>
          </div>
        </span>
      </div>

        <ul>
            <li>
              <div>
                <span class="title">
                  <div>
                    <span class="name indent-1">
                     <a href="/improvement_tracker/planner/watermangrp" class="">&nbsp;Planner&nbsp;</a>
                    </span>
                  </div>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="title">
                  <div>
                    <span class="name indent-1">
                     <a href="/improvement_tracker/my_actions/assigned_actions/watermangrp" class="">Manage Actions</a>
                    </span>
                  </div>
                </span>
              </div>
            </li>
            <li>
              <div>
                <span class="title">
                  <div>
                    <span class="name indent-1">
                     <a href="/improvement_tracker/watermangrp/settings" class="">&nbsp;Settings&nbsp;</a>
                    </span>
                  </div>
                </span>
              </div>
            </li>
        </ul>
    </li>
    <li class="folder closed">
      <div>
        <span class="title">
          <div>
            <span class="name indent-0">
              <a href="/my_dashboard/watermangrp" class="">
                Performance Dashboard
              </a>
            </span>
          </div>
        </span>
      </div>

    </li>
    <li class="folder closed">
      <div>
          <a class="mobile-toggler toggler closed">»</a>
        <span class="title">
          <div>
            <span class="name indent-0">
              <a href="/ims_docs/watermangrp" class="">
                Docs
              </a>
            </span>
          </div>
        </span>
      </div>

        <ul>
            <li>
              <div>
                <span class="title">
                  <div>
                    <span class="name indent-1">
                     <a href="/ims_docs/watermangrp/categories" class="">&nbsp;Admin&nbsp;</a>
                    </span>
                  </div>
                </span>
              </div>
            </li>
        </ul>
    </li>
  </ul>
</div>
</section> -->




        <div class="grid-default grid-default--contents">

            <div class="grid-warpper">
                <!-- Main Section -->
                <main>
                    <div class="grid-default grid-default--contents bg-lightGray legal-reg">
                        <aside class="grid-default__aside">
                            <div>
                                <div class="aside-logo-box aside-bg-env">
                                    <div class="image-wrapper">
                                        <img src="" alt="" class="aside-img-env">
                                    </div>
                                </div>
                            </div>
                        </aside>




                        <div class="cell medium-auto grid-default__main full-width" id="main-content">
                            <main class="content-container">
                                <h1 class="page-title"></h1>
                                <h1 class="legal-reg__title">My Performance Dashboard</h1>
                                <h2 class="page-subtitle"></h2>

                                <div id="aspect_nav">
                                    <ul>
                                        <li class="button button--primary button-stack" id="my_dashboard"><a
                                                class="selected" href="/my_dashboard/watermangrp">My Dashboard</a></li>
                                        <li class="button button--primary button-stack" id="client_dashboard"><a
                                                href="/dashboard/watermangrp">Waterman Group</a></li>
                                    </ul>
                                </div>

                                <div class="auto-overlay-horiz-scrollbar">
                                    <div
                                        class="flex-container align-top small-flex-direction-column medium-flex-direction-column">
                                        <div class="flex-container flex-dir-column align-middle">
                                            <div id="outstanding-actions-44dc4b2a34bd2535a4d4951a4f34d0ae"><span
                                                    id="chartobject-1" class="fusioncharts-container"
                                                    style="position: relative; text-align: left; line-height: normal; display: inline-block; zoom: 1; vertical-align: middle; font-weight: normal; font-variant: normal; font-style: normal; text-decoration: none; padding: 0px; margin: 0px; border: none; direction: ltr; transform: none; width: 450px; height: 200px;"><svg
                                                        height="200" version="1.1" width="450"
                                                        xmlns="http://www.w3.org/2000/svg" id="raphael-paper-2"
                                                        style="overflow: hidden; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: default; vertical-align: middle; position: relative; left: -0.171875px; top: -0.4375px; background-color: rgb(255, 255, 255);">
                                                        <desc></desc>
                                                        <defs>
                                                            <clipPath id="rr-71C9B145-E8A8-42E2-982A-ADF8330A5D0E">
                                                                <rect x="15" y="51.599999999999994" width="420"
                                                                    height="133.4" transform="matrix(1,0,0,1,0,0)">
                                                                </rect>
                                                            </clipPath>
                                                            <clipPath id="rr-D2409FB2-71B4-48C2-8DA2-3BE632BBECA0">
                                                                <rect x="15" y="51.599999999999994" width="420"
                                                                    height="133.4" transform="matrix(1,0,0,1,0,0)">
                                                                </rect>
                                                            </clipPath>
                                                        </defs>
                                                        <g class="raphael-group-3-parentgroup">
                                                            <g class="raphael-group-4-background">
                                                                <rect x="0" y="0" width="450" height="200" stroke="none"
                                                                    fill-opacity="1" fill="#e8e8e8" ry="0" rx="0">
                                                                </rect>
                                                                <rect x="0" y="0" width="450" height="200"
                                                                    stroke="#767575" stroke-opacity="0.5"
                                                                    stroke-width="0" stroke-dasharray="none" fill="none"
                                                                    ry="0" rx="0"></rect>
                                                            </g>
                                                            <g class="raphael-group-25-canvas"></g>
                                                            <g class="raphael-group-6-belowplot"></g>
                                                            <g class="raphael-group-5-axisbottom"></g>
                                                            <g class="raphael-group-27-axisReferenceVisualsFloor"
                                                                clip-path="url('#rr-71C9B145-E8A8-42E2-982A-ADF8330A5D0E')">
                                                            </g>
                                                            <g class="raphael-group-26-axisReferenceVisualsBottom"></g>
                                                            <g class="raphael-group-28-crossline"></g>
                                                            <g class="raphael-group-29-crosslineBottom"></g>
                                                            <g class="raphael-group-32-axisReferenceVisualsMiddle"
                                                                clip-path="url('#rr-D2409FB2-71B4-48C2-8DA2-3BE632BBECA0')">
                                                            </g>
                                                            <g class="raphael-group-34-quadrant"></g>
                                                            <g class="raphael-group-7-plots">
                                                                <g class="raphael-group-36-column-shadow-group"></g>
                                                                <g class="raphael-group-37-column"></g>
                                                                <g class="raphael-group-38-area-shadow-group"></g>
                                                                <g class="raphael-group-39-area"></g>
                                                                <g class="raphael-group-40-line-shadow-group"></g>
                                                                <g class="raphael-group-41-line"></g>
                                                                <g class="raphael-group-42-default-shadow-group"></g>
                                                                <g class="raphael-group-43-default"></g>
                                                                <g class="raphael-group-44-bulb">
                                                                    <circle cx="225" cy="118.3" r="66.7"
                                                                        stroke-linecap="round" stroke="#4a7600"
                                                                        stroke-opacity="1" stroke-width="0"
                                                                        fill-opacity="1" fill="#6baa01"></circle>
                                                                </g>
                                                            </g>
                                                            <g class="raphael-group-8-scrollbar-container"></g>
                                                            <g class="raphael-group-9-axistop"></g>
                                                            <g
                                                                class="raphael-group-10-sumlabels fusioncharts-datalabels">
                                                            </g>
                                                            <g class="raphael-group-33-axisReferenceVisualsTop"></g>
                                                            <g class="raphael-group-35-axisReferenceVisualsCeil"></g>
                                                            <g class="raphael-group-11-datalabel"
                                                                font-family="Source Sans Pro" font-size="15px"
                                                                font-weight="bold" font-style="normal"
                                                                style="font-family: &quot;Source Sans Pro&quot;; font-size: 15px; font-weight: bold; font-style: normal;">
                                                                <g class="raphael-group-31-canvasdatalabel"></g>
                                                                <g class="raphael-group-46-datalabel"><text
                                                                        text-anchor="middle" x="225" fill-opacity="1"
                                                                        fill="#000000" stroke="none" y="121"
                                                                        style="text-anchor: middle;">0</text></g>
                                                            </g>
                                                            <g class="raphael-group-30-crosslineTop"></g>
                                                            <g class="raphael-group-12-aboveplot"></g>
                                                            <g class="raphael-group-13-caption"><text fill-opacity="1"
                                                                    fill="#5a5a5a" x="225" text-anchor="middle"
                                                                    stroke="none" y="31" font-family="Helvetica"
                                                                    font-size="18px" font-weight="bold"
                                                                    style="text-anchor: middle; font-family: Helvetica; font-size: 18px; font-weight: bold;">Number
                                                                    of Outstanding Actions</text></g>
                                                            <g class="raphael-group-14-chartdefault"></g>
                                                            <g class="raphael-group-15-chartdefault-shadow"></g>
                                                            <g class="raphael-group-16-tracker">
                                                                <g class="raphael-group-45-bulb-hot">
                                                                    <circle cx="225" cy="118.3" r="66.7"
                                                                        stroke="#c0c0c0" stroke-opacity="0.000001"
                                                                        stroke-width="undefined" fill-opacity="0.000001"
                                                                        fill="#c0c0c0"></circle>
                                                                </g>
                                                            </g>
                                                            <g class="raphael-group-17-logo"></g>
                                                            <g class="raphael-group-18-selectorGroup"></g>
                                                            <g class="raphael-group-19-toolbar-master">
                                                                <g class="raphael-group-23-toolbar">
                                                                    <rect fill-opacity="0" fill="#eeeeee"
                                                                        stroke="#eeeeee" stroke-opacity="0"
                                                                        stroke-width="1" width="0" height="0" x="440"
                                                                        y="6" ry="0" rx="0"></rect>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <rect x="0" y="0" width="10" height="30" ry="0" rx="0"
                                                            fill="none" stroke="#000000" style="display: none;"></rect>
                                                    </svg>
                                                    <div type="div"
                                                        style="left: auto; top: 0px; padding: 5px 3px; border: 1px solid rgb(100, 100, 100); margin: 0px; outline: none; position: absolute; z-index: 50; right: auto; overflow: hidden; background: rgb(255, 255, 255); box-shadow: rgb(153, 153, 153) 2px 2px 5px; display: none;">
                                                    </div>
                                                    <div class="fc__tooltip fusioncharts-div"
                                                        style="color: rgb(90, 90, 90); padding: 6px; font-size: 14px; overflow: hidden; border-width: 1px; border-color: rgb(225, 225, 225); white-space: nowrap; position: absolute; border-style: solid; background-color: rgb(255, 255, 255); user-select: none; top: 0px; left: 0px; visibility: hidden; pointer-events: none; box-shadow: none; border-radius: 2px; font-family: Helvetica;">
                                                    </div>
                                                </span></div>
                                            <script type="text/javascript">
                                            FusionCharts.ready(function() {
                                                var _fc_chart = new FusionCharts({
                                                    "width": "450",
                                                    "height": "200",
                                                    "type": "bulb",
                                                    "renderAt": "outstanding-actions-44dc4b2a34bd2535a4d4951a4f34d0ae",
                                                    "dataSource": {
                                                        "chart": {
                                                            "caption": "Number of Outstanding Actions",
                                                            "upperlimit": "0",
                                                            "lowerlimit": "25",
                                                            "usecolornameasvalue": "1",
                                                            "placevaluesinside": "1",
                                                            "valuefontsize": "15",
                                                            "plottooltext": "Data from H&S, Waterman Group, Environmental, and Climatespace, Responsibility:  Bob Smith Created by: Bob Smith V and V: Mark Nuckey and Guy Jeremiah",
                                                            "theme": "fusion",
                                                            "baseFont": "Helvetica",
                                                            "bgColor": "#e8e8e8"
                                                        },
                                                        "colorrange": {
                                                            "color": [{
                                                                "minvalue": "0",
                                                                "maxvalue": 2,
                                                                "label": "0",
                                                                "code": "#6baa01"
                                                            }, {
                                                                "minvalue": 2,
                                                                "maxvalue": 5,
                                                                "label": "0",
                                                                "code": "#f8bd19"
                                                            }, {
                                                                "minvalue": 5,
                                                                "maxvalue": 8,
                                                                "label": "0",
                                                                "code": "#e44a00"
                                                            }]
                                                        },
                                                        "value": 0
                                                    },
                                                    "dataSource": {
                                                        "chart": {
                                                            "caption": "Number of Outstanding Actions",
                                                            "upperlimit": "0",
                                                            "lowerlimit": "25",
                                                            "usecolornameasvalue": "1",
                                                            "placevaluesinside": "1",
                                                            "valuefontsize": "15",
                                                            "plottooltext": "Data from H&S, Waterman Group, Environmental, and Climatespace, Responsibility:  Bob Smith Created by: Bob Smith V and V: Mark Nuckey and Guy Jeremiah",
                                                            "theme": "fusion",
                                                            "baseFont": "Helvetica",
                                                            "bgColor": "#e8e8e8"
                                                        },
                                                        "colorrange": {
                                                            "color": [{
                                                                "minvalue": "0",
                                                                "maxvalue": 2,
                                                                "label": "0",
                                                                "code": "#6baa01"
                                                            }, {
                                                                "minvalue": 2,
                                                                "maxvalue": 5,
                                                                "label": "0",
                                                                "code": "#f8bd19"
                                                            }, {
                                                                "minvalue": 5,
                                                                "maxvalue": 8,
                                                                "label": "0",
                                                                "code": "#e44a00"
                                                            }]
                                                        },
                                                        "value": 0
                                                    }
                                                });

                                                _fc_chart.render();
                                            });
                                            </script>

                                        </div>
                                        <div class="flex-container flex-dir-column align-middle">
                                            <div id="due-actions-19bcd3d5c8f42875971268671cd2cdff"><span
                                                    id="chartobject-2" class="fusioncharts-container"
                                                    style="position: relative; text-align: left; line-height: normal; display: inline-block; zoom: 1; vertical-align: middle; font-weight: normal; font-variant: normal; font-style: normal; text-decoration: none; padding: 0px; margin: 0px; border: none; direction: ltr; transform: none; width: 450px; height: 200px;"><svg
                                                        height="200" version="1.1" width="450"
                                                        xmlns="http://www.w3.org/2000/svg" id="raphael-paper-50"
                                                        style="overflow: hidden; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); user-select: none; cursor: default; vertical-align: middle; position: relative; left: -0.171875px; top: -0.4375px; background-color: rgb(255, 255, 255);">
                                                        <desc></desc>
                                                        <defs>
                                                            <clipPath id="rr-CFAE879F-8CF8-4B13-B977-D5757612D7F0">
                                                                <rect x="15" y="46.599999999999994" width="420"
                                                                    height="143.4" transform="matrix(1,0,0,1,0,0)">
                                                                </rect>
                                                            </clipPath>
                                                            <clipPath id="rr-5979635C-95CF-4FD7-9E68-A6305B4B088E">
                                                                <rect x="15" y="46.599999999999994" width="420"
                                                                    height="143.4" transform="matrix(1,0,0,1,0,0)">
                                                                </rect>
                                                            </clipPath>
                                                        </defs>
                                                        <g class="raphael-group-51-parentgroup">
                                                            <g class="raphael-group-52-background">
                                                                <rect x="0" y="0" width="450" height="200" stroke="none"
                                                                    fill-opacity="1" fill="#e8e8e8" ry="0" rx="0">
                                                                </rect>
                                                                <rect x="0" y="0" width="450" height="200"
                                                                    stroke="#767575" stroke-opacity="0.5"
                                                                    stroke-width="0" stroke-dasharray="none" fill="none"
                                                                    ry="0" rx="0"></rect>
                                                            </g>
                                                            <g class="raphael-group-73-canvas"></g>
                                                            <g class="raphael-group-54-belowplot"></g>
                                                            <g class="raphael-group-53-axisbottom">
                                                                <g class="raphael-group-92-dataset-Trend-group-bottom">
                                                                    <g
                                                                        class="raphael-group-99-dataset-axis-trend-bottom">
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g class="raphael-group-75-axisReferenceVisualsFloor"
                                                                clip-path="url('#rr-CFAE879F-8CF8-4B13-B977-D5757612D7F0')">
                                                            </g>
                                                            <g class="raphael-group-74-axisReferenceVisualsBottom"></g>
                                                            <g class="raphael-group-76-crossline"></g>
                                                            <g class="raphael-group-77-crosslineBottom"></g>
                                                            <g class="raphael-group-80-axisReferenceVisualsMiddle"
                                                                clip-path="url('#rr-5979635C-95CF-4FD7-9E68-A6305B4B088E')">
                                                            </g>
                                                            <g class="raphael-group-82-quadrant"></g>
                                                            <g class="raphael-group-55-plots">
                                                                <g class="raphael-group-84-column-shadow-group"></g>
                                                                <g class="raphael-group-85-column"></g>
                                                                <g class="raphael-group-86-area-shadow-group"></g>
                                                                <g class="raphael-group-87-area"></g>
                                                                <g class="raphael-group-88-line-shadow-group"></g>
                                                                <g class="raphael-group-89-line"></g>
                                                                <g class="raphael-group-90-default-shadow-group"></g>
                                                                <g class="raphael-group-91-default"></g>
                                                                <g class="raphael-group-111-bandGroup">
                                                                    <path
                                                                        d="M142.2,166.2A82.80000000000001,82.80000000000001,0,0,1,166.45155851775385,107.65155851775384L184.0160909624277,125.2160909624277A57.96,57.96,0,0,0,167.04,166.2Z"
                                                                        fill="#6baa01" stroke="#558800"
                                                                        stroke-linecap="round" fill-opacity="1"
                                                                        stroke-width="0" stroke-opacity="1"></path>
                                                                    <path
                                                                        d="M166.45155851775385,107.65155851775384A82.80000000000001,82.80000000000001,0,0,1,256.6861881998295,89.70277470806545L247.18033173988061,112.65194229564582A57.96,57.96,0,0,0,184.0160909624277,125.2160909624277Z"
                                                                        fill="#f8bd19" stroke="#c69714"
                                                                        stroke-linecap="round" fill-opacity="1"
                                                                        stroke-width="0" stroke-opacity="1"></path>
                                                                    <path
                                                                        d="M256.6861881998295,89.70277470806545A82.80000000000001,82.80000000000001,0,0,1,307.8,166.19999999999996L282.96,166.2A57.96,57.96,0,0,0,247.18033173988061,112.65194229564582Z"
                                                                        fill="#e44a00" stroke="#b63b00"
                                                                        stroke-linecap="round" fill-opacity="1"
                                                                        stroke-width="0" stroke-opacity="1"></path>
                                                                </g>
                                                            </g>
                                                            <g class="raphael-group-56-scrollbar-container"></g>
                                                            <g class="raphael-group-57-axistop">
                                                                <g class="raphael-group-93-axis-Line-group">
                                                                    <g class="raphael-group-97-axis-line-tick">
                                                                        <path stroke="#333333" stroke-opacity="1"
                                                                            stroke-width="1" stroke-linecap="round"
                                                                            d="M142.2 166.2L150.2 166.2" fill="none">
                                                                        </path>
                                                                        <path stroke="#333333" stroke-opacity="1"
                                                                            stroke-width="1" stroke-linecap="round"
                                                                            d="M166.45155851775385 107.65155851775384L172.10841276724622 113.30841276724624"
                                                                            fill="none"></path>
                                                                        <path stroke="#333333" stroke-opacity="1"
                                                                            stroke-width="1" stroke-linecap="round"
                                                                            d="M224.99999999999997 83.39999999999998L225 91.39999999999998"
                                                                            fill="none"></path>
                                                                        <path stroke="#333333" stroke-opacity="1"
                                                                            stroke-width="1" stroke-linecap="round"
                                                                            d="M283.5484414822461 107.65155851775384L277.89158723275375 113.30841276724621"
                                                                            fill="none"></path>
                                                                        <path stroke="#333333" stroke-opacity="1"
                                                                            stroke-width="1" stroke-linecap="round"
                                                                            d="M307.8 166.19999999999996L299.8 166.19999999999996"
                                                                            fill="none"></path>
                                                                    </g>
                                                                </g>
                                                                <g class="raphael-group-94-dataset-Trend-group-top">
                                                                    <g class="raphael-group-98-dataset-axis-trend-top">
                                                                    </g>
                                                                    <g
                                                                        class="raphael-group-100-dataset-axis-trend-label">
                                                                    </g>
                                                                </g>
                                                                <g class="raphael-group-95-dataset-Label-group">
                                                                    <g class="raphael-group-96-dataset-top-label"
                                                                        transform="matrix(1,0,0,1,0,0)"
                                                                        font-family="Helvetica" font-size="14px"
                                                                        font-weight="normal" font-style="normal"
                                                                        style="font-family: Helvetica; font-size: 14px; font-weight: normal; font-style: normal;">
                                                                        <text fill-opacity="1" fill="#5a5a5a"
                                                                            x="126.19999999999999" text-anchor="end"
                                                                            stroke="none" y="170"
                                                                            style="text-anchor: end;">0</text><text
                                                                            fill-opacity="1" fill="#5a5a5a"
                                                                            x="155.1378500187691" text-anchor="end"
                                                                            stroke="none" y="101"
                                                                            style="text-anchor: end;">2</text><text
                                                                            fill-opacity="1" fill="#5a5a5a"
                                                                            x="224.99999999999997" text-anchor="middle"
                                                                            stroke="none" y="72"
                                                                            style="text-anchor: middle;">4</text><text
                                                                            fill-opacity="1" fill="#5a5a5a"
                                                                            x="294.8621499812309" text-anchor="start"
                                                                            stroke="none" y="101"
                                                                            style="text-anchor: start;">6</text><text
                                                                            fill-opacity="1" fill="#5a5a5a" x="323.8"
                                                                            text-anchor="start" stroke="none" y="170"
                                                                            style="text-anchor: start;">8</text></g>
                                                                </g>
                                                            </g>
                                                            <g
                                                                class="raphael-group-58-sumlabels fusioncharts-datalabels">
                                                            </g>
                                                            <g class="raphael-group-81-axisReferenceVisualsTop"></g>
                                                            <g class="raphael-group-83-axisReferenceVisualsCeil"></g>
                                                            <g class="raphael-group-59-datalabel"
                                                                font-family="Source Sans Pro" font-size="14px"
                                                                font-weight="bold" font-style="normal"
                                                                style="font-family: &quot;Source Sans Pro&quot;; font-size: 14px; font-weight: bold; font-style: normal;">
                                                                <g class="raphael-group-79-canvasdatalabel"></g>
                                                                <g class="raphael-group-112-pointGroup"
                                                                    transform="matrix(1,0,0,1,225,166.2)">
                                                                    <path
                                                                        transform="matrix(-0.3827,-0.9239,0.9239,-0.3827,0,0)"
                                                                        d="M0,0" fill="none" stroke="#000000"
                                                                        stroke-linecap="round"></path>
                                                                    <path d="M70.38000000000001,0L0,4,0,-4Z"
                                                                        fill="#000000" stroke="#999999"
                                                                        stroke-linecap="round"
                                                                        transform="matrix(-0.3827,-0.9239,0.9239,-0.3827,0,0)"
                                                                        fill-opacity="1" stroke-opacity="1"
                                                                        stroke-width="0" style="cursor: default;">
                                                                    </path>
                                                                </g>
                                                                <circle cx="225" cy="166.2" r="5" fill-opacity="1"
                                                                    fill="#000000" stroke-width="1" stroke="#ffffff"
                                                                    stroke-opacity="1"></circle><text
                                                                    font-family="Source Sans Pro" font-size="14px"
                                                                    font-weight="normal" font-style="normal" x="225"
                                                                    fill-opacity="1" fill="#000000" stroke="none"
                                                                    text-anchor="middle" y="185"
                                                                    style="font-family: &quot;Source Sans Pro&quot;; font-size: 14px; font-weight: normal; font-style: normal; text-anchor: middle;">3</text>
                                                            </g>
                                                            <g class="raphael-group-78-crosslineTop"></g>
                                                            <g class="raphael-group-60-aboveplot"></g>
                                                            <g class="raphael-group-61-caption"><text fill-opacity="1"
                                                                    fill="#5a5a5a" x="225" text-anchor="middle"
                                                                    stroke="none" y="26" font-family="Helvetica"
                                                                    font-size="18px" font-weight="bold"
                                                                    style="text-anchor: middle; font-family: Helvetica; font-size: 18px; font-weight: bold;">Number
                                                                    of Due Actions</text></g>
                                                            <g class="raphael-group-62-chartdefault"></g>
                                                            <g class="raphael-group-63-chartdefault-shadow"></g>
                                                            <g class="raphael-group-64-tracker"></g>
                                                            <g class="raphael-group-65-logo"></g>
                                                            <g class="raphael-group-66-selectorGroup"></g>
                                                            <g class="raphael-group-67-toolbar-master">
                                                                <g class="raphael-group-71-toolbar">
                                                                    <rect fill-opacity="0" fill="#eeeeee"
                                                                        stroke="#eeeeee" stroke-opacity="0"
                                                                        stroke-width="1" width="0" height="0" x="440"
                                                                        y="6" ry="0" rx="0"></rect>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <rect x="0" y="0" width="10" height="30" ry="0" rx="0"
                                                            fill="none" stroke="#000000" style="display: none;"></rect>
                                                    </svg>
                                                    <div type="div"
                                                        style="left: auto; top: 0px; padding: 5px 3px; border: 1px solid rgb(100, 100, 100); margin: 0px; outline: none; position: absolute; z-index: 50; right: auto; overflow: hidden; background: rgb(255, 255, 255); box-shadow: rgb(153, 153, 153) 2px 2px 5px; display: none;">
                                                    </div>
                                                    <div class="fc__tooltip fusioncharts-div"
                                                        style="color: rgb(90, 90, 90); padding: 6px; font-size: 14px; overflow: hidden; border-width: 1px; border-color: rgb(225, 225, 225); white-space: nowrap; position: absolute; border-style: solid; background-color: rgb(255, 255, 255); user-select: none; top: 0px; left: 0px; visibility: hidden; pointer-events: none; box-shadow: none; border-radius: 2px; font-family: Helvetica;">
                                                    </div>
                                                </span></div>
                                            <script type="text/javascript">
                                            FusionCharts.ready(function() {
                                                var _fc_chart = new FusionCharts({
                                                    "width": "450",
                                                    "height": "200",
                                                    "type": "angulargauge",
                                                    "renderAt": "due-actions-19bcd3d5c8f42875971268671cd2cdff",
                                                    "dataSource": {
                                                        "chart": {
                                                            "caption": "Number of Due Actions",
                                                            "subcaption": "",
                                                            "lowerlimit": "0",
                                                            "upperlimit": 8,
                                                            "showvalue": "1",
                                                            "numbersuffix": "",
                                                            "numberprefix": "",
                                                            "theme": "fusion",
                                                            "bgColor": "#e8e8e8",
                                                            "baseFont": "Helvetica"
                                                        },
                                                        "colorrange": {
                                                            "color": [{
                                                                "minvalue": "0",
                                                                "maxvalue": 2,
                                                                "code": "#6baa01"
                                                            }, {
                                                                "minvalue": 2,
                                                                "maxvalue": 5,
                                                                "code": "#f8bd19"
                                                            }, {
                                                                "minvalue": 5,
                                                                "maxvalue": 8,
                                                                "code": "#e44a00"
                                                            }]
                                                        },
                                                        "dials": {
                                                            "dial": [{
                                                                "value": 3,
                                                                "tooltext": "Data from H&S, Waterman Group, Environmental, and Climatespace, Responsibility:  Bob Smith Created by: Bob Smith V and V: Mark Nuckey and Guy Jeremiah"
                                                            }]
                                                        }
                                                    },
                                                    "dataSource": {
                                                        "chart": {
                                                            "caption": "Number of Due Actions",
                                                            "subcaption": "",
                                                            "lowerlimit": "0",
                                                            "upperlimit": 8,
                                                            "showvalue": "1",
                                                            "numbersuffix": "",
                                                            "numberprefix": "",
                                                            "theme": "fusion",
                                                            "bgColor": "#e8e8e8",
                                                            "baseFont": "Helvetica"
                                                        },
                                                        "colorrange": {
                                                            "color": [{
                                                                "minvalue": "0",
                                                                "maxvalue": 2,
                                                                "code": "#6baa01"
                                                            }, {
                                                                "minvalue": 2,
                                                                "maxvalue": 5,
                                                                "code": "#f8bd19"
                                                            }, {
                                                                "minvalue": 5,
                                                                "maxvalue": 8,
                                                                "code": "#e44a00"
                                                            }]
                                                        },
                                                        "dials": {
                                                            "dial": [{
                                                                "value": 3,
                                                                "tooltext": "Data from H&S, Waterman Group, Environmental, and Climatespace, Responsibility:  Bob Smith Created by: Bob Smith V and V: Mark Nuckey and Guy Jeremiah"
                                                            }]
                                                        }
                                                    }
                                                });

                                                _fc_chart.render();
                                            });
                                            </script>

                                        </div>
                                    </div>
                                </div>

                            </main>
                        </div>
                    </div>
                </main>
            </div>

        </div>




        <footer class="footer">
            <div class="footer_image flex-container align-middle align-center flex-wrap">
                <img alt="Waterman" class="footer_image__waterman"
                    src="../assets/waterman_logo-7ee8a096fed1be8b185aa78b45dba1e8113980450621fbeb4e9dec2569bfb0a9.png">
                <img alt="Greenspace"
                    src="../assets/footer-logo-2-e432795cbe97f2f8c66d3fef26454420fcd20cbad28bb867e11826911402d2ae.svg">
            </div>
        </footer>

</header>