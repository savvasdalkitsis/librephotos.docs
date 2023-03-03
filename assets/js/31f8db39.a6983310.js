"use strict";(self.webpackChunklibrephotos_docs=self.webpackChunklibrephotos_docs||[]).push([[923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=o,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||r;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const r={title:"\ud83d\udcbb Local",excerpt:"How to install Libre Photos locally on Debian-based operating systems.",sidebar_position:4},l=void 0,a={unversionedId:"installation/manual-debian-install",id:"installation/manual-debian-install",title:"\ud83d\udcbb Local",description:"LibrePhotos can be installed locally on Debian-based operating systems with systemd.",source:"@site/docs/installation/manual-debian-install.md",sourceDirName:"installation",slug:"/installation/manual-debian-install",permalink:"/docs/installation/manual-debian-install",draft:!1,editUrl:"https://github.com/LibrePhotos/librephotos.docs/tree/master/docs/installation/manual-debian-install.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\ud83d\udcbb Local",excerpt:"How to install Libre Photos locally on Debian-based operating systems.",sidebar_position:4},sidebar:"userguide",previous:{title:"\ud83d\udce6 unRAID",permalink:"/docs/installation/unraid"},next:{title:"\ud83d\udcd6 Advanced docker-compose usage",permalink:"/docs/installation/environment-variables"}},s={},p=[{value:"Notes",id:"notes",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Pre-Installation",id:"pre-installation",level:2},{value:"Installation",id:"installation",level:2},{value:"Debian like distribution",id:"debian-like-distribution",level:3},{value:"Additional information",id:"additional-information",level:2},{value:"librephotos-cli",id:"librephotos-cli",level:3},{value:"Video are not playing",id:"video-are-not-playing",level:3},{value:"Next Steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LibrePhotos can be installed locally on Debian-based operating systems with systemd."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"We currently only support nginx. If you want something custom adapt the script to your liking.\nWe do not support a remote postgresql server yet.\nIf REDIS present on the system AND connection to it through socket, change socket permissions to 770. librephotos user will be added to redis group."),(0,o.kt)("h2",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Architecture:\namd64"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu 20.04.x LTS (server)"),(0,o.kt)("li",{parentName:"ul"},"Ubuntu 21.04 (desktop)"),(0,o.kt)("li",{parentName:"ul"},"Debian")),(0,o.kt)("h2",{id:"pre-installation"},"Pre-Installation"),(0,o.kt)("p",null,"Install git:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install git -y\n")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"debian-like-distribution"},"Debian like distribution"),(0,o.kt)("p",null,"Execute the following commands as root. Edit the begining of the script, and execute. This will create systemuser 'librephotos', creates directories, installs necessary software, creates database and automaGically writes some variables to librephotos-backend.env file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo su\ncd\ngit clone https://github.com/LibrePhotos/librephotos-linux.git\ncd librephotos-linux\nnano install-librephotos.sh\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./install-librephotos.sh\n")),(0,o.kt)("p",null,"After changing the photos directory, you must edit either ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/nginx.conf")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/librephotos"),". There are four places where you have to update the location."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nano /etc/librephotos/librephotos-backend.env\n")),(0,o.kt)("h2",{id:"additional-information"},"Additional information"),(0,o.kt)("p",null,"Installed systemd services:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"librephotos-image-similarity.service\nlibrephotos-worker.service\nlibrephotos-backend\nlibrephotos-frontend\n")),(0,o.kt)("h3",{id:"librephotos-cli"},"librephotos-cli"),(0,o.kt)("p",null,"As root you can use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"librephotos-cli build_similarity_index\nlibrephotos-cli clear_cache\n")),(0,o.kt)("h3",{id:"video-are-not-playing"},"Video are not playing"),(0,o.kt)("p",null,"This is a permissions issue. The subdirectories need others read and execute permissions and the video files need others read permissions. This is true even if everything is owned by librephotos:librephotos"),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Next, take a look at the ","[first steps after setup]","({% post_url user_guide/0000-02-01-first_steps %})."))}u.isMDXComponent=!0}}]);