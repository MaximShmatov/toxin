(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{12:function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],s=n.base?i[0]+n.base:i[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var d=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:m(f,n),references:1}),r.push(l)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=v||(v=u(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},73:function(e,n,t){var r=t(12),o=t(74);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},74:function(e,n,t){}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQzovVXNlcnMv0JDQtNC80LjQvdC40YHRgtGA0LDRgtC+0YAvRGVza3RvcC93cy90b3hpbi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vZGlhZ3JhbS9kaWFncmFtLnNhc3M/YTcyZSJdLCJuYW1lcyI6WyJtZW1vIiwiaXNPbGRJRSIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFsbCIsImF0b2IiLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwic3R5bGVzSW5Eb20iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJpIiwibGVuZ3RoIiwibW9kdWxlc1RvRG9tIiwibGlzdCIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJpdGVtIiwiaWQiLCJiYXNlIiwiY291bnQiLCJjb25jYXQiLCJpbmRleCIsIm9iaiIsImNzcyIsIm1lZGlhIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJwdXNoIiwiYWRkU3R5bGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibm9uY2UiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImluc2VydCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlVGV4dCIsInJlcGxhY2VtZW50IiwiZmlsdGVyIiwiam9pbiIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJyZW1vdmUiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNzc05vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGx5VG9UYWciLCJyZW1vdmVBdHRyaWJ1dGUiLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlyc3RDaGlsZCIsInNpbmdsZXRvbiIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwiYmluZCIsInBhcmVudE5vZGUiLCJyZW1vdmVTdHlsZUVsZW1lbnQiLCJuZXdPYmoiLCJtb2R1bGUiLCJleHBvcnRzIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pIiwiX2luZGV4Iiwic3BsaWNlIiwiYXBpIiwiY29udGVudCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwibG9jYWxzIl0sIm1hcHBpbmdzIjoiMEZBRUEsSUFDTUEsRUFERkMsRUFFSyxXQVVMLFlBVG9CLElBQVRELElBTVRBLEVBQU9FLFFBQVFDLFFBQVVDLFVBQVlBLFNBQVNDLE1BQVFGLE9BQU9HLE9BR3hETixHQUlQTyxFQUFZLFdBQ2QsSUFBSVAsRUFBTyxHQUNYLE9BQU8sU0FBa0JRLEdBQ3ZCLFFBQTRCLElBQWpCUixFQUFLUSxHQUF5QixDQUN2QyxJQUFJQyxFQUFjTCxTQUFTTSxjQUFjRixHQUV6QyxHQUFJTCxPQUFPUSxtQkFBcUJGLGFBQXVCTixPQUFPUSxrQkFDNUQsSUFHRUYsRUFBY0EsRUFBWUcsZ0JBQWdCQyxLQUMxQyxNQUFPQyxHQUVQTCxFQUFjLEtBSWxCVCxFQUFLUSxHQUFVQyxFQUdqQixPQUFPVCxFQUFLUSxJQXBCQSxHQXdCWk8sRUFBYyxHQUVsQixTQUFTQyxFQUFxQkMsR0FHNUIsSUFGQSxJQUFJQyxHQUFVLEVBRUxDLEVBQUksRUFBR0EsRUFBSUosRUFBWUssT0FBUUQsSUFDdEMsR0FBSUosRUFBWUksR0FBR0YsYUFBZUEsRUFBWSxDQUM1Q0MsRUFBU0Ms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Q29FLEVBQUssRUFBR0EsRUFBS04sRUFBZ0JqRSxPQUFRdUUsSUFBTSxDQUNsRCxJQUVJQyxFQUFTNUUsRUFGS3FFLEVBQWdCTSxJQUlLLElBQW5DNUUsRUFBWTZFLEdBQVF4RCxhQUN0QnJCLEVBQVk2RSxHQUFRdkQsVUFFcEJ0QixFQUFZOEUsT0FBT0QsRUFBUSxJQUkvQlAsRUFBa0JLLE0sbUJDMVF0QixJQUFJSSxFQUFNLEVBQVEsSUFDRkMsRUFBVSxFQUFRLElBSUMsaUJBRnZCQSxFQUFVQSxFQUFRQyxXQUFhRCxFQUFRRSxRQUFVRixLQUcvQ0EsRUFBVSxDQUFDLENBQUNaLEVBQU9oRSxFQUFJNEUsRUFBUyxNQUc5QyxJQUFJeEUsRUFBVSxDQUVkLE9BQWlCLE9BQ2pCLFdBQW9CLEdBRVB1RSxFQUFJQyxFQUFTeEUsR0FJMUI0RCxFQUFPQyxRQUFVVyxFQUFRRyxRQUFVLEkiLCJmaWxlIjoiMTAuNWE5MDQ5ZWVkMDk2ZWE0OGY0YjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS00LTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS00LTQhLi9kaWFncmFtLnNhc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=