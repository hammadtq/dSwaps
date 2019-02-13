var KDemoPanel = function() {
    var demoPanel = KUtil.getByID('k_demo_panel');
    var offcanvas;

    var init = function() {
        offcanvas = new KOffcanvas(demoPanel, {
            overlay: true,  
            baseClass: 'k-demo-panel',
            closeBy: 'k_demo_panel_close',
            toggleBy: 'k_demo_panel_toggle'
        }); 

        var head = KUtil.find(demoPanel, '.k-demo-panel__head');
        var body = KUtil.find(demoPanel, '.k-demo-panel__body');

        KUtil.scrollInit(body, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                var height = parseInt(KUtil.getViewPort().height);
               
                if (head) {
                    height = height - parseInt(KUtil.actualHeight(head));
                    height = height - parseInt(KUtil.css(head, 'marginBottom'));
                }
        
                height = height - parseInt(KUtil.css(demoPanel, 'paddingTop'));
                height = height - parseInt(KUtil.css(demoPanel, 'paddingBottom'));    

                return height;
            }
        });

        if (typeof offcanvas !== 'undefined') {
            offcanvas.on('hide', function() {
                alert(1);
                var expires = new Date(new Date().getTime() + 60 * 60 * 1000); // expire in 60 minutes from now
                Cookies.set('k_demo_panel_shown', 1, { expires: expires });
            });
        }
    }

    var remind = function() {
        if (!(encodeURI(window.location.hostname) == 'keenthemes.com' || encodeURI(window.location.hostname) == 'www.keenthemes.com')) {
            return;
        }

        setTimeout(function() {
            if (!Cookies.get('k_demo_panel_shown')) {
                var expires = new Date(new Date().getTime() + 15 * 60 * 1000); // expire in 15 minutes from now
                Cookies.set('k_demo_panel_shown', 1, { expires: expires });
                offcanvas.show();
            } 
        }, 4000);
    }

    return {     
        init: function() {  
            init(); 
            remind();
        }
    };
}();

