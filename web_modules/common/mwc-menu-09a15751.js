import{a as t,c as e,b as n,_ as o}from"./tslib.es6-ed95dd19.js";import{h as s}from"./lit-html-01826b4e.js";import{query as r,property as d,css as u,customElement as h}from"../lit-element.js";import{M as l}from"./foundation-5da43da3.js";import{B as m,a as p,b as _,d as f}from"./base-element-da29a93c.js";import{c as T}from"./class-map-5937e1bf.js";import{o as y}from"./observer-8c5412ba.js";import{b as g}from"./mwc-list-8214a904.js";export{a,c,i}from"./mwc-list-8214a904.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var O,E,I={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},b={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},A={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(O||(O={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(E||(E={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var C,x=function(i){function o(t){var e=i.call(this,n(n({},o.defaultAdapter),t))||this;return e.isOpen_=!1,e.isQuickOpen_=!1,e.isHoistedElement_=!1,e.isFixedPosition_=!1,e.openAnimationEndTimerId_=0,e.closeAnimationEndTimerId_=0,e.animationRequestId_=0,e.anchorCorner_=E.TOP_START,e.originCorner_=E.TOP_START,e.anchorMargin_={top:0,right:0,bottom:0,left:0},e.position_={x:0,y:0},e}return t(o,i),Object.defineProperty(o,"cssClasses",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return A},enumerable:!0,configurable:!0}),Object.defineProperty(o,"Corner",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),o.prototype.init=function(){var t=o.cssClasses,e=t.ROOT,i=t.OPEN;if(!this.adapter_.hasClass(e))throw new Error(e+" class required in root element.");this.adapter_.hasClass(i)&&(this.isOpen_=!0)},o.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)},o.prototype.setAnchorCorner=function(t){this.anchorCorner_=t},o.prototype.flipCornerHorizontally=function(){this.originCorner_=this.originCorner_^O.RIGHT},o.prototype.setAnchorMargin=function(t){this.anchorMargin_.top=t.top||0,this.anchorMargin_.right=t.right||0,this.anchorMargin_.bottom=t.bottom||0,this.anchorMargin_.left=t.left||0},o.prototype.setIsHoisted=function(t){this.isHoistedElement_=t},o.prototype.setFixedPosition=function(t){this.isFixedPosition_=t},o.prototype.setAbsolutePosition=function(t,e){this.position_.x=this.isFinite_(t)?t:0,this.position_.y=this.isFinite_(e)?e:0},o.prototype.setQuickOpen=function(t){this.isQuickOpen_=t},o.prototype.isOpen=function(){return this.isOpen_},o.prototype.open=function(){var t=this;this.isOpen_||(this.adapter_.saveFocus(),this.isQuickOpen_?(this.isOpen_=!0,this.adapter_.addClass(o.cssClasses.OPEN),this.dimensions_=this.adapter_.getInnerDimensions(),this.autoPosition_(),this.adapter_.notifyOpen()):(this.adapter_.addClass(o.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame((function(){t.adapter_.addClass(o.cssClasses.OPEN),t.dimensions_=t.adapter_.getInnerDimensions(),t.autoPosition_(),t.openAnimationEndTimerId_=setTimeout((function(){t.openAnimationEndTimerId_=0,t.adapter_.removeClass(o.cssClasses.ANIMATING_OPEN),t.adapter_.notifyOpen()}),A.TRANSITION_OPEN_DURATION)})),this.isOpen_=!0))},o.prototype.close=function(t){var e=this;void 0===t&&(t=!1),this.isOpen_&&(this.isQuickOpen_?(this.isOpen_=!1,t||this.maybeRestoreFocus_(),this.adapter_.removeClass(o.cssClasses.OPEN),this.adapter_.removeClass(o.cssClasses.IS_OPEN_BELOW),this.adapter_.notifyClose()):(this.adapter_.addClass(o.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){e.adapter_.removeClass(o.cssClasses.OPEN),e.adapter_.removeClass(o.cssClasses.IS_OPEN_BELOW),e.closeAnimationEndTimerId_=setTimeout((function(){e.closeAnimationEndTimerId_=0,e.adapter_.removeClass(o.cssClasses.ANIMATING_CLOSED),e.adapter_.notifyClose()}),A.TRANSITION_CLOSE_DURATION)})),this.isOpen_=!1,t||this.maybeRestoreFocus_()))},o.prototype.handleBodyClick=function(t){var e=t.target;this.adapter_.isElementInContainer(e)||this.close()},o.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},o.prototype.autoPosition_=function(){var t;this.measurements_=this.getAutoLayoutMeasurements_();var e=this.getOriginCorner_(),i=this.getMenuSurfaceMaxHeight_(e),n=this.hasBit_(e,O.BOTTOM)?"bottom":"top",s=this.hasBit_(e,O.RIGHT)?"right":"left",r=this.getHorizontalOriginOffset_(e),a=this.getVerticalOriginOffset_(e),c=this.measurements_,d=c.anchorSize,u=c.surfaceSize,h=((t={})[s]=r,t[n]=a,t);d.width/u.width>A.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(s="center"),(this.isHoistedElement_||this.isFixedPosition_)&&this.adjustPositionForHoistedElement_(h),this.adapter_.setTransformOrigin(s+" "+n),this.adapter_.setPosition(h),this.adapter_.setMaxHeight(i?i+"px":""),this.hasBit_(e,O.BOTTOM)||this.adapter_.addClass(o.cssClasses.IS_OPEN_BELOW)},o.prototype.getAutoLayoutMeasurements_=function(){var t=this.adapter_.getAnchorDimensions(),e=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowDimensions(),n=this.adapter_.getWindowScroll();return t||(t={top:this.position_.y,right:this.position_.x,bottom:this.position_.y,left:this.position_.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions_,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:n}},o.prototype.getOriginCorner_=function(){var t,e,i=this.originCorner_,n=this.measurements_,s=n.viewportDistance,r=n.anchorSize,a=n.surfaceSize,c=o.numbers.MARGIN_TO_EDGE;this.hasBit_(this.anchorCorner_,O.BOTTOM)?(t=s.top-c+r.height+this.anchorMargin_.bottom,e=s.bottom-c-this.anchorMargin_.bottom):(t=s.top-c+this.anchorMargin_.top,e=s.bottom-c+r.height-this.anchorMargin_.top),!(e-a.height>0)&&t>=e&&(i=this.setBit_(i,O.BOTTOM));var d,u,h=this.adapter_.isRtl(),l=this.hasBit_(this.anchorCorner_,O.FLIP_RTL),m=this.hasBit_(this.anchorCorner_,O.RIGHT),p=!1;(p=h&&l?!m:m)?(d=s.left+r.width+this.anchorMargin_.right,u=s.right-this.anchorMargin_.right):(d=s.left+this.anchorMargin_.left,u=s.right+r.width-this.anchorMargin_.left);var _=d-a.width>0,f=u-a.width>0,T=this.hasBit_(i,O.FLIP_RTL)&&this.hasBit_(i,O.RIGHT);return f&&T&&h||!_&&T?i=this.unsetBit_(i,O.RIGHT):(_&&p&&h||_&&!p&&m||!f&&d>=u)&&(i=this.setBit_(i,O.RIGHT)),i},o.prototype.getMenuSurfaceMaxHeight_=function(t){var e=this.measurements_.viewportDistance,i=0,n=this.hasBit_(t,O.BOTTOM),s=this.hasBit_(this.anchorCorner_,O.BOTTOM),r=o.numbers.MARGIN_TO_EDGE;return n?(i=e.top+this.anchorMargin_.top-r,s||(i+=this.measurements_.anchorSize.height)):(i=e.bottom-this.anchorMargin_.bottom+this.measurements_.anchorSize.height-r,s&&(i-=this.measurements_.anchorSize.height)),i},o.prototype.getHorizontalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,O.RIGHT),n=this.hasBit_(this.anchorCorner_,O.RIGHT);if(i){var o=n?e.width-this.anchorMargin_.left:this.anchorMargin_.right;return this.isHoistedElement_||this.isFixedPosition_?o-(this.measurements_.viewportSize.width-this.measurements_.bodySize.width):o}return n?e.width-this.anchorMargin_.right:this.anchorMargin_.left},o.prototype.getVerticalOriginOffset_=function(t){var e=this.measurements_.anchorSize,i=this.hasBit_(t,O.BOTTOM),n=this.hasBit_(this.anchorCorner_,O.BOTTOM);return i?n?e.height-this.anchorMargin_.top:-this.anchorMargin_.bottom:n?e.height+this.anchorMargin_.bottom:this.anchorMargin_.top},o.prototype.adjustPositionForHoistedElement_=function(t){var i,n,o=this.measurements_,s=o.windowScroll,r=o.viewportDistance,a=Object.keys(t);try{for(var c=e(a),d=c.next();!d.done;d=c.next()){var u=d.value,h=t[u]||0;h+=r[u],this.isFixedPosition_||("top"===u?h+=s.y:"bottom"===u?h-=s.y:"left"===u?h+=s.x:h-=s.x),t[u]=h}}catch(t){i={error:t}}finally{try{d&&!d.done&&(n=c.return)&&n.call(c)}finally{if(i)throw i.error}}},o.prototype.maybeRestoreFocus_=function(){var t=this.adapter_.isFocused(),e=document.activeElement&&this.adapter_.isElementInContainer(document.activeElement);(t||e)&&this.adapter_.restoreFocus()},o.prototype.hasBit_=function(t,e){return Boolean(t&e)},o.prototype.setBit_=function(t,e){return t|e},o.prototype.unsetBit_=function(t,e){return t^e},o.prototype.isFinite_=function(t){return"number"==typeof t&&isFinite(t)},o}(l);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const v={TOP_LEFT:E.TOP_LEFT,TOP_RIGHT:E.TOP_RIGHT,BOTTOM_LEFT:E.BOTTOM_LEFT,BOTTOM_RIGHT:E.BOTTOM_RIGHT,TOP_START:E.TOP_START,TOP_END:E.TOP_END,BOTTOM_START:E.BOTTOM_START,BOTTOM_END:E.BOTTOM_END};class S extends m{constructor(){super(...arguments),this.mdcFoundationClass=x,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.corner="TOP_START",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){const t={"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth};return s`
      <div
          class="mdc-menu-surface ${T(t)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        <slot></slot>
      </div>`}createAdapter(){return Object.assign(Object.assign({},p(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{const e=this.mdcRoot;if(!e)return;const i=function(t,e){if(void 0===e&&(e=!1),void 0===C||e){var i=t.document.createElement("div");C="transform"in i.style?"transform":"webkitTransform"}return C}(window)+"-origin";e.style.setProperty(i,t)},isFocused:()=>_(this),saveFocus:()=>{const t=f(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{const e=this.mdcRoot;e&&(e.style.left="left"in t?t.left+"px":"",e.style.right="right"in t?t.right+"px":"",e.style.top="top"in t?t.top+"px":"",e.style.bottom="bottom"in t?t.bottom+"px":"")},setMaxHeight:t=>{const e=this.mdcRoot;e&&(e.style.maxHeight=t)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound)}close(){this.open=!1}show(){this.open=!0}}o([r(".mdc-menu-surface")],S.prototype,"mdcRoot",void 0),o([r("slot")],S.prototype,"slotElement",void 0),o([d({type:Boolean}),y((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],S.prototype,"absolute",void 0),o([d({type:Boolean})],S.prototype,"fullwidth",void 0),o([d({type:Boolean}),y((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setIsHoisted(t)}))],S.prototype,"fixed",void 0),o([d({type:Number}),y((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],S.prototype,"x",void 0),o([d({type:Number}),y((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],S.prototype,"y",void 0),o([d({type:Boolean}),y((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],S.prototype,"quick",void 0),o([d({type:Boolean,reflect:!0}),y((function(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}))],S.prototype,"open",void 0),o([d({type:String}),y((function(t){this.mdcFoundation&&(t?this.mdcFoundation.setAnchorCorner(v[t]):this.mdcFoundation.setAnchorCorner(E.TOP_START))}))],S.prototype,"corner",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const R=u`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{border-radius:var(--mdc-shape-medium, 4px);z-index:var(--mdc-menu-z-index, 8)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let w=class extends S{};w.styles=R,w=o([h("mwc-menu-surface")],w);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var M,F={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},B={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},N={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(M||(M={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var P=function(e){function i(t){var o=e.call(this,n(n({},i.defaultAdapter),t))||this;return o.closeAnimationEndTimerId_=0,o.defaultFocusState_=M.LIST_ROOT,o}return t(i,e),Object.defineProperty(i,"cssClasses",{get:function(){return F},enumerable:!0,configurable:!0}),Object.defineProperty(i,"strings",{get:function(){return B},enumerable:!0,configurable:!0}),Object.defineProperty(i,"numbers",{get:function(){return N},enumerable:!0,configurable:!0}),Object.defineProperty(i,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),i.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()},i.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter_.closeSurface(!0)},i.prototype.handleItemAction=function(t){var e=this,i=this.adapter_.getElementIndex(t);i<0||(this.adapter_.notifySelected({index:i}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var i=e.adapter_.getElementIndex(t);e.adapter_.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),x.numbers.TRANSITION_CLOSE_DURATION))},i.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case M.FIRST_ITEM:this.adapter_.focusItemAtIndex(0);break;case M.LAST_ITEM:this.adapter_.focusItemAtIndex(this.adapter_.getMenuItemCount()-1);break;case M.NONE:break;default:this.adapter_.focusListRoot()}},i.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},i.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter_.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter_.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter_.removeAttributeFromElementAtIndex(e,B.ARIA_CHECKED_ATTR),this.adapter_.removeClassFromElementAtIndex(e,F.MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,F.MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,B.ARIA_CHECKED_ATTR,"true")},i.prototype.setEnabled=function(t,e){this.validatedIndex_(t),e?(this.adapter_.removeClassFromElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,B.ARIA_DISABLED_ATTR,"false")):(this.adapter_.addClassToElementAtIndex(t,g.LIST_ITEM_DISABLED_CLASS),this.adapter_.addAttributeToElementAtIndex(t,B.ARIA_DISABLED_ATTR,"true"))},i.prototype.validatedIndex_=function(t){var e=this.adapter_.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},i}(l);class D extends m{constructor(){super(...arguments),this.mdcFoundationClass=P,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){const t="menu"===this.innerRole?"menuitem":"option";return s`
      <mwc-menu-surface
          ?hidden=${!this.open}
          .anchor=${this.anchor}
          .open=${this.open}
          .quick=${this.quick}
          .corner=${this.corner}
          .x=${this.x}
          .y=${this.y}
          .absolute=${this.absolute}
          .fixed=${this.fixed}
          .fullwidth=${this.fullwidth}
          class="mdc-menu mdc-menu-surface"
          @closed=${this.onClosed}
          @opened=${this.onOpened}
          @keydown=${this.onKeydown}>
        <mwc-list
          rootTabbable
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class="mdc-list"
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>
    </mwc-menu-surface>`}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!n.selected&&i.toggle(t,!0):n.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&("mdc-menu-item--selected"===e?n.selected&&i.toggle(t,!1):n.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const n=this.listElement;if(!n)return;const o=n.items[t];o&&o.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const n=i.items[t];n&&n.removeAttribute(e)},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let n=0;n<e.items.length;n++){if(n===t)continue;const o=e.items[n];if(o.selected&&o.group===i.group)return n}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,n=e.items[i];n&&this.mdcFoundation.handleItemAction(n)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async _getUpdateComplete(){await this._listUpdateComplete,await super._getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}o([r(".mdc-menu")],D.prototype,"mdcRoot",void 0),o([r("slot")],D.prototype,"slotElement",void 0),o([d({type:Object})],D.prototype,"anchor",void 0),o([d({type:Boolean,reflect:!0})],D.prototype,"open",void 0),o([d({type:Boolean})],D.prototype,"quick",void 0),o([d({type:Boolean})],D.prototype,"wrapFocus",void 0),o([d({type:String})],D.prototype,"innerRole",void 0),o([d({type:String})],D.prototype,"corner",void 0),o([d({type:Number})],D.prototype,"x",void 0),o([d({type:Number})],D.prototype,"y",void 0),o([d({type:Boolean})],D.prototype,"absolute",void 0),o([d({type:Boolean})],D.prototype,"multi",void 0),o([d({type:Boolean})],D.prototype,"activatable",void 0),o([d({type:Boolean})],D.prototype,"fixed",void 0),o([d({type:Boolean})],D.prototype,"forceGroupSelection",void 0),o([d({type:Boolean})],D.prototype,"fullwidth",void 0),o([d({type:String}),y((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(M[t])}))],D.prototype,"defaultFocus",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const L=u`mwc-list ::slotted([mwc-list-item]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}mwc-list{max-width:var(--mdc-menu-max-width, auto);min-width:var(--mdc-menu-min-width, auto)}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let H=class extends D{};H.styles=L,H=o([h("mwc-menu")],H);export{E as C,M as D,H as M};
//# sourceMappingURL=mwc-menu-09a15751.js.map
