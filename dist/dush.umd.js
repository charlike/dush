!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.dush=e()}(this,function(){function n(){var n=Object.create(null),e={_allEvents:n,use:function(n){return n(e)||e},on:function(n,t,l){function r(){r.called||(e.off(n,r),t.apply(t,arguments),r.called=!0)}var u=e._allEvents[n]||(e._allEvents[n]=[]),o=l?r:t;return o.__sourceString=t.toString(),u.push(o),e},once:function(n,t){return e.on(n,t,!0),e},off:function(n,t){if(t&&e._allEvents[n]){var l=t.toString();e._allEvents[n]=e._allEvents[n].filter(function(n){return n.__sourceString!==l})}else n?e._allEvents[n]=[]:e._allEvents=Object.create(null);return e},emit:function(n){if("*"!==n){var t=[].slice.call(arguments);(e._allEvents[n]||[]).map(function(n){n.apply(n,t.slice(1))}),(e._allEvents["*"]||[]).map(function(n){n.apply(n,t)})}return e}};return e}return n});
//# sourceMappingURL=dush.umd.js.map
