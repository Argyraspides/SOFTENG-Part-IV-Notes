(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{96111:function(e,n,t){"use strict";var r=t(27573),a=t(2715),s=t(47828),o=t(44115),i=t(77997),l=t(7653);let d=(0,s.j)("inline-flex\n  items-center\n  justify-center\n  relative\n  shrink-0\n  ring-offset-2\n  ring-offset-bg-300\n  ring-accent-main-100\n  focus-visible:outline-none\n  focus-visible:ring-1\n  disabled:pointer-events-none\n  disabled:opacity-50\n  disabled:shadow-none\n  disabled:drop-shadow-none",{variants:{variant:{primary:"\n          bg-accent-main-100\n          bg-gradient-to-r\n          from-accent-main-100\n          via-accent-main-200/50\n          to-accent-main-200\n          bg-[length:200%_100%]\n          hover:bg-right\n          active:bg-accent-main-000\n          border-0.5\n          border-border-300\n          text-oncolor-100\n          font-medium\n          font-styrene\n          drop-shadow-sm\n          transition-all\n          shadow-[inset_0_0.5px_0px_rgba(255,255,0,0.15)]\n          [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)]\n          active:shadow-[inset_0_1px_6px_rgba(0,0,0,0.2)]\n          hover:from-accent-main-200\n          hover:to-accent-main-200",flat:"bg-accent-main-100\n          text-oncolor-100\n          font-medium\n          font-styrene\n          transition-colors\n          hover:bg-accent-main-200",secondary:"\n          bg-[radial-gradient(ellipse,_var(--tw-gradient-stops))]\n          from-bg-500/10\n          from-50%\n          to-bg-500/30\n          border-0.5\n          border-border-400\n          font-medium\n          font-styrene\n          text-text-100/90\n          transition-colors\n          active:bg-bg-500/50\n          hover:text-text-000\n          hover:bg-bg-500/60",outline:"border-1.5\n          font-medium\n          font-styrene\n          bg-transparent\n          text-text-200\n          transition-colors\n          hover:text-text-100\n          hover:bg-bg-400\n          hover:border-bg-400",ghost:"text-text-200\n          transition-all\n          font-styrene\n          active:bg-bg-400\n          hover:bg-bg-500/40\n          hover:text-text-100",underline:"opacity-80\n          transition-all\n          active:scale-[0.985]\n          hover:opacity-100\n          hover:underline\n          underline-offset-3",danger:"bg-danger-100\n          text-oncolor-100\n          font-medium\n          font-styrene\n          transition-colors\n          hover:bg-danger-200",unstyled:""},size:{default:"h-9 px-4 py-2 rounded-lg min-w-[5rem] active:scale-[0.985] whitespace-nowrap",sm:"h-8 rounded-md px-3 text-xs min-w-[4rem] active:scale-[0.985] whitespace-nowrap",lg:"h-11 rounded-[0.6rem] px-5 min-w-[6rem] active:scale-[0.985] whitespace-nowrap",icon:"h-9 w-9 rounded-md active:scale-95 shrink-0",icon_xs:"h-6 w-6 rounded-md active:scale-95",icon_sm:"h-8 w-8 rounded-md active:scale-95",icon_lg:"h-11 w-11 rounded-[0.6rem] active:scale-95",inline:"px-0.5 rounded-[0.25rem]",unset:""},option:{rounded:"!rounded-full",prepend:"",append:""},state:{active:""}},compoundVariants:[{size:"default",option:"prepend",class:"pl-2 pr-3 gap-1"},{size:"lg",option:"prepend",class:"pl-2.5 pr-3.5 gap-1"},{size:"sm",option:"prepend",class:" pl-2 pr-2.5 gap-1"},{size:"default",option:"append",class:"pl-3 pr-2 gap-1"},{size:"lg",option:"append",class:"pl-3.5 pr-2.5 gap-1"},{size:"sm",option:"append",class:"pl-2.5 pr-2 gap-1"},{variant:"ghost",state:"active",class:"!bg-bg-400"}],defaultVariants:{variant:"primary",size:"default"}}),c=(0,l.forwardRef)((e,n)=>{let{className:t,variant:s,size:l,option:c,loading:u,href:x,target:m,prepend:b,append:f,state:p,disabled:g,children:h,...v}=e;b&&(c="prepend"),f&&(c="append");let y=(0,o.Z)(d({variant:s,size:l,option:c,state:p,className:t}),u&&"text-transparent ![text-shadow:_none]"),j=(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsx)("div",{className:(0,o.Z)("absolute inset-0 flex items-center justify-center",s&&"primary"!==s&&"flat"!==s&&"danger"!==s?"text-text-200":"text-oncolor-100"),children:(0,r.jsx)(a.Z,{size:"sm",inheritColor:!0})}),b,h,f]});return x?(0,r.jsx)(i.default,{href:x,target:m||"_self",className:y,"aria-label":v["aria-label"],children:j}):(0,r.jsx)("button",{className:y,ref:n,disabled:g||u,...v,children:j})});c.displayName="Button",n.Z=c},8564:function(e,n,t){"use strict";t.d(n,{_:function(){return d},n:function(){return c}});var r=t(27573),a=t(44115),s=t(58957),o=t.n(s),i=t(27201),l=t.n(i);let d=e=>{let{label:n,id:t,className:s}=e;return n?(0,r.jsx)("label",{htmlFor:t,className:(0,a.Z)("text-text-200 mb-1 block text-sm font-medium",s),children:n}):null},c=e=>e?l()("".concat(o()(e),"_")):l()()},75328:function(e,n,t){"use strict";t.d(n,{Q:function(){return i}});var r=t(27573),a=t(7653),s=t(8564),o=t(14555);function i(e){let{placeholder:n="Select",options:t,selected:i,onSelect:l,avoidCollisions:d=!1,id:c,label:u,align:x,className:m,textClassName:b,checkboxStyle:f="round",scroll:p,size:g,type:h,disabled:v,testId:y,matchWidth:j}=e,w=(0,a.useMemo)(()=>c||(u?(0,s.n)(u):void 0),[u,c]);return(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsx)(s._,{label:u,id:w}),(0,r.jsx)(o.fC,{label:(null==i?void 0:i.label)||n,avoidCollisions:d,align:x,className:m,scroll:p,size:g,type:h,disabled:v,testId:y,matchWidth:j,children:t.map(e=>{let{key:n,label:t,description:a,disabled:s}=e;return(0,r.jsx)(o.ck,{label:t,description:a,onSelect:()=>l(e),checkboxStyle:f||null,textClassName:b,closeOnSelect:!0,checked:(null==i?void 0:i.key)===n,size:g,disabled:s},n)})})]})}},14555:function(e,n,t){"use strict";t.d(n,{ck:function(){return h},fC:function(){return j}});var r=t(58936),a=t(27573),s=t(92472),o=t(77350),i=t(92946),l=t(30763),d=t(50018),c=t(63993),u=t(47828),x=t(44115);function m(){let e=(0,r._)(["\n  grow\n  shrink\n  pr-2\n  basis-0\n"]);return m=function(){return e},e}function b(){let e=(0,r._)(["\nw-3 h-3 opacity-50 justify-center items-center inline-flex\n"]);return b=function(){return e},e}function f(e){let{checked:n}=e;return(0,a.jsxs)("div",{className:"relative h-4 w-4",children:[(0,a.jsx)("div",{className:(0,x.Z)("bg-bg-700 absolute left-0 top-0 h-4 w-4 rounded-full border",n?"border-text-100":"border-border-100")}),n&&(0,a.jsx)("div",{className:"bg-text-100 absolute left-1 top-1 h-2 w-2 rounded-full"})]})}function p(e){let{checked:n}=e;return(0,a.jsx)("div",{className:"inline-flex h-5 w-5 items-center justify-center gap-2.5",children:n?(0,a.jsx)("div",{className:"bg-text-100 text-bg-100 inline-flex h-4 w-4 items-center justify-center rounded text-lg",children:(0,a.jsx)(o.J,{size:12})}):(0,a.jsx)("div",{className:"bg-bg-300 border-border-200 h-4 w-4 rounded border"})})}t(7653);let g=(0,u.j)("\n  self-stretch\n  px-2\n  py-3\n  rounded\n  cursor-pointer\n  justify-start\n  overflow-hidden\n  text-ellipsis\n  text-text-100\n  grid\n  grid-cols-[minmax(0,_1fr)_auto]\n  inline-flex\n  gap-4\n  items-center\n  outline-none\n  select-none\n  hover:bg-bg-500\n  hover:text-text-000\n  [&[data-disabled]]:opacity-50\n  [&[data-disabled]]:bg-bg-100\n  [&[data-disabled]]:cursor-default\n",{variants:{size:{sm:"text-xs",md:"text-sm",lg:""}},defaultVariants:{size:"md"}});function h(e){let{label:n,checked:t,description:r,checkboxStyle:s,textClassName:o,closeOnSelect:i,onSelect:d,size:c="md",...u}=e;return(0,a.jsxs)(l.ck,{className:g({size:c}),onSelect:e=>{d(),i||e.preventDefault()},...u,children:[(0,a.jsxs)("div",{className:"flex shrink grow basis-0 flex-col justify-start gap-1",children:[(0,a.jsx)("div",{className:(0,x.Z)("font-normal",o),children:n}),r&&(0,a.jsx)("div",{className:(0,x.Z)("text-text-300 text-xs",o),children:r})]}),s&&("square"===s?(0,a.jsx)(p,{checked:t}):(0,a.jsx)(f,{checked:t}))]})}let v=(0,u.j)("transition-colors\n  justify-between\n  items-center\n  inline-flex\n  text-left\n  text-text-100\n  hover:border-border-100\n  border\n  border-border-200/30\n  [&[data-disabled]]:opacity-50\n  [&[data-disabled]]:cursor-not-allowed\n  [&[data-disabled]]:!text-text-500\n  focus:ring-accent-main-200\n  focus:ring-1\n  focus:outline-none",{variants:{size:{sm:"h-8 rounded-md px-3 text-xs",md:"h-9 px-3 py-2 rounded-lg text-sm",lg:"h-11 px-3 rounded-[0.6rem]"},type:{primary:"bg-bg-000 border-border-200",secondary:"bg-bg-500 border-border-300",ghost:"text-text-200 transition-all active:bg-bg-400 hover:bg-bg-300 hover:text-text-100"}},defaultVariants:{size:"md",type:"primary"}}),y=(0,u.j)("z-50\n  flex\n  flex-col\n  border-0.5\n  border-border-300\n  rounded-lg\n  text-text-200\n  shadow-element",{variants:{size:{sm:"min-w-[13rem]",md:"min-w-[15rem]",lg:"min-w-[18rem]"},type:{primary:"bg-bg-000",secondary:"bg-bg-200",ghost:"bg-bg-200"},overflow:{scroll:"max-h-[16rem]",expand:""}},defaultVariants:{size:"md",type:"primary",overflow:"expand"}});function j(e){let{label:n,avoidCollisions:t,align:r="start",scroll:s=!0,sideOffset:o,children:u,className:x,disabled:m=!1,size:b="md",type:f="primary",testId:p,id:g,matchWidth:h}=e;return(0,a.jsxs)(l.fC,{children:[(0,a.jsx)(l.xz,{asChild:!0,disabled:m,children:(0,a.jsxs)("button",{id:g,className:v({size:b,type:f,className:x}),"data-testid":p,children:[(0,a.jsx)(w,{children:n}),(0,a.jsx)(N,{children:(0,a.jsx)(i.p,{})})]})}),(0,a.jsx)(l.Uv,{children:(0,a.jsx)(d.M,{trapped:!1,children:(0,a.jsx)(l.VY,{sideOffset:null!=o?o:4,className:y({size:b,type:f,overflow:s?"scroll":"expand"}),style:{width:h?"var(--radix-dropdown-menu-trigger-width)":void 0},avoidCollisions:t,align:r,asChild:!0,children:s?(0,a.jsxs)(c.fC,{className:"w-[100%] overflow-hidden",type:"auto",children:[(0,a.jsx)(c.l_,{className:"inline-flex max-h-[16rem] w-[100%] items-start justify-start gap-2 p-2",role:"menu",children:(0,a.jsx)("div",{className:"flex shrink grow basis-0 flex-col items-start justify-start",children:u})}),(0,a.jsx)(c.LW,{className:"h-[100%] w-2",orientation:"vertical",children:(0,a.jsx)(c.bU,{className:"bg-bg-200 rounded-full"})}),(0,a.jsx)(c.Ns,{className:"ScrollAreaCorner"})]}):(0,a.jsx)("div",{className:"flex shrink grow basis-0 flex-col items-start justify-start p-2",children:u})})})})]})}let w=s.Z.div(m()),N=s.Z.div(b())},19807:function(e,n,t){"use strict";t.d(n,{K:function(){return d}});var r=t(27573),a=t(47828),s=t(44115),o=t(7653),i=t(8564);let l=(0,a.j)("bg-bg-000\n  border\n  border-border-200\n  p-3\n  leading-5\n  rounded-lg\n  transition-colors\n  hover:border-border-100\n  placeholder:text-text-500\n  focus:border-accent-secondary-100\n  focus:ring-0\n  focus:outline-none\n  disabled:cursor-not-allowed\n  disabled:opacity-50\n  whitespace-pre-wrap\n  resize-none\n  row-start-1\n  row-end-2\n  col-start-1\n  col-end-2\n  ",{variants:{},defaultVariants:{}}),d=(0,o.forwardRef)((e,n)=>{let{id:t,className:a,rows:d,minRows:c,label:u,insetLabel:x,value:m,labelClassName:b,error:f,onChange:p,onValueChange:g,scrollable:h,...v}=e,y=(0,o.useMemo)(()=>t||(u?(0,i.n)(u):void 0),[u,t]),j=(0,s.Z)(l({className:a}),x&&"pt-7",h&&"overflow-auto",f&&"!border-danger-200/50 hover:!border-danger-200/90 focus:!border-danger-200");return(0,r.jsxs)("div",{className:"group relative",children:[(0,r.jsx)(()=>u?(0,r.jsx)(i._,{label:u,id:y,className:(0,s.Z)(b,x&&"!text-text-400 absolute left-3 top-2 !text-xs !font-bold")}):null,{}),(0,r.jsxs)("div",{className:"grid",children:[!d&&(0,r.jsx)(()=>(0,r.jsxs)("div",{"aria-hidden":"true",className:(0,s.Z)(j,"pointer-events-none invisible"),children:[m," "]}),{}),(0,r.jsx)("textarea",{id:y,ref:n,className:j,rows:c||d,value:m,onChange:e=>{null==p||p(e),null==g||g(e.target.value)},"data-1p-ignore":!0,...v})]}),f&&"string"==typeof f&&(0,r.jsx)("div",{className:"bg-danger-100 text-oncolor-100 absolute bottom-0 right-0 rounded-ee-lg rounded-ss-md px-1.5 py-1 text-right text-xs font-medium",children:f})]})});d.displayName="TextArea"},52402:function(e,n,t){"use strict";t.d(n,{o:function(){return u}});var r=t(27573);function a(e){return n=>{e.forEach(e=>{"function"==typeof e?e(n):null!==e&&(e.current=n)})}}var s=t(47828),o=t(44115),i=t(7653),l=t(8171),d=t(8564);let c=(0,s.j)("bg-bg-000\n  border\n  border-border-200\n  hover:border-border-100\n  transition-colors\n  placeholder:text-text-500\n  focus:border-accent-secondary-100\n  focus-within:!border-accent-secondary-100\n  focus:ring-0\n  focus:outline-none\n  disabled:cursor-not-allowed\n  disabled:opacity-50",{variants:{size:{default:"h-9 px-3 py-2 rounded-lg",sm:"h-8 rounded-md px-3 text-xs",lg:"h-11 px-3 rounded-[0.6rem]"},error:{true:"!border-danger-200/50 hover:!border-danger-200/90 focus:!border-danger-200"}},defaultVariants:{size:"default"}}),u=(0,i.forwardRef)((e,n)=>{let{autoFocus:t,className:s,id:u,label:x,secondaryLabel:m,size:b,error:f,type:p,value:g,currencySymbol:h="$",labelClassName:v,onChange:y,onValueChange:j,automaticallyFocusAndSelect:w,prepend:N,..._}=e,k=c({size:b,error:f,className:s}),z=(0,i.useMemo)(()=>u||(x&&"string"==typeof x?(0,d.n)(x):(0,d.n)()),[x,u]),C=(0,i.useRef)(null);(0,i.useEffect)(()=>{if(w){var e,n;null===(e=C.current)||void 0===e||e.focus(),null===(n=C.current)||void 0===n||n.select()}},[]);let{defaultValue:Z,step:V,...F}=_,S="currency"!==p&&!N;return(0,r.jsxs)(r.Fragment,{children:[x&&(0,r.jsx)(d._,{label:x,id:z,className:v}),N&&(0,r.jsxs)("div",{className:(0,o.Z)(k,"inline-flex cursor-text items-stretch gap-2"),onClick:()=>{var e;return null===(e=C.current)||void 0===e?void 0:e.focus()},children:[(0,r.jsx)("div",{className:"flex items-center",children:N}),(0,r.jsx)("input",{id:z,autoFocus:t,type:p,className:"placeholder:text-text-500 m-0 bg-transparent p-0 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",ref:a([n,C]),value:g,onChange:e=>{null==y||y(e),null==j||j(e.target.value)},..._})]}),"currency"===p&&(0,r.jsx)(l.Z,{id:z,ref:n,autoFocus:t,prefix:h,placeholder:h,className:k,value:g,onValueChange:e=>null==j?void 0:j(e),allowDecimals:!1,...F}),S&&(0,r.jsx)("input",{id:z,autoFocus:t,type:p,className:k,ref:a([n,C]),value:g,onChange:e=>{null==y||y(e),null==j||j(e.target.value)},..._}),m&&(0,r.jsx)("div",{className:"text-text-400 mt-1 text-sm",children:m})]})});u.displayName="TextInput"},46441:function(e,n,t){"use strict";t.d(n,{Wr:function(){return s},Q:function(){return l.Q},sY:function(){return u},Ph:function(){return m},Kx:function(){return b.K},oi:function(){return f.o}});var r=t(27573);t(57163),t(27101);var a=t(14579);function s(e){let{onChange:n,value:t}=e;return(0,r.jsx)(a.Z,{onChange:n,value:t,dayPlaceholder:"DD",monthPlaceholder:"MM",yearPlaceholder:"YYYY",disableCalendar:!0,clearIcon:null})}var o=t(8564),i=t(7653);t(14555);var l=t(75328),d=t(16777),c=t(44115);let u=e=>{let{size:n="base",options:t,onSelect:a,initialKey:s,testId:o}=e,[l,u]=(0,i.useState)(s);return(0,r.jsx)(d.fC,{type:"single",value:l,className:"bg-bg-300 border-bg-300 inline-flex rounded-full border",onValueChange:e=>{""!==e&&(u(e),null==a||a(e))},children:t.map(e=>(0,r.jsx)(d.ck,{value:e.key,className:(0,c.Z)('text-text-500 data-[state="on"]:text-text-100 border-0.5 data-[state="on"]:bg-bg-100 data-[state="on"]:border-border-300 flex items-center rounded-full border-transparent font-medium',"sm"===n&&"gap-1 px-2.5 text-xs","md"===n&&"gap-1 py-1 pl-2.5 pr-2.5 text-xs","base"===n&&"gap-1.5 py-2 pl-3 pr-3 text-sm"),"data-testid":"".concat(o,"-").concat(e.key),children:e.label},e.key))})},x=(0,t(47828).j)("block\n  text-text-200\n  py-0\n  transition-colors\n  focus:ring-accent-main-200\n  focus:border-accent-main-200",{variants:{size:{sm:"h-8 pl-3 pr-8 text-sm tracking-tight rounded-md",normal:"h-9 pl-3 pr-6.5 rounded-lg",lg:"h-11 pl-4 pr-6.5 rounded-[0.6rem]"},variant:{outline:"bg-bg-000 border border-border-200 hover:border-border-100 shadow bg-bg-000",ghost:"bg-transparent border-none shadow-none cursor-pointer",danger:"bg-danger-900 text-danger-100 shadow border-danger-200 hover:border-danger-200 focus:border-danger-200"}},defaultVariants:{size:"normal",variant:"outline"}}),m=(0,i.forwardRef)((e,n)=>{let{size:t,variant:a,className:s,label:l,id:d,...c}=e,u=(0,i.useMemo)(()=>d||(l?(0,o.n)(l):void 0),[l,d]);return(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsx)(o._,{label:l,id:u}),(0,r.jsx)("select",{id:u,ref:n,className:x({size:t,className:s,variant:a}),...c})]})});m.displayName="Select";var b=t(19807),f=t(52402)},2715:function(e,n,t){"use strict";var r=t(27573),a=t(44115),s=t(7653);n.Z=(0,s.memo)(function(e){let{size:n="md",fullscreen:t=!1,inheritColor:s}=e;return(0,r.jsx)("div",{className:(0,a.Z)(t?"fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2":"m-auto"),children:(0,r.jsx)("div",{className:(0,a.Z)("sm"===n&&"h-4 w-4 border-2","md"===n&&"h-20 w-20 border-8",s?"border-current":"border-border-200","text-secondary inline-block animate-spin rounded-full border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"),role:"status",children:(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})})})})},92472:function(e,n,t){"use strict";var r=t(44115),a=t(7653);function s(e){return function(n){for(var t=arguments.length,s=Array(t>1?t-1:0),o=1;o<t;o++)s[o-1]=arguments[o];let i=n.map(e=>e.replace(/\n/g,"").trim()),l=a.forwardRef((n,t)=>{let{className:o,...l}=n,d=s.map(e=>"function"==typeof e?e(n):e);return a.createElement(e,{...l,ref:t,className:(0,r.Z)(i,d,"string"==typeof o?o:"")})});return l.displayName="string"==typeof e?e:e.displayName,l}}function o(e){return s(e)}o.a=s("a"),o.aside=s("aside"),o.button=s("button"),o.main=s("main"),o.div=s("div"),o.form=s("form"),o.nav=s("nav"),o.fieldset=s("fieldset"),o.header=s("header"),o.h1=s("h1"),o.h2=s("h2"),o.h3=s("h3"),o.h4=s("h4"),o.h5=s("h5"),o.th=s("th"),o.td=s("td"),o.input=s("input"),o.label=s("label"),o.p=s("p"),o.section=s("section"),o.span=s("span"),o.li=s("li"),n.Z=o},27101:function(){}}]);