import{_ as t}from"../common/tslib.es6-ed95dd19.js";import{h as e}from"../common/lit-html-99d404bd.js";import{LitElement as i,query as s,property as n,css as o,customElement as d}from"../lit-element.js";import{o as r}from"../common/observer-c65bdfc7.js";import{i as a}from"../common/if-defined-423a298d.js";
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
 */function c(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}
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
*/const l=t=>t.nodeType===Node.ELEMENT_NODE;const u=()=>{},m={get passive(){return!1}};document.addEventListener("x",u,m),document.removeEventListener("x",u);const h=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i};
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
class p extends i{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init()}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */var f=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),x="mdc-list-item",I={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+x+" button:not(:disabled),\n    ."+x+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+x+" button:not(:disabled),\n    ."+x+" a,\n    ."+x+' input[type="radio"]:not(:disabled),\n    .'+x+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},_={UNSET_INDEX:-1};
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
 */
const g=["input","button","textarea","select"];function E(t){return t instanceof Set}function b(t){return E(t.detail.index)}const v=t=>{const e=t===_.UNSET_INDEX?new Set:t;return E(e)?new Set(e):new Set([e])};class A extends f{constructor(t){super(Object.assign(Object.assign({},A.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=_.UNSET_INDEX,this.focusedItemIndex_=_.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return I}static get numbers(){return _}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(v(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter_.setTabIndexForElementIndex(e,-1),setTimeout(()=>{this.adapter_.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(t,e,i){const s="ArrowLeft"===t.key||37===t.keyCode,n="ArrowUp"===t.key||38===t.keyCode,o="ArrowRight"===t.key||39===t.keyCode,d="ArrowDown"===t.key||40===t.keyCode,r="Home"===t.key||36===t.keyCode,a="End"===t.key||35===t.keyCode,c="Enter"===t.key||13===t.keyCode,l="Space"===t.key||32===t.keyCode;if(this.adapter_.isRootFocused())return void(n||a?(t.preventDefault(),this.focusLastElement()):(d||r)&&(t.preventDefault(),this.focusFirstElement()));let u,m=this.adapter_.getFocusedElementIndex();if(!(-1===m&&(m=i,m<0))){if(this.isVertical_&&d||!this.isVertical_&&o)this.preventDefaultEvent_(t),u=this.focusNextElement(m);else if(this.isVertical_&&n||!this.isVertical_&&s)this.preventDefaultEvent_(t),u=this.focusPrevElement(m);else if(r)this.preventDefaultEvent_(t),u=this.focusFirstElement();else if(a)this.preventDefaultEvent_(t),u=this.focusLastElement();else if((c||l)&&e){const e=t.target;if(e&&"A"===e.tagName&&c)return;this.preventDefaultEvent_(t),this.setSelectedIndexOnAction_(m)}this.focusedItemIndex_=m,void 0!==u&&(this.setTabindexAtIndex_(u),this.focusedItemIndex_=u)}}handleSingleSelection(t,e){t!==_.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter_.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter_.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter_.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter_.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent_(t){const e=(""+t.target.tagName).toLowerCase();-1===g.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t){this.selectedIndex_!==t&&(this.selectedIndex_!==_.UNSET_INDEX&&(this.adapter_.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(this.selectedIndex_,!1)),this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter_.notifySelected(t))}setMultiSelectionAtIndex_(t){const e=((t,e)=>{const i=Array.from(t),s=Array.from(e),n={added:[],removed:[]},o=i.sort(),d=s.sort();let r=0,a=0;for(;r<o.length||a<d.length;){const t=o[r],e=d[a];t!==e?void 0!==t&&(void 0===e||t<e)?(n.removed.push(t),r++):void 0!==e&&(void 0===t||e<t)&&(n.added.push(e),a++):(r++,a++)}return n})(v(this.selectedIndex_),t);if(e.removed.length||e.added.length){for(const t of e.removed)this.adapter_.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!1);for(const t of e.added)this.adapter_.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter_.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter_.notifySelected(t,e)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===_.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter_.getAttributeForElementIndex(t,I.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?I.ARIA_CURRENT:I.ARIA_SELECTED;this.selectedIndex_!==_.UNSET_INDEX&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,i,"false");const s=e?this.ariaCurrentAttrValue_:"true";this.adapter_.setAttributeForElementIndex(t,i,s)}setTabindexAtIndex_(t){this.focusedItemIndex_===_.UNSET_INDEX&&0!==t?this.adapter_.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter_.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter_.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==_.UNSET_INDEX?t=this.selectedIndex_:E(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter_.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e){if(this.adapter_.getDisabledStateForElementIndex(t))return;let i=t;this.isMulti_&&(i=new Set([t])),this.isIndexValid_(i)&&(this.isMulti_?this.toggleMultiAtIndex(t,e):this.setSingleSelectionAtIndex_(t),this.adapter_.notifyAction(t))}toggleMultiAtIndex(t,e){let i=!1;i=void 0===e?!this.adapter_.getSelectedStateForElementIndex(t):e;const s=v(this.selectedIndex_);i?s.add(t):s.delete(t),this.setMultiSelectionAtIndex_(s)}}
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
*/const S=t=>t.hasAttribute("mwc-list-item");class y extends p{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=A,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const t=this.slotElement;return t?t.assignedNodes({flatten:!0}).filter(l):[]}get items(){return this.items_}updateItems(){const t=this.assignedElements,e=[];for(const i of t)S(i)&&e.push(i),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=e;const i=new Set;if(this.items_.forEach((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&i.add(e)}),this.multi)this.select(i);else{const t=i.size?i.entries().next().value[1]:-1;this.select(t)}}get selected(){const t=this.index;if(!E(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,i=this.rootTabbable?"0":"-1";return e`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${a(t)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}>
        <slot
            @slotchange=${this.onSlotChange}
            @list-item-rendered=${this.onListItemConnected}>
        </slot>
      </ul>
    `}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,s=S(i);this.mdcFoundation.handleKeydown(t,s,e)}}onRequestSelected(t){if(this.mdcFoundation){const e=this.getIndexOfTarget(t);if(-1===e)return;if(this.items[e].disabled)return;const i=t.detail.selected;this.mdcFoundation.handleSingleSelection(e,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(l(t)&&S(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:()=>{if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=h();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(S(i))return this.items.indexOf(i)}return-1},getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const s=this.items[t];s&&s.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const s=new CustomEvent("selected",i);this.dispatchEvent(s)},isFocusInsideList:()=>(t=>{const e=h();if(!e.length)return!1;const i=e[e.length-1],s=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const o=t=>{n=t.composedPath()};return document.body.addEventListener("check-if-focused",o),i.dispatchEvent(s),document.body.removeEventListener("check-if-focused",o),-1!==n.indexOf(t)})(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.mdcFoundation.toggleMultiAtIndex(t,e)}onSlotChange(){this.layout()}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){if(t&&this.updateItems(),!this.noninteractive){let t=null;for(const e of this.items)t||e.noninteractive||(t=e),e.tabindex=-1;t&&(t.tabindex=0)}}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}t([s(".mdc-list")],y.prototype,"mdcRoot",void 0),t([s("slot")],y.prototype,"slotElement",void 0),t([n({type:Boolean}),r((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],y.prototype,"activatable",void 0),t([n({type:Boolean}),r((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],y.prototype,"multi",void 0),t([n({type:Boolean}),r((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],y.prototype,"wrapFocus",void 0),t([n({type:String}),r((function(t,e){void 0!==e&&this.updateItems()}))],y.prototype,"itemRoles",void 0),t([n({type:String})],y.prototype,"innerRole",void 0),t([n({type:Boolean})],y.prototype,"rootTabbable",void 0),t([n({type:Boolean,reflect:!0}),r((function(t){const e=this.slotElement;if(t&&e){const t=function(t,e){for(const i of t.assignedNodes({flatten:!0}))if(l(i)){const t=i;if(c(t,e))return t}return null}(e,'[tabindex="0"]');this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],y.prototype,"noninteractive",void 0);
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
const F=o`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{font-family:Roboto, sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
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
*/;let C=class extends y{};C.styles=F,C=t([d("mwc-list")],C);export{C as List,v as createSetFromIndex,b as isEventMulti,E as isIndexSet};
//# sourceMappingURL=mwc-list.js.map
