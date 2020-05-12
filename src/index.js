import { LitElement, html, css, svg } from "../web_modules/lit-element.js";
import "../web_modules/@material/mwc-drawer.js";
import "../web_modules/@material/mwc-top-app-bar.js";
import "../web_modules/@material/mwc-icon-button.js";
import "../web_modules/@material/mwc-button.js";
import "../web_modules/@material/mwc-dialog.js";
import "../web_modules/@material/mwc-snackbar.js";
import "../web_modules/@material/mwc-select.js";
import '../web_modules/@material/mwc-menu.js';
import '../web_modules/@material/mwc-textfield.js';
import '../web_modules/@material/mwc-list/mwc-list-item.js';

function getBatterySVGPaths(batteryLevel) {
  const value = Math.floor(Math.max(Math.min(100, batteryLevel), 0) / 10);
  switch(value) {
    case 0: // 0-9% (alert)
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path d="M12 3h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-11c0-.55-.45-1-1-1zm-2 10h-2v-2h2v2zm0-3h-2v-4h2v4z"/>
      `;
    case 1: // 10-19% (20)
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path fill-opacity=".3" d="M13 4c0-.55-.45-1-1-1h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v8.5h8v-8.5z"/>
        <path d="M5 12.5v2.5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.5h-8z"/>
      `;
    case 2: // 20-29% (30)
      return svg` 
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path fill-opacity=".3" d="M13 4c0-.55-.45-1-1-1h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v7.5h8v-7.5z"/>
        <path d="M5 11.5v3.5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-3.5h-8z"/>
      `;
    case 3:
    case 4: // 30-49% (50)
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path fill-opacity=".3" d="M13 4c0-.55-.45-1-1-1h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v5.5h8v-5.5z"/>
        <path d="M5 9.5v5.5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-5.5h-8z"/>
      `;
    case 5: // 50-69% (60)
    case 6:
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path fill-opacity=".3" d="M13 4c0-.55-.45-1-1-1h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v4.5h8v-4.5z"/>
        <path d="M5 8.5v6.5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6.5h-8z"/>
      `;
    case 7: // 70-79% (80)
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path fill-opacity=".3" d="M13 4c0-.55-.45-1-1-1h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v2.5h8v-2.5z"/>
        <path d="M5 6.5v8.5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8.5h-8z"/>
      `;
    case 8: // 80-89% (90)
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path fill-opacity=".3" d="M13 4c0-.55-.45-1-1-1h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v1.5h8v-1.5z"/>
        <path d="M5 5.5v9.5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-9.5h-8z"/>
      `;
    case 9: // 90-100% (full)
    case 10:
      return svg`
        <path d="M12 3h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-11c0-.55-.45-1-1-1z"/>
        <path d="M0 0h18v18h-18z" fill="none"/>
      `;
    default:
      return svg`
        <path d="M0 0h18v18h-18z" fill="none"/>
        <path d="M12 3h-1.5v-1.5h-3v1.5h-1.5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-11c0-.55-.45-1-1-1zm-2.2 10.8h-1.6v-1.6h1.6v1.6zm1.12-4.89s-.32.35-.56.59c-.4.4-.69 1.12-.69 1.5h-1.47c0-.69.52-1.44.91-1.83l.78-.79c.23-.23.37-.54.37-.88 0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25h-1.26c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .55-.22 1.05-.58 1.41z"/>
      `;
  }
}

class MeijiHTMonitor extends LitElement {
  static properties = { 
    temperature: { type: Number },
    humidity: { type: Number },
    battery: { type: Number },
    deviceAddress: { type: String }
  };

  static styles = css`
    :host {
      width: 100%
    }

    div {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
    }

    mwc-icon-button {
      --mdc-icon-size: 16px;
    }
  `;

  set name(value) {
    localStorage.setItem(`device-${this.deviceAddress}`, value);
    this.requestUpdate();
  }

  get name() {
    return localStorage.getItem(`device-${this.deviceAddress}`) || this.deviceAddress;
  }

  render() {
    return html`
      <div>
        <div>
          <div>${this.name}</div>
          <mwc-icon-button icon="edit" @click=${() => this.name = "Kitchen"}></mwc-icon-button>
        </div>
        <div>${this.temperature.toFixed(1)}°C</div>
        <div>${this.humidity.toFixed(1)}% RH</div>
        <svg id="bg-scan" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
          ${getBatterySVGPaths(this.batteryLevel)}
        </svg>
      </div>
    `;
  }
}
customElements.define("meiji-ht-monitor", MeijiHTMonitor);

let demoCounter = 0;

class MainApp extends LitElement {
  static styles = css`
  .drawer-content {
    padding: 0px 16px 0 16px;
  }
  .main-content {
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
  }

  .header {
    padding: 16px;
  }

  hr {
    width: 100%;
  }
  `;

  async firstUpdated() {
    const drawer = this.shadowRoot.querySelector("mwc-drawer");
    const container = drawer.parentNode;
    container.addEventListener('MDCTopAppBar:nav', _ => {
      drawer.open = !drawer.open;
    });

    const params = new URLSearchParams(location.search);
    if (params.has("demo")) {
      const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }

      setInterval(() => {
        demoCounter = (demoCounter + 1) % 255;
        const address = ["abc", "def", "hij"][Math.round(getRandomArbitrary(0, 2))]; 
        this._onreading({
          readingCounter: demoCounter,
          deviceAddress: address,
          dataType: 0x0d,
          dataLength: 4,
          temperature: getRandomArbitrary(20,25),
          humidity: getRandomArbitrary(35,65),
          batteryLevel: Math.ceil(getRandomArbitrary(0,100))
        });
      }, 1000);
    }
  }

  parseReading(dataView) {
    const data = new Uint8Array(dataView.buffer);
    const id = data.slice(0, 4); // 0x50, 0x20, 0xaa, 0x01

    const reading = {
      readingCounter: data.slice(4, 5),
      deviceAddress: `id${data.slice(5, 11).map(value => value.toString(16)).join("")}`,
      dataType: data[11],
      dataLength: data[13],
      temperature: null,
      humidity: null,
      batteryLevel: null
    }
    
    switch (reading.dataType) {
      case 0x0d: // temperature and humidity
        reading.temperature = dataView.getInt16(14, true) / 10;
        reading.humidity = dataView.getInt16(16, true) / 10;
        break;
      case 0x0a: // battery level
        reading.batteryLevel = dataView.getUint8(14, true);
        break;
      case 0x06: // humidity
        reading.humidity = dataView.getInt16(14, true) / 10;
        break;
      case 0x04: // temperature
        reading.temperature = dataView.getInt16(14, true) / 10;
        break;
    }

    return reading;
  };

  _onreading(reading) {
    let monitor = this.shadowRoot.querySelector(`#${reading.deviceAddress}`);
    if (!monitor) {
      monitor = document.createElement("meiji-ht-monitor");
      monitor.id = reading.deviceAddress;

      const slot = this.shadowRoot.querySelector(".main-content");
      slot.appendChild(monitor);
    }
    if (reading.temperature) {
      monitor.temperature = reading.temperature;
    }
    if (reading.humidity) {
      monitor.humidity = reading.humidity;
    }
    if (reading.batteryLevel) {
      monitor.batteryLevel = reading.batteryLevel;
    }
    monitor.deviceAddress = reading.deviceAddress;
  }

  async scan() {
    try {
      await navigator.bluetooth.requestLEScan({
        filters: [{ name: "MJ_HT_V1" }]
      });
  
      navigator.bluetooth.addEventListener('advertisementreceived', event => {
        event.serviceData.forEach((dataView, key) => {
          if (key == "0000fe95-0000-1000-8000-00805f9b34fb") {
            const reading = this.parseReading(dataView);
            this._onreading(reading);
          }
        });
      });
    } catch(error)  {
      log('Argh! ' + error);
    }
  }

  render() {
    return html`
      <mwc-drawer hasHeader type=modal>
        <span slot="title">Webble Mi Monitor</span>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button slot="navigationIcon" icon="menu"></mwc-icon-button>
            <div slot="title">Webble Mi</div>
          </mwc-top-app-bar>
          <div class="main-content">
            <div class="header">
              <mwc-button @click=${() => this.scan()}>Start scanning</mwc-button>
            </div>
          </div>
        </div>
      </mwc-drawer>
      <mwc-snackbar id="snackbar">
        <mwc-button id="actionButton" slot="action">CANCEL</mwc-button>
        <mwc-icon-button id="iconButton" icon="close" slot="dismiss"></mwc-icon-button>
      </mwc-snackbar>
    `;
  }
}

customElements.define("main-app", MainApp);