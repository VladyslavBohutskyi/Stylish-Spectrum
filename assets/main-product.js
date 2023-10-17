"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function n(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,u)}return i[e].exports}for(var a="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,r){t("./scripts/pubsub");customElements.get("main-product")||customElements.define("main-product",function(){_inherits(e,_wrapNativeSuper(HTMLElement));var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"connectedCallback",value:function(){var e=this;this.variants=JSON.parse(this.getAttribute("data-variants")),this.options=this.querySelectorAll(".variants-option"),this.options.forEach(function(t){t.addEventListener("change",function(){e.variantOnClick()})}),this.changeCount(),this.querySelector(".add_to_cart").addEventListener("click",this.addToCart.bind(this)),PubSub.subscribe(PubSub.EVENTS.cartUpdated,this.showDrawer),this.initSliders()}},{key:"addToCart",value:function(){var t=this.querySelector(".shopify-product-form"),e=window.theme.shopUrl+window.theme.routes.cart_add_url,t={method:"POST",body:new FormData(t)};fetch(e,t).then(function(t){t.ok&&PubSub.publish(PubSub.EVENTS.cartUpdated)})}},{key:"initSliders",value:function(){this.slider=new Flickity(this.querySelector(".main-product__gallery-slider"),{contain:!1,wrapAround:!0,pageDots:!1,prevNextButtons:!1,percentPosition:!1});var t={asNavFor:this.querySelector(".main-product__gallery-slider"),contain:!1,wrapAround:!0,pageDots:!1,prevNextButtons:!1,percentPosition:!1};this.sliderNav=new Flickity(this.querySelector(".main-product__gallery-slider_nav"),t)}},{key:"showDrawer",value:function(){console.log("cartDrawer")}},{key:"changeCount",value:function(){var t=this.querySelector("#product-quantity"),e=this.querySelector(".product-count__value"),r=this.querySelector(".product-count__minus"),n=this.querySelector(".product-count__plus");r.addEventListener("click",function(){1<e.value&&(e.value=-1),t.value=e.value}),n.addEventListener("click",function(){e.value=+e.value+1,t.value=e.value})}},{key:"variantOnClick",value:function(){var n=this,e="",o=(this.options.forEach(function(t){e+="".concat(t.querySelector("input:checked").value," / ")}),e=e.slice(0,-3),"");this.variants.map(function(r){var t;r.title==e&&(o=r.id,history.replaceState(null,null,window.location.pathname+"?variant="+r.id),n.querySelectorAll(".main-product__gallery-slider .flickity-slider img").forEach(function(t,e){t.getAttribute("src")==r.featured_image.src&&n.slider.select(e)}),t=n.querySelector(".main-product__content_price").innerHTML[0],n.querySelector(".main-product__content_price").innerHTML="".concat(t+(r.price/100).toFixed(2)),r.available?n.querySelector(".main-product").classList.remove("sold-out"):n.querySelector(".main-product").classList.add("sold-out"))}),this.querySelector("#variant-select").value=o}}]),e}())},{"./scripts/pubsub":2}],2:[function(t,e,r){e.exports={EVENTS:{cartUpdated:"cart-updated"},subscribers:{},subscribe:function(t,e){var r=this;return void 0===this.subscribers[t]&&(this.subscribers[t]=[]),this.subscribers[t]=[].concat(_toConsumableArray(this.subscribers[t]),[e]),function(){r.subscribers[t]=r.subscribers[t].filter(function(t){return t!==e})}},publish:function(t,e){this.subscribers[t]&&this.subscribers[t].forEach(function(t){t(e)})}}},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi1wcm9kdWN0LmpzIiwibWFpbi1wcm9kdWN0LmpzIiwic3JjL3NjcmlwdHMvcHVic3ViLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsImN1c3RvbUVsZW1lbnRzIiwiZ2V0IiwiZGVmaW5lIiwiX2luaGVyaXRzIiwiTVByb2R1Y3QiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsInZhcmlhbnRzIiwiSlNPTiIsInBhcnNlIiwiZ2V0QXR0cmlidXRlIiwib3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwib3B0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhcmlhbnRPbkNsaWNrIiwiY2hhbmdlQ291bnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkVG9DYXJ0IiwiYmluZCIsIlB1YlN1YiIsInN1YnNjcmliZSIsIkVWRU5UUyIsImNhcnRVcGRhdGVkIiwic2hvd0RyYXdlciIsImluaXRTbGlkZXJzIiwiZm9ybSIsImZvcm1VcmwiLCJ3aW5kb3ciLCJ0aGVtZSIsInNob3BVcmwiLCJyb3V0ZXMiLCJjYXJ0X2FkZF91cmwiLCJmb3JtQm9keSIsIm1ldGhvZCIsImJvZHkiLCJGb3JtRGF0YSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJwdWJsaXNoIiwic2xpZGVyIiwiRmxpY2tpdHkiLCJjb250YWluIiwid3JhcEFyb3VuZCIsInBhZ2VEb3RzIiwicHJldk5leHRCdXR0b25zIiwicGVyY2VudFBvc2l0aW9uIiwic2V0dGluZ3NOYXYiLCJhc05hdkZvciIsInNsaWRlck5hdiIsImNvbnNvbGUiLCJsb2ciLCJwcm9kdWN0UXVhbnRpdHkiLCJjb3VudCIsIm1pbnVzIiwicGx1cyIsIl90aGlzMiIsInRlbXBWYXJpYW50IiwiY3VycmVudFZhcmlhbnRJZCIsInZhcmlhbnQiLCJjb25jYXQiLCJzbGljZSIsIm1hcCIsImN1cnJlbmN5IiwidGl0bGUiLCJpZCIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaW1nIiwiaW5kZXgiLCJmZWF0dXJlZF9pbWFnZSIsInNyYyIsInNlbGVjdCIsImlubmVySFRNTCIsInByaWNlIiwidG9GaXhlZCIsImF2YWlsYWJsZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIi4vc2NyaXB0cy9wdWJzdWIiLCIyIiwic3Vic2NyaWJlcnMiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsIl90aGlzMyIsInVuZGVmaW5lZCIsIl90b0NvbnN1bWFibGVBcnJheSIsImZpbHRlciIsImNiIiwiZGF0YSJdLCJtYXBwaW5ncyI6IjYwSUFBQSxDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxHQUFBLENBQUFKLEVBQUFHLEdBQUEsQ0FBQSxHQUFBLENBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLFlBQUEsT0FBQUMsU0FBQUEsUUFBQSxHQUFBLENBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEVBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEdBQUEsR0FBQU8sS0FBQSxtQkFBQUYsQ0FBQSxDQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsRUFBQSxFQUFBYixFQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxPQUFBSSxF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RUEsQ0FBQSxFQUVBbEYsS0FBQWdCLGNBQUEsaUJBQUEsRUFBQWIsTUFBQXdELENBRUEsQ0FBQSxFQUFBLEVBQUFqRSxDQUFBLEVBM0dBLENBOEdBLENDR0EsRUFBRSxDQUFDeUYsbUJEbkRILENBQUEsR0FBQUMsRUFBQSxDQUFBLFNBQUF6RyxFQUFBVSxFQUFBSixHRWxFQUksRUFBQUosUUFBQSxDQUNBb0MsT0FBQSxDQUNBQyxZQUFBLGNBQ0EsRUFDQStELFlBQUEsR0FDQWpFLFVBQUEsU0FBQWtFLEVBQUFDLEdBQUEsSUFBQUMsRUFBQXhGLEtBT0EsT0FOQXlGLEtBQUFBLElBQUF6RixLQUFBcUYsWUFBQUMsS0FDQXRGLEtBQUFxRixZQUFBQyxHQUFBLElBR0F0RixLQUFBcUYsWUFBQUMsR0FBQSxHQUFBekIsT0FBQTZCLG1CQUFBMUYsS0FBQXFGLFlBQUFDLEVBQUEsRUFBQSxDQUFBQyxFQUFBLEVBRUEsV0FDQUMsRUFBQUgsWUFBQUMsR0FBQUUsRUFBQUgsWUFBQUMsR0FBQUssT0FBQSxTQUFBQyxHQUNBLE9BQUFBLElBQUFMLENBQ0EsQ0FBQSxDQUNBLENBQ0EsRUFDQS9DLFFBQUEsU0FBQThDLEVBQUFPLEdBQ0E3RixLQUFBcUYsWUFBQUMsSUFDQXRGLEtBQUFxRixZQUFBQyxHQUFBM0UsUUFBQSxTQUFBNEUsR0FDQUEsRUFBQU0sQ0FBQSxDQUNBLENBQUEsQ0FFQSxDQUNBLENEd0hBLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFIiwiZmlsZSI6Im1haW4tcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBwdWJzdWIgPSByZXF1aXJlKFwiLi9zY3JpcHRzL3B1YnN1YlwiKTtcclxuXHJcbmlmICghY3VzdG9tRWxlbWVudHMuZ2V0KCdtYWluLXByb2R1Y3QnKSkge1xyXG5cclxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21haW4tcHJvZHVjdCcsIGNsYXNzIE1Qcm9kdWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgIHRoaXMudmFyaWFudHMgPSBKU09OLnBhcnNlKHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXZhcmlhbnRzJykpXHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnZhcmlhbnRzLW9wdGlvbicpXHJcblxyXG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhcmlhbnRPbkNsaWNrKClcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5jaGFuZ2VDb3VudCgpXHJcblxyXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5hZGRfdG9fY2FydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUb0NhcnQuYmluZCh0aGlzKSlcclxuXHJcbiAgICAgIFB1YlN1Yi5zdWJzY3JpYmUoUHViU3ViLkVWRU5UUy5jYXJ0VXBkYXRlZCwgdGhpcy5zaG93RHJhd2VyKVxyXG5cclxuICAgICAgdGhpcy5pbml0U2xpZGVycygpXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9DYXJ0KCkge1xyXG4gICAgICBjb25zdCBmb3JtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuc2hvcGlmeS1wcm9kdWN0LWZvcm0nKVxyXG4gICAgICBjb25zdCBmb3JtVXJsID0gd2luZG93LnRoZW1lLnNob3BVcmwgKyB3aW5kb3cudGhlbWUucm91dGVzLmNhcnRfYWRkX3VybFxyXG4gICAgICBjb25zdCBmb3JtQm9keSA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBuZXcgRm9ybURhdGEoZm9ybSlcclxuICAgICAgfVxyXG5cclxuICAgICAgZmV0Y2goZm9ybVVybCwgZm9ybUJvZHkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBQdWJTdWIucHVibGlzaChQdWJTdWIuRVZFTlRTLmNhcnRVcGRhdGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2xpZGVycygpIHtcclxuICAgICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgY29udGFpbjogZmFsc2UsXHJcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcclxuICAgICAgICBwYWdlRG90czogZmFsc2UsXHJcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zbGlkZXIgPSBuZXcgRmxpY2tpdHkodGhpcy5xdWVyeVNlbGVjdG9yKCcubWFpbi1wcm9kdWN0X19nYWxsZXJ5LXNsaWRlcicpLCBzZXR0aW5ncylcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdzTmF2ID0ge1xyXG4gICAgICAgIGFzTmF2Rm9yOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXByb2R1Y3RfX2dhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgY29udGFpbjogZmFsc2UsXHJcbiAgICAgICAgd3JhcEFyb3VuZDogdHJ1ZSxcclxuICAgICAgICBwYWdlRG90czogZmFsc2UsXHJcbiAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICBwZXJjZW50UG9zaXRpb246IGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zbGlkZXJOYXYgPSBuZXcgRmxpY2tpdHkodGhpcy5xdWVyeVNlbGVjdG9yKCcubWFpbi1wcm9kdWN0X19nYWxsZXJ5LXNsaWRlcl9uYXYnKSwgc2V0dGluZ3NOYXYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEcmF3ZXIoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjYXJ0RHJhd2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ291bnQoKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3RRdWFudGl0eSA9IHRoaXMucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtcXVhbnRpdHknKVxyXG4gICAgICBjb25zdCBjb3VudCA9IHRoaXMucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtY291bnRfX3ZhbHVlJylcclxuICAgICAgY29uc3QgbWludXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNvdW50X19taW51cycpXHJcbiAgICAgIGNvbnN0IHBsdXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNvdW50X19wbHVzJylcclxuXHJcbiAgICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChjb3VudC52YWx1ZSA+IDEpIGNvdW50LnZhbHVlID0gLSAxXHJcbiAgICAgICAgcHJvZHVjdFF1YW50aXR5LnZhbHVlID0gY291bnQudmFsdWVcclxuICAgICAgfSlcclxuICAgICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb3VudC52YWx1ZSA9ICtjb3VudC52YWx1ZSArIDFcclxuICAgICAgICBwcm9kdWN0UXVhbnRpdHkudmFsdWUgPSBjb3VudC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdmFyaWFudE9uQ2xpY2soKSB7XHJcbiAgICAgIGxldCB0ZW1wVmFyaWFudCA9ICcnXHJcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKHZhcmlhbnQgPT4ge1xyXG4gICAgICAgIHRlbXBWYXJpYW50ICs9IGAke3ZhcmlhbnQucXVlcnlTZWxlY3RvcignaW5wdXQ6Y2hlY2tlZCcpLnZhbHVlfSAvIGBcclxuICAgICAgfSlcclxuICAgICAgdGVtcFZhcmlhbnQgPSB0ZW1wVmFyaWFudC5zbGljZSgwLCAtMylcclxuXHJcbiAgICAgIGxldCBjdXJyZW50VmFyaWFudElkID0gJydcclxuICAgICAgdGhpcy52YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IHtcclxuICAgICAgICBpZiAodmFyaWFudC50aXRsZSA9PSB0ZW1wVmFyaWFudCkge1xyXG4gICAgICAgICAgY3VycmVudFZhcmlhbnRJZCA9IHZhcmlhbnQuaWRcclxuICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKG51bGwsIG51bGwsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/dmFyaWFudD0nICsgdmFyaWFudC5pZClcclxuICAgICAgICAgIC8vIHRoaXMucXVlcnlTZWxlY3RvcignLmZlYXR1cmVkLWltYWdlJykuc2V0QXR0cmlidXRlKCdzcmMnLCB2YXJpYW50LmZlYXR1cmVkX2ltYWdlLnNyYylcclxuICAgICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tcHJvZHVjdF9fZ2FsbGVyeS1zbGlkZXIgLmZsaWNraXR5LXNsaWRlciBpbWcnKS5mb3JFYWNoKChpbWcsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbWcuZ2V0QXR0cmlidXRlKCdzcmMnKSA9PSB2YXJpYW50LmZlYXR1cmVkX2ltYWdlLnNyYykge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2xpZGVyLnNlbGVjdChpbmRleClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbmN5ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubWFpbi1wcm9kdWN0X19jb250ZW50X3ByaWNlJykuaW5uZXJIVE1MWzBdXHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXByb2R1Y3RfX2NvbnRlbnRfcHJpY2UnKS5pbm5lckhUTUwgPSBgJHtjdXJyZW5jeSArICh2YXJpYW50LnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpfWBcclxuICAgICAgICAgIHZhcmlhbnQuYXZhaWxhYmxlXHJcbiAgICAgICAgICAgID8gdGhpcy5xdWVyeVNlbGVjdG9yKCcubWFpbi1wcm9kdWN0JykuY2xhc3NMaXN0LnJlbW92ZSgnc29sZC1vdXQnKVxyXG4gICAgICAgICAgICA6IHRoaXMucXVlcnlTZWxlY3RvcignLm1haW4tcHJvZHVjdCcpLmNsYXNzTGlzdC5hZGQoJ3NvbGQtb3V0JylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyN2YXJpYW50LXNlbGVjdCcpLnZhbHVlID0gY3VycmVudFZhcmlhbnRJZFxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIClcclxufSIsIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuY29uc3QgcHVic3ViID0gcmVxdWlyZShcIi4vc2NyaXB0cy9wdWJzdWJcIik7XHJcblxyXG5pZiAoIWN1c3RvbUVsZW1lbnRzLmdldCgnbWFpbi1wcm9kdWN0JykpIHtcclxuXHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYWluLXByb2R1Y3QnLCBjbGFzcyBNUHJvZHVjdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICB0aGlzLnZhcmlhbnRzID0gSlNPTi5wYXJzZSh0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS12YXJpYW50cycpKVxyXG4gICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy52YXJpYW50cy1vcHRpb24nKVxyXG5cclxuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy52YXJpYW50T25DbGljaygpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuY2hhbmdlQ291bnQoKVxyXG5cclxuICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcuYWRkX3RvX2NhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVG9DYXJ0LmJpbmQodGhpcykpXHJcblxyXG4gICAgICBQdWJTdWIuc3Vic2NyaWJlKFB1YlN1Yi5FVkVOVFMuY2FydFVwZGF0ZWQsIHRoaXMuc2hvd0RyYXdlcilcclxuXHJcbiAgICAgIHRoaXMuaW5pdFNsaWRlcnMoKVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvQ2FydCgpIHtcclxuICAgICAgY29uc3QgZm9ybSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnNob3BpZnktcHJvZHVjdC1mb3JtJylcclxuICAgICAgY29uc3QgZm9ybVVybCA9IHdpbmRvdy50aGVtZS5zaG9wVXJsICsgd2luZG93LnRoZW1lLnJvdXRlcy5jYXJ0X2FkZF91cmxcclxuICAgICAgY29uc3QgZm9ybUJvZHkgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogbmV3IEZvcm1EYXRhKGZvcm0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZldGNoKGZvcm1VcmwsIGZvcm1Cb2R5KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgUHViU3ViLnB1Ymxpc2goUHViU3ViLkVWRU5UUy5jYXJ0VXBkYXRlZClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNsaWRlcnMoKSB7XHJcbiAgICAgIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgICAgIGNvbnRhaW46IGZhbHNlLFxyXG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXHJcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxyXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXHJcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2xpZGVyID0gbmV3IEZsaWNraXR5KHRoaXMucXVlcnlTZWxlY3RvcignLm1haW4tcHJvZHVjdF9fZ2FsbGVyeS1zbGlkZXInKSwgc2V0dGluZ3MpXHJcblxyXG4gICAgICBjb25zdCBzZXR0aW5nc05hdiA9IHtcclxuICAgICAgICBhc05hdkZvcjogdGhpcy5xdWVyeVNlbGVjdG9yKCcubWFpbi1wcm9kdWN0X19nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIGNvbnRhaW46IGZhbHNlLFxyXG4gICAgICAgIHdyYXBBcm91bmQ6IHRydWUsXHJcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxyXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXHJcbiAgICAgICAgcGVyY2VudFBvc2l0aW9uOiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2xpZGVyTmF2ID0gbmV3IEZsaWNraXR5KHRoaXMucXVlcnlTZWxlY3RvcignLm1haW4tcHJvZHVjdF9fZ2FsbGVyeS1zbGlkZXJfbmF2JyksIHNldHRpbmdzTmF2KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RHJhd2VyKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnY2FydERyYXdlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvdW50KCkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0UXVhbnRpdHkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LXF1YW50aXR5JylcclxuICAgICAgY29uc3QgY291bnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNvdW50X192YWx1ZScpXHJcbiAgICAgIGNvbnN0IG1pbnVzID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1jb3VudF9fbWludXMnKVxyXG4gICAgICBjb25zdCBwbHVzID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1jb3VudF9fcGx1cycpXHJcblxyXG4gICAgICBtaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAoY291bnQudmFsdWUgPiAxKSBjb3VudC52YWx1ZSA9IC0gMVxyXG4gICAgICAgIHByb2R1Y3RRdWFudGl0eS52YWx1ZSA9IGNvdW50LnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY291bnQudmFsdWUgPSArY291bnQudmFsdWUgKyAxXHJcbiAgICAgICAgcHJvZHVjdFF1YW50aXR5LnZhbHVlID0gY291bnQudmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHZhcmlhbnRPbkNsaWNrKCkge1xyXG4gICAgICBsZXQgdGVtcFZhcmlhbnQgPSAnJ1xyXG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCh2YXJpYW50ID0+IHtcclxuICAgICAgICB0ZW1wVmFyaWFudCArPSBgJHt2YXJpYW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKS52YWx1ZX0gLyBgXHJcbiAgICAgIH0pXHJcbiAgICAgIHRlbXBWYXJpYW50ID0gdGVtcFZhcmlhbnQuc2xpY2UoMCwgLTMpXHJcblxyXG4gICAgICBsZXQgY3VycmVudFZhcmlhbnRJZCA9ICcnXHJcbiAgICAgIHRoaXMudmFyaWFudHMubWFwKCh2YXJpYW50KSA9PiB7XHJcbiAgICAgICAgaWYgKHZhcmlhbnQudGl0bGUgPT0gdGVtcFZhcmlhbnQpIHtcclxuICAgICAgICAgIGN1cnJlbnRWYXJpYW50SWQgPSB2YXJpYW50LmlkXHJcbiAgICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyAnP3ZhcmlhbnQ9JyArIHZhcmlhbnQuaWQpXHJcbiAgICAgICAgICAvLyB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5mZWF0dXJlZC1pbWFnZScpLnNldEF0dHJpYnV0ZSgnc3JjJywgdmFyaWFudC5mZWF0dXJlZF9pbWFnZS5zcmMpXHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLXByb2R1Y3RfX2dhbGxlcnktc2xpZGVyIC5mbGlja2l0eS1zbGlkZXIgaW1nJykuZm9yRWFjaCgoaW1nLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW1nLmdldEF0dHJpYnV0ZSgnc3JjJykgPT0gdmFyaWFudC5mZWF0dXJlZF9pbWFnZS5zcmMpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNsaWRlci5zZWxlY3QoaW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBjb25zdCBjdXJyZW5jeSA9IHRoaXMucXVlcnlTZWxlY3RvcignLm1haW4tcHJvZHVjdF9fY29udGVudF9wcmljZScpLmlubmVySFRNTFswXVxyXG4gICAgICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcubWFpbi1wcm9kdWN0X19jb250ZW50X3ByaWNlJykuaW5uZXJIVE1MID0gYCR7Y3VycmVuY3kgKyAodmFyaWFudC5wcmljZSAvIDEwMCkudG9GaXhlZCgyKX1gXHJcbiAgICAgICAgICB2YXJpYW50LmF2YWlsYWJsZVxyXG4gICAgICAgICAgICA/IHRoaXMucXVlcnlTZWxlY3RvcignLm1haW4tcHJvZHVjdCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3NvbGQtb3V0JylcclxuICAgICAgICAgICAgOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXByb2R1Y3QnKS5jbGFzc0xpc3QuYWRkKCdzb2xkLW91dCcpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5xdWVyeVNlbGVjdG9yKCcjdmFyaWFudC1zZWxlY3QnKS52YWx1ZSA9IGN1cnJlbnRWYXJpYW50SWRcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuICApXHJcbn1cbn0se1wiLi9zY3JpcHRzL3B1YnN1YlwiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEVWRU5UUzoge1xyXG5cdFx0Y2FydFVwZGF0ZWQ6ICdjYXJ0LXVwZGF0ZWQnXHJcblx0fSxcclxuXHRzdWJzY3JpYmVyczoge30sXHJcblx0c3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFsuLi50aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0sIGNhbGxiYWNrXTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZmlsdGVyKChjYikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBjYiAhPT0gY2FsbGJhY2s7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHB1Ymxpc2g6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cbn0se31dfSx7fSxbMV0pXG5cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdEVWRU5UUzoge1xyXG5cdFx0Y2FydFVwZGF0ZWQ6ICdjYXJ0LXVwZGF0ZWQnXHJcblx0fSxcclxuXHRzdWJzY3JpYmVyczoge30sXHJcblx0c3Vic2NyaWJlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaykge1xyXG5cdFx0aWYgKHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFsuLi50aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0sIGNhbGxiYWNrXTtcclxuXHJcblx0XHRyZXR1cm4gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZmlsdGVyKChjYikgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBjYiAhPT0gY2FsbGJhY2s7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHB1Ymxpc2g6IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEpIHtcclxuXHRcdGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcblx0XHRcdFx0Y2FsbGJhY2soZGF0YSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iXX0=
