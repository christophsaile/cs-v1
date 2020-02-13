export const throttle=(t,e)=>{let o,n;return function(){const a=this,c=arguments;n?(clearTimeout(o),o=setTimeout(function(){Date.now()-n>=e&&(t.apply(a,c),n=Date.now())},e-(Date.now()-n))):(t.apply(a,c),n=Date.now())}};
//# sourceMappingURL=throttle.js.map
