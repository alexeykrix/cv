(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{271:function(t,e,o){var content=o(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(115).default)("2d8fa522",content,!0,{sourceMap:!1})},283:function(t,e,o){"use strict";o(271)},284:function(t,e,o){var r=o(114)((function(i){return i[1]}));r.push([t.i,".main[data-v-1c63c6a6]{background:linear-gradient(333.6deg,#0b0b0b 2.5%,#212121 95.15%);display:block;padding-top:0}.main-hero[data-v-1c63c6a6]{align-items:center;display:grid;height:100vh;justify-items:center;overflow:hidden;place-items:center;position:relative}.main-hero .container[data-v-1c63c6a6]{mix-blend-mode:difference}.main-hero__bg[data-v-1c63c6a6]{height:100%;left:0;position:absolute;top:0;width:100%}.main-hero__content[data-v-1c63c6a6]{display:grid;grid-template-columns:233px 548px;justify-content:space-between;position:relative;z-index:1}.main-hero__content .opacity[data-v-1c63c6a6]{opacity:.5;position:absolute;right:0;top:0}.main-hero__content h2[data-v-1c63c6a6]{margin-bottom:20px;margin-top:44px}.main-hero__content svg[data-v-1c63c6a6]{margin-bottom:46px;margin-top:113px}.main-hero__content h3[data-v-1c63c6a6]{margin-bottom:27px}.main-hero__group[data-v-1c63c6a6]{position:relative}.main-hero__avatar[data-v-1c63c6a6]{filter:contrast(.8) brightness(1.3);-o-object-fit:cover;object-fit:cover;width:100%}.main .other[data-v-1c63c6a6]{padding-bottom:189px}.main .other h2[data-v-1c63c6a6]{margin-bottom:66px;margin-top:70px}.main .other .item[data-v-1c63c6a6]{border-top:1px solid #fff;display:flex;justify-content:space-between;margin-bottom:30px;padding-top:30px}.main .other .item-group[data-v-1c63c6a6]{width:300px}.main .other .item-group h3[data-v-1c63c6a6]{margin-bottom:16px}.main .other .item-group p[data-v-1c63c6a6]:not(:last-child){margin-bottom:10px}.main .footer[data-v-1c63c6a6]{display:flex;gap:30px;justify-content:center;padding-bottom:35px}",""]),r.locals={},t.exports=r},287:function(t,e,o){"use strict";o.r(e);o(21),o(35);var r=o(285),n=o(286),c={name:"IndexPage",data:function(){return{}},methods:{},mounted:function(){r.a.registerPlugin(n.a),r.a.to("svg",{rotate:"-25deg",scrollTrigger:{trigger:"svg",start:"top 10%",end:"100vh",scrub:1}}),r.a.to(".main-hero__bg",{y:"50px",scale:1.1,scrollTrigger:{trigger:".main-hero__bg",start:"bottom 90%",scrub:1}}),document.querySelectorAll("h1").forEach((function(t){r.a.to(t,{y:"100px",scrollTrigger:{trigger:t,start:"top 10%",end:"100vh",scrub:1}})})),document.querySelectorAll(".item>h3").forEach((function(t){r.a.from(t,{x:"-100px",opacity:0,scrollTrigger:{trigger:t,start:"top 90%",end:"bottom 90%",scrub:1}})})),document.querySelectorAll(".item-group>*").forEach((function(t){r.a.from(t,{y:"30px",opacity:0,scrollTrigger:{trigger:t,start:"top 90%",end:"bottom 90%",scrub:1}})}))}},v=(o(283),o(56)),component=Object(v.a)(c,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main"},[e("div",{staticClass:"main-hero"},[e("img",{staticClass:"main-hero__bg",attrs:{src:"/hero-bg.png",alt:""}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"main-hero__content"},[t._m(0),t._v(" "),e("div",{staticClass:"main-hero__group"},[e("h1",[t._v("Oleksii Kryvosheienko")]),t._v(" "),e("h1",{staticClass:"opacity"},[t._v("dev")]),t._v(" "),e("svg",{attrs:{width:"526",height:"76",viewBox:"0 0 526 76",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("line",{attrs:{x1:"0.0707107",y1:"0.505025",x2:"525.071",y2:"75.505",stroke:"white"}})]),t._v(" "),e("h3",[t._v("About me")]),t._v(" "),e("p",[t._v("Hello! My name is Alexey. I am a front-end developer. My developer experience is about 1.5 years. I have worked on several projects which you will see below. but for the last six months I have been working in a company. The most important thing for me is never to be satisfied with what has already been achieved, so I always learn something new, improve my skills. Also I'm a student on the specialization Software Engineering. I'm Ukrainian, but now I'm staying in Lithuania")])])])])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-hero__group"},[e("img",{staticClass:"main-hero__avatar",attrs:{src:"/avatar.png",alt:""}}),t._v(" "),e("h2",[t._v("Tech stack")]),t._v(" "),e("p",[t._v("HTML, CSS (SCSS), JS "),e("br"),t._v("\n              Vue, Nuxt, Axios, PWA "),e("br"),t._v("\n              GSAP, Three.js, YoptaScript.js "),e("br"),t._v("\n              GIT, Github, Gitlab, Bitbucket")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"container other"},[e("h2",[t._v("Work experience")]),t._v(" "),e("div",{staticClass:"item"},[e("h3",[t._v("2022 - now")]),t._v(" "),e("div",{staticClass:"item-group"},[e("h3",[t._v("Front end dev")]),t._v(" "),e("p",[t._v("TheFirstTheLast / Kyiv")]),t._v(" "),e("p",[t._v("Making front end of websites, animations etc.")])])]),t._v(" "),e("div",{staticClass:"item"},[e("h3",[t._v("2020 - 2022")]),t._v(" "),e("div",{staticClass:"item-group"},[e("h3",[t._v("Front end dev")]),t._v(" "),e("p",[t._v("Freelance")]),t._v(" "),e("p",[t._v("Making front end of websites, animations etc.")])])]),t._v(" "),e("h2",[t._v("Education")]),t._v(" "),e("div",{staticClass:"item"},[e("h3",[t._v("2021 - now")]),t._v(" "),e("div",{staticClass:"item-group"},[e("h3",[t._v("Software engineering")]),t._v(" "),e("p",[t._v("KNUTE")])])]),t._v(" "),e("div",{staticClass:"item"},[e("h3",[t._v("2020 - 2020")]),t._v(" "),e("div",{staticClass:"item-group"},[e("h3",[t._v("JS course")]),t._v(" "),e("p",[t._v("Rolling Scopes School")])])])])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("a",{staticClass:"p underline",attrs:{href:"#"}},[t._v("LinkedIn")]),t._v(" "),e("a",{staticClass:"p underline",attrs:{href:"#"}},[t._v("Github")]),t._v(" "),e("a",{staticClass:"p underline",attrs:{href:"#"}},[t._v("Gitlab")]),t._v(" "),e("a",{staticClass:"p underline",attrs:{href:"#"}},[t._v("Bitbucket")]),t._v(" "),e("a",{staticClass:"p underline",attrs:{href:"#"}},[t._v("Telegram")]),t._v(" "),e("a",{staticClass:"p underline",attrs:{href:"mailto:alexeykrix@krixmail.dev"}},[t._v("alexeykrix@krixmail.dev")])])}],!1,null,"1c63c6a6",null);e.default=component.exports}}]);