$(document).ready(function() {
    KDemoPanel.init();
});
// Class definition
var KLib = function() {

    return {
        initMiniChart: function(src, data, color, border, fill, tooltip) {
            if (src.length == 0) {
                return;
            }

            // set default values
            fill = (typeof fill !== 'undefined') ? fill : false;
            tooltip = (typeof tooltip !== 'undefined') ? tooltip : false;

            var config = {
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                    datasets: [{
                        label: "",
                        borderColor: color,
                        borderWidth: border,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 4,
                        pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                        pointHoverBackgroundColor: KApp.getStateColor('brand'),
                        pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                        fill: fill,
                        backgroundColor: color,
                        data: data,
                    }]
                },
                options: {
                    title: {
                        display: false,
                    },
                    tooltips: (tooltip ? {
                        enabled: true,
                        intersect: false,
                        mode: 'nearest',
                        bodySpacing: 5,
                        yPadding: 10,
                        xPadding: 10, 
                        caretPadding: 0,
                        displayColors: false,
                        backgroundColor: KApp.getStateColor('brand'),
                        titleFontColor: '#ffffff', 
                        cornerRadius: 4,
                        footerSpacing: 0,
                        titleSpacing: 0
                    } : false),
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: false
                        }
                    },
                    responsive: false,
                    maintainAspectRatio: true,
                    hover: {
                        mode: 'index'
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            gridLines: false,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            }
                        }]
                    },

                    elements: {
                        line: {
                            tension: 0.5
                        },
                        point: {
                            radius: 2,
                            borderWidth: 4
                        },
                    },

                    layout: {
                        padding: {
                            left: 6,
                            right: 0,
                            top: 4,
                            bottom: 0
                        }
                    }
                }
            };

            var chart = new Chart(src, config);
        },

        initMediumChart: function(src, data, max, color, border) {
            if (!document.getElementById(src)) {
                return;
            }

            var border = border ? border : 2;

            // Main chart
            var ctx = document.getElementById(src).getContext("2d");

            var gradient = ctx.createLinearGradient(0, 0, 0, 100);
            gradient.addColorStop(0, Chart.helpers.color(color).alpha(0.3).rgbString());
            gradient.addColorStop(1, Chart.helpers.color(color).alpha(0).rgbString());

            var mainConfig = {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
                    datasets: [{
                        label: 'Orders',
                        borderColor: color,
                        borderWidth: border,
                        backgroundColor: gradient,
                        pointBackgroundColor: KApp.getStateColor('brand'),
                        data: data,
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    title: {
                        display: false,
                        text: 'Stacked Area'
                    },
                    tooltips: {
                        enabled: true,
                        intersect: false,
                        mode: 'nearest',
                        bodySpacing: 5,
                        yPadding: 10,
                        xPadding: 10, 
                        caretPadding: 0,
                        displayColors: false,
                        backgroundColor: KApp.getStateColor('brand'),
                        titleFontColor: '#ffffff', 
                        cornerRadius: 4,
                        footerSpacing: 0,
                        titleSpacing: 0
                    },
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: false
                        }
                    },
                    hover: {
                        mode: 'index'
                    },
                    scales: {
                        xAxes: [{
                            display: false,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month'
                            },
                            ticks: {
                                display: false,
                                beginAtZero: true,
                            }
                        }],
                        yAxes: [{
                            display: false,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value'
                            },
                            gridLines: {
                                color: '#eef2f9',
                                drawBorder: false,
                                offsetGridLines: true,
                                drawTicks: false
                            },
                            ticks: {
                                max: max,
                                display: false,
                                beginAtZero: true
                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 0,
                            borderWidth: 0,
                            hoverRadius: 0,
                            hoverBorderWidth: 0
                        }
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    }
                }
            };

            var chart = new Chart(ctx, mainConfig);

            // Update chart on window resize
            KUtil.addResizeHandler(function() {
                chart.update();
            });
        }
    };
}();
var KOffcanvasPanel = function() {
    var notificationPanel = KUtil.get('k_offcanvas_toolbar_notifications');
    var quickActionsPanel = KUtil.get('k_offcanvas_toolbar_quick_actions');
    var profilePanel = KUtil.get('k_offcanvas_toolbar_profile');
    var searchPanel = KUtil.get('k_offcanvas_toolbar_search');

    var initNotifications = function() {
        var head = KUtil.find(notificationPanel, '.k-offcanvas-panel__head');
        var body = KUtil.find(notificationPanel, '.k-offcanvas-panel__body');

        var offcanvas = new KOffcanvas(notificationPanel, {
            overlay: true,  
            baseClass: 'k-offcanvas-panel',
            closeBy: 'k_offcanvas_toolbar_notifications_close',
            toggleBy: 'k_offcanvas_toolbar_notifications_toggler_btn'
        }); 

        KUtil.scrollInit(body, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                var height = parseInt(KUtil.getViewPort().height);
               
                if (head) {
                    height = height - parseInt(KUtil.actualHeight(head));
                    height = height - parseInt(KUtil.css(head, 'marginBottom'));
                }
        
                height = height - parseInt(KUtil.css(notificationPanel, 'paddingTop'));
                height = height - parseInt(KUtil.css(notificationPanel, 'paddingBottom'));    

                return height;
            }
        });
    }

    var initQucikActions = function() {
        var head = KUtil.find(quickActionsPanel, '.k-offcanvas-panel__head');
        var body = KUtil.find(quickActionsPanel, '.k-offcanvas-panel__body');

        var offcanvas = new KOffcanvas(quickActionsPanel, {
            overlay: true,  
            baseClass: 'k-offcanvas-panel',
            closeBy: 'k_offcanvas_toolbar_quick_actions_close',
            toggleBy: 'k_offcanvas_toolbar_quick_actions_toggler_btn'
        }); 

        KUtil.scrollInit(body, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                var height = parseInt(KUtil.getViewPort().height);
               
                if (head) {
                    height = height - parseInt(KUtil.actualHeight(head));
                    height = height - parseInt(KUtil.css(head, 'marginBottom'));
                }
        
                height = height - parseInt(KUtil.css(quickActionsPanel, 'paddingTop'));
                height = height - parseInt(KUtil.css(quickActionsPanel, 'paddingBottom'));    

                return height;
            }
        });
    }

    var initProfile = function() {
        var head = KUtil.find(profilePanel, '.k-offcanvas-panel__head');
        var body = KUtil.find(profilePanel, '.k-offcanvas-panel__body');

        var offcanvas = new KOffcanvas(profilePanel, {
            overlay: true,  
            baseClass: 'k-offcanvas-panel',
            closeBy: 'k_offcanvas_toolbar_profile_close',
            toggleBy: 'k_offcanvas_toolbar_profile_toggler_btn'
        }); 

        KUtil.scrollInit(body, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                var height = parseInt(KUtil.getViewPort().height);
               
                if (head) {
                    height = height - parseInt(KUtil.actualHeight(head));
                    height = height - parseInt(KUtil.css(head, 'marginBottom'));
                }
        
                height = height - parseInt(KUtil.css(profilePanel, 'paddingTop'));
                height = height - parseInt(KUtil.css(profilePanel, 'paddingBottom'));    

                return height;
            }
        });
    }

    var initSearch = function() {
        var head = KUtil.find(searchPanel, '.k-offcanvas-panel__head');
        var body = KUtil.find(searchPanel, '.k-offcanvas-panel__body');
        var search = KUtil.get('k_quick_search_offcanvas');
        var form = KUtil.find(search, '.k-quick-search__form');
        var wrapper = KUtil.find(search, '.k-quick-search__wrapper');

        var offcanvas = new KOffcanvas(searchPanel, {
            overlay: true,  
            baseClass: 'k-offcanvas-panel',
            closeBy: 'k_offcanvas_toolbar_search_close',
            toggleBy: 'k_offcanvas_toolbar_search_toggler_btn'
        }); 

        KUtil.scrollInit(wrapper, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                var height = parseInt(KUtil.getViewPort().height);

                height = height - parseInt(KUtil.actualHeight(form));
                height = height - parseInt(KUtil.css(form, 'marginBottom'));

                if (head) {
                    height = height - parseInt(KUtil.actualHeight(head));
                    height = height - parseInt(KUtil.css(head, 'marginBottom'));
                }
        
                height = height - parseInt(KUtil.css(searchPanel, 'paddingTop'));
                height = height - parseInt(KUtil.css(searchPanel, 'paddingBottom'));    

                return height;
            }
        });
    }

    return {     
        init: function() {  
            initNotifications(); 
            initQucikActions();
            initProfile();
            initSearch();
        }
    };
}();

