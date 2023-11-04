(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},35:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(11),c=a.n(i),l=(a(34),a(5)),r=a(6),o=a(8),m=a(7),d=a(18),u=a.n(d),p=(a(35),a(14)),h=a(20),f=a(24),E=a.n(f),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(r.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=s.a.memo((function(){return s.a.createElement("div",null,s.a.createElement(h.a,{className:"title-styles",steps:e.titles,loop:50}))}),(function(e,t){return!0}));return s.a.createElement("header",{id:"home",style:{height:window.innerHeight-140,display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(h.a,{steps:[t],wrapper:"p"})),s.a.createElement("div",{className:"title-container"},s.a.createElement(a,null)),s.a.createElement(E.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:s.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:s.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),a}(n.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"col-md-12",style:{marginTop:"20px"}},s.a.createElement("p",null," Contact Me at "),s.a.createElement("span",null,s.a.createElement("i",{class:"fa fa-phone"})," +15106039366"),"  \xa0 \xa0",s.a.createElement("span",null,s.a.createElement("i",{class:"fa fa-envelope"})," chinmayi.sunku@sjsu.edu"),s.a.createElement("div",{className:"copyright py-4 text-center"},s.a.createElement("div",{className:"container"},s.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-4 mb-5 center"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"250px",width:"200px",src:e,alt:"Avatar placeholder"}),s.a.createElement("a",{href:"https://www.linkedin.com/in/chinmayi-sunku/",style:{color:"black"}},s.a.createElement("i",{className:"fab fa-linkedin",style:{fontSize:"38px",paddingRight:"30px",paddingTop:"20px"}})),s.a.createElement("a",{href:"https://github.com/chisunku",title:"GitHub",style:{color:"black"}},s.a.createElement("i",{className:"fab fa-github",style:{fontSize:"38px",paddingRight:"30px",paddingTop:"20px"}})),s.a.createElement("a",{href:"https://drive.google.com/file/d/1I7h1Ea4luvvi3lVty9A5znH28G2Uw_e_/view?usp=drive_link",title:"Resume",style:{color:"black"}},s.a.createElement("i",{class:"fa fa-file",style:{fontSize:"38px",paddingTop:"20px"}}))))),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"},s.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"}),"\xa0",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"}),"\xa0",s.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},a," :) "),s.a.createElement("br",null),s.a.createElement("br",null),n)))))))}}]),a}(n.Component),y=a(17),w=(a(42),a(19)),N=a(49),k=a(25),x=a.n(k),j=a(26),S=a.n(j),O=a(27),I=a.n(O),C=(a(43),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,n=this.props.data.description,i=(this.props.data.url,this.props.data.demo);if(this.props.data.technologies){var c=e.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center"},s.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var l=t.map((function(e,t){return s.a.createElement("div",{key:t,"data-src":e})}))}}return s.a.createElement(N.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),s.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},s.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},i?s.a.createElement("iframe",{width:"560",height:"315",src:i,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}):s.a.createElement(x.a,{cssModule:[S.a,I.a],animation:"scaleOutAnimation",className:"slider-image"},l)),s.a.createElement("div",{className:"col-md-10 mx-auto"},s.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},a),s.a.createElement("p",{className:"modal-description"},n),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto"},c)))))}}]),a}(n.Component)),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={detailsModalShow:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeExperience&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.experience,a=this.props.resumeExperience.map((function(t,a){var n=t.technologies_main_disp,i=t.mainTech.map((function(e,t){return s.a.createElement(w.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),c=n.map((function(e,t){return s.a.createElement(w.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)}));return s.a.createElement(y.VerticalTimelineElement,{onTimelineElementClick:function(){return a=t,console.log(a),void e.setState({detailsModalShow:!0,deps:a});var a},className:"vertical-timeline-element--work",date:t.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{class:"fas fa-desktop experience-icon"}),key:a},s.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},i),s.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},t.title),s.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},t.company),s.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},c))}));return s.a.createElement("section",{id:"resume",className:"pb-5"},s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"black"}},s.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},t)))),s.a.createElement("div",{className:"col-md-8 mx-auto"},s.a.createElement(y.VerticalTimeline,null,a,s.a.createElement(y.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:s.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})},s.a.createElement(C,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))))}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(r.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:t.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a}},s.a.createElement("div",null,s.a.createElement("img",{src:t.images[0],alt:"projectImages",height:"230",style:{position:"relative"}}),s.a.createElement("span",{className:"project-date"},t.startDate),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},t.title)))))}));return s.a.createElement("section",{id:"portfolio"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title",style:{color:"White"}},s.a.createElement("span",null,t)),s.a.createElement("div",{className:"col-md-12 mx-auto"},s.a.createElement("div",{className:"row mx-auto"},a)),s.a.createElement(C,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return s.a.createElement("li",{className:"list-inline-item mx-3",key:t},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile",style:{background:"black"}},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-dark"},e))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t))))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.loadSharedData();this.loadResumeFromPath("res_primaryLanguage.json")}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(v,{sharedData:this.state.sharedData.basic_info}),s.a.createElement(b,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(B,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(D,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(T,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(g,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),a}(n.Component),_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(45);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",c.a.render(s.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ChinmayiPortfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ChinmayiPortfolio","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):z(t,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.000f9cb8.chunk.js.map