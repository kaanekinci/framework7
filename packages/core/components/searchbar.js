(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);var s=document,S=(window,e.$),x=(e.Template7,e.utils),r=(e.device,e.support,e.Class),n=(e.Modal,e.ConstructorMethods),t=(e.ModalMethods,function(k){function e(e,a){void 0===a&&(a={}),k.call(this,a,[e]);var r=this,n={el:void 0,inputEl:void 0,inputEvents:"change input compositionend",disableButton:!0,disableButtonEl:void 0,backdropEl:void 0,searchContainer:void 0,searchItem:"li",searchIn:void 0,searchGroup:".list-group",searchGroupTitle:".item-divider, .list-group-title",ignore:".searchbar-ignore",foundEl:".searchbar-found",notFoundEl:".searchbar-not-found",hideOnEnableEl:".searchbar-hide-on-enable",hideOnSearchEl:".searchbar-hide-on-search",backdrop:!0,removeDiacritics:!0,customSearch:!1,hideDividers:!0,hideGroups:!0,disableOnBackdropClick:!0,expandable:!1};r.useModulesParams(n),r.params=x.extend(n,a);var t,s,i,l,o,c,d,h,b,p,u=S(r.params.el);if(0===u.length)return r;if(u[0].f7Searchbar)return u[0].f7Searchbar;if(u[0].f7Searchbar=r,0<u.parents(".page").length)t=u.parents(".page");else if(0<(s=u.parents(".navbar-inner")).length&&!(t=S(e.navbar.getPageByEl(s[0]))).length){var f=u.parents(".view").find(".page-current");f[0]&&f[0].f7Page&&f[0].f7Page.navbarEl===s[0]&&(t=f)}function v(e){e.preventDefault()}function m(e){r.enable(e),r.$el.addClass("searchbar-focused")}function E(){r.$el.removeClass("searchbar-focused")}function g(){var e=r.$inputEl.val().trim();(r.$searchContainer&&0<r.$searchContainer.length&&(r.params.searchIn||r.isVirtualList||r.params.searchIn===r.params.searchItem)||r.params.customSearch)&&r.search(e,!0)}function $(e,a){r.$el.trigger("searchbar:clear",a),r.emit("local::clear searchbarClear",r,a)}function y(e){r.disable(e)}function C(){!r||r&&!r.$el||r.enabled&&(r.$el.removeClass("searchbar-enabled"),r.expandable&&r.$el.parents(".navbar-inner").removeClass("with-searchbar-expandable-enabled"))}function B(){!r||r&&!r.$el||r.enabled&&(r.$el.addClass("searchbar-enabled"),r.expandable&&r.$el.parents(".navbar-inner").addClass("with-searchbar-expandable-enabled"))}return a.foundEl?i=S(a.foundEl):"string"==typeof r.params.foundEl&&t&&(i=t.find(r.params.foundEl)),a.notFoundEl?l=S(a.notFoundEl):"string"==typeof r.params.notFoundEl&&t&&(l=t.find(r.params.notFoundEl)),a.hideOnEnableEl?o=S(a.hideOnEnableEl):"string"==typeof r.params.hideOnEnableEl&&t&&(o=t.find(r.params.hideOnEnableEl)),a.hideOnSearchEl?c=S(a.hideOnSearchEl):"string"==typeof r.params.hideOnSearchEl&&t&&(c=t.find(r.params.hideOnSearchEl)),r.params.backdrop&&0===(d=r.params.backdropEl?S(r.params.backdropEl):t&&0<t.length?t.find(".searchbar-backdrop"):u.siblings(".searchbar-backdrop")).length&&(d=S('<div class="searchbar-backdrop"></div>'),t&&t.length?0<u.parents(t).length&&s&&0===u.parents(s).length?d.insertBefore(u):d.insertBefore(t.find(".page-content").eq(0)):d.insertBefore(u)),r.params.searchContainer&&(h=S(r.params.searchContainer)),b=r.params.inputEl?S(r.params.inputEl):u.find('input[type="search"]').eq(0),r.params.disableButton&&(p=r.params.disableButtonEl?S(r.params.disableButtonEl):u.find(".searchbar-disable-button")),x.extend(r,{app:e,view:e.views.get(u.parents(".view")),$el:u,el:u[0],$backdropEl:d,backdropEl:d&&d[0],$searchContainer:h,searchContainer:h&&h[0],$inputEl:b,inputEl:b[0],$disableButtonEl:p,disableButtonEl:p&&p[0],disableButtonHasMargin:!1,$pageEl:t,pageEl:t&&t[0],$navbarEl:s,navbarEl:s&&s[0],$foundEl:i,foundEl:i&&i[0],$notFoundEl:l,notFoundEl:l&&l[0],$hideOnEnableEl:o,hideOnEnableEl:o&&o[0],$hideOnSearchEl:c,hideOnSearchEl:c&&c[0],previousQuery:"",query:"",isVirtualList:h&&h.hasClass("virtual-list"),virtualList:void 0,enabled:!1,expandable:r.params.expandable||u.hasClass("searchbar-expandable")}),r.attachEvents=function(){u.on("submit",v),r.params.disableButton&&r.$disableButtonEl.on("click",y),r.params.disableOnBackdropClick&&r.$backdropEl&&r.$backdropEl.on("click",y),r.expandable&&"ios"===e.theme&&r.view&&s&&r.$pageEl&&(r.$pageEl.on("page:beforeout",C),r.$pageEl.on("page:beforein",B)),r.$inputEl.on("focus",m),r.$inputEl.on("blur",E),r.$inputEl.on(r.params.inputEvents,g),r.$inputEl.on("input:clear",$)},r.detachEvents=function(){u.off("submit",v),r.params.disableButton&&r.$disableButtonEl.off("click",y),r.params.disableOnBackdropClick&&r.$backdropEl&&r.$backdropEl.off("click",y),r.expandable&&"ios"===e.theme&&r.view&&s&&r.$pageEl&&(r.$pageEl.off("page:beforeout",C),r.$pageEl.off("page:beforein",B)),r.$inputEl.off("focus",m),r.$inputEl.off("blur",E),r.$inputEl.off(r.params.inputEvents,g),r.$inputEl.off("input:clear",$)},r.useModules(),r.init(),r}return k&&(e.__proto__=k),((e.prototype=Object.create(k&&k.prototype)).constructor=e).prototype.clear=function(e){var a=this;if(!a.query&&e&&S(e.target).hasClass("searchbar-clear"))return a.disable(),a;var r=a.value;return a.$inputEl.val("").trigger("change").focus(),a.$el.trigger("searchbar:clear",r),a.emit("local::clear searchbarClear",a,r),a},e.prototype.setDisableButtonMargin=function(){var e=this;if(!e.expandable){var a=e.app;e.$disableButtonEl.transition(0).show(),e.$disableButtonEl.css("margin-"+(a.rtl?"left":"right"),-e.disableButtonEl.offsetWidth+"px"),e._clientLeft=e.$disableButtonEl[0].clientLeft,e.$disableButtonEl.transition(""),e.disableButtonHasMargin=!0}},e.prototype.enable=function(e){var a=this;if(a.enabled)return a;var r=a.app;function n(){a.$backdropEl&&(a.$searchContainer&&a.$searchContainer.length||a.params.customSearch)&&!a.$el.hasClass("searchbar-enabled")&&!a.query&&a.backdropShow(),a.$el.addClass("searchbar-enabled"),(!a.$disableButtonEl||a.$disableButtonEl&&0===a.$disableButtonEl.length)&&a.$el.addClass("searchbar-enabled-no-disable-button"),!a.expandable&&a.$disableButtonEl&&0<a.$disableButtonEl.length&&"ios"===r.theme&&(a.disableButtonHasMargin||a.setDisableButtonMargin(),a.$disableButtonEl.css("margin-"+(r.rtl?"left":"right"),"0px")),a.expandable&&(a.$el.parents(".navbar-inner").hasClass("navbar-inner-large")&&a.$pageEl&&a.$pageEl.find(".page-content").addClass("with-searchbar-expandable-enabled"),"md"===r.theme&&a.$el.parent(".navbar-inner").parent(".navbar").length?a.$el.parent(".navbar-inner").parent(".navbar").addClass("with-searchbar-expandable-enabled"):(a.$el.parent(".navbar-inner").addClass("with-searchbar-expandable-enabled"),a.$el.parent(".navbar-inner-large").addClass("navbar-inner-large-collapsed"))),a.$hideOnEnableEl&&a.$hideOnEnableEl.addClass("hidden-by-searchbar"),a.$el.trigger("searchbar:enable"),a.emit("local::enable searchbarEnable",a)}var t=!(a.enabled=!0);return!0===e&&s.activeElement!==a.inputEl&&(t=!0),r.device.ios&&"ios"===r.theme?a.expandable?(t&&a.$inputEl.focus(),n()):(t&&a.$inputEl.focus(),!e||"focus"!==e.type&&!0!==e?n():x.nextTick(function(){n()},400)):(t&&a.$inputEl.focus(),"md"===r.theme&&a.expandable&&a.$el.parents(".page, .view, .navbar-inner").scrollLeft(0),n()),a},e.prototype.disable=function(){var e=this;if(!e.enabled)return e;var a=e.app;return e.$inputEl.val("").trigger("change"),e.$el.removeClass("searchbar-enabled searchbar-focused searchbar-enabled-no-disable-button"),e.expandable&&(e.$el.parents(".navbar-inner").hasClass("navbar-inner-large")&&e.$pageEl&&e.$pageEl.find(".page-content").removeClass("with-searchbar-expandable-enabled"),"md"===a.theme&&e.$el.parent(".navbar-inner").parent(".navbar").length?e.$el.parent(".navbar-inner").parent(".navbar").removeClass("with-searchbar-expandable-enabled"):(e.$el.parent(".navbar-inner").removeClass("with-searchbar-expandable-enabled"),e.$pageEl&&e.$pageEl.find(".page-content").trigger("scroll"))),!e.expandable&&e.$disableButtonEl&&0<e.$disableButtonEl.length&&"ios"===a.theme&&e.$disableButtonEl.css("margin-"+(a.rtl?"left":"right"),-e.disableButtonEl.offsetWidth+"px"),e.$backdropEl&&(e.$searchContainer&&e.$searchContainer.length||e.params.customSearch)&&e.backdropHide(),e.enabled=!1,e.$inputEl.blur(),e.$hideOnEnableEl&&e.$hideOnEnableEl.removeClass("hidden-by-searchbar"),e.$el.trigger("searchbar:disable"),e.emit("local::disable searchbarDisable",e),e},e.prototype.toggle=function(){return this.enabled?this.disable():this.enable(!0),this},e.prototype.backdropShow=function(){return this.$backdropEl&&this.$backdropEl.addClass("searchbar-backdrop-in"),this},e.prototype.backdropHide=function(){return this.$backdropEl&&this.$backdropEl.removeClass("searchbar-backdrop-in"),this},e.prototype.search=function(e,a){var o=this;if(o.previousQuery=o.query||"",e===o.previousQuery)return o;a||(o.enabled||o.enable(),o.$inputEl.val(e),o.$inputEl.trigger("input")),o.query=e,o.value=e;var r=o.$searchContainer,n=o.$el,t=o.$foundEl,s=o.$notFoundEl,i=o.$hideOnSearchEl,l=o.isVirtualList;if(0<e.length&&i?i.addClass("hidden-by-searchbar"):i&&i.removeClass("hidden-by-searchbar"),(r&&r.length&&n.hasClass("searchbar-enabled")||o.params.customSearch&&n.hasClass("searchbar-enabled"))&&(0===e.length?o.backdropShow():o.backdropHide()),o.params.customSearch)return n.trigger("searchbar:search",e,o.previousQuery),o.emit("local::search searchbarSearch",o,e,o.previousQuery),o;var c,d=[];if(l){if(o.virtualList=r[0].f7VirtualList,""===e.trim())return o.virtualList.resetFilter(),s&&s.hide(),t&&t.show(),n.trigger("searchbar:search",e,o.previousQuery),o.emit("local::search searchbarSearch",o,e,o.previousQuery),o;if(c=o.params.removeDiacritics?x.removeDiacritics(e):e,o.virtualList.params.searchAll)d=o.virtualList.params.searchAll(c,o.virtualList.items)||[];else if(o.virtualList.params.searchByItem)for(var h=0;h<o.virtualList.items.length;h+=1)o.virtualList.params.searchByItem(c,o.virtualList.params.items[h],h)&&d.push(h)}else{var b;b=o.params.removeDiacritics?x.removeDiacritics(e.trim().toLowerCase()).split(" "):e.trim().toLowerCase().split(" "),r.find(o.params.searchItem).removeClass("hidden-by-searchbar").each(function(e,a){var r=S(a),n=[],t=o.params.searchIn?r.find(o.params.searchIn):r;o.params.searchIn===o.params.searchItem&&(t=r),t.each(function(e,a){var r=S(a).text().trim().toLowerCase();o.params.removeDiacritics&&(r=x.removeDiacritics(r)),n.push(r)}),n=n.join(" ");for(var s=0,i=0;i<b.length;i+=1)0<=n.indexOf(b[i])&&(s+=1);s===b.length||o.params.ignore&&r.is(o.params.ignore)?d.push(r[0]):r.addClass("hidden-by-searchbar")}),o.params.hideDividers&&r.find(o.params.searchGroupTitle).each(function(e,a){for(var r=S(a),n=r.nextAll(o.params.searchItem),t=!0,s=0;s<n.length;s+=1){var i=n.eq(s);if(i.is(o.params.searchGroupTitle))break;i.hasClass("hidden-by-searchbar")||(t=!1)}var l=o.params.ignore&&r.is(o.params.ignore);t&&!l?r.addClass("hidden-by-searchbar"):r.removeClass("hidden-by-searchbar")}),o.params.hideGroups&&r.find(o.params.searchGroup).each(function(e,a){var r=S(a),n=o.params.ignore&&r.is(o.params.ignore);0!==r.find(o.params.searchItem).filter(function(e,a){return!S(a).hasClass("hidden-by-searchbar")}).length||n?r.removeClass("hidden-by-searchbar"):r.addClass("hidden-by-searchbar")})}return 0===d.length?(s&&s.show(),t&&t.hide()):(s&&s.hide(),t&&t.show()),l&&o.virtualList&&o.virtualList.filterItems(d),n.trigger("searchbar:search",e,o.previousQuery,d),o.emit("local::search searchbarSearch",o,e,o.previousQuery,d),o},e.prototype.init=function(){this.attachEvents()},e.prototype.destroy=function(){var e=this;e.emit("local::beforeDestroy searchbarBeforeDestroy",e),e.$el.trigger("searchbar:beforedestroy",e),e.detachEvents(),e.$el[0]&&(e.$el[0].f7Searchbar=null,delete e.$el[0].f7Searchbar),x.deleteProps(e)},e}(r)),i={name:"searchbar",static:{Searchbar:t},create:function(){this.searchbar=n({defaultSelector:".searchbar",constructor:t,app:this,domProp:"f7Searchbar",addMethods:"clear enable disable toggle search".split(" ")})},on:{tabMounted:function(e){var n=this;S(e).find(".searchbar-init").each(function(e,a){var r=S(a);n.searchbar.create(x.extend(r.dataset(),{el:a}))})},tabBeforeRemove:function(e){S(e).find(".searchbar-init").each(function(e,a){a.f7Searchbar&&a.f7Searchbar.destroy&&a.f7Searchbar.destroy()})},pageInit:function(e){var n=this;e.$el.find(".searchbar-init").each(function(e,a){var r=S(a);n.searchbar.create(x.extend(r.dataset(),{el:a}))}),"ios"===n.theme&&e.view&&e.view.router.separateNavbar&&e.$navbarEl&&0<e.$navbarEl.length&&e.$navbarEl.find(".searchbar-init").each(function(e,a){var r=S(a);n.searchbar.create(x.extend(r.dataset(),{el:a}))})},pageBeforeRemove:function(e){e.$el.find(".searchbar-init").each(function(e,a){a.f7Searchbar&&a.f7Searchbar.destroy&&a.f7Searchbar.destroy()}),"ios"===this.theme&&e.view&&e.view.router.separateNavbar&&e.$navbarEl&&0<e.$navbarEl.length&&e.$navbarEl.find(".searchbar-init").each(function(e,a){a.f7Searchbar&&a.f7Searchbar.destroy&&a.f7Searchbar.destroy()})}},clicks:{".searchbar-clear":function(e,a){void 0===a&&(a={});var r=this.searchbar.get(a.searchbar);r&&r.clear()},".searchbar-enable":function(e,a){void 0===a&&(a={});var r=this.searchbar.get(a.searchbar);r&&r.enable(!0)},".searchbar-disable":function(e,a){void 0===a&&(a={});var r=this.searchbar.get(a.searchbar);r&&r.disable()},".searchbar-toggle":function(e,a){void 0===a&&(a={});var r=this.searchbar.get(a.searchbar);r&&r.toggle()}},vnode:{"searchbar-init":{insert:function(e){var a=e.elm,r=S(a);this.searchbar.create(x.extend(r.dataset(),{el:a}))},destroy:function(e){var a=e.elm;a.f7Searchbar&&a.f7Searchbar.destroy&&a.f7Searchbar.destroy()}}}};if(a){if(e.prototype.modules&&e.prototype.modules[i.name])return;e.use(i),e.instance&&(e.instance.useModuleParams(i,e.instance.params),e.instance.useModule(i))}return i}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))