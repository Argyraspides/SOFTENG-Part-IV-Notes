(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8494],{20549:function(){},43290:function(){},83041:function(e,n,t){"use strict";t.d(n,{Ne:function(){return g},OJ:function(){return d},WE:function(){return m},uC:function(){return f}});var r=t(28648),i=t(43316),a=t(56646),o=t(2645),u=t(84983),s=t(7653),c=t(11492),l=t(68571);function d(){let{frontendPrivateApiUrl:e}=(0,c.useConfiguration)();return(0,s.useCallback)(async function(n){var t,r;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await fetch("".concat(e).concat(n),{...i,headers:{"anthropic-client-sha":null!==(t=l.env.RELEASE_SHA)&&void 0!==t?t:"unknown","anthropic-client-version":null!==(r=l.env.RELEASE_VERSION)&&void 0!==r?r:"unknown",...i.headers},credentials:"include"})},[e])}function p(e,n){let t=d();return(0,s.useCallback)(async(a,o)=>{let u=await t(a,o),s=await u.text(),c={error:{type:"api_error",message:s}};try{("DELETE"!==o.method||s.length>0)&&(c=JSON.parse(s))}catch(e){(0,i.uT)("Got invalid JSON from NextJS response",{extra:{text:s,status:u.status}})}if(!u.ok&&n!==u.status)throw(0,r.fT)(u.status,c,e,u.headers);return c},[t,n,e])}let f=(e,n,t)=>{let{transformVariables:r,enabled:i=!0,...o}=t||{},u=p("Mutation error"),{mutate:c,...l}=(0,a.useMutation)({mutationFn:async t=>{let i;i="function"==typeof e?e(t):e;let a=r?r(t):t;return await u(i,{method:n,headers:{"Content-Type":"application/json"},body:a?JSON.stringify(a):void 0})},...o});return{mutate:(0,s.useCallback)(e=>{i&&c(e)},[c,i]),...l}},m=(e,n,t)=>{let r=p("Query error",null==n?void 0:n.additionalPermittedStatusCode);return(0,o.useQuery)({queryKey:[e,t],queryFn:async()=>{let n=await r(e,{method:"GET",headers:{"Content-Type":"application/json"}});return t?t(n):n},staleTime:3e5,refetchOnWindowFocus:!1,retry:!1,...n})};function g(e,n,t,r){let i=(0,u.useQueryClient)(),{queryKey:a,...o}=r;return f(e,n,{async onMutate(e){await i.cancelQueries({queryKey:a});let n=i.getQueryData(a);return i.setQueryData(a,n=>t(e,n)),{previousValue:n}},onError(e,n,t){(null==t?void 0:t.previousValue)&&i.setQueryData(a,t.previousValue)},...o})}},11492:function(e,n,t){"use strict";t.r(n),t.d(n,{ConfigurationProvider:function(){return o},useConfiguration:function(){return u},useIsClaudeDot:function(){return s}});var r=t(27573),i=t(7653);let a=(0,i.createContext)(void 0),o=e=>{let{config:n,children:t}=e;return(0,r.jsx)(a.Provider,{value:n,children:t})},u=()=>{let e=(0,i.useContext)(a);if(!e)throw Error("useConfiguration must be called from within ConfigurationProvider");return e},s=()=>{let{applicationType:e}=u();return"claude-dot"===e}},23532:function(e,n,t){"use strict";t.r(n),t.d(n,{SSRCookiesProvider:function(){return c},browserCookieStore:function(){return s},useCookies:function(){return l}});var r=t(27573),i=t(7653);function a(e){return e.endsWith(".anthropic.com")?".anthropic.com":"claude.ai"===e||e.endsWith(".claude.ai")?".claude.ai":e.endsWith(".staging.ant.dev")?".".concat(e):void 0}let o=(0,i.createContext)(null),u="Thu, 01 Jan 1970 00:00:01 GMT",s={get:e=>{let n=document.cookie.split(";");for(let t=0;t<n.length;t++){let[r,i]=n[t].trim().split("=");if(e===r)return decodeURIComponent(i)}},set:function(e,n){var t;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=["".concat(e,"=").concat(encodeURIComponent(n)),"max-age=".concat(null!==(t=r.maxAgeSeconds)&&void 0!==t?t:31536e3),"samesite=lax","secure","path=/"],o=a(window.location.hostname);o&&(document.cookie="".concat(e,"=[removed]; expires=").concat(u,"; samesite=lax; secure; path=/"),i.push("domain=".concat(o))),document.cookie=i.join("; ")},delete:e=>{let n=["".concat(e,"=[removed]"),"expires=".concat(u),"samesite=lax","secure"],t=a(window.location.hostname);t&&n.push("domain=".concat(t)),document.cookie=n.join("; ")}},c=e=>{let{value:n,children:t}=e,a=(0,i.useMemo)(()=>{if(!n)return{get:()=>void 0,set:()=>void 0,delete:()=>void 0};let e=Object.fromEntries(n.map(e=>[e.name,e.value]));return{get:n=>e[n],set:e=>{throw Error("Cannot set cookies in server-rendered client component. Attempting to set ".concat(e))},delete:e=>{throw Error("Cannot delete cookies in server-rendered client component. Attempting to delete ".concat(e))}}},[n]);return(0,r.jsx)(o.Provider,{value:a,children:t})},l=()=>((0,i.useContext)(o),s)},16096:function(e,n,t){"use strict";t.r(n),t.d(n,{CurrentAccountContext:function(){return v},CurrentAccountProvider:function(){return _},useActiveMembership:function(){return I},useBootstrapQuery:function(){return w},useCanManageBilling:function(){return O},useCanUpgradeToPro:function(){return A},useCanUpgradeToTeam:function(){return S},useCurrentAccount:function(){return b},useHasCapability:function(){return C},useHasPaidAccount:function(){return x},useHasProSubscription:function(){return y},useHasPublicEmailProvider:function(){return j},useHasRaven:function(){return E},useIsEnterprise:function(){return P},useIsReadOnlyMode:function(){return T},usePaidAccountTier:function(){return k},useUsagePaused:function(){return M}});var r=t(27573),i=t(28648),a=t(14983),o=t(87050),u=t(35146),s=t(88337),c=t(81054),l=t.n(c),d=t(7653),p=t(80248),f=t(83041),m=t(11492),g=t(23532);let v=(0,d.createContext)(null),_=e=>{let{children:n}=e,t=(0,g.useCookies)(),[o,u]=(0,d.useState)(),{data:s,error:c,isFetching:p,refetch:f}=w();(0,d.useEffect)(()=>{o&&t.set(a.cn.LAST_ACTIVE_ORG,o)},[o,t]);let _=(0,m.useIsClaudeDot)(),h=(0,d.useMemo)(()=>{let e;if(!(null==s?void 0:s.account))return;let n=_?"chat":"api",r=s.account.memberships.map(e=>e.organization).filter(e=>e.capabilities.includes(n));if(o){let e=r.find(e=>e.uuid===o);if(e)return e}if(!e){let n=t.get(a.cn.LAST_ACTIVE_ORG);e=r.find(e=>e.uuid===n)}return e||(e=l()(r,"name")),e&&u(e.uuid),e},[s,o,_,t]),b=(0,d.useMemo)(()=>{var e;let n=c instanceof i.Hx&&403===c.statusCode||!(null==s?void 0:s.account);return{account:null==s?void 0:s.account,activeOrganization:h,statsig:null==s?void 0:s.statsig,intercomAccountHash:null==s?void 0:s.intercom_account_hash,messageLimit:null==s?void 0:null===(e=s.messageLimits)||void 0===e?void 0:e[(null==h?void 0:h.uuid)||""],setActiveOrganizationUUID:u,isLoading:p,isLoggedOut:!p&&n,refetch:async()=>{var e;return null===(e=(await f()).data)||void 0===e?void 0:e.account}}},[s,c,h,p,f]);return(0,r.jsx)(v.Provider,{value:b,children:n})},h=e=>e&&"type"in e?null:e,w=()=>{let{data:e,refetch:n,...t}=(0,f.WE)("/api/bootstrap",{queryKey:[u.aY],staleTime:1/0,retryOnMount:!1,additionalPermittedStatusCode:403}),r=(0,d.useCallback)(async()=>{let e=await n();return{...e,data:h(e.data)}},[n]);return{...t,data:h(e),refetch:r}},b=()=>{let e=(0,d.useContext)(v);if(!e)throw Error("Must call inside CurrentAccountProvider");return e},C=e=>{let{activeOrganization:n}=b();return!!n&&n.capabilities.includes(e)},y=()=>C("claude_pro"),E=()=>C("raven"),k=()=>{let e=E(),n=y();return e?"raven":n?"claude_pro":"free"},x=()=>{switch(k()){case"claude_pro":case"raven":return!0;case"free":return!1}},A=()=>"free"===k(),S=()=>{let e=k(),n=j();switch(e){case"free":case"claude_pro":return!n;case"raven":return!1}},T=()=>{let{value:e}=(0,o.F)("read_only_mode");return e},O=()=>{let{account:e,activeOrganization:n}=b(),t=(0,s.Di)(e,n,s.YB.BillingManage);return!E()||t},M=()=>{let{activeOrganization:e}=b();return null!=e&&!!e.billable_usage_paused_until&&new Date(e.billable_usage_paused_until)>new Date},j=()=>{let{account:e}=b(),{config:n}=(0,p.useConfig)("public_email_domains");return n.get("domains",[]).some(n=>null==e?void 0:e.email_address.endsWith("@".concat(n)))},P=e=>{let{activeOrganization:n}=b();return(null==(e=e||n)?void 0:e.raven_type)==="enterprise"},I=()=>{let{account:e,activeOrganization:n}=b();return null==e?void 0:e.memberships.find(e=>e.organization.uuid===(null==n?void 0:n.uuid))}},28648:function(e,n,t){"use strict";t.d(n,{Hx:function(){return r},fT:function(){return i}});class r extends Error{constructor(e,n,t,r,i){super(e),this.type=n,this.statusCode=t,this.extra=r,this.errorCode=i}}function i(e,n,t,i){if(n&&"object"==typeof n&&"error"in n){let{message:t,type:a,details:o,...u}=n.error;u.headers=i;let s=null;return o&&"object"==typeof o&&"error_code"in o&&"string"==typeof o.error_code&&(s=o.error_code),new r(t,a,e,u,s)}return new r(t,"api_error",e,n||{})}},14983:function(e,n,t){"use strict";var r,i;t.d(n,{cn:function(){return r},gV:function(){return u},jC:function(){return c},jW:function(){return l},m7:function(){return o},ox:function(){return s},pz:function(){return a}});let a="https://support.anthropic.com/en/articles/8602283-does-claude-ai-have-any-message-limits",o="https://support.anthropic.com/en/articles/8325612-does-claude-pro-have-any-usage-limits",u="https://support.anthropic.com/en/articles/8324991-about-claude-pro-usage",s="https://support.anthropic.com/en/articles/9266767-what-is-the-claude-team-plan",c="https://support.anthropic.com/en/articles/7996848-how-large-is-claude-s-context-window",l="https://support.anthropic.com/en/articles/8106465-our-approach-to-user-safety";(i=r||(r={})).LAST_ACTIVE_ORG="lastActiveOrg",i.COLOR_MODE="CH-prefers-color-scheme",i.CONSENT_PREFERENCES="anthropic-consent-preferences",i.SIDEBAR_PINNED="user-sidebar-pinned",i.RETURN_TO="return-to",i.JOIN_TOKEN="join-token",i.LEGAL_ACCEPTANCES="legal-acceptances",i.SESSION_KEY="sessionKey",i.PENDING_LOGIN="pendingLogin",i.SSO_STATE="ssoState"},87050:function(e,n,t){"use strict";t.d(n,{F:function(){return i}});var r=t(80248);let i=e=>(0,r.useGate)(e)},35146:function(e,n,t){"use strict";t.d(n,{$T:function(){return b},AI:function(){return S},BB:function(){return m},CA:function(){return N},Ep:function(){return i},FU:function(){return D},I8:function(){return u},I_:function(){return g},M9:function(){return L},OM:function(){return B},Os:function(){return V},PB:function(){return O},QU:function(){return h},Qn:function(){return f},RK:function(){return d},UD:function(){return I},VH:function(){return j},aY:function(){return c},az:function(){return R},eW:function(){return _},ec:function(){return r},gi:function(){return C},gs:function(){return l},i4:function(){return z},je:function(){return p},l3:function(){return P},ld:function(){return M},lx:function(){return k},mm:function(){return v},n$:function(){return E},ph:function(){return o},sB:function(){return y},sM:function(){return w},sf:function(){return s},tt:function(){return x},tv:function(){return a},zb:function(){return T},zy:function(){return A}});let r="account_profile",i="chat_message_debug_info",a="chat_conversation_list",o="chat_conversation",u="chat_conversation_tree",s="chat_failed_stream_retry",c="current_account",l="current_account_deletable",d="invoice_list",p="upcoming_invoice",f="model_config",m="org_invites",g="org_members",v="org",_="account_statsig",h="subscription_details",w="subscription_status",b="project",C="project_list",y="artifacts_list",E="top_projects",k="project_list_conversations",x="project_doc",A="project_doc_list",S="project_sync_list",T="chat_snapshot_list",O="chat_snapshot_list_all",M="chat_snapshot",j="activity_feed",P="project_accounts_list",I="members_limit",N="enterprise_auth/domains",R="enterprise_auth/sso_settings",D="sync_org_settings",L="sync_gh_installs",V="sync_gh_auth_status",z="sync_sources_list",B="sync_source"},88337:function(e,n,t){"use strict";var r,i;t.d(n,{Di:function(){return o},Fs:function(){return u},YB:function(){return r}}),(i=r||(r={})).MembersView="members:view",i.MembersManage="members:manage",i.ApiView="api:view",i.ApiManage="api:manage",i.IntegrationsManage="integrations:manage",i.BillingView="billing:view",i.BillingManage="billing:manage",i.OrganizationManage="organization:manage",i.InvoicesView="invoices:view",i.UsageView="usage:view",i.ExportData="export:data",i.OwnersManage="owners:manage",i.WorkspacesView="workspaces:view",i.WorkspacesManage="workspaces:manage",i.EnterpriseAuthManage="enterprise_auth:manage";let a={user:["members:view"],developer:["members:view","api:view","api:manage","usage:view","workspaces:view","workspaces:manage"],billing:["members:view","billing:view","billing:manage","usage:view","invoices:view","workspaces:view"],admin:["members:view","members:manage","api:view","api:manage","integrations:manage","billing:view","billing:manage","usage:view","invoices:view","organization:manage","export:data","workspaces:view","workspaces:manage"],owner:["members:view","members:manage","api:view","api:manage","integrations:manage","billing:view","billing:manage","usage:view","invoices:view","organization:manage","owners:manage","workspaces:view","workspaces:manage","enterprise_auth:manage"],primary_owner:["members:view","members:manage","api:view","api:manage","integrations:manage","billing:view","billing:manage","usage:view","invoices:view","organization:manage","export:data","owners:manage","workspaces:view","workspaces:manage","enterprise_auth:manage"]},o=(e,n,t)=>!!e&&!!n&&u(e,n,t),u=(e,n,t)=>{var r;let i=null===(r=e.memberships.find(e=>e.organization.uuid===n.uuid))||void 0===r?void 0:r.role;return!!i&&a[i].includes(t)}}}]);