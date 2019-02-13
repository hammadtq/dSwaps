"use strict";
var KLayout = function() {
    var body;

    var header;
    var headerMenu;
    var headerMenuOffcanvas;
    var mobileHeaderTopbarToggle;

    var asideMenu;
    var asideMenuOffcanvas;

    var scrollTop;

    var pageStickyPortlet;

    // Header
    var initHeader = function() {
        var tmp;
        var headerEl = KUtil.get('k_header');
        var options = {
            classic: {
                desktop: true,
                mobile: false
            },
            offset: {},
            minimize: {}
        };

        options.minimize.mobile = false;

        if (KUtil.attr(headerEl, 'data-kheader-minimize') == 'on') {
            options.minimize.desktop = {};
            options.minimize.desktop.on = 'k-header--minimize';
            options.offset.desktop = parseInt(KUtil.css(headerEl, 'height')) - 10;
        } else {
            options.minimize.desktop = false;
        }

        header = new KHeader('k_header', options);

        if (asideMenu) {
            header.on('minimizeOn', function() {
                asideMenu.scrollReInit();
            });

            header.on('minimizeOff', function() {
                asideMenu.scrollReInit();
            });
        }        
    }

    // Header Menu
    var initHeaderMenu = function() {
        // init aside left offcanvas
        headerMenuOffcanvas = new KOffcanvas('k_header_menu_wrapper', {
            overlay: true,
            baseClass: 'k-header-menu-wrapper',
            closeBy: 'k_header_menu_mobile_close_btn',
            toggleBy: {
                target: 'k_header_mobile_toggler',
                state: 'k-header-mobile__toolbar-toggler--active'
            }
        });

        headerMenu = new KMenu('k_header_menu', {
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            accordion: {
                slideSpeed: 200, // accordion toggle slide speed in milliseconds
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        });
    }

    // Header Topbar
    var initHeaderTopbar = function() {
        mobileHeaderTopbarToggle = new KToggle('k_header_mobile_topbar_toggler', {
            target: 'body',
            targetState: 'k-header__topbar--mobile-on',
            togglerState: 'k-header-mobile__toolbar-topbar-toggler--active'
        });
    }

    // Aside
    var initAside = function() {
        // init aside left offcanvas
        var asidBrandHover = false;
        var aside = KUtil.get('k_aside');
        var asideBrand = KUtil.get('k_aside_brand');
        var asideOffcanvasClass = KUtil.hasClass(aside, 'k-aside--offcanvas-default') ? 'k-aside--offcanvas-default' : 'k-aside';

        asideMenuOffcanvas = new KOffcanvas('k_aside', {
            baseClass: asideOffcanvasClass,
            overlay: true,
            closeBy: 'k_aside_close_btn',
            toggleBy: {
                target: 'k_aside_mobile_toggler',
                state: 'k-header-mobile__toolbar-toggler--active'
            }
        });

        // Handle minimzied aside hover
        if (KUtil.hasClass(body, 'k-aside--fixed')) {
            var insideTm;
            var outsideTm;

            KUtil.addEvent(aside, 'mouseenter', function(e) {
                e.preventDefault();

                if (KUtil.isInResponsiveRange('desktop') === false) {
                    return;
                }

                if (outsideTm) {
                    clearTimeout(outsideTm);
                    outsideTm = null;
                }

                insideTm = setTimeout(function() {
                    if (KUtil.hasClass(body, 'k-aside--minimize') && KUtil.isInResponsiveRange('desktop')) {
                        KUtil.removeClass(body, 'k-aside--minimize');
                        
                        // Minimizing class
                        KUtil.addClass(body, 'k-aside--minimizing');
                        KUtil.transitionEnd(body, function() {
                            KUtil.removeClass(body, 'k-aside--minimizing');
                        });

                        // Hover class
                        KUtil.addClass(body, 'k-aside--minimize-hover');
                        asideMenu.scrollUpdate();
                        asideMenu.scrollTop();
                    }
                }, 50);
            });

            KUtil.addEvent(aside, 'mouseleave', function(e) {
                e.preventDefault();

                if (KUtil.isInResponsiveRange('desktop') === false) {
                    return;
                }

                if (insideTm) {
                    clearTimeout(insideTm);
                    insideTm = null;
                }

                outsideTm = setTimeout(function() {
                    if (KUtil.hasClass(body, 'k-aside--minimize-hover') && KUtil.isInResponsiveRange('desktop')) {
                        KUtil.removeClass(body, 'k-aside--minimize-hover');
                        KUtil.addClass(body, 'k-aside--minimize');

                        // Minimizing class
                        KUtil.addClass(body, 'k-aside--minimizing');
                        KUtil.transitionEnd(body, function() {
                            KUtil.removeClass(body, 'k-aside--minimizing');
                        });

                        // Hover class
                        asideMenu.scrollUpdate();
                        asideMenu.scrollTop();
                    }
                }, 100);
            });
        }
    }

    // Aside menu
    var initAsideMenu = function() {
        // Init aside menu
        var menu = KUtil.get('k_aside_menu');
        var menuDesktopMode = (KUtil.attr(menu, 'data-kmenu-dropdown') === '1' ? 'dropdown' : 'accordion');

        // Init scrollable menu container
        var scroll;
        if (KUtil.attr(menu, 'data-kmenu-scroll') === '1') {
            scroll = {
                height: function() {
                    var height;

                    if (KUtil.isInResponsiveRange('desktop')) {
                        height = parseInt(KUtil.getViewPort().height) - parseInt(KUtil.actualHeight('k_header', false)) - parseInt(KUtil.actualHeight('k_footer', false));
                        height = height - parseInt(KUtil.css(menu, 'marginTop')) - parseInt(KUtil.css(menu, 'marginBottom'));
                    } else {
                        height = parseInt(KUtil.getViewPort().height);
                    }

                    return height;
                }
            };
        }

        // Init aside menu
        asideMenu = new KMenu('k_aside_menu', {
            // vertical scroll
            scroll: scroll,

            // submenu setup
            submenu: {
                desktop: {
                    // by default the menu mode set to accordion in desktop mode
                    default: menuDesktopMode,
                    // whenever body has this class switch the menu mode to dropdown
                    state: {
                        body: 'k-aside--minimize',
                        mode: 'dropdown'
                    }
                },
                tablet: 'accordion', // menu set to accordion in tablet mode
                mobile: 'accordion' // menu set to accordion in mobile mode
            },

            //accordion setup
            accordion: {
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        });      
    }

    // Scrolltop
    var initScrolltop = function() {
        var scrolltop = new KScrolltop('k_scrolltop', {
            offset: 200,
            speed: 400
        });
    }

    // Init page sticky portlet
    var initPageStickyPortlet = function() {
        return new KPortlet('k_page_portlet', {
            sticky: {
                offset: parseInt(KUtil.css( KUtil.get('k_header'), 'height')) + 200,
                zIndex: 90,
                position: {
                    top: function() {
                        var h = 0;

                        if (KUtil.isInResponsiveRange('desktop')) {
                            if (KUtil.hasClass(body, 'k-header--fixed')) {
                                h = h + parseInt(KUtil.css( KUtil.get('k_header'), 'height') );
                            }
                        } else {
                            if (KUtil.hasClass(body, 'k-header-mobile--fixed')) {
                                h = h + parseInt(KUtil.css( KUtil.get('k_header_mobile'), 'height') );
                            }
                        }    
                        
                        return h;              
                    },
                    left: function() {
                        if (KUtil.isInResponsiveRange('tablet-and-mobile')) {    
                            return parseInt(KUtil.css( KUtil.get('k_body'), 'paddingLeft')); 
                        }

                        return;
                    },
                    right: function() {
                        if (KUtil.isInResponsiveRange('tablet-and-mobile')) {    
                            return parseInt(KUtil.css( KUtil.get('k_body'), 'paddingRight')); 
                        }

                        return;
                    }
                }
            }
        });
    }

    return {
        init: function() {
            body = KUtil.get('body');

            this.initHeader();
            this.initAside();
            this.initPageStickyPortlet();

            // Non functional links notice(can be removed in production)
            $('#k_aside_menu, #k_header_menu').on('click', '.k-menu__link[href="#"]', function(e) {
                swal("", "You have clicked on a non-functional dummy link!");

                e.preventDefault();
            });
        },

        initHeader: function() {
            initHeader();
            initHeaderMenu();
            initHeaderTopbar();
            initScrolltop();
        },

        initAside: function() { 
            initAside();
            initAsideMenu();
        },

        getAsideMenu: function() {
            return asideMenu;
        },

        initPageStickyPortlet: function() {
            if (!KUtil.get('k_page_portlet')) {
                return;
            }
            
            pageStickyPortlet = initPageStickyPortlet();
            pageStickyPortlet.initSticky();
            
            KUtil.addResizeHandler(function(){
                pageStickyPortlet.updateSticky();
            });

            initPageStickyPortlet();
        },

        closeMobileAsideMenuOffcanvas: function() {
            if (KUtil.isMobileDevice()) {
                asideMenuOffcanvas.hide();
            }
        },

        closeMobileHeaderMenuOffcanvas: function() {
            if (KUtil.isMobileDevice()) {
                headerMenuOffcanvas.hide();
            }
        }
    };
}();

$(document).ready(function() {
    KLayout.init();
});