$(document).ready(function() {
    KOffcanvasPanel.init();
});
var KQuickPanel = function() {
    var panel = KUtil.get('k_quick_panel');
    var notificationPanel = KUtil.get('k_quick_panel_tab_notifications');
    var actionsPanel = KUtil.get('k_quick_panel_tab_actions');
    var settingsPanel = KUtil.get('k_quick_panel_tab_settings');

    var getContentHeight = function() {
        var height;
        var nav = KUtil.find(panel, '.k-offcanvas-panel__nav');
        var content = KUtil.find(panel, '.k-offcanvas-panel__body');

        height = parseInt(KUtil.getViewPort().height) - 
                 parseInt(KUtil.actualHeight(nav)) - 
                 parseInt(KUtil.css(nav, 'margin-bottom')) -
                 (2 * parseInt(KUtil.css(nav, 'padding-top'))) - 
                 10;

        return height;
    }

    var initOffcanvas = function() {
        var offcanvas = new KOffcanvas(panel, {
            overlay: true,  
            baseClass: 'k-offcanvas-panel',
            closeBy: 'k_quick_panel_close_btn',
            toggleBy: 'k_quick_panel_toggler_btn'
        });   
    }

    var initNotifications = function() {
        KUtil.scrollInit(notificationPanel, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                return getContentHeight();
            }
        });
    }

    var initActions = function() {
        KUtil.scrollInit(actionsPanel, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                return getContentHeight();
            }
        });
    }

    var initSettings = function() {
        KUtil.scrollInit(settingsPanel, {
            disableForMobile: true, 
            resetHeightOnDestroy: true, 
            handleWindowResize: true, 
            height: function() {
                return getContentHeight();
            }
        });
    }

    var updatePerfectScrollbars = function() {
        $(panel).find('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { 
            KUtil.scrollUpdate(notificationPanel);
            KUtil.scrollUpdate(actionsPanel);
            KUtil.scrollUpdate(settingsPanel);
        });
    }

    return {     
        init: function() {  
            initOffcanvas(); 
            initNotifications();
            initActions();
            initSettings();
            updatePerfectScrollbars();
        }
    };
}();

$(document).ready(function() {
    KQuickPanel.init();
});
"use strict";

