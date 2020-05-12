import{a as t,b as i,_ as e}from"../common/tslib.es6-ed95dd19.js";import{e as a,h as n}from"../common/lit-html-99d404bd.js";import{query as s,property as o,css as r,customElement as c}from"../lit-element.js";import{M as m}from"../common/foundation-700cf526.js";import{c as d}from"../common/class-map-c562f848.js";import{o as l}from"../common/observer-8c5412ba.js";import{B as _,a as p}from"../common/base-element-58419025.js";
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
 */var b={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},u={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},f={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},h=b.OPENING,g=b.OPEN,E=b.CLOSING,k=u.REASON_ACTION,T=u.REASON_DISMISS,O=function(e){function a(t){var n=e.call(this,i({},a.defaultAdapter,t))||this;return n.isOpen_=!1,n.animationFrame_=0,n.animationTimer_=0,n.autoDismissTimer_=0,n.autoDismissTimeoutMs_=f.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,n.closeOnEscape_=!0,n}return t(a,e),Object.defineProperty(a,"cssClasses",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return u},enumerable:!0,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!0,configurable:!0}),a.prototype.destroy=function(){this.clearAutoDismissTimer_(),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=0,this.adapter_.removeClass(h),this.adapter_.removeClass(g),this.adapter_.removeClass(E)},a.prototype.open=function(){var t=this;this.clearAutoDismissTimer_(),this.isOpen_=!0,this.adapter_.notifyOpening(),this.adapter_.removeClass(E),this.adapter_.addClass(h),this.adapter_.announce(),this.runNextAnimationFrame_((function(){t.adapter_.addClass(g),t.animationTimer_=setTimeout((function(){var i=t.getTimeoutMs();t.handleAnimationTimerEnd_(),t.adapter_.notifyOpened(),i!==f.INDETERMINATE&&(t.autoDismissTimer_=setTimeout((function(){t.close(T)}),i))}),f.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},a.prototype.close=function(t){var i=this;void 0===t&&(t=""),this.isOpen_&&(cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,this.clearAutoDismissTimer_(),this.isOpen_=!1,this.adapter_.notifyClosing(t),this.adapter_.addClass(b.CLOSING),this.adapter_.removeClass(b.OPEN),this.adapter_.removeClass(b.OPENING),clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){i.handleAnimationTimerEnd_(),i.adapter_.notifyClosed(t)}),f.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},a.prototype.isOpen=function(){return this.isOpen_},a.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs_},a.prototype.setTimeoutMs=function(t){var i=f.MIN_AUTO_DISMISS_TIMEOUT_MS,e=f.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===f.INDETERMINATE||t<=e&&t>=i))throw new Error("\n        timeoutMs must be an integer in the range "+i+"–"+e+"\n        (or "+f.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs_=t},a.prototype.getCloseOnEscape=function(){return this.closeOnEscape_},a.prototype.setCloseOnEscape=function(t){this.closeOnEscape_=t},a.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(T)},a.prototype.handleActionButtonClick=function(t){this.close(k)},a.prototype.handleActionIconClick=function(t){this.close(T)},a.prototype.clearAutoDismissTimer_=function(){clearTimeout(this.autoDismissTimer_),this.autoDismissTimer_=0},a.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter_.removeClass(b.OPENING),this.adapter_.removeClass(b.CLOSING)},a.prototype.runNextAnimationFrame_=function(t){var i=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){i.animationFrame_=0,clearTimeout(i.animationTimer_),i.animationTimer_=setTimeout(t,0)}))},a}(m);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

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
const{ARIA_LIVE_LABEL_TEXT_ATTR:A}=O.strings,{ARIA_LIVE_DELAY_MS:y}=O.numbers,x=new WeakMap,I=a((t,i)=>e=>{if(!i)return;let a=x.get(e);if(void 0===a){const i=document.createElement("div");return i.setAttribute("class","mdc-snackbar__label"),i.setAttribute("role","status"),i.setAttribute("aria-live","polite"),i.textContent=t,e.endNode.parentNode.insertBefore(i,e.endNode),a={labelEl:i,timerId:null},void x.set(e,a)}const n=a,s=n.labelEl;s.setAttribute("aria-live","off"),s.textContent="",s.innerHTML='<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>',s.setAttribute(A,t),null!==n.timerId&&clearTimeout(n.timerId),n.timerId=window.setTimeout(()=>{n.timerId=null,s.setAttribute("aria-live","polite"),s.removeAttribute(A),s.textContent=t},y)}),{OPENING_EVENT:N,OPENED_EVENT:C,CLOSING_EVENT:S,CLOSED_EVENT:M}=O.strings;class v extends _{constructor(){super(...arguments),this.mdcFoundationClass=O,this.isOpen=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1}render(){const t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return n`
      <div class="mdc-snackbar ${d(t)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${I(this.labelText,this.isOpen)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},p(this.mdcRoot)),{announce:()=>{},notifyClosed:t=>{this.dispatchEvent(new CustomEvent(M,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyClosing:t=>{this.isOpen=!1,this.dispatchEvent(new CustomEvent(S,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(C,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.isOpen=!0,this.dispatchEvent(new CustomEvent(N,{bubbles:!0,cancelable:!0}))}})}open(){this.isOpen=!0,void 0!==this.mdcFoundation&&this.mdcFoundation.open()}close(t=""){this.isOpen=!1,void 0!==this.mdcFoundation&&this.mdcFoundation.close(t)}firstUpdated(){super.firstUpdated(),this.isOpen&&this.mdcFoundation.open()}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}_handleActionClick(t){this.mdcFoundation.handleActionButtonClick(t)}_handleDismissClick(t){this.mdcFoundation.handleActionIconClick(t)}}e([s(".mdc-snackbar")],v.prototype,"mdcRoot",void 0),e([s(".mdc-snackbar__label")],v.prototype,"labelElement",void 0),e([o({type:Boolean,reflect:!0})],v.prototype,"isOpen",void 0),e([l((function(t){this.mdcFoundation.setTimeoutMs(t)})),o({type:Number})],v.prototype,"timeoutMs",void 0),e([l((function(t){this.mdcFoundation.setCloseOnEscape(t)})),o({type:Boolean})],v.prototype,"closeOnEscape",void 0),e([o({type:String})],v.prototype,"labelText",void 0),e([o({type:Boolean})],v.prototype,"stacked",void 0),e([o({type:Boolean})],v.prototype,"leading",void 0);
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
const D=r`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333}.mdc-snackbar__label{color:rgba(255,255,255,.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{margin-left:0;margin-right:8px;display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}[dir=rtl] .mdc-snackbar__actions,.mdc-snackbar__actions[dir=rtl]{margin-left:8px;margin-right:0}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action::before,.mdc-snackbar__action::after{background-color:#bb86fc}.mdc-snackbar__action:hover::before{opacity:.08}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss{color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss::before,.mdc-snackbar__dismiss::after{background-color:rgba(255,255,255,.87)}.mdc-snackbar__dismiss:hover::before{opacity:.08}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:9px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss svg,.mdc-snackbar__dismiss.mdc-snackbar__dismiss img{width:18px;height:18px}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var(--mdc-snackbar-action-color, #bb86fc)}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),slot[name=dismiss]::slotted(mwc-icon-button)[dir=rtl]{margin-left:0;margin-right:8px}`;let w=class extends v{};w.styles=D,w=e([c("mwc-snackbar")],w);export{w as Snackbar};
//# sourceMappingURL=mwc-snackbar.js.map
