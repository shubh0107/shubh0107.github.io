(this["webpackJsonpshubh0107.github.io"]=this["webpackJsonpshubh0107.github.io"]||[]).push([[0],{21:function(e,t,i){},23:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i(2),a=i.n(n),c=i(15),l=i.n(c),r=i(3),o=i(4),d=(i(21),i.p+"static/media/my-pic-1.fb832911.jpg"),j=i(5),h=i(12);var b=function(e){var t=e.x,i=void 0===t?0:t,s=e.y,n=void 0===s?0:s,c=e.rotation,l=void 0===c?0:c,r=e.scale,o=void 0===r?1:r,d=e.timing,b=void 0===d?150:d,u=e.springConfig,m=void 0===u?{tension:300,friction:10}:u,x=a.a.useState(!1),f=Object(j.a)(x,2),g=f[0],p=f[1],O=Object(h.b)({transform:g?"translate(".concat(i,"px, ").concat(n,"px)\n         rotate(").concat(l,"deg)\n         scale(").concat(o,")"):"translate(0px, 0px)\n         rotate(0deg)\n         scale(1)",config:m});return a.a.useEffect((function(){if(g){var e=window.setTimeout((function(){p(!1)}),b);return function(){window.clearTimeout(e)}}}),[g]),[O,a.a.useCallback((function(){p(!0)}),[])]},u=function(e){var t=e.children,i=Object(o.a)(e,["children"]),n=b(i),a=Object(j.a)(n,2),c=a[0],l=a[1];return Object(s.jsx)(h.a.span,{onMouseEnter:l,style:c,children:t})},m=i(8),x=function(e){var t=e.children,i=Object(o.a)(e,["children"]);return Object(s.jsx)("a",Object(r.a)(Object(r.a)({rel:"norefferer",target:"_blank"},i),{},{children:t}))},f=function(e){var t=e.children,i=Object(o.a)(e,["children"]);return Object(s.jsxs)(x,Object(r.a)(Object(r.a)({className:"flex items-baseline text-blue-800 dark:text-green-400 transition-colors duration-300"},i),{},{children:[Object(s.jsx)(u,{x:"-10",springConfig:{tension:1e3,friction:30},children:Object(s.jsx)(N,{children:t})}),Object(s.jsx)(m.a,{className:"w-2 ml-1"})]}))},g=i(14),p=function(e){for(var t=e.rating,i=[],n=1;n<=5;)i.push(n<=t?Object(s.jsx)(g.b,{className:"fill-current"},"rating-".concat(n)):Object(s.jsx)(g.a,{className:"fill-current"},"rating-".concat(n))),n++;return Object(s.jsx)("div",{className:"flex items-center space-x-1 text-blue-800 dark:text-green-500 transition-colors duration-300",children:i})},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=Object(n.useState)((function(){return window.localStorage.getItem(e)?window.localStorage.getItem(e):"function"===typeof t?t():t})),s=Object(j.a)(i,2),a=s[0],c=s[1];return Object(n.useEffect)((function(){localStorage.setItem(e,a)}),[e,a]),[a,c]},w=i(11),v=i(6),k=function(e){var t=O("shubh0107-theme",(function(){return v.isSafari||v.isMobileSafari?"light":!("shubh0107-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"})),i=Object(j.a)(t,2),a=i[0],c=i[1];return Object(n.useEffect)((function(){"light"===a?document.querySelector("html").classList.remove("dark"):("dark"===a||!("shubh0107-theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&document.querySelector("html").classList.add("dark")}),[a]),Object(s.jsx)("span",Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("button",{title:"Switch to ".concat("light"===a?"dark":"light"," mode"),className:"p-2 bg-black dark:bg-gray-200 rounded-md border dark:border-black focus:outline-none",style:{lineHeight:"1rem"},onClick:function(e){return c("light"===a?"dark":"light")},children:"dark"===a?Object(s.jsx)(w.c,{className:"h-6 w-6 text-yellow-600"}):Object(s.jsx)(w.b,{className:"h-6 w-6 text-white"})})}))},N=function(e){var t=e.children;return Object(s.jsx)("span",{className:"font-semibold",children:t})},S=[{interestId:"i1",title:"Open Source",description:"Interested in the open source world and actively try to contribute in various libraries and tools. Have contributed in www.covid19india.org and another early stage CSS-in-JS library."},{interestId:"i2",title:"Design Systems",description:"Recently discovered the world of Design Systems. Have been interested in the latest trends that involve creating a better and easily maintainable design system using React.js, CSS-in-JS, theme- ui and system-ui."}],y=[{projectId:"p1",name:"Nirvana Ipsum",link:"https://www.nirvana-ipsum.com",description:"A web app that spits out Nirvana lyrics that you can use as placeholder text made using React.js."}],I=[{skillId:"skill1",title:"Frontend",rating:4,list:["HTML","CSS","Javascript","React.js","Angular 2+","Tailwind CSS","Typescript","Material UI","CSS-in-JS","Design Systems"]},{skillId:"skill2",title:"Backend",rating:3,list:["Node.js","Express.js","MongoDB","Redis","RESTful API's","Socket.io"]},{skillId:"skill3",title:"Tools",rating:4,list:["Git","Jira","Figma","Zepplin"]}],A=[{href:"https://www.linkedin.com/in/shubhsingh01/",title:"LinkedIn",icon:Object(s.jsx)(m.d,{className:"h-5 w-5"})},{href:"https://github.com/shubh0107",title:"Github",icon:Object(s.jsx)(m.c,{className:"h-5 w-5"})},{href:"https://twitter.com/shoe_bam",title:"Twitter",icon:Object(s.jsx)(m.e,{className:"h-5 w-5"})},{href:"https://www.facebook.com/shubhsingh01/",title:"Facebook",icon:Object(s.jsx)(m.b,{className:"h-5 w-5"})}],C=[{expId:"exp1",organization:"Knowledge Lens",link:"https://www.knowledgelens.com/",position:"Full Stack Developer",timeline:"02 / 2019 \u2013 present",place:"Bengaluru, India",description:Object(s.jsxs)("ul",{className:"list-disc list-inside space-y-2 mt-2",children:[Object(s.jsx)("li",{className:"leading-snug",children:"Working as a contractor for ZS Associates, Pune where i am involved in multiple projects for both US and UK based pharmaceutical giants."}),Object(s.jsx)("li",{className:"leading-snug",children:"Applying my skills as a Front end engineer(React.js and Angular) and responsible for building scalable and responsive web apps which have hundreds of daily users."}),Object(s.jsx)("li",{className:"leading-snug",children:"Guiding a team of 3 developers in the current project which involves developing a dashboard to show data trends using different types of charts which is used by the client for internal statistics and better decision making."}),Object(s.jsxs)("li",{className:"leading-snug",children:["Working with - ",Object(s.jsx)("span",{className:"italic",children:"HTML, CSS, javascript, React.js, Angular 2 +, Highcharts, D3.js, Charts.js, Material UI, JIRA."})]})]})},{expId:"exp2",organization:"Smartbeings Inc.",link:"https://www.smartbeings.com/",position:"Full Stack Developer",timeline:"02/2018 \u2013 01/2019",place:"Bengaluru, India",description:Object(s.jsxs)("ul",{className:"list-disc list-inside space-y-2 mt-2",children:[Object(s.jsxs)("li",{className:"leading-snug",children:["Worked as a ",Object(s.jsx)(N,{children:"MEAN stack"})," developer. Was involved in the product 'Woohoo' and the Smartbeings AI platform."]}),Object(s.jsx)("li",{className:"leading-snug",children:"Was responsible for development and scaling the backend of the product which included making REST API's, writing socket connection code and also maintaining the database."}),Object(s.jsx)("li",{className:"leading-snug",children:"Was also involved in the development of the Woohoo Web Client and the Smartbeings AI web platform."}),Object(s.jsxs)("li",{className:"leading-snug",children:["Integrated a number of third party services like ",Object(s.jsx)(N,{children:"Spotify"}),", ",Object(s.jsx)(N,{children:"Twilio"}),",",Object(s.jsx)(N,{children:"Uber"})," and ",Object(s.jsx)(N,{children:"NPR"})," News to the platform."]}),Object(s.jsxs)("li",{className:"leading-snug",children:["Integrated ",Object(s.jsx)(N,{children:"Google\u2019s Dialogflow"})," to develop a conversational experience between the device and the user."]}),Object(s.jsxs)("li",{className:"leading-snug",children:["Worked with - ",Object(s.jsx)("span",{className:"italic",children:"Angular 2 +, Node.js, Express.js, MongoDB, Redis, PostgreSQL, Socket.io, AWS and Nginx."})]})]})}],M=function(e){var t=e.title,i=e.children,n=v.isSafari||v.isMobileSafari?"text-blue-800 dark:text-green-500 transition-color duration-300":"";return Object(s.jsxs)("div",{className:"flex flex-col flex-shrink-0 justify-between md:flex-row",children:[Object(s.jsx)("div",{className:"md:w-1/3 sm:w-full pr-4",children:Object(s.jsx)("h2",{className:"inline-flex flex-grow-0 border-b-2 border-blue-300 md:border-0 sm:text-xl lg:text-lg font-semibold bg-clip-text text-transparent primary-gradient mb-2 md:mb-0 ".concat(n),children:t})}),Object(s.jsx)("div",{className:"w-full",children:i})]})},R=function(e){var t=e.skill,i=Object(o.a)(e,["skill"]),n=t.title,a=t.rating,c=t.list;return Object(s.jsxs)("div",Object(r.a)(Object(r.a)({},i),{},{children:[Object(s.jsxs)("div",{className:"flex justify-between",children:[Object(s.jsx)("span",{className:"font-semibold ",children:n}),Object(s.jsx)(p,{rating:a})]}),Object(s.jsx)("div",{className:"italic",children:c.join(", ")})]}))},D=function(e){return Object(s.jsx)("div",{className:"flex flex-col space-y-4",children:I.map((function(e){return Object(s.jsx)(R,{skill:e},e.skillId)}))})},F=function(e){var t=e.experience,i=t.organization,n=t.link,a=t.position,c=t.timeline,l=t.place,r=t.description;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"flex",children:[Object(s.jsx)(f,{href:n,title:n,children:i}),",",Object(s.jsx)("span",{className:"italic ml-1",children:a})]}),Object(s.jsxs)("div",{className:"text-sm",children:[c," | ",l]}),Object(s.jsx)("div",{children:r})]})},T=function(e){var t=e.interest,i=Object(o.a)(e,["interest"]),n=t.title,a=t.description;return Object(s.jsxs)("div",Object(r.a)(Object(r.a)({},i),{},{children:[Object(s.jsx)("h3",{children:Object(s.jsx)(N,{children:n})}),Object(s.jsx)("div",{className:"leading-snug",children:a})]}))},E=function(e){var t=e.project,i=Object(o.a)(e,["project"]),n=t.name,a=t.link,c=t.description;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",Object(r.a)(Object(r.a)({className:"flex"},i),{},{children:[Object(s.jsx)(f,{href:a,title:n,children:n}),",",Object(s.jsx)("span",{className:"italic ml-1",children:a.replace("https://","")})]})),Object(s.jsx)("div",{className:"leading-snug",children:c})]})};var L=function(){return Object(s.jsxs)("div",{className:"h-screen w-full flex flex-col lg:flex-row relative antialiased",children:[v.isSafari||v.isMobileSafari?"":Object(s.jsx)(k,{className:"fixed right-6 bottom-6 z-10"}),Object(s.jsxs)("div",{className:"min-h-screen sm:w-full md:w-full lg:w-1/3 xl:w-1/2 flex flex-shrink-0 relative",children:[Object(s.jsx)("img",{src:d,alt:"Shubham Singh",className:"h-full w-full object-cover"}),Object(s.jsx)("div",{className:"h-full w-full flex flex-col flex-shrink-0 items-center justify-center absolute top-0 left-0 bg-gradient-to-r from-green-400 to-blue-800 opacity-75 text-white font-mono"}),Object(s.jsxs)("div",{className:"absolute h-full w-full flex flex-col justify-center font-mono text-white",children:[Object(s.jsx)("h1",{className:"text-2xl lg:text-xl tracking-wide mx-auto",children:"Hi, I'm Shubham"}),Object(s.jsx)("h2",{className:"text-md lg:text-sm mt-4 mx-auto",children:"Developer based in Pune, India"}),Object(s.jsx)("h2",{className:"text-md lg:text-sm mx-auto",children:"Full Stack Developer at Knowledge Lens"}),Object(s.jsx)("div",{className:"flex space-x-10 mt-8 mx-auto",children:A.map((function(e){var t=e.href,i=e.title,n=e.icon;return Object(s.jsx)(u,{rotation:"15",children:Object(s.jsx)(x,{href:t,title:i,children:n})})}))})]})]}),Object(s.jsxs)("div",{className:"sm:w-full md:w-full lg:w-2/3 xl:w-1/2 w-full flex flex-col space-y-6 p-6 text-gray-800 dark:text-white lg:overflow-y-scroll dark:bg-black transition-colors duration-300",children:[Object(s.jsxs)(M,{title:"Intro",children:[Object(s.jsx)(N,{children:"Full Stack Developer"})," experienced in writing scalable and performant code. Fluent in",Object(s.jsx)(N,{children:" HTML"}),", ",Object(s.jsx)(N,{children:"CSS"}),", ",Object(s.jsx)(N,{children:"Javascript"}),", ",Object(s.jsx)(N,{children:"Node.js"}),", ",Object(s.jsx)(N,{children:"React.js"}),", ",Object(s.jsx)(N,{children:"Redux"})," and ",Object(s.jsx)(N,{children:"Angular 2+"}),". Have experience in working both at a product based startup as well as service based company where i was involved in a number of projects and was directly responsible for a complete module. Passionate about everything Javascript and open source."]}),Object(s.jsx)(M,{title:"Skills",children:Object(s.jsx)(D,{})}),Object(s.jsx)(M,{title:"Professional Experience",children:Object(s.jsx)("div",{className:"flex flex-col space-y-3",children:C.map((function(e,t){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(F,{experience:e},e.expId),t!==C.length-1&&Object(s.jsx)("hr",{className:"border-blue-800 border-dashed mx-10"})]})}))})}),Object(s.jsx)(M,{title:"Interests",children:Object(s.jsx)("div",{className:"flex flex-col space-y-3",children:S.map((function(e){return Object(s.jsx)(T,{interest:e},e.interestId)}))})}),Object(s.jsx)(M,{title:"Side Projects",children:y.map((function(e){return Object(s.jsx)(E,{project:e},e.projectId)}))}),Object(s.jsxs)("a",{className:"group flex flex-none items-center tracking-wide max-w-max p-4 mx-auto rounded-md text-white primary-gradient opacity-100 lg:opacity-75 hover:opacity-100 transition-opacity duration-300 focus:from-pink-500 focus:to-gray-400",href:"/Shubham_Singh_Resume.pdf",download:!0,children:["DOWNLOAD RESUME",Object(s.jsx)(w.a,{className:"ml-2 group-hover:animate-bounce"})]})]})]})},W=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(t){var i=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),s(e),n(e),a(e),c(e)}))};l.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(L,{})}),document.getElementById("root")),W()}},[[23,1,2]]]);
//# sourceMappingURL=main.2cb8115b.chunk.js.map