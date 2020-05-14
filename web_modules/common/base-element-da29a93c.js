import{LitElement as t}from"../lit-element.js";import{m as e}from"./foundation-5da43da3.js";
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
*/const s=t=>t.nodeType===Node.ELEMENT_NODE;function n(t,n){for(const o of t.assignedNodes({flatten:!0}))if(s(o)){const t=o;if(e(t,n))return t}return null}function o(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let d=!1;const a=()=>{},i={get passive(){return d=!0,!1}};document.addEventListener("x",a,i),document.removeEventListener("x",a);const c=d,r=(t=window.document)=>{let e=t.activeElement;const s=[];if(!e)return s;for(;e&&(s.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return s},u=t=>{const e=r();if(!e.length)return!1;const s=e[e.length-1],n=new Event("check-if-focused",{bubbles:!0,composed:!0});let o=[];const d=t=>{o=t.composedPath()};return document.body.addEventListener("check-if-focused",d),s.dispatchEvent(n),document.body.removeEventListener("check-if-focused",d),-1!==o.indexOf(t)};
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
class m extends t{createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}export{m as B,o as a,u as b,r as d,n as f,s as i,c as s};
//# sourceMappingURL=base-element-da29a93c.js.map
