import{r as s,j as a,m as l,L as g}from"./index-B9CKw27G.js";const j=()=>{const[i,d]=s.useState([]),[n,c]=s.useState("All"),[r,m]=s.useState([]),[x,o]=s.useState([]);s.useEffect(()=>{h()},[]);const h=async()=>{try{const t=await(await fetch("https://droidx-api.onrender.com/devicelist")).json();m(t),o(t),p()}catch(e){console.error("Error fetching data:",e)}};function p(){const e=new Set(r.map(t=>t.vendor));d(["All",...Array.from(e)])}function u(e){c(e),o(n!=="All"?r.filter(t=>t.vendor===n):r)}return a.jsxs(l.div,{className:"dn-container flex flex-col mt-12 items-center justify-center",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:[a.jsx("p",{className:"heading-dn text-4xl md:text-5xl mb-12",style:{fontFamily:"Product Sans Bold"},children:"Download DroidX-UI"}),a.jsx("div",{className:"select-vendor flex flex-wrap gap-3 justify-center",children:i.map((e,t)=>a.jsx("div",{onClick:()=>u(e),className:n===e?"nav-tryDx active":"nav-tryDx",children:e},t))}),a.jsx(l.div,{className:"gridplease",variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:"show",children:x.map((e,t)=>a.jsxs(l.div,{className:"db-card p-7",variants:{hidden:{opacity:0},show:{opacity:1}},children:[a.jsx("p",{className:"vendor text-xl md:text-2xl",style:{fontFamily:"Product Sans Bold"},children:e.vendor}),a.jsx("p",{className:"model text-2xl md:text-3xl",children:e.model}),a.jsx("p",{className:"codename text-[1rem] mt-10 p-2 w-fit rounded-xl bg-[#17557f] mb-2",children:e.codename}),a.jsxs("p",{className:"maintainer",children:[a.jsx("span",{children:"Maintainer"})," : ",e.maintainer]}),a.jsxs("p",{className:"version",children:[a.jsx("span",{children:"Version"})," : ",e.gapps.version]}),a.jsxs("p",{className:"status",children:[a.jsx("span",{children:"Status"})," :"," ",a.jsx("span",{className:e.status==="Active"?"active":"discontinued",children:e.status})]}),a.jsxs("div",{className:"dn-ch text-xl",children:[a.jsx(g,{className:"get-build hover:bg-[#adb8f0] hover:text-[#162025] duration-100",to:"/DxWeb/DevicePage",state:{model:e.model,status:e.status,version:e.gapps.version,maintainer_name:e.maintainer,codename:e.codename,latest_release_date:e.gapps.last_updated,download:e.gapps.download,vendor:e.vendor,dev_chlg:e.changelog,maintainer_git:e.github,maintainer_tg:e.telegram,old_release:e.old},children:"Get Build"}),a.jsx("a",{className:"changelog",href:e.changelog,target:"_blank",rel:"noopener noreferrer",children:"See Changelog"})]})]},t))})]})};export{j as default};
