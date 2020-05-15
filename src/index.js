import { LitElement, html, css, supportsAdoptingStyleSheets } from "../web_modules/lit-element.js";

import "../web_modules/@material/mwc-drawer.js";
import "../web_modules/@material/mwc-top-app-bar.js";
import "../web_modules/@material/mwc-icon-button.js";
import '../web_modules/@material/mwc-list.js';
import '../web_modules/@material/mwc-list/mwc-list-item.js';

// Auto import initial view.
import "./ws-view.js"

class MainApp extends LitElement {
  static styles = css`
    .drawer-content {
      padding: 0px 16px 0 16px;
    }

    * {
      --mdc-theme-primary: #31b4c0;
    }

    .hidden {
      display: none;
    }
  `;

  static properties = {
    selected: { type: Number }
  }

  selectView(index) {
    switch(index) {
      case 0: // Humidity/Temperature
        import("./ht-view.js");
        break;
      case 1: // Weighting Scale
        import("./ws-view.js");
        break;
    }
    this.selected = index;
    if (this.drawer?.open) {
      this.drawer.open = false;
    }
  }

  constructor() {
    super();
    this.selectView(1);
  }

  render() {
    return html`
      <mwc-drawer hasHeader type=modal>
        <span slot="title">Webble Mi</span>
        <mwc-list id="menu" absolute>
          <mwc-list-item @click=${() => this.selectView(0)}>Humidity and Temperature</mwc-list-item>
          <mwc-list-item @click=${() => this.selectView(1)}>Weighing Scale</mwc-list-item>
        </mwc-list>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Webble Mi</div>
          </mwc-top-app-bar>
          <div class="main-content">
            <ht-view class=${this.selected !== 0 ? "hidden" : ""}></ht-view>
            <ws-view class=${this.selected !== 1 ? "hidden" : ""}></ws-view>
          </div>
        </div>
      </mwc-drawer>
    `;
  }

  async firstUpdated() {
    this.drawer = this.shadowRoot.querySelector("mwc-drawer");
    const container = this.drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', _ => {
      this.drawer.open = !this.drawer.open;
    });
  }
}

customElements.define("main-app", MainApp);