import{L as E,H as r,M as c,X as re,r as C,Z as He,g as L,B as Re,$ as ie,h as Y,a0 as ce,m as W,Y as Le,a1 as Ee,v as K,V as X,a2 as de,a3 as _e,T as ye,a4 as Oe,a5 as Ne,a6 as je,a7 as te,a8 as De,a9 as Ae,Q as me,R as V,aa as Fe,ab as Me,_ as be,o as P,ac as D,w as p,O as Qe,a as w,b as g,d as H,N as xe,P as ze,ad as qe,c as Z,ae as G,af as le,t as ne}from"./CsrzELu6.js";import{u as Ve,a as We,b as ae,v as ve,c as Je,d as Ue,p as ge,e as Ke,f as oe,g as Xe,h as Ye,i as Ze,j as Ge,k as et,r as fe,s as tt,l as nt,_ as at}from"./lxTSR-Hu.js";import{s as lt,g as ot}from"./CKTKrLtg.js";import{c as he}from"./B1frLPgC.js";import{u as Se,a as we}from"./3NNwcD0d.js";import{_ as Ce,a as $e}from"./BatzsiB6.js";import{b as rt,c as it,d as st,u as ut}from"./Bd3whUDi.js";import{_ as ct}from"./BkF2PHNZ.js";import"./zjdVGI5d.js";const dt=["top","middle","bottom"],_t=E({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>dt.includes(e)}},setup(e,{slots:l}){const n=r(()=>e.align!==void 0?{verticalAlign:e.align}:null),a=r(()=>{const t=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(t!==void 0?` text-${t}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>c("div",{class:a.value,style:n.value,role:"status","aria-label":e.label},re(l.default,e.label!==void 0?[e.label]:[]))}});let U=0;const mt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},vt=["update:fullscreen","fullscreen"];function gt(){const e=W(),{props:l,emit:n,proxy:a}=e;let t,i,u;const o=C(!1);He(e)===!0&&L(()=>a.$route.fullPath,()=>{l.noRouteFullscreenExit!==!0&&m()}),L(()=>l.fullscreen,v=>{o.value!==v&&d()}),L(o,v=>{n("update:fullscreen",v),n("fullscreen",v)});function d(){o.value===!0?m():_()}function _(){o.value!==!0&&(o.value=!0,u=a.$el.parentNode,u.replaceChild(i,a.$el),document.body.appendChild(a.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),t={handler:m},ce.add(t))}function m(){o.value===!0&&(t!==void 0&&(ce.remove(t),t=void 0),u.replaceChild(a.$el,i),o.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),a.$el.scrollIntoView!==void 0&&setTimeout(()=>{a.$el.scrollIntoView()})))}return Re(()=>{i=document.createElement("span")}),ie(()=>{l.fullscreen===!0&&_()}),Y(m),Object.assign(a,{toggleFullscreen:d,setFullscreen:_,exitFullscreen:m}),{inFullscreen:o,toggleFullscreen:d}}const ft=["top","right","bottom","left"],ht=["regular","flat","outline","push","unelevated"],pt=E({name:"QCarousel",props:{...Se,...rt,...mt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ht.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>ft.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...vt,...it],setup(e,{slots:l}){const{proxy:{$q:n}}=W(),a=we(e,n);let t=null,i;const{updatePanelsList:u,getPanelContent:o,panelDirectives:d,goToPanel:_,previousPanel:m,nextPanel:v,getEnabledPanels:b,panelIndex:y}=st(),{inFullscreen:k}=gt(),S=r(()=>k.value!==!0&&e.height!==void 0?{height:e.height}:{}),T=r(()=>e.vertical===!0?"vertical":"horizontal"),A=r(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),F=r(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(k.value===!0?" fullscreen":"")+(a.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${T.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${A.value}`:"")),M=r(()=>{const h=[e.prevIcon||n.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||n.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&n.lang.rtl===!0?h.reverse():h}),Q=r(()=>e.navigationIcon||n.iconSet.carousel.navigationIcon),x=r(()=>e.navigationActiveIcon||Q.value),O=r(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));L(()=>e.modelValue,()=>{e.autoplay&&$()}),L(()=>e.autoplay,h=>{h?$():t!==null&&(clearTimeout(t),t=null)});function $(){const h=Ee(e.autoplay)===!0?Math.abs(e.autoplay):5e3;t!==null&&clearTimeout(t),t=setTimeout(()=>{t=null,h>=0?v():m()},h)}ie(()=>{e.autoplay&&$()}),Y(()=>{t!==null&&clearTimeout(t)});function z(h,B){return c("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${h} q-carousel__navigation--${A.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[c("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},b().map(B))])}function N(){const h=[];if(e.navigation===!0){const B=l["navigation-icon"]!==void 0?l["navigation-icon"]:f=>c(K,{key:"nav"+f.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${f.active===!0?"":"in"}active`,...f.btnProps,onClick:f.onClick}),s=i-1;h.push(z("buttons",(f,I)=>{const J=f.props.name,R=y.value===I;return B({index:I,maxIndex:s,name:J,active:R,btnProps:{icon:R===!0?x.value:Q.value,size:"sm",...O.value},onClick:()=>{_(J)}})}))}else if(e.thumbnails===!0){const B=e.controlColor!==void 0?` text-${e.controlColor}`:"";h.push(z("thumbnails",s=>{const f=s.props;return c("img",{key:"tmb#"+f.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${f.name===e.modelValue?"":"in"}active`+B,src:f.imgSrc||f["img-src"],onClick:()=>{_(f.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&h.push(c("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${T.value} absolute flex flex-center`},[c(K,{icon:M.value[0],...O.value,onClick:m})])),(e.infinite===!0||y.value<i-1)&&h.push(c("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${T.value} absolute flex flex-center`},[c(K,{icon:M.value[1],...O.value,onClick:v})]))),re(l.control,h)}return()=>(i=u(l),c("div",{class:F.value,style:S.value},[Le("div",{class:"q-carousel__slides-container"},o(),"sl-cont",e.swipeable,()=>d.value)].concat(N())))}}),yt=E({name:"QCarouselSlide",props:{...ut,imgSrc:String},setup(e,{slots:l}){const n=r(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>c("div",{class:"q-carousel__slide",style:n.value},X(l.default))}}),bt=E({name:"QTooltip",inheritAttrs:!1,props:{...Ve,...We,...ae,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...ae.transitionShow,default:"jump-down"},transitionHide:{...ae.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:ve},self:{type:String,default:"top middle",validator:ve},offset:{type:Array,default:()=>[14,14],validator:Je},scrollTarget:lt,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Ue],setup(e,{slots:l,emit:n,attrs:a}){let t,i;const u=W(),{proxy:{$q:o}}=u,d=C(null),_=C(!1),m=r(()=>ge(e.anchor,o.lang.rtl)),v=r(()=>ge(e.self,o.lang.rtl)),b=r(()=>e.persistent!==!0),{registerTick:y,removeTick:k}=Ke(),{registerTimeout:S}=oe(),{transitionProps:T,transitionStyle:A}=Xe(e),{localScrollTarget:F,changeScrollEvent:M,unconfigureScrollTarget:Q}=Ye(e,se),{anchorEl:x,canShow:O,anchorEvents:$}=Ze({showing:_,configureAnchorEl:Te}),{show:z,hide:N}=Ge({showing:_,canShow:O,handleShow:f,handleHide:I,hideOnRouteChange:b,processOnMount:!0});Object.assign($,{delayShow:ke,delayHide:Pe});const{showPortal:h,hidePortal:B,renderPortal:s}=et(u,d,Ie,"tooltip");if(o.platform.is.mobile===!0){const q={anchorEl:x,innerRef:d,onClickOutside(j){return N(j),j.target.classList.contains("q-dialog__backdrop")&&Oe(j),!0}},ee=r(()=>e.modelValue===null&&e.persistent!==!0&&_.value===!0);L(ee,j=>{(j===!0?nt:fe)(q)}),Y(()=>{fe(q)})}function f(q){h(),y(()=>{i=new MutationObserver(()=>R()),i.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),R(),se()}),t===void 0&&(t=L(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,R)),S(()=>{h(!0),n("show",q)},e.transitionDuration)}function I(q){k(),B(),J(),S(()=>{B(!0),n("hide",q)},e.transitionDuration)}function J(){i!==void 0&&(i.disconnect(),i=void 0),t!==void 0&&(t(),t=void 0),Q(),de($,"tooltipTemp")}function R(){tt({targetEl:d.value,offset:e.offset,anchorEl:x.value,anchorOrigin:m.value,selfOrigin:v.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ke(q){if(o.platform.is.mobile===!0){he(),document.body.classList.add("non-selectable");const ee=x.value,j=["touchmove","touchcancel","touchend","click"].map(ue=>[ee,ue,"delayHide","passiveCapture"]);_e($,"tooltipTemp",j)}S(()=>{z(q)},e.delay)}function Pe(q){o.platform.is.mobile===!0&&(de($,"tooltipTemp"),he(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),S(()=>{N(q)},e.hideDelay)}function Te(){if(e.noParentEvent===!0||x.value===null)return;const q=o.platform.is.mobile===!0?[[x.value,"touchstart","delayShow","passive"]]:[[x.value,"mouseenter","delayShow","passive"],[x.value,"mouseleave","delayHide","passive"]];_e($,"anchor",q)}function se(){if(x.value!==null||e.scrollTarget!==void 0){F.value=ot(x.value,e.scrollTarget);const q=e.noParentEvent===!0?R:N;M(F.value,q)}}function Be(){return _.value===!0?c("div",{...a,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",a.class],style:[a.style,A.value],role:"tooltip"},X(l.default)):null}function Ie(){return c(ye,T.value,Be)}return Y(J),Object.assign(u.proxy,{updatePosition:R}),s}}),xt=E({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=r(()=>parseInt(e.lines,10)),a=r(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=r(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>c("div",{style:t.value,class:a.value},X(l.default))}}),qt={ratio:[String,Number]};function St(e,l){return r(()=>{const n=Number(e.ratio||(l!==void 0?l.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}const wt=1.7778,Ct=E({name:"QImg",props:{...qt,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:wt},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:l,emit:n}){const a=C(e.initialRatio),t=St(e,a),i=W(),{registerTimeout:u,removeTimeout:o}=oe(),{registerTimeout:d,removeTimeout:_}=oe(),m=r(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),v=r(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),b=[C(null),C(m.value)],y=C(0),k=C(!1),S=C(!1),T=r(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),A=r(()=>({width:e.width,height:e.height})),F=r(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),M=r(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function Q(){if(_(),e.loadingShowDelay===0){k.value=!0;return}d(()=>{k.value=!0},e.loadingShowDelay)}function x(){_(),k.value=!1}function O({target:s}){te(i)===!1&&(o(),a.value=s.naturalHeight===0?.5:s.naturalWidth/s.naturalHeight,$(s,1))}function $(s,f){f===1e3||te(i)===!0||(s.complete===!0?z(s):u(()=>{$(s,f+1)},50))}function z(s){te(i)!==!0&&(y.value=y.value^1,b[y.value].value=null,x(),s.getAttribute("__qerror")!=="true"&&(S.value=!1),n("load",s.currentSrc||s.src))}function N(s){o(),x(),S.value=!0,b[y.value].value=v.value,b[y.value^1].value=m.value,n("error",s)}function h(s){const f=b[s].value,I={key:"img_"+s,class:F.value,style:M.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...f};return y.value===s?Object.assign(I,{class:I.class+"current",onLoad:O,onError:N}):I.class+="loaded",c("div",{class:"q-img__container absolute-full",key:"img"+s},c("img",I))}function B(){return k.value===!1?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},X(l[S.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},l.loading!==void 0?l.loading():e.noSpinner===!0?void 0:[c(je,{color:e.spinnerColor,size:e.spinnerSize})])}{let s=function(){L(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,f=>{o(),S.value=!1,f===null?(x(),b[y.value^1].value=m.value):Q(),b[y.value].value=f},{immediate:!0})};Ne.value===!0?ie(s):s()}return()=>{const s=[];return t.value!==null&&s.push(c("div",{key:"filler",style:t.value})),b[0].value!==null&&s.push(h(0)),b[1].value!==null&&s.push(h(1)),s.push(c(ye,{name:"q-transition--fade"},B)),c("div",{key:"main",class:T.value,style:A.value,role:"img","aria-label":e.alt},s)}}}),$t={xs:2,sm:4,md:6,lg:10,xl:14};function pe(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const kt=E({name:"QLinearProgress",props:{...Se,...De,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=W(),a=we(e,n.$q),t=Ae(e,$t),i=r(()=>e.indeterminate===!0||e.query===!0),u=r(()=>e.reverse!==e.query),o=r(()=>({...t.value!==null?t.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),d=r(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),_=r(()=>pe(e.buffer!==void 0?e.buffer:1,u.value,n.$q)),m=r(()=>`with${e.instantFeedback===!0?"out":""}-transition`),v=r(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${m.value} q-linear-progress__track--${a.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),b=r(()=>pe(i.value===!0?1:e.value,u.value,n.$q)),y=r(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${m.value} q-linear-progress__model--${i.value===!0?"in":""}determinate`),k=r(()=>({width:`${e.value*100}%`})),S=r(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${m.value}`);return()=>{const T=[c("div",{class:v.value,style:_.value}),c("div",{class:y.value,style:b.value})];return e.stripe===!0&&i.value===!1&&T.push(c("div",{class:S.value,style:k.value})),c("div",{class:d.value,style:o.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},re(l.default,T))}}}),Pt=E({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:n}}=W(),a=me(Fe,V);if(a===V)return console.error("QPage needs to be a deep child of QLayout"),V;if(me(Me,V)===V)return console.error("QPage needs to be child of QPageContainer"),V;const i=r(()=>{const o=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const d=a.isContainer.value===!0?a.containerHeight.value:n.screen.height;return e.styleFn(o,d)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-o+"px":n.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":n.screen.height-o+"px"}}),u=r(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>c("main",{class:u.value,style:i.value},X(l.default))}}),Tt={},Bt={class:"flex q-pa-md"},It=w("div",null,[w("b",null,"Fecha:"),H(" 18-09-2024")],-1),Ht=w("b",null,"Hora Aproximada:",-1);function Rt(e,l){const n=Ct,a=at,t=xt,i=xe,u=_t,o=bt,d=K,_=kt,m=Ce,v=$e,b=ze;return P(),D(v,{style:{}},{default:p(()=>[Qe((P(),D(m,{clickable:""},{default:p(()=>[w("section",Bt,[g(a,{avatar:""},{default:p(()=>[g(n,{src:"https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",ratio:1/1,"spinner-color":"primary","spinner-size":"82px"})]),_:1}),g(a,null,{default:p(()=>[g(t,{class:"text-subtitle1"},{default:p(()=>[H("Sisben")]),_:1}),g(t,{class:"flex",caption:""},{default:p(()=>[g(i,{name:"event",class:"q-mr-xs"}),It]),_:1}),g(t,{caption:""},{default:p(()=>[g(i,{name:"access_alarms",class:"q-mr-xs"}),Ht,H(" 03:00")]),_:1}),g(t,{caption:"",class:"flex q-pt-md"},{default:p(()=>[g(d,{flat:"",color:"purple",round:"",icon:"person",class:"q-ml-md"},{default:p(()=>[g(u,{color:"red",floating:""},{default:p(()=>[H("4")]),_:1}),g(o,null,{default:p(()=>[H(" Ahora mismo hay 4 personas en la cola ")]),_:1})]),_:1}),g(d,{flat:"",color:"purple",round:"",icon:"notifications",class:"q-ml-md"},{default:p(()=>[g(u,{color:"red",floating:""},{default:p(()=>[H("4")]),_:1}),g(o,null,{default:p(()=>[H(" Tienes 4 notificaciones ")]),_:1})]),_:1})]),_:1})]),_:1})]),g(_,{indeterminate:"",color:"primary"})]),_:1})),[[b]])]),_:1})}const Lt=be(Tt,[["render",Rt]]),Et={class:"row wrap",style:{"flex-wrap":"nowrap",width:"100%"}},Ot=qe({__name:"StatusAppointment",setup(e){const l=C([{id:1,name:"Cita 1",date:"2021-10-10",time:"10:00",status:"pending"},{id:2,name:"Cita 2",date:"2021-10-10",time:"10:00",status:"pending"},{id:3,name:"Cita 3",date:"2021-10-10",time:"10:00",status:"pending"},{id:4,name:"Cita 3",date:"2021-10-10",time:"10:00",status:"pending"}]),n=r(()=>l.value.map((t,i)=>{const u=[];return(i+1)%2===0&&(u.push(l.value[i-1]),u.push(t)),l.value.length-1===i&&l.value.length%2!==0&&u.push(t),u},[]).filter(t=>t.length>0)),a=C(0);return(t,i)=>{const u=Lt,o=yt,d=pt;return P(),D(d,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=_=>a.value=_),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",navigation:"",padding:"",arrows:"",height:"250px"},{default:p(()=>[(P(!0),Z(G,null,le(n.value,(_,m)=>(P(),D(o,{name:m,class:"column no-wrap justify-center",style:{"align-items":"center"}},{default:p(()=>[w("div",Et,[(P(!0),Z(G,null,le(_,v=>(P(),D(u,{class:"col-6"}))),256))])]),_:2},1032,["name"]))),256))]),_:1},8,["modelValue"])}}}),Nt={class:"q-pt-xl",style:{display:"grid","grid-template-columns":"1fr 50px","max-width":"400px",margin:"10px auto",gap:"2px"}},jt={class:"bg-white q-pa-md flex gap-3 justify-center",style:{"min-height":"200px"}},Dt=["src"],At={class:"text-h6"},Ft={class:"text-subtitle2"},Mt={class:"text-caption"},Qt=qe({__name:"ListCompany",setup(e){const l=C(""),n=C([{id:1,nombre:"Sisben",direccion:"Calle 1 # 2-3",celular:"1234567890",imagen:"https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",domingo_apertura:null,domingo_cierre:null,lues_apertura:null,lunes_cierre:null,martes_apertura:null,martes_cierre:null,miercoles_apertura:null,miercoles_cierre:null,jueves_apertura:null,jueves_cierre:null,viernes_apertura:null,viernes_cierre:null,sabado_apertura:null,sabado_cierre:null,id_cia:1,tiempo_por_usuario:10,usuario_por_dia:10},{id:2,nombre:"Registraduria",direccion:"Calle 1 # 2-3",celular:"1234567890",imagen:"https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",domingo_apertura:null,domingo_cierre:null,lues_apertura:null,lunes_cierre:null,martes_apertura:null,martes_cierre:null,miercoles_apertura:null,miercoles_cierre:null,jueves_apertura:null,jueves_cierre:null,viernes_apertura:null,viernes_cierre:null,sabado_apertura:null,sabado_cierre:null,id_cia:1,tiempo_por_usuario:10,usuario_por_dia:10},{id:3,nombre:"Notaria",direccion:"Calle 1 # 2-3",celular:"1234567890",imagen:"https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",domingo_apertura:null,domingo_cierre:null,lues_apertura:null,lunes_cierre:null,martes_apertura:null,martes_cierre:null,miercoles_apertura:null,miercoles_cierre:null,jueves_apertura:null,jueves_cierre:null,viernes_apertura:null,viernes_cierre:null,sabado_apertura:null,sabado_cierre:null,id_cia:1,tiempo_por_usuario:10,usuario_por_dia:10},{id:4,nombre:"Alcaldia",direccion:"Calle 1 # 2-3",celular:"1234567890",imagen:"https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",domingo_apertura:null,domingo_cierre:null,lues_apertura:null,lunes_cierre:null,martes_apertura:null,martes_cierre:null,miercoles_apertura:null,miercoles_cierre:null,jueves_apertura:null,jueves_cierre:null,viernes_apertura:null,viernes_cierre:null,sabado_apertura:null,sabado_cierre:null,id_cia:1,tiempo_por_usuario:10,usuario_por_dia:10},{id:5,nombre:"Clinica el Rosario",direccion:"Calle 1 # 2-3",celular:"1234567890",imagen:"https://th.bing.com/th/id/OIP.aC6e5nrwEQyWRAkJ-lctRgHaHk?rs=1&pid=ImgDetMain",domingo_apertura:null,domingo_cierre:null,lues_apertura:null,lunes_cierre:null,martes_apertura:null,martes_cierre:null,miercoles_apertura:null,miercoles_cierre:null,jueves_apertura:null,jueves_cierre:null,viernes_apertura:null,viernes_cierre:null,sabado_apertura:null,sabado_cierre:null,id_cia:1,tiempo_por_usuario:10,usuario_por_dia:10}]),a=()=>n.value.filter(t=>t.nombre.toLowerCase().includes(l.value.toLowerCase()));return(t,i)=>{const u=ct,o=K,d=xe,_=$e,m=Ce;return P(),Z(G,null,[w("section",Nt,[g(u,{outlined:"",modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=v=>l.value=v),type:"text",label:"Buscar compañías",class:"bg-white"},null,8,["modelValue"]),g(o,{icon:"search",flat:"",color:"primary"})]),w("section",jt,[(P(!0),Z(G,null,le(a(),v=>(P(),D(m,{class:"my-card q-pa-xs",style:{width:"100%","max-width":"300px"}},{default:p(()=>[w("div",null,[w("img",{style:{height:"200px",width:"100%","object-fit":"cover","object-position":"center"},src:v.imagen},null,8,Dt)]),g(_,null,{default:p(()=>[w("div",At,ne(v.nombre),1),w("div",Ft,[g(d,{name:"location_on",class:"q-mr-xs"}),H(" "+ne(v.direccion),1)]),w("div",Mt,[g(d,{name:"phone",class:"q-mr-xs"}),H(" "+ne(v.celular),1)])]),_:2},1024)]),_:2},1024))),256))])],64)}}}),zt={},Vt=w("div",{class:"text-h6 text-center q-pb-sm"},"Mis Citas en Proceso",-1);function Wt(e,l){const n=Ot,a=Qt,t=Pt;return P(),D(t,{class:"q-mt-md q-pa-lg"},{default:p(()=>[Vt,g(n),g(a)]),_:1})}const nn=be(zt,[["render",Wt]]);export{nn as default};