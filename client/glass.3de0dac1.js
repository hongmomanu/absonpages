import{S as e,i as t,s as n,e as s,t as a,c as l,b as r,d as o,f as i,g as c,h as m,C as g,j as u,k as p,v as f,a as h,n as d,D as x,E as v,F as w,G as y}from"./index.8fca06d2.js";import{g as k,a as D,m as b}from"./util.c3d26849.js";const{Object:C}=y;function F(e,t,n){const s=C.create(e);return s.name=t[n].name,s.time=t[n].time,s.kind=t[n].kind,s.filename=t[n].filename,s.i=n,s}function q(e){var t,n,h,d,x,v,w=e.name+"",y=e.time+"";function k(){return e.dblclick_handler(e)}return{c(){t=s("div"),n=a(w),h=a(":"),d=a(y),this.h()},l(e){t=l(e,"DIV",{class:!0},!1);var s=r(t);n=o(s,w),h=o(s,":"),d=o(s,y),s.forEach(i),this.h()},h(){c(t,"class",x=m(e.kind)+" svelte-1k2w85n"),v=g(t,"dblclick",k)},m(e,s){u(e,t,s),p(t,n),p(t,h),p(t,d)},p(s,a){e=a,s.messages&&w!==(w=e.name+"")&&f(n,w),s.messages&&y!==(y=e.time+"")&&f(d,y),s.messages&&x!==(x=m(e.kind)+" svelte-1k2w85n")&&c(t,"class",x)},d(e){e&&i(t),v()}}}function j(e){for(var t,n,m,v,w,y,k,D,b,C,j,S=e.messages,_=[],E=0;E<S.length;E+=1)_[E]=q(F(e,S,E));return{c(){t=h(),n=s("button"),m=a("import glass excel file"),v=h(),w=s("input"),y=h(),k=s("span"),D=a(e.filename),b=h(),C=s("div");for(var l=0;l<_.length;l+=1)_[l].c();this.h()},l(s){t=o(s,"\n\n"),n=l(s,"BUTTON",{class:!0},!1);var a=r(n);m=o(a,"import glass excel file"),a.forEach(i),v=o(s,"\n\n"),w=l(s,"INPUT",{type:!0,accept:!0,class:!0},!1),r(w).forEach(i),y=o(s,"\n"),k=l(s,"SPAN",{},!1);var c=r(k);D=o(c,e.filename),c.forEach(i),b=o(s,"\n\n"),C=l(s,"DIV",{class:!0},!1);for(var g=r(C),u=0;u<_.length;u+=1)_[u].l(g);g.forEach(i),this.h()},h(){document.title="Daisy’s glass order generate",c(n,"class","pure-button pure-button-primary"),c(w,"type","file"),c(w,"accept","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),c(w,"class","svelte-1k2w85n"),c(C,"class","msg svelte-1k2w85n"),j=g(n,"click",e.openFileDialog)},m(s,a){u(s,t,a),u(s,n,a),p(n,m),u(s,v,a),u(s,w,a),e.input_binding(w),u(s,y,a),u(s,k,a),p(k,D),u(s,b,a),u(s,C,a);for(var l=0;l<_.length;l+=1)_[l].m(C,null)},p(e,t){if(e.filename&&f(D,t.filename),e.messages){S=t.messages;for(var n=0;n<S.length;n+=1){const s=F(t,S,n);_[n]?_[n].p(e,s):(_[n]=q(s),_[n].c(),_[n].m(C,null))}for(;n<_.length;n+=1)_[n].d(1);_.length=S.length}},i:d,o:d,d(s){s&&(i(t),i(n),i(v),i(w)),e.input_binding(null),s&&(i(y),i(k),i(b),i(C)),x(_,s),j()}}}function S(e,t,n){let s,a="",l=[];return v(()=>{s.onchange=(e=>{const t={},s=e.target.files[0],{path:r,name:o}=s,{app:i}=require("electron").remote;console.log("path",r,s);const c=require("fs"),m=require("path"),g=require("pizzip"),u=require("exceljs/modern.nodejs"),p=require("docxtemplater"),f=i.getPath("desktop");n("filename",a=o);var h=m.resolve(i.getAppPath(),"templateglass.docx"),d=new g(c.readFileSync(h,"binary")),x=new p;x.setOptions({linebreaks:!0}),x.loadZip(d);var v=new u.Workbook;l.push({name:"正在读取文件。。。",time:new Date}),n("messages",l),v.xlsx.readFile(r).then(function(){var e=v.getWorksheet("13257");if(!e)return alert("excel里面缺少页面 13257"),void n("messages",l=[{name:"excel里面缺少页面 13257",time:new Date}]);for(var s in l.push({name:"读取文件成功。",time:new Date}),n("messages",l),e.eachRow(function(e,n){if(n>4){const n=e.getCell(8),s=k(),a=(new Date).getFullYear(),l=D(n,s>n?a+1:a);if(!e.getCell(2).text)return;const r={ponum:e.getCell(2).text.substr(2),ponumstr:e.getCell(2).text,order:e.getCell(1).text,jworder:e.getCell(3).text,itemno:e.getCell(4).text,day:b(l.getDate()),month:b(l.getMonth()+1),year:b(l.getFullYear()),monthstr:l.toDateString().split(" ")[1],description:e.getCell(10).text,amount:e.getCell(11).text,price:(1*e.getCell(13).text).toFixed(3),money:(e.getCell(11).text*e.getCell(13).text).toFixed(3),nowyear:b((new Date).getFullYear()),nowmonth:b((new Date).getMonth()+1),nowday:b((new Date).getDate()),packing:e.getCell(20).text,customernum:e.getCell(3).text};t[e.getCell(2).text]?(t[r.ponumstr].totalmoney+=1*r.money,t[r.ponumstr].clients.push(r)):(t[r.ponumstr]=Object.assign({},r),t[r.ponumstr].totalmoney=1*r.money,t[r.ponumstr].clients=[r])}}),t){t[s].totalmoney=t[s].totalmoney.toFixed(3),x.setData(t[s]);const e=`${s}_${t[s].nowyear}_${t[s].nowmonth}_${t[s].nowday}.docx`;try{x.render()}catch(e){var a={message:e.message,name:e.name,stack:e.stack,properties:e.properties};throw console.log(JSON.stringify({error:a})),e}var r=x.getZip().generate({type:"nodebuffer"});const o=m.resolve(f,"Abson");c.existsSync(o)||c.mkdirSync(o);const i=m.resolve(o,e);try{c.writeFileSync(i,r),l.push({name:`${e} 已成功！`,time:new Date,kind:"filesuc",filename:e}),n("messages",l)}catch(a){l.push({name:`${e} 文件已打开,生成失败`,time:new Date}),n("messages",l)}}l.push({name:"全部结束",time:new Date}),n("messages",l)})}),n("filedialog",s)}),{filedialog:s,filename:a,messages:l,openFileDialog:function(){s.value="",n("filedialog",s),s.click()},input_binding:function(e){w[e?"unshift":"push"](()=>{n("filedialog",s=e)})},dblclick_handler:function({filename:e}){return function(e){const{app:t}=require("electron").remote,n=require("path"),s=t.getPath("desktop"),a=n.resolve(s,"Abson",e),{shell:l}=require("electron");l.openExternal(a)}(e)}}}export default class extends e{constructor(e){super(),t(this,e,S,j,n,[])}}
