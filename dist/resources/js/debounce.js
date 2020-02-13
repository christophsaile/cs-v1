export const debounce=(t,e)=>{let o;return function(){const n=this,c=arguments;clearTimeout(o),o=setTimeout(()=>t.apply(n,c),e)}};
//# sourceMappingURL=debounce.js.map