var KQuickSearch = function() {
    var target;
    var form;
    var input;
    var closeIcon;
    var resultWrapper;
    var resultDropdown;
    var resultDropdownToggle;
    var inputGroup;
    var query = '';

    var hasResult = false; 
    var timeout = false; 
    var isProcessing = false;
    var requestTimeout = 200; // ajax request fire timeout in milliseconds 
    var spinnerClass = 'k-spinner k-spinner--input k-spinner--sm k-spinner--brand k-spinner--right';
    var resultClass = 'k-quick-search--has-result';
    var minLength = 2;

    var showProgress = function() {
        isProcessing = true;
        KUtil.addClass(inputGroup, spinnerClass); 

        if (closeIcon) {
            KUtil.hide(closeIcon);
        }       
    }

    var hideProgress = function() {
        isProcessing = false;
        KUtil.removeClass(inputGroup, spinnerClass);

        if (closeIcon) {
            if (input.value.length < minLength) {
                KUtil.hide(closeIcon);
            } else {
                KUtil.show(closeIcon, 'flex');
            }            
        }
    }

    var showDropdown = function() {
        if (resultDropdownToggle && !KUtil.hasClass(resultDropdown, 'show')) {
            $(resultDropdownToggle).dropdown('toggle');
            $(resultDropdownToggle).dropdown('update'); 
        }
    }

    var hideDropdown = function() {
        if (resultDropdownToggle && KUtil.hasClass(resultDropdown, 'show')) {
            $(resultDropdownToggle).dropdown('toggle');
        }
    }

    var processSearch = function() {
        if (hasResult && query === input.value) {  
            hideProgress();
            KUtil.addClass(target, resultClass);
            showDropdown();
            KUtil.scrollUpdate(resultWrapper);

            return;
        }

        query = input.value;

        KUtil.removeClass(target, resultClass);
        showProgress();
        hideDropdown();
        
        setTimeout(function() {
            $.ajax({
                url: 'https://keenthemes.com/keen/themes/themes/keen/dist/preview/inc/api/quick_search.php',
                data: {
                    query: query
                },
                dataType: 'html',
                success: function(res) {
                    hasResult = true;
                    hideProgress();
                    KUtil.addClass(target, resultClass);
                    KUtil.setHTML(resultWrapper, res);
                    showDropdown();
                    KUtil.scrollUpdate(resultWrapper);
                },
                error: function(res) {
                    hasResult = false;
                    hideProgress();
                    KUtil.addClass(target, resultClass);
                    KUtil.setHTML(resultWrapper, '<span class="k-quick-search__message">Connection error. Pleae try again later.</div>');
                    showDropdown();
                    KUtil.scrollUpdate(resultWrapper);
                }
            });
        }, 1000);       
    }

    var handleCancel = function(e) {
        input.value = '';
        query = '';
        hasResult = false;
        KUtil.hide(closeIcon);
        KUtil.removeClass(target, resultClass);
        hideDropdown();
    }

    var handleSearch = function() {
        if (input.value.length < minLength) {
            hideProgress();
            hideDropdown();

            return;
        }

        if (isProcessing == true) {
            return;
        }

        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function() {
            processSearch();
        }, requestTimeout);     
    }

    return {     
        init: function(element) { 
            // Init
            target = element;
            form = KUtil.find(target, '.k-quick-search__form');
            input = KUtil.find(target, '.k-quick-search__input');
            closeIcon = KUtil.find(target, '.k-quick-search__close');
            resultWrapper = KUtil.find(target, '.k-quick-search__wrapper');
            resultDropdown = KUtil.find(target, '.dropdown-menu'); 
            resultDropdownToggle = KUtil.find(target, '[data-toggle="dropdown"]');
            inputGroup = KUtil.find(target, '.input-group');           

            // Attach input keyup handler
            KUtil.addEvent(input, 'keyup', handleSearch);
            KUtil.addEvent(input, 'focus', handleSearch);

            // Prevent enter click
            form.onkeypress = function(e) {
                var key = e.charCode || e.keyCode || 0;     
                if (key == 13) {
                    e.preventDefault();
                }
            }
           
            KUtil.addEvent(closeIcon, 'click', handleCancel);     
        }
    };
};

var KQuickSearchMobile = KQuickSearch;

$(document).ready(function() {
    if (KUtil.get('k_quick_search_dropdown')) {
        KQuickSearch().init(KUtil.get('k_quick_search_dropdown'));
    }

    if (KUtil.get('k_quick_search_inline')) {
        KQuickSearchMobile().init(KUtil.get('k_quick_search_inline'));
    }

    if (KUtil.get('k_quick_search_offcanvas')) {
        KQuickSearchMobile().init(KUtil.get('k_quick_search_offcanvas'));
    }
});