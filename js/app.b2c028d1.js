(function(){"use strict";var t={220:function(t,e,n){var r=n(9242),i=n(3396),a=n(7139);const s={class:"portfolio"},o={class:"aboutMe"},c={class:"header"},p={class:"projectCardsContainer"};function d(t,e,n,r,d,l){const u=(0,i.up)("MyAvatar"),g=(0,i.up)("MyDescription"),h=(0,i.up)("ChangeLanguageBtn"),f=(0,i.up)("ImgWrapper"),m=(0,i.up)("ProjectCard");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",o,[(0,i.Wm)(u),(0,i._)("div",null,[(0,i.Wm)(g,{"is-english":d.isEnglish},null,8,["is-english"]),(0,i.Wm)(h,{"is-english":d.isEnglish,class:"changeBtn",onChangeLanguage:l.onChangeLanguage},null,8,["is-english","onChangeLanguage"])])]),(0,i._)("div",null,[(0,i._)("h2",c,(0,a.zw)(l.headerText),1),(0,i._)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.projectsCards,(t=>((0,i.wg)(),(0,i.j4)(m,{key:t.id,header:t.projectName,text:d.isEnglish?t.descriptionEnglish:t.description,textEnglish:t.descriptionEnglish,url:t.url},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{srcStart:t.imgStart,srcEnd:t.imgEnd,alt:t.projectName},null,8,["srcStart","srcEnd","alt"])])),_:2},1032,["header","text","textEnglish","url"])))),128))])])])}var l=n.p+"img/user-posts-type-script-start.46fc25b3.jpg",u=n.p+"img/medical-notes-start.e813230e.jpg",g=n.p+"img/test-site-start.5c8b0e7b.jpg",h=n.p+"img/colors-start.aaa470bd.jpg",f=n.p+"img/notab-start.22f5cd26.jpg",m=n.p+"img/bee-start.1125c94c.jpg",v=n.p+"img/user-posts-type-script-end.54b592f8.jpg",b=n.p+"img/medical-notes-end.c538d113.jpg",S=n.p+"img/test-site-end.be903ed0.jpg",E=n.p+"img/colors-end.67bc5e6c.jpg",w=n.p+"img/notab-end.97cae3d0.jpg",j=n.p+"img/bee-end.f842ec96.jpg";const y=[{id:6,projectName:"Colors",imgStart:h,imgEnd:E,url:"https://stupinaki.github.io/colors/",description:"Vue3. Позволяет выбирать и фиксировать цвета",descriptionEnglish:"Vue3. Allows you to select and save colors"},{id:3,projectName:"Notab",imgStart:f,imgEnd:w,url:"https://stupinaki.github.io/NOTAB/",description:"HTML, CSS. Адаптивная верстка.",descriptionEnglish:"HTML, CSS. Adaptive layout."},{id:2,projectName:"Relvise",imgStart:g,imgEnd:S,url:"https://stupinaki.github.io/Relvise/",description:"HTML, CSS. Адаптивная верстка.",descriptionEnglish:"HTML, CSS. Adaptive layout."},{id:1,projectName:"Medical notes",imgStart:u,imgEnd:b,url:"https://stupinaki.github.io/medical-notes/#/doctors",description:"React. Приложение для медицинских заметок, использующее Local Storage.",descriptionEnglish:"React. A medical notes app using Local Storage."},{id:5,projectName:"User posts typeScript",imgStart:l,imgEnd:v,url:"https://stupinaki.github.io/user-posts-typeScript/",description:"Vue2, TypeScript. Список постов с возможностью удаления и добавления новых. Используются fetch запросы.",descriptionEnglish:"Vue2, Typescript. List of posts with the ability to delete and add new ones. Fetch requests are used."},{id:4,projectName:"Bee",imgStart:m,imgEnd:j,url:"https://stupinaki.github.io/bee/#",description:"Пример первого сайта, чтобы увидеть прогресс :)",descriptionEnglish:"Sample of first site to see progress :)"}];var C=n.p+"img/avatar.7aff84c9.jpg";const _=t=>((0,i.dD)("data-v-b34fa528"),t=t(),(0,i.Cn)(),t),k={class:"avatarWrapper"},L=_((()=>(0,i._)("img",{class:"img",src:C,alt:"avatar"},null,-1))),x=[L];function T(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",k,x)}var M={name:"MyAvatar"},H=n(89);const O=(0,H.Z)(M,[["render",T],["__scopeId","data-v-b34fa528"]]);var D=O;const A={class:"wrapper"},I=["src","alt"],N=["src","alt"];function W(t,e,n,r,a,s){return(0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("img",{src:n.srcStart,alt:n.srcStart,class:"imgStart"},null,8,I),(0,i._)("img",{src:n.srcEnd,alt:n.alt,class:"imgEnd"},null,8,N)])}var B={name:"ImgWrapper",props:{srcStart:String,alt:String,srcEnd:String}};const $=(0,H.Z)(B,[["render",W],["__scopeId","data-v-6708b330"]]);var z=$;const P=["href"],V={class:"description"},Z={class:"header"},q={class:"text"};function F(t,e,n,r,s,o){return(0,i.wg)(),(0,i.iD)("a",{href:n.url,target:"_blank",class:"wrapper"},[(0,i.WI)(t.$slots,"default",{},void 0,!0),(0,i._)("div",V,[(0,i._)("h2",Z,(0,a.zw)(n.header),1),(0,i._)("div",q,(0,a.zw)(n.text),1)])],8,P)}var G={name:"ProjectCard",props:{header:{type:String,required:!0},text:{type:String,required:!0},url:{type:String,required:!0}}};const R=(0,H.Z)(G,[["render",F],["__scopeId","data-v-20d84d5d"]]);var J=R;const K={class:"wrapper"},U={class:"header"},Y={class:"text"},Q=(0,i.uE)('<div class="contacts" data-v-95f5f726><a class="contactLink" href="https://github.com/stupinaki" data-v-95f5f726> GitHub </a><a class="contactLink" href="https://spb.hh.ru/resume/2e689aa2ff0378204c0039ed1f327559793445" data-v-95f5f726> HH </a><a class="contactLink" href="mailto:k.i.stupina9@gmail.com" data-v-95f5f726> Gmail </a><a class="contactLink" href="https://www.codewars.com/users/Stupina_ki/completed_solutions" data-v-95f5f726> Codewars </a></div>',1);function X(t,e,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("h2",U,(0,a.zw)(o.headerText),1),(0,i._)("span",Y,(0,a.zw)(o.StackText),1),Q])}var tt={name:"MyDescription",props:{isEnglish:Boolean},computed:{headerText(){return this.$props.isEnglish?"Hi, My name is Ksenia 👋🏼 And I`m a Front-end developer.":"Привет 👋🏼 Меня зовут Ксения, и я Front-end developer."},StackText(){return this.$props.isEnglish?"Main stack: JS, HTML, CSS, Vue.":"Основной стек: JS, HTML, CSS, Vue."}}};const et=(0,H.Z)(tt,[["render",X],["__scopeId","data-v-95f5f726"]]);var nt=et;function rt(t,e,n,r,s,o){return(0,i.wg)(),(0,i.iD)("button",{class:"btn",onClick:e[0]||(e[0]=(...t)=>o.onClick&&o.onClick(...t))},(0,a.zw)(o.btnText),1)}var it={name:"ChangeLanguageBtn",emits:["changeLanguage"],props:{isEnglish:Boolean},computed:{btnText(){return this.$props.isEnglish?"Русский":"English"}},methods:{onClick(){this.$emit("changeLanguage")}}};const at=(0,H.Z)(it,[["render",rt],["__scopeId","data-v-718d646f"]]);var st=at,ot={name:"App",components:{MyAvatar:D,ImgWrapper:z,ProjectCard:J,MyDescription:nt,ChangeLanguageBtn:st},data(){return{projectsCards:y,isEnglish:!1}},methods:{onChangeLanguage(){this.$data.isEnglish=!this.$data.isEnglish}},computed:{headerText(){return this.$data.isEnglish?"Examples of my works on GitHub pages.":"Примеры моих работ на GitHub pages."}}};const ct=(0,H.Z)(ot,[["render",d]]);var pt=ct;(0,r.ri)(pt).mount("#app")}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var s=1/0;for(d=0;d<t.length;d++){r=t[d][0],i=t[d][1],a=t[d][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(o=!1,a<s&&(s=a));if(o){t.splice(d--,1);var p=i();void 0!==p&&(e=p)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/myPortfolio/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,s=r[0],o=r[1],c=r[2],p=0;if(s.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var d=c(n)}for(e&&e(r);p<s.length;p++)a=s[p],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self["webpackChunkmy"]=self["webpackChunkmy"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(220)}));r=n.O(r)})();
//# sourceMappingURL=app.b2c028d1.js.map