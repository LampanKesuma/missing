import{$ as m,$$ as p,on as t,attr as s,next as x,prev as b,asHtml as r,hotkey as T,behavior as k,makelogger as w}from"./19.js";const E=w("tabs"),c=e=>p(e,"[role=tab]"),u=e=>m(e,"[role=tab][aria-selected=true]"),i=(e,n)=>{const o=s(e,"aria-controls");return o===null?(E("Tab",e,"has no associated tabpanel"),null):n.getElementById(o)},f=(e,n,o,{focusTab:h=!0}={})=>{if(!o)return;const a=u(n);if(a){s(a,{ariaSelected:!1,tabindex:-1});const l=i(a,e);l&&(l.hidden=!0)}s(o,{ariaSelected:!0,tabindex:0});const d=i(o,e);d&&(d.hidden=!1),h&&o.focus()},g=k("[role=tablist]",(e,{root:n})=>{e instanceof HTMLElement&&(e.tabIndex=0,c(e).forEach(o=>o.tabIndex=-1),f(n,e,u(e),{focusTab:!1}),t(e,"focus",o=>u(e)?.focus()),t(e,"click",o=>f(n,e,r(r(o.target)?.closest("[role=tab]")))),t(e,"focusin",o=>f(n,e,r(r(o.target)?.closest("[role=tab]")))),t(e,"keydown",T({ArrowRight:o=>r(x(e,"[role=tab]",r(o.target)))?.focus(),ArrowLeft:o=>r(b(e,"[role=tab]",r(o.target)))?.focus(),Home:o=>c(e).at(0)?.focus(),End:o=>c(e).at(-1)?.focus()})))});g(document);var H=g;export{H as default,g as tablist};

/*# sourceMappingURL=./tabs.js.map */