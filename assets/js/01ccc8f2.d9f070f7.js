"use strict";(self.webpackChunklangchain=self.webpackChunklangchain||[]).push([[284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,g=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:2},l="Loader",i={unversionedId:"preparing-data/loader",id:"preparing-data/loader",title:"Loader",description:"Need to read data from various sources? Load it up.",source:"@site/docs/preparing-data/loader.md",sourceDirName:"preparing-data",slug:"/preparing-data/loader",permalink:"/langchainrb-docs/docs/preparing-data/loader",draft:!1,editUrl:"https://github.com/alchaplinsky/lcrb/tree/main/packages/create-docusaurus/templates/shared/docs/preparing-data/loader.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/langchainrb-docs/docs/preparing-data/intro"},next:{title:"Vector Databases",permalink:"/langchainrb-docs/docs/category/vector-databases"}},p={},d=[{value:"Supported Formats",id:"supported-formats",level:2}],c={toc:d},s="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(s,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"loader"},"Loader"),(0,n.kt)("p",null,"Need to read data from various sources? Load it up."),(0,n.kt)("p",null,"Just call ",(0,n.kt)("inlineCode",{parentName:"p"},"Langchan::Loader.load")," with the path to the file or a URL you want to load."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"Langchain::Loader.load('/path/to/file.pdf')\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ruby"},"Langchain::Loader.load('https://www.example.com/file.pdf')\n")),(0,n.kt)("h2",{id:"supported-formats"},"Supported Formats"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null},"Pocessor"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Gem Requirements"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"docx"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::Docx"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'gem "docx", "~> 0.8.0"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"html"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::HTML"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'gem "nokogiri", "~> 1.13"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pdf"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::PDF"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'gem "pdf-reader", "~> 1.4"'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"text"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::Text"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JSON"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::JSON"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"JSONL"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::JSONL"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"csv"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::CSV"),(0,n.kt)("td",{parentName:"tr",align:"center"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"xlsx"),(0,n.kt)("td",{parentName:"tr",align:null},"Langchain::Processors::Xlsx"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},'gem "roo", "~> 2.10.0"'))))))}m.isMDXComponent=!0}}]);