function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n,e){if(t){const o=a(t,n,e);return t[0](o)}}function a(t,e,o){return t[1]?n({},n(e.$$scope.ctx,t[1](o?o(e):{}))):e.$$scope.ctx}function i(t,e,o,r){return t[1]?n({},n(e.$$scope.changed||{},t[1](r?r(o):{}))):e.$$scope.changed||{}}function f(t){return null==t?"":t}function l(t,n){t.appendChild(n)}function d(t,n,e){t.insertBefore(n,e||null)}function $(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function w(t){return Array.from(t.childNodes)}function _(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):h(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=n,t.splice(e,1)[0]}return m(n)}function E(t,n){n=""+n,t.data!==n&&(t.data=n)}let A;function N(t){A=t}function k(){if(!A)throw new Error("Function called outside component initialization");return A}function S(t){k().$$.on_mount.push(t)}function j(t,n){k().$$.context.set(t,n)}const C=[],q=[],z=[],B=[],F=Promise.resolve();let L=!1;function O(t){z.push(t)}function T(){const t=new Set;do{for(;C.length;){const t=C.shift();N(t),D(t.$$)}for(;q.length;)q.pop()();for(let n=0;n<z.length;n+=1){const e=z[n];t.has(e)||(e(),t.add(e))}z.length=0}while(C.length);for(;B.length;)B.pop()();L=!1}function D(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(O))}const G=new Set;let M;function P(){M={r:0,c:[],p:M}}function H(){M.r||r(M.c),M=M.p}function I(t,n){t&&t.i&&(G.delete(t),t.i(n))}function J(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),M.c.push(()=>{G.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const K="undefined"!=typeof window?window:global;function Q(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function R(t,n,o){const{fragment:u,on_mount:s,on_destroy:a,after_update:i}=t.$$;u.m(n,o),O(()=>{const n=s.map(e).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(O)}function U(t,n){t.$$.fragment&&(r(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function V(t,n){t.$$.dirty||(C.push(t),L||(L=!0,F.then(T)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function W(n,e,c,u,s,a){const i=A;N(n);const f=e.props||{},l=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:o(),dirty:null};let d=!1;l.ctx=c?c(n,f,(t,e)=>{l.ctx&&s(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),d&&V(n,t))}):f,l.update(),d=!0,r(l.before_update),l.fragment=u(l.ctx),e.target&&(e.hydrate?l.fragment.l(w(e.target)):l.fragment.c(),e.intro&&I(n.$$.fragment),R(n,e.target,e.anchor),T()),N(i)}class X{$destroy(){U(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}export{P as A,H as B,b as C,p as D,S as E,q as F,K as G,X as S,g as a,w as b,_ as c,v as d,h as e,$ as f,x as g,f as h,W as i,d as j,l as k,s as l,R as m,t as n,i as o,a as p,I as q,J as r,u as s,m as t,U as u,E as v,y as w,n as x,Q as y,j as z};
