import{_ as bt}from"./N6l3tDwn.js";import{ax as ut,ah as L,L as H,r as E,H as c,g as q,al as we,M as S,V as Z,T as _t,h as qe,m as ee,ay as wt,a4 as xe,ag as qt,ai as xt,aj as kt,a3 as me,ak as Fe,as as Ye,au as ze,a2 as De,a0 as Ne,az as X,aA as Ct,Q as Ke,R as z,aa as Qe,$ as Tt,an as Ie,O as _e,Y as je,aB as St,aC as Bt,aD as st,W as Et,ab as Lt,ad as Pt,o as he,ac as ye,w as C,b as x,d as ge,av as Ot,a as $t,v as Mt,N as Ft,P as zt}from"./CsrzELu6.js";import{m as Dt,a as ct,b as Vt,v as Ue,c as At,d as dt,e as Ht,f as ft,g as Wt,h as Rt,i as Kt,j as vt,k as Qt,r as Ge,s as Xt,p as Je,n as Yt,l as Nt,_ as It}from"./lxTSR-Hu.js";import{u as ke,a as Ce}from"./3NNwcD0d.js";import{s as jt,g as Ut,a as Gt,b as Jt,h as Zt}from"./CKTKrLtg.js";import{a as en}from"./zjdVGI5d.js";import{Q as tn,_ as nn}from"./D7WnDlNd.js";import{g as Ze,s as et,c as an}from"./B1frLPgC.js";function pe(e,n,i){return i<=n?n:Math.min(i,Math.max(n,e))}const N=[];let J;function on(e){J=e.keyCode===27}function ln(){J===!0&&(J=!1)}function rn(e){J===!0&&(J=!1,ut(e,27)===!0&&N[N.length-1](e))}function mt(e){window[e]("keydown",on),window[e]("blur",ln),window[e]("keyup",rn),J=!1}function un(e){L.is.desktop===!0&&(N.push(e),N.length===1&&mt("addEventListener"))}function tt(e){const n=N.indexOf(e);n!==-1&&(N.splice(n,1),N.length===0&&mt("removeEventListener"))}const I=[];function ht(e){I[I.length-1](e)}function sn(e){L.is.desktop===!0&&(I.push(e),I.length===1&&document.body.addEventListener("focusin",ht))}function cn(e){const n=I.indexOf(e);n!==-1&&(I.splice(n,1),I.length===0&&document.body.removeEventListener("focusin",ht))}const dn=H({name:"QMenu",inheritAttrs:!1,props:{...Dt,...ct,...ke,...Vt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Ue},self:{type:String,validator:Ue},offset:{type:Array,validator:At},scrollTarget:jt,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...dt,"click","escapeKey"],setup(e,{slots:n,emit:i,attrs:r}){let t=null,a,u,f;const p=ee(),{proxy:d}=p,{$q:l}=d,w=E(null),_=E(!1),m=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=Ce(e,l),{registerTick:T,removeTick:k}=Ht(),{registerTimeout:y}=ft(),{transitionProps:s,transitionStyle:b}=Wt(e),{localScrollTarget:D,changeScrollEvent:te,unconfigureScrollTarget:W}=Rt(e,ae),{anchorEl:R,canShow:Te}=Kt({showing:_}),{hide:K}=vt({showing:_,canShow:Te,handleShow:Se,handleHide:Be,hideOnRouteChange:m,processOnMount:!0}),{showPortal:P,hidePortal:M,renderPortal:se}=Qt(p,w,Le,"menu"),$={anchorEl:R,innerRef:w,onClickOutside(v){if(e.persistent!==!0&&_.value===!0)return K(v),(v.type==="touchstart"||v.target.classList.contains("q-dialog__backdrop"))&&xe(v),!0}},j=c(()=>Je(e.anchor||(e.cover===!0?"center middle":"bottom start"),l.lang.rtl)),ce=c(()=>e.cover===!0?j.value:Je(e.self||"top start",l.lang.rtl)),U=c(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),ne=c(()=>e.autoClose===!0?{onClick:Ee}:{}),G=c(()=>_.value===!0&&e.persistent!==!0);q(G,v=>{v===!0?(un(oe),Nt($)):(tt(oe),Ge($))});function F(){en(()=>{let v=w.value;v&&v.contains(document.activeElement)!==!0&&(v=v.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||v.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||v.querySelector("[autofocus], [data-autofocus]")||v,v.focus({preventScroll:!0}))})}function Se(v){if(t=e.noRefocus===!1?document.activeElement:null,sn(fe),P(),ae(),a=void 0,v!==void 0&&(e.touchPosition||e.contextMenu)){const le=we(v);if(le.left!==void 0){const{top:Pe,left:ie}=R.value.getBoundingClientRect();a={left:le.left-ie,top:le.top-Pe}}}u===void 0&&(u=q(()=>l.screen.width+"|"+l.screen.height+"|"+e.self+"|"+e.anchor+"|"+l.lang.rtl,Q)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{Q(),e.noFocus!==!0&&F()}),y(()=>{l.platform.is.ios===!0&&(f=e.autoClose,w.value.click()),Q(),P(!0),i("show",v)},e.transitionDuration)}function Be(v){k(),M(),de(!0),t!==null&&(v===void 0||v.qClickOutside!==!0)&&(((v&&v.type.indexOf("key")===0?t.closest('[tabindex]:not([tabindex^="-"])'):void 0)||t).focus(),t=null),y(()=>{M(!0),i("hide",v)},e.transitionDuration)}function de(v){a=void 0,u!==void 0&&(u(),u=void 0),(v===!0||_.value===!0)&&(cn(fe),W(),Ge($),tt(oe)),v!==!0&&(t=null)}function ae(){(R.value!==null||e.scrollTarget!==void 0)&&(D.value=Ut(R.value,e.scrollTarget),te(D.value,Q))}function Ee(v){f!==!0?(Yt(d,v),i("click",v)):f=!1}function fe(v){G.value===!0&&e.noFocus!==!0&&wt(w.value,v.target)!==!0&&F()}function oe(v){i("escapeKey"),K(v)}function Q(){Xt({targetEl:w.value,offset:e.offset,anchorEl:R.value,anchorOrigin:j.value,selfOrigin:ce.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Le(){return S(_t,s.value,()=>_.value===!0?S("div",{role:"menu",...r,ref:w,tabindex:-1,class:["q-menu q-position-engine scroll"+U.value,r.class],style:[r.style,b.value],...ne.value},Z(n.default)):null)}return qe(de),Object.assign(d,{focus:F,updatePosition:Q}),se}});function Ve(e,n,i){const r=we(e);let t,a=r.left-n.event.x,u=r.top-n.event.y,f=Math.abs(a),p=Math.abs(u);const d=n.direction;d.horizontal===!0&&d.vertical!==!0?t=a<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=u<0?"up":"down":d.up===!0&&u<0?(t="up",f>p&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.down===!0&&u>0?(t="down",f>p&&(d.left===!0&&a<0?t="left":d.right===!0&&a>0&&(t="right"))):d.left===!0&&a<0?(t="left",f<p&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down"))):d.right===!0&&a>0&&(t="right",f<p&&(d.up===!0&&u<0?t="up":d.down===!0&&u>0&&(t="down")));let l=!1;if(t===void 0&&i===!1){if(n.event.isFirst===!0||n.event.lastDir===void 0)return{};t=n.event.lastDir,l=!0,t==="left"||t==="right"?(r.left-=a,f=0,a=0):(r.top-=u,p=0,u=0)}return{synthetic:l,payload:{evt:e,touch:n.event.mouse!==!0,mouse:n.event.mouse===!0,position:r,direction:t,isFirst:n.event.isFirst,isFinal:i===!0,duration:Date.now()-n.event.time,distance:{x:f,y:p},offset:{x:a,y:u},delta:{x:r.left-n.event.lastX,y:r.top-n.event.lastY}}}}let fn=0;const Ae=qt({name:"touch-pan",beforeMount(e,{value:n,modifiers:i}){if(i.mouse!==!0&&L.has.touch!==!0)return;function r(a,u){i.mouse===!0&&u===!0?xe(a):(i.stop===!0&&ze(a),i.prevent===!0&&Ye(a))}const t={uid:"qvtp_"+fn++,handler:n,modifiers:i,direction:Ze(i),noop:xt,mouseStart(a){et(a,t)&&kt(a)&&(me(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(et(a,t)){const u=a.target;me(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(L.is.firefox===!0&&Fe(e,!0),t.lastEvt=a,u===!0||i.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const d=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Ye(d),a.cancelBubble===!0&&ze(d),Object.assign(d,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:d}}ze(a)}const{left:f,top:p}=we(a);t.event={x:f,y:p,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:p}},move(a){if(t.event===void 0)return;const u=we(a),f=u.left-t.event.x,p=u.top-t.event.y;if(f===0&&p===0)return;t.lastEvt=a;const d=t.event.mouse===!0,l=()=>{r(a,d);let m;i.preserveCursor!==!0&&i.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),an(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),d===!0){const T=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{T(),h()},50):T()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&r(a,t.event.mouse);const{payload:m,synthetic:h}=Ve(a,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&l(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){l(),t.event.detected=!0,t.move(a);return}const w=Math.abs(f),_=Math.abs(p);w!==_&&(t.direction.horizontal===!0&&w>_||t.direction.vertical===!0&&w<_||t.direction.up===!0&&w<_&&p<0||t.direction.down===!0&&w<_&&p>0||t.direction.left===!0&&w>_&&f<0||t.direction.right===!0&&w>_&&f>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(De(t,"temp"),L.is.firefox===!0&&Fe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Ve(a===void 0?t.lastEvt:a,t).payload);const{payload:f}=Ve(a===void 0?t.lastEvt:a,t,!0),p=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(p):p()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,i.mouse===!0){const a=i.mouseCapture===!0||i.mousecapture===!0?"Capture":"";me(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}L.has.touch===!0&&me(t,"main",[[e,"touchstart","touchStart",`passive${i.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchpan;i!==void 0&&(n.oldValue!==n.value&&(typeof value!="function"&&i.end(),i.handler=n.value),i.direction=Ze(n.modifiers))},beforeUnmount(e){const n=e.__qtouchpan;n!==void 0&&(n.event!==void 0&&n.end(),De(n,"main"),De(n,"temp"),L.is.firefox===!0&&Fe(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchpan)}});function vn(e,n,i){let r;function t(){r!==void 0&&(Ne.remove(r),r=void 0)}return qe(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){r={condition:()=>i.value===!0,handler:n},Ne.add(r)}}}let re=0,He,We,ue,Re=!1,nt,at,ot,Y=null;function mn(e){hn(e)&&xe(e)}function hn(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const n=Ct(e),i=e.shiftKey&&!e.deltaX,r=!i&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=i||r?e.deltaY:e.deltaX;for(let a=0;a<n.length;a++){const u=n[a];if(Zt(u,r))return r?t<0&&u.scrollTop===0?!0:t>0&&u.scrollTop+u.clientHeight===u.scrollHeight:t<0&&u.scrollLeft===0?!0:t>0&&u.scrollLeft+u.clientWidth===u.scrollWidth}return!0}function lt(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function be(e){Re!==!0&&(Re=!0,requestAnimationFrame(()=>{Re=!1;const{height:n}=e.target,{clientHeight:i,scrollTop:r}=document.scrollingElement;(ue===void 0||n!==window.innerHeight)&&(ue=i-n,document.scrollingElement.scrollTop=r),r>ue&&(document.scrollingElement.scrollTop-=Math.ceil((r-ue)/8))}))}function it(e){const n=document.body,i=window.visualViewport!==void 0;if(e==="add"){const{overflowY:r,overflowX:t}=window.getComputedStyle(n);He=Gt(window),We=Jt(window),nt=n.style.left,at=n.style.top,ot=window.location.href,n.style.left=`-${He}px`,n.style.top=`-${We}px`,t!=="hidden"&&(t==="scroll"||n.scrollWidth>window.innerWidth)&&n.classList.add("q-body--force-scrollbar-x"),r!=="hidden"&&(r==="scroll"||n.scrollHeight>window.innerHeight)&&n.classList.add("q-body--force-scrollbar-y"),n.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,L.is.ios===!0&&(i===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",be,X.passiveCapture),window.visualViewport.addEventListener("scroll",be,X.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",lt,X.passiveCapture))}L.is.desktop===!0&&L.is.mac===!0&&window[`${e}EventListener`]("wheel",mn,X.notPassive),e==="remove"&&(L.is.ios===!0&&(i===!0?(window.visualViewport.removeEventListener("resize",be,X.passiveCapture),window.visualViewport.removeEventListener("scroll",be,X.passiveCapture)):window.removeEventListener("scroll",lt,X.passiveCapture)),n.classList.remove("q-body--prevent-scroll"),n.classList.remove("q-body--force-scrollbar-x"),n.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,n.style.left=nt,n.style.top=at,window.location.href===ot&&window.scrollTo(He,We),ue=void 0)}function yn(e){let n="add";if(e===!0){if(re++,Y!==null){clearTimeout(Y),Y=null;return}if(re>1)return}else{if(re===0||(re--,re>0))return;if(n="remove",L.is.ios===!0&&L.is.nativeMobile===!0){Y!==null&&clearTimeout(Y),Y=setTimeout(()=>{it(n),Y=null},100);return}}it(n)}function gn(){let e;return{preventBodyScroll(n){n!==e&&(e!==void 0||n===!0)&&(e=n,yn(n))}}}const rt=150,pn=H({name:"QDrawer",inheritAttrs:!1,props:{...ct,...ke,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...dt,"onLayout","miniState"],setup(e,{slots:n,emit:i,attrs:r}){const t=ee(),{proxy:{$q:a}}=t,u=Ce(e,a),{preventBodyScroll:f}=gn(),{registerTimeout:p,removeTimeout:d}=ft(),l=Ke(Qe,z);if(l===z)return console.error("QDrawer needs to be child of QLayout"),z;let w,_=null,m;const h=E(e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint),T=c(()=>e.mini===!0&&h.value!==!0),k=c(()=>T.value===!0?e.miniWidth:e.width),y=E(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),s=c(()=>e.persistent!==!0&&(h.value===!0||Se.value===!0));function b(o,g){if(R(),o!==!1&&l.animate(),O(0),h.value===!0){const B=l.instances[U.value];B!==void 0&&B.belowBreakpoint===!0&&B.hide(!1),V(1),l.isContainer.value!==!0&&f(!0)}else V(0),o!==!1&&Oe(!1);p(()=>{o!==!1&&Oe(!0),g!==!0&&i("show",o)},rt)}function D(o,g){Te(),o!==!1&&l.animate(),V(0),O(M.value*k.value),$e(),g!==!0?p(()=>{i("hide",o)},rt):d()}const{show:te,hide:W}=vt({showing:y,hideOnRouteChange:s,handleShow:b,handleHide:D}),{addToHistory:R,removeFromHistory:Te}=vn(y,W,s),K={belowBreakpoint:h,hide:W},P=c(()=>e.side==="right"),M=c(()=>(a.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),se=E(0),$=E(!1),j=E(!1),ce=E(k.value*M.value),U=c(()=>P.value===!0?"left":"right"),ne=c(()=>y.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:k.value:0),G=c(()=>e.overlay===!0||e.miniToOverlay===!0||l.view.value.indexOf(P.value?"R":"L")!==-1||a.platform.is.ios===!0&&l.isContainer.value===!0),F=c(()=>e.overlay===!1&&y.value===!0&&h.value===!1),Se=c(()=>e.overlay===!0&&y.value===!0&&h.value===!1),Be=c(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&$.value===!1?" hidden":"")),de=c(()=>({backgroundColor:`rgba(0,0,0,${se.value*.4})`})),ae=c(()=>P.value===!0?l.rows.value.top[2]==="r":l.rows.value.top[0]==="l"),Ee=c(()=>P.value===!0?l.rows.value.bottom[2]==="r":l.rows.value.bottom[0]==="l"),fe=c(()=>{const o={};return l.header.space===!0&&ae.value===!1&&(G.value===!0?o.top=`${l.header.offset}px`:l.header.space===!0&&(o.top=`${l.header.size}px`)),l.footer.space===!0&&Ee.value===!1&&(G.value===!0?o.bottom=`${l.footer.offset}px`:l.footer.space===!0&&(o.bottom=`${l.footer.size}px`)),o}),oe=c(()=>{const o={width:`${k.value}px`,transform:`translateX(${ce.value}px)`};return h.value===!0?o:Object.assign(o,fe.value)}),Q=c(()=>"q-drawer__content fit "+(l.isContainer.value!==!0?"scroll":"overflow-auto")),Le=c(()=>`q-drawer q-drawer--${e.side}`+(j.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+($.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${T.value===!0?"mini":"standard"}`+(G.value===!0||F.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ae.value===!0?" q-drawer--top-padding":""))),v=c(()=>{const o=a.lang.rtl===!0?e.side:U.value;return[[Ae,gt,void 0,{[o]:!0,mouse:!0}]]}),le=c(()=>{const o=a.lang.rtl===!0?U.value:e.side;return[[Ae,Xe,void 0,{[o]:!0,mouse:!0}]]}),Pe=c(()=>{const o=a.lang.rtl===!0?U.value:e.side;return[[Ae,Xe,void 0,{[o]:!0,mouse:!0,mouseAllDir:!0}]]});function ie(){pt(h,e.behavior==="mobile"||e.behavior!=="desktop"&&l.totalWidth.value<=e.breakpoint)}q(h,o=>{o===!0?(w=y.value,y.value===!0&&W(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(O(0),V(0),$e()):te(!1))}),q(()=>e.side,(o,g)=>{l.instances[g]===K&&(l.instances[g]=void 0,l[g].space=!1,l[g].offset=0),l.instances[o]=K,l[o].size=k.value,l[o].space=F.value,l[o].offset=ne.value}),q(l.totalWidth,()=>{(l.isContainer.value===!0||document.qScrollPrevented!==!0)&&ie()}),q(()=>e.behavior+e.breakpoint,ie),q(l.isContainer,o=>{y.value===!0&&f(o!==!0),o===!0&&ie()}),q(l.scrollbarWidth,()=>{O(y.value===!0?0:void 0)}),q(ne,o=>{A("offset",o)}),q(F,o=>{i("onLayout",o),A("space",o)}),q(P,()=>{O()}),q(k,o=>{O(),Me(e.miniToOverlay,o)}),q(()=>e.miniToOverlay,o=>{Me(o,k.value)}),q(()=>a.lang.rtl,()=>{O()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(yt(),l.animate())}),q(T,o=>{i("miniState",o)});function O(o){o===void 0?Ie(()=>{o=y.value===!0?0:k.value,O(M.value*o)}):(l.isContainer.value===!0&&P.value===!0&&(h.value===!0||Math.abs(o)===k.value)&&(o+=M.value*l.scrollbarWidth.value),ce.value=o)}function V(o){se.value=o}function Oe(o){const g=o===!0?"remove":l.isContainer.value!==!0?"add":"";g!==""&&document.body.classList[g]("q-body--drawer-toggle")}function yt(){_!==null&&clearTimeout(_),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),j.value=!0,_=setTimeout(()=>{_=null,j.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function gt(o){if(y.value!==!1)return;const g=k.value,B=pe(o.distance.x,0,g);if(o.isFinal===!0){B>=Math.min(75,g)===!0?te():(l.animate(),V(0),O(M.value*g)),$.value=!1;return}O((a.lang.rtl===!0?P.value!==!0:P.value)?Math.max(g-B,0):Math.min(0,B-g)),V(pe(B/g,0,1)),o.isFirst===!0&&($.value=!0)}function Xe(o){if(y.value!==!0)return;const g=k.value,B=o.direction===e.side,ve=(a.lang.rtl===!0?B!==!0:B)?pe(o.distance.x,0,g):0;if(o.isFinal===!0){Math.abs(ve)<Math.min(75,g)===!0?(l.animate(),V(1),O(0)):W(),$.value=!1;return}O(M.value*ve),V(pe(1-ve/g,0,1)),o.isFirst===!0&&($.value=!0)}function $e(){f(!1),Oe(!0)}function A(o,g){l.update(e.side,o,g)}function pt(o,g){o.value!==g&&(o.value=g)}function Me(o,g){A("size",o===!0?e.miniWidth:g)}return l.instances[e.side]=K,Me(e.miniToOverlay,k.value),A("space",F.value),A("offset",ne.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",!0),Tt(()=>{i("onLayout",F.value),i("miniState",T.value),w=e.showIfAbove===!0;const o=()=>{(y.value===!0?b:D)(!1,!0)};if(l.totalWidth.value!==0){Ie(o);return}m=q(l.totalWidth,()=>{m(),m=void 0,y.value===!1&&e.showIfAbove===!0&&h.value===!1?te(!1):o()})}),qe(()=>{m!==void 0&&m(),_!==null&&(clearTimeout(_),_=null),y.value===!0&&$e(),l.instances[e.side]===K&&(l.instances[e.side]=void 0,A("size",0),A("offset",0),A("space",!1))}),()=>{const o=[];h.value===!0&&(e.noSwipeOpen===!1&&o.push(_e(S("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),v.value)),o.push(je("div",{ref:"backdrop",class:Be.value,style:de.value,"aria-hidden":"true",onClick:W},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>Pe.value)));const g=T.value===!0&&n.mini!==void 0,B=[S("div",{...r,key:""+g,class:[Q.value,r.class]},g===!0?n.mini():Z(n.default))];return e.elevated===!0&&y.value===!0&&B.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(je("aside",{ref:"content",class:Le.value,style:oe.value},B,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>le.value)),S("div",{class:"q-drawer-container"},o)}}}),bn=H({name:"QItem",props:{...ke,...St,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=ee(),t=Ce(e,r),{hasLink:a,linkAttrs:u,linkClass:f,linkTag:p,navigateOnClick:d}=Bt(),l=E(null),w=E(null),_=c(()=>e.clickable===!0||a.value===!0||e.tag==="label"),m=c(()=>e.disable!==!0&&_.value===!0),h=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=c(()=>e.insetLevel===void 0?null:{["padding"+(r.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function k(b){m.value===!0&&(w.value!==null&&(b.qKeyEvent!==!0&&document.activeElement===l.value?w.value.focus():document.activeElement===w.value&&l.value.focus()),d(b))}function y(b){if(m.value===!0&&ut(b,[13,32])===!0){xe(b),b.qKeyEvent=!0;const D=new MouseEvent("click",b);D.qKeyEvent=!0,l.value.dispatchEvent(D)}i("keyup",b)}function s(){const b=st(n.default,[]);return m.value===!0&&b.unshift(S("div",{class:"q-focus-helper",tabindex:-1,ref:w})),b}return()=>{const b={ref:l,class:h.value,style:T.value,role:"listitem",onClick:k,onKeyup:y};return m.value===!0?(b.tabindex=e.tabindex||"0",Object.assign(b,u.value)):_.value===!0&&(b["aria-disabled"]="true"),S(p.value,b,s())}}}),_n=H({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:n,emit:i}){const{proxy:{$q:r}}=ee(),t=Ke(Qe,z);if(t===z)return console.error("QHeader needs to be child of QLayout"),z;const a=E(parseInt(e.heightHint,10)),u=E(!0),f=c(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||r.platform.is.ios&&t.isContainer.value===!0),p=c(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return u.value===!0?a.value:0;const s=a.value-t.scroll.value.position;return s>0?s:0}),d=c(()=>e.modelValue!==!0||f.value===!0&&u.value!==!0),l=c(()=>e.modelValue===!0&&d.value===!0&&e.reveal===!0),w=c(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(d.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),_=c(()=>{const s=t.rows.value.top,b={};return s[0]==="l"&&t.left.space===!0&&(b[r.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),s[2]==="r"&&t.right.space===!0&&(b[r.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function m(s,b){t.update("header",s,b)}function h(s,b){s.value!==b&&(s.value=b)}function T({height:s}){h(a,s),m("size",s)}function k(s){l.value===!0&&h(u,!0),i("focusin",s)}q(()=>e.modelValue,s=>{m("space",s),h(u,!0),t.animate()}),q(p,s=>{m("offset",s)}),q(()=>e.reveal,s=>{s===!1&&h(u,e.modelValue)}),q(u,s=>{t.animate(),i("reveal",s)}),q(t.scroll,s=>{e.reveal===!0&&h(u,s.direction==="up"||s.position<=e.revealOffset||s.position-s.inflectionPoint<100)});const y={};return t.instances.header=y,e.modelValue===!0&&m("size",a.value),m("space",e.modelValue),m("offset",p.value),qe(()=>{t.instances.header===y&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const s=st(n.default,[]);return e.elevated===!0&&s.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),s.push(S(tn,{debounce:0,onResize:T})),S("header",{class:w.value,style:_.value,onFocusin:k},s)}}}),wn=H({name:"QList",props:{...ke,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const i=ee(),r=Ce(e,i.proxy.$q),t=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(r.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:t.value},Z(n.default))}}),qn=H({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:i}}=ee(),r=Ke(Qe,z);if(r===z)return console.error("QPageContainer needs to be child of QLayout"),z;Et(Lt,!0);const t=c(()=>{const a={};return r.header.space===!0&&(a.paddingTop=`${r.header.size}px`),r.right.space===!0&&(a[`padding${i.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(a.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(a[`padding${i.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:t.value},Z(n.default))}}),xn=H({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:n}){const i=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:i.value,role:"toolbar"},Z(n.default))}}),kn=H({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:n}){const i=c(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>S("div",{class:i.value},Z(n.default))}}),Cn=$t("h6",{class:"q-ma-md"},"Menú",-1),Fn=Pt({__name:"default",setup(e){const n=E(!1);return(i,r)=>{const t=Mt,a=kn,u=Ft,f=It,p=bn,d=wn,l=dn,w=xn,_=_n,m=bt,h=pn,T=qn,k=nn,y=zt;return he(),ye(k,{view:"lHh Lpr lFf"},{default:C(()=>[x(_,{elevated:""},{default:C(()=>[x(w,{class:"bg-primary text-white"},{default:C(()=>[x(t,{flat:"",round:"",dense:"",icon:"menu",onClick:r[0]||(r[0]=s=>n.value=!n.value),class:"q-mr-sm"}),x(a,null,{default:C(()=>[ge("Turn App")]),_:1}),x(t,{flat:"",round:"",dense:"",icon:"notifications"}),x(t,{flat:"",round:"",dense:"",icon:"person"},{default:C(()=>[x(l,{style:{width:"180px","max-width":"180px"}},{default:C(()=>[x(d,{style:{width:"100%"}},{default:C(()=>[_e((he(),ye(p,{clickable:""},{default:C(()=>[x(f,{avatar:""},{default:C(()=>[x(u,{name:"person",size:"xs",class:"text-primary"})]),_:1}),x(f,null,{default:C(()=>[ge("Perfil")]),_:1})]),_:1})),[[y]]),_e((he(),ye(p,{clickable:""},{default:C(()=>[x(f,{avatar:""},{default:C(()=>[x(u,{name:"login",size:"xs",class:"text-primary"})]),_:1}),x(f,null,{default:C(()=>[ge("Cerrar Sesion")]),_:1})]),_:1})),[[y]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),x(h,{modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=s=>n.value=s),"show-if-above":""},{default:C(()=>[Cn,x(d,null,{default:C(()=>[_e((he(),ye(p,{clickable:""},{default:C(()=>[x(f,{avatar:""},{default:C(()=>[x(u,{name:"login",class:"text-primary"})]),_:1}),x(f,null,{default:C(()=>[x(m,{href:"/access/login",class:"q-ml-md no-decoration text-grey-10"},{default:C(()=>[ge("Login")]),_:1})]),_:1})]),_:1})),[[y]])]),_:1})]),_:1},8,["modelValue"]),x(T,{style:{"background-color":"rgb(223 221 205 / 25%)","min-height":"100vh"}},{default:C(()=>[Ot(i.$slots,"default")]),_:3})]),_:3})}}});export{Fn as default};
