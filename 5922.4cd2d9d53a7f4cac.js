"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5922],{5922:(tt,M,a)=>{a.r(M),a.d(M,{HomePageModule:()=>Ke});var f=a(6895),h=a(2723),Q=a(433),r=a(8256),m=a(7579),te=a(9646),C=a(9751),B=a(4968),R=a(727);class ne extends R.w0{constructor(n,e){super()}schedule(n,e=0){return this}}const y={setInterval(t,n,...e){const{delegate:i}=y;return null!=i&&i.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){const{delegate:n}=y;return((null==n?void 0:n.clearInterval)||clearInterval)(t)},delegate:void 0};var ie=a(8737);class D extends ne{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;const o=this.id,s=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(s,o,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(s,this.id,e),this}requestAsyncId(n,e,i=0){return y.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&y.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let o,i=!1;try{this.work(n)}catch(s){i=!0,o=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,ie.P)(i,this),null!=n&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}}const v={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=v;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);const o=n(s=>{e=void 0,t(s)});return new R.w0(()=>null==e?void 0:e(o))},requestAnimationFrame(...t){const{delegate:n}=v;return((null==n?void 0:n.requestAnimationFrame)||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){const{delegate:n}=v;return((null==n?void 0:n.cancelAnimationFrame)||cancelAnimationFrame)(...t)},delegate:void 0},L={now:()=>(L.delegate||Date).now(),delegate:void 0};class _{constructor(n,e=_.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}}_.now=L.now;class I extends _{constructor(n,e=_.now){super(n,e),this.actions=[],this._active=!1}flush(n){const{actions:e}=this;if(this._active)return void e.push(n);let i;this._active=!0;do{if(i=n.execute(n.state,n.delay))break}while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}}const se=new class oe extends I{flush(n){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let o;n=n||i.shift();do{if(o=n.execute(n.state,n.delay))break}while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,o){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw o}}}(class re extends D{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return null!==i&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=v.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var o;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);const{actions:s}=n;null!=e&&(null===(o=s[s.length-1])||void 0===o?void 0:o.id)!==e&&(v.cancelAnimationFrame(e),n._scheduled=void 0)}});let V,le=1;const x={};function j(t){return t in x&&(delete x[t],!0)}const ae={setImmediate(t){const n=le++;return x[n]=!0,V||(V=Promise.resolve()),V.then(()=>j(n)&&t()),n},clearImmediate(t){j(t)}},{setImmediate:ce,clearImmediate:de}=ae,k={setImmediate(...t){const{delegate:n}=k;return((null==n?void 0:n.setImmediate)||ce)(...t)},clearImmediate(t){const{delegate:n}=k;return((null==n?void 0:n.clearImmediate)||de)(t)},delegate:void 0},fe=new class he extends I{flush(n){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let o;n=n||i.shift();do{if(o=n.execute(n.state,n.delay))break}while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,o){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw o}}}(class ue extends D{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return null!==i&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=k.setImmediate(n.flush.bind(n,void 0))))}recycleAsyncId(n,e,i=0){var o;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);const{actions:s}=n;null!=e&&(null===(o=s[s.length-1])||void 0===o?void 0:o.id)!==e&&(k.clearImmediate(e),n._scheduled=void 0)}}),N=new I(D),pe=N;var W=a(4482),Z=a(8421),F=a(5403),me=a(3532);function O(t,n=N){return function ge(t){return(0,W.e)((n,e)=>{let i=!1,o=null,s=null,l=!1;const u=()=>{if(null==s||s.unsubscribe(),s=null,i){i=!1;const d=o;o=null,e.next(d)}l&&e.complete()},c=()=>{s=null,l&&e.complete()};n.subscribe((0,F.x)(e,d=>{i=!0,o=d,s||(0,Z.Xf)(t(d)).subscribe(s=(0,F.x)(e,u,c))},()=>{l=!0,(!i||!s||s.closed)&&e.complete()}))})}(()=>function _e(t=0,n,e=pe){let i=-1;return null!=n&&((0,me.K)(n)?e=n:i=n),new C.y(o=>{let s=function ve(t){return t instanceof Date&&!isNaN(t)}(t)?+t-e.now():t;s<0&&(s=0);let l=0;return e.schedule(function(){o.closed||(o.next(l++),0<=i?this.schedule(void 0,i):o.complete())},s)})}(t,n))}var we=a(9300),Se=a(5032);function H(t){return(0,W.e)((n,e)=>{(0,Z.Xf)(t).subscribe((0,F.x)(e,()=>e.complete(),Se.Z)),!e.closed&&n.subscribe(e)})}var Ce=a(8675);let E;try{E=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){E=!1}let b,p,P=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,f.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!E)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(r.Lbi))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function S(){if("object"!=typeof document||!document)return 0;if(null==b){const t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";const e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),b=0,0===t.scrollLeft&&(t.scrollLeft=1,b=0===t.scrollLeft?1:2),t.remove()}return b}const be=new r.OlP("cdk-dir-doc",{providedIn:"root",factory:function Re(){return(0,r.f3M)(f.K0)}}),De=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let A=(()=>{class t{constructor(e){this.value="ltr",this.change=new r.vpe,e&&(this.value=function Ie(t){var n;const e=(null==t?void 0:t.toLowerCase())||"";return"auto"===e&&typeof navigator<"u"&&null!==(n=navigator)&&void 0!==n&&n.language?De.test(navigator.language)?"rtl":"ltr":"rtl"===e?"rtl":"ltr"}((e.body?e.body.dir:null)||(e.documentElement?e.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(be,8))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})();const Ve=["contentWrapper"],Fe=["*"],Oe=new r.OlP("VIRTUAL_SCROLL_STRATEGY");let T=(()=>{class t{constructor(e,i,o){this._ngZone=e,this._platform=i,this._scrolled=new m.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=o}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new C.y(i=>{this._globalSubscription||this._addGlobalListener();const o=e>0?this._scrolled.pipe(O(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,te.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const o=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe((0,we.h)(s=>!s||o.indexOf(s)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((o,s)=>{this._scrollableContainsElement(s,e)&&i.push(s)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let o=function ee(t){return t instanceof r.SBq?t.nativeElement:t}(i),s=e.getElementRef().nativeElement;do{if(o==s)return!0}while(o=o.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,B.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(r.R0b),r.LFG(P),r.LFG(f.K0,8))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),G=(()=>{class t{constructor(e,i,o,s){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=o,this.dir=s,this._destroyed=new m.x,this._elementScrolled=new C.y(l=>this.ngZone.runOutsideAngular(()=>(0,B.R)(this.elementRef.nativeElement,"scroll").pipe(H(this._destroyed)).subscribe(l)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const i=this.elementRef.nativeElement,o=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=o?e.end:e.start),null==e.right&&(e.right=o?e.start:e.end),null!=e.bottom&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),o&&0!=S()?(null!=e.left&&(e.right=i.scrollWidth-i.clientWidth-e.left),2==S()?e.left=e.right:1==S()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const i=this.elementRef.nativeElement;!function xe(){if(null==p){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return p=!1,p;if("scrollBehavior"in document.documentElement.style)p=!0;else{const t=Element.prototype.scrollTo;p=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return p}()?(null!=e.top&&(i.scrollTop=e.top),null!=e.left&&(i.scrollLeft=e.left)):i.scrollTo(e)}measureScrollOffset(e){const i="left",o="right",s=this.elementRef.nativeElement;if("top"==e)return s.scrollTop;if("bottom"==e)return s.scrollHeight-s.clientHeight-s.scrollTop;const l=this.dir&&"rtl"==this.dir.value;return"start"==e?e=l?o:i:"end"==e&&(e=l?i:o),l&&2==S()?e==i?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:l&&1==S()?e==i?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:e==i?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(T),r.Y36(r.R0b),r.Y36(A,8))},t.\u0275dir=r.lG2({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),t})(),ze=(()=>{class t{constructor(e,i,o){this._platform=e,this._change=new m.x,this._changeListener=s=>{this._change.next(s)},this._document=o,i.runOutsideAngular(()=>{if(e.isBrowser){const s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),o=e.documentElement,s=o.getBoundingClientRect();return{top:-s.top||e.body.scrollTop||i.scrollY||o.scrollTop||0,left:-s.left||e.body.scrollLeft||i.scrollX||o.scrollLeft||0}}change(e=20){return e>0?this._change.pipe(O(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(P),r.LFG(r.R0b),r.LFG(f.K0,8))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const J=new r.OlP("VIRTUAL_SCROLLABLE");let Ae=(()=>{class t extends G{constructor(e,i,o,s){super(e,i,o,s)}measureViewportSize(e){const i=this.elementRef.nativeElement;return"horizontal"===e?i.clientWidth:i.clientHeight}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(T),r.Y36(r.R0b),r.Y36(A,8))},t.\u0275dir=r.lG2({type:t,features:[r.qOj]}),t})();const Me=typeof requestAnimationFrame<"u"?se:fe;let Be=(()=>{class t extends Ae{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=function K(t){return null!=t&&"false"!=`${t}`}(e)}constructor(e,i,o,s,l,u,c,d){super(e,u,o,l),this.elementRef=e,this._changeDetectorRef=i,this._scrollStrategy=s,this.scrollable=d,this._platform=(0,r.f3M)(P),this._detachedSubject=new m.x,this._renderedRangeSubject=new m.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new C.y(Xe=>this._scrollStrategy.scrolledIndexChange.subscribe(et=>Promise.resolve().then(()=>this.ngZone.run(()=>Xe.next(et))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=R.w0.EMPTY,this._viewportChanges=c.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,Ce.O)(null),O(0,Me)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(H(this._detachedSubject)).subscribe(i=>{const o=i.length;o!==this._dataLength&&(this._dataLength=o,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function Te(t,n){return t.start==n.start&&t.end==n.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,i="to-start"){e=this.appendOnly&&"to-start"===i?0:e;const s="horizontal"==this.orientation,l=s?"X":"Y";let c=`translate${l}(${Number((s&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===i&&(c+=` translate${l}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=c&&(this._renderedContentTransform=c,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,i="auto"){const o={behavior:i};"horizontal"===this.orientation?o.start=e:o.top=e,this.scrollable.scrollTo(o)}scrollToIndex(e,i="auto"){this._scrollStrategy.scrollToIndex(e,i)}measureScrollOffset(e){let i;return i=this.scrollable==this?o=>super.measureScrollOffset(o):o=>this.scrollable.measureScrollOffset(o),Math.max(0,i(null!=e?e:"horizontal"===this.orientation?"start":"top")-this.measureViewportOffset())}measureViewportOffset(e){var i;let o;const s="left",l="right",u="rtl"==(null===(i=this.dir)||void 0===i?void 0:i.value);o="start"==e?u?l:s:"end"==e?u?s:l:e||("horizontal"===this.orientation?"left":"top");const c=this.scrollable.measureBoundingClientRectWithScrollOffset(o);return this.elementRef.nativeElement.getBoundingClientRect()[o]-c}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const i of e)i()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(r.SBq),r.Y36(r.sBO),r.Y36(r.R0b),r.Y36(Oe,8),r.Y36(A,8),r.Y36(T),r.Y36(ze),r.Y36(J,8))},t.\u0275cmp=r.Xpm({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,i){if(1&e&&r.Gf(Ve,7),2&e){let o;r.iGM(o=r.CRH())&&(i._contentWrapper=o.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,i){2&e&&r.ekj("cdk-virtual-scroll-orientation-horizontal","horizontal"===i.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==i.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[r._Bn([{provide:G,useFactory:(n,e)=>n||e,deps:[[new r.FiY,new r.tBr(J)],t]}]),r.qOj,r.jDz],ngContentSelectors:Fe,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,i){1&e&&(r.F$t(),r.TgZ(0,"div",0,1),r.Hsn(2),r.qZA(),r._UZ(3,"div",2)),2&e&&(r.xp6(3),r.Udp("width",i._totalContentWidth)("height",i._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),t})(),q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({}),t})(),Le=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[Y,q,Be,Y,q]}),t})();var $=a(6955),je=a(2340),Ne=a(529);let We=(()=>{class t{constructor(e){this.http=e,this.apiUrl=je.N.apiUrl}getJokes(){return this.http.get(`${this.apiUrl}Any?blacklistFlags=nsfw&amount=10`)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(Ne.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),Ze=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-single"]],inputs:{joke:"joke"},decls:4,vars:1,consts:[[1,"card-container"],[1,"text"]],template:function(e,i){1&e&&(r.TgZ(0,"ion-card",0)(1,"ion-card-content")(2,"p",1),r._uU(3),r.qZA()()()),2&e&&(r.xp6(3),r.Oqu(null==i.joke?null:i.joke.joke))},dependencies:[h.PM,h.FN],styles:['.card-container[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,#df5089,#e55872,#e4655e,#dd744d,#d28342);padding:50px 10px;display:flex;justify-content:center;align-items:center;margin:15px;border-radius:10px;max-width:500px;width:80vw}.text[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:1rem;font-family:"Secular One, Lucida Sans",Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700}']}),t})(),He=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-twopart"]],inputs:{joke:"joke"},decls:7,vars:2,consts:[[1,"card-container"],[1,"setup"],[1,"delivery"]],template:function(e,i){1&e&&(r.TgZ(0,"ion-card",0)(1,"ion-card-content")(2,"p",1),r._uU(3),r.qZA(),r._UZ(4,"br"),r.TgZ(5,"p",2),r._uU(6),r.qZA()()()),2&e&&(r.xp6(3),r.Oqu(null==i.joke?null:i.joke.setup),r.xp6(3),r.Oqu(null==i.joke?null:i.joke.delivery))},dependencies:[h.PM,h.FN],styles:['.card-container[_ngcontent-%COMP%]{background-image:linear-gradient(to right top,#df5089,#e55872,#e4655e,#dd744d,#d28342);padding:50px 10px;display:flex;justify-content:center;align-items:center;margin:15px;border-radius:20px;max-width:500px;width:80vw}.setup[_ngcontent-%COMP%], .delivery[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:1rem;font-family:"Secular One, Lucida Sans",Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif;font-weight:700}']}),t})();function Ue(t,n){if(1&t&&(r.TgZ(0,"div"),r._UZ(1,"app-twopart",9),r.qZA()),2&t){const e=r.oxw().$implicit;r.xp6(1),r.Q6J("joke",e)}}function Ye(t,n){if(1&t&&(r.TgZ(0,"div"),r._UZ(1,"app-single",9),r.qZA()),2&t){const e=r.oxw().$implicit;r.xp6(1),r.Q6J("joke",e)}}function Ge(t,n){if(1&t&&(r.TgZ(0,"div",7),r.YNc(1,Ue,2,1,"div",8),r.YNc(2,Ye,2,1,"div",8),r.qZA()),2&t){const e=n.$implicit;r.xp6(1),r.Q6J("ngIf","twopart"===e.type),r.xp6(1),r.Q6J("ngIf","single"===e.type)}}function Je(t,n){if(1&t){const e=r.EpF();r.TgZ(0,"ion-button",10),r.NdJ("click",function(){r.CHM(e);const o=r.oxw();return r.KtG(o.nextPage())}),r._uU(1,"Next Page"),r.qZA()}}function qe(t,n){if(1&t){const e=r.EpF();r.TgZ(0,"ion-infinite-scroll",11),r.NdJ("ionInfinite",function(o){r.CHM(e);const s=r.oxw();return r.KtG(s.loadMore(o))}),r._UZ(1,"ion-infinite-scroll-content"),r.qZA()}}const $e=[{path:"",component:(()=>{class t{constructor(e){this.httpService=e,this.showLoadButton=!1}ngOnInit(){this.httpService.getJokes().subscribe(e=>{this.jokes=e.jokes})}trackByFunc(e,i){return i?i.id:null}loadMore(e){this.httpService.getJokes().subscribe(i=>{var o,s;this.jokes=null===(o=this.jokes)||void 0===o?void 0:o.concat(i.jokes),e.target.complete(),this.jokes&&(null===(s=this.jokes)||void 0===s?void 0:s.length)>999&&(this.showLoadButton=!0)})}nextPage(){this.httpService.getJokes().subscribe(e=>{var i;this.jokes=e.jokes,this.showLoadButton=!1,null===(i=this.content)||void 0===i||i.scrollToTop()})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(We))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(e,i){if(1&e&&r.Gf(h.W2,5),2&e){let o;r.iGM(o=r.CRH())&&(i.content=o.first)}},decls:9,vars:6,consts:[[3,"translucent"],["color","danger"],[1,"title"],[3,"fullscreen"],["class","center-container",4,"ngFor","ngForOf","ngForTrackBy"],["color","danger","expand","block",3,"click",4,"ngIf"],[3,"ionInfinite",4,"ngIf"],[1,"center-container"],[4,"ngIf"],[3,"joke"],["color","danger","expand","block",3,"click"],[3,"ionInfinite"]],template:function(e,i){1&e&&(r.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),r._uU(3," Jokes "),r.qZA()()(),r.TgZ(4,"ion-content",3)(5,"ion-list"),r.YNc(6,Ge,3,2,"div",4),r.qZA(),r.YNc(7,Je,2,0,"ion-button",5),r.YNc(8,qe,2,0,"ion-infinite-scroll",6),r.qZA()),2&e&&(r.Q6J("translucent",!0),r.xp6(4),r.Q6J("fullscreen",!0),r.xp6(2),r.Q6J("ngForOf",i.jokes)("ngForTrackBy",i.trackByFunc),r.xp6(1),r.Q6J("ngIf",i.showLoadButton),r.xp6(1),r.Q6J("ngIf",!i.showLoadButton))},dependencies:[f.sg,f.O5,h.YG,h.W2,h.Gu,h.ju,h.MB,h.q_,h.wd,h.sr,Ze,He],styles:['#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.center-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.title[_ngcontent-%COMP%]{font-family:"Secular One, sans-serif";font-weight:700;font-size:1.5rem}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:100%;width:100%}']}),t})()}];let Qe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[$.Bz.forChild($e),$.Bz]}),t})(),Ke=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[f.ez,Q.u5,h.Pc,Qe,Le]}),t})()}}]);