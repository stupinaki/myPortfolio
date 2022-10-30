(function(){"use strict";var t={9378:function(t,r,a){var e=a(9242),n=a(3396);const i={class:"portfolio"},s={class:"aboutMe"},o={class:"projectCardsContainer"};function c(t,r,a,e,c,d){const p=(0,n.up)("MyAvatar"),u=(0,n.up)("MyDescription"),l=(0,n.up)("ImgWrapper"),f=(0,n.up)("ProjectCard");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",s,[(0,n.Wm)(p),(0,n.Wm)(u)]),(0,n._)("div",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.projectsCards,(t=>((0,n.wg)(),(0,n.j4)(f,{key:t.id,text:t.projectName,url:t.url},{default:(0,n.w5)((()=>[(0,n.Wm)(l,{srcStart:t.imgStart,srcEnd:t.imgEnd,alt:t.projectName},null,8,["srcStart","srcEnd","alt"])])),_:2},1032,["text","url"])))),128))])])}var d=a.p+"img/user-posts-type-script-start.46fc25b3.jpg",p=a.p+"img/medical-notes-start.e813230e.jpg",u=a.p+"img/test-site-start.5c8b0e7b.jpg",l=a.p+"img/notab-start.22f5cd26.jpg",f=a.p+"img/bee-start.1125c94c.jpg",g=a.p+"img/user-posts-type-script-end.54b592f8.jpg",m=a.p+"img/medical-notes-end.c538d113.jpg",v=a.p+"img/test-site-end.be903ed0.jpg",b=a.p+"img/notab-end.97cae3d0.jpg",h=a.p+"img/bee-end.f842ec96.jpg";const j=[{id:3,projectName:"Notab",imgStart:l,imgEnd:b,url:"https://stupinaki.github.io/NOTAB/"},{id:2,projectName:"Relvise",imgStart:u,imgEnd:v,url:"https://stupinaki.github.io/Relvise/"},{id:1,projectName:"Medical notes",imgStart:p,imgEnd:m,url:"https://stupinaki.github.io/medical-notes/#/doctors"},{id:5,projectName:"User posts typeScript",imgStart:d,imgEnd:g,url:"https://stupinaki.github.io/user-posts-typeScript/"},{id:4,projectName:"Bee",imgStart:f,imgEnd:h,url:"https://stupinaki.github.io/bee/#"}];var w=a.p+"img/avatar.7aff84c9.jpg";const y=t=>((0,n.dD)("data-v-b34fa528"),t=t(),(0,n.Cn)(),t),S={class:"avatarWrapper"},_=y((()=>(0,n._)("img",{class:"img",src:w,alt:"avatar"},null,-1))),k=[_];function E(t,r,a,e,i,s){return(0,n.wg)(),(0,n.iD)("div",S,k)}var C={name:"MyAvatar"},O=a(89);const x=(0,O.Z)(C,[["render",E],["__scopeId","data-v-b34fa528"]]);var D=x;const M={class:"wrapper"},N=["src","alt"],I=["src","alt"];function W(t,r,a,e,i,s){return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("img",{src:a.srcStart,alt:a.srcStart,class:"imgStart"},null,8,N),(0,n._)("img",{src:a.srcEnd,alt:a.alt,class:"imgEnd"},null,8,I)])}var H={name:"ImgWrapper",props:{srcStart:String,alt:String,srcEnd:String}};const P=(0,O.Z)(H,[["render",W],["__scopeId","data-v-6708b330"]]);var A=P,L=a(7139);const Z=["href"],T={class:"text"};function R(t,r,a,e,i,s){return(0,n.wg)(),(0,n.iD)("a",{href:a.url,class:"wrapper"},[(0,n.WI)(t.$slots,"default",{},void 0,!0),(0,n._)("div",T,(0,L.zw)(a.text),1)],8,Z)}var q={name:"ProjectCard",props:{text:{type:String,required:!0},url:{type:String,required:!0}}};const B=(0,O.Z)(q,[["render",R],["__scopeId","data-v-21467f2b"]]);var F=B;const G={class:"description"},z=(0,n.uE)('<div class="text" data-v-59d723df> Привет 👋🏼 Меня зовут Ксения, и я Front-end developer. <br data-v-59d723df><b data-v-59d723df>Основной стек:</b> JS, HTML, CSS. Пишу на Vue, немного знакома с React. <br data-v-59d723df> Собрала здесь для удобства несколько своих работ на GitHub pages. </div><div class="contacts" data-v-59d723df><a class="contactLink" href="https://github.com/stupinaki" data-v-59d723df> GitHub </a><a class="contactLink" href="https://spb.hh.ru/resume/2e689aa2ff0378204c0039ed1f327559793445" data-v-59d723df> HH </a><a class="contactLink" href="mailto:k.i.stupina9@gmail.com" data-v-59d723df> Почта </a><a class="contactLink" href="https://www.codewars.com/users/Stupina_ki/completed_solutions" data-v-59d723df> Codewars </a></div>',2),J=[z];function K(t,r,a,e,i,s){return(0,n.wg)(),(0,n.iD)("div",G,J)}var U={name:"MyDescription"};const V=(0,O.Z)(U,[["render",K],["__scopeId","data-v-59d723df"]]);var Y=V,$={name:"App",components:{MyAvatar:D,ImgWrapper:A,ProjectCard:F,MyDescription:Y},data(){return{projectsCards:j}}};const Q=(0,O.Z)($,[["render",c]]);var X=Q;(0,e.ri)(X).mount("#app")}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(r,e,n,i){if(!e){var s=1/0;for(p=0;p<t.length;p++){e=t[p][0],n=t[p][1],i=t[p][2];for(var o=!0,c=0;c<e.length;c++)(!1&i||s>=i)&&Object.keys(a.O).every((function(t){return a.O[t](e[c])}))?e.splice(c--,1):(o=!1,i<s&&(s=i));if(o){t.splice(p--,1);var d=n();void 0!==d&&(r=d)}}return r}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[e,n,i]}}(),function(){a.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(r,{a:r}),r}}(),function(){a.d=function(t,r){for(var e in r)a.o(r,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){a.p="/myPortfolio/"}(),function(){var t={143:0};a.O.j=function(r){return 0===t[r]};var r=function(r,e){var n,i,s=e[0],o=e[1],c=e[2],d=0;if(s.some((function(r){return 0!==t[r]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var p=c(a)}for(r&&r(e);d<s.length;d++)i=s[d],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(p)},e=self["webpackChunkmy"]=self["webpackChunkmy"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(9378)}));e=a.O(e)})();
//# sourceMappingURL=app.a6e2b24f.js.map