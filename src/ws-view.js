import Metrics from "./bia/metrics.js";

import { LitElement, html, css } from "../web_modules/lit-element.js";

import "../web_modules/@material/mwc-button.js";
import "../web_modules/@material/mwc-select.js";
import '../web_modules/@material/mwc-list.js';
import '../web_modules/@material/mwc-list/mwc-list-item.js';
import '../web_modules/@material/mwc-textfield.js';

const inRange = (number, start, end) => {
  return number >= Math.min(start, end) && number < Math.max(start, end);
}

class WSView extends LitElement {
    static styles = css`
      .header {
        padding: 16px;
        width: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: stretch;
      }
  
      mwc-list {
        width: 100vw;
        --mdc-ripple-color: transparent;
      }
  
      mwc-textfield, mwc-select {
        width: min(100%, 200px);
        padding: 8px 0px;
      }
    `;

    static properties = {
      summary: { type: Object }
    }
  
    render() {
      return html`
        <div class="header">
          <mwc-textfield id="height" label="Height (cm)" type="number" required outlined></mwc-textfield>
          <mwc-textfield id="age" label="Age" type="number" required outlined></mwc-textfield>
          <mwc-select id="gender" label="Gender" required outlined>
            <mwc-list-item value="male">Male</mwc-list-item>
            <mwc-list-item value="female">Female</mwc-list-item>
          </mwc-select>
          <mwc-button @click=${() => this.scan()}>Start scanning</mwc-button>
          <mwc-list id="bia">
            ${this.summary}
          </mwc-list>
        </div>
      `;
    }
  
    parseReading(dataView) {
      const data = new Uint8Array(dataView.buffer);

      const ctrlByte1 = data[1];

      const reading = {
        stabilized: ctrlByte1 & (1 << 5),
        weight: ((data[12] << 8) + data[11]) / 200,
        impedance: (data[10] << 8) + data[9]
      }

      return reading;
    }

    _onreading(reading) {
      if (inRange(reading.impedance, 0, 3000) && reading.stabilized) {
        const metrics = new Metrics({
          weight: reading.weight,
          impedance: reading.impedance,
          height: Number(this.shadowRoot.querySelector('mwc-textfield[id="height"]').value),
          age: Number(this.shadowRoot.querySelector('mwc-textfield[id="age"]').value),
          gender: this.shadowRoot.querySelector('mwc-select[id="gender"]').value
        });

        this.summary = metrics.items();
      }
    }

    async scan() {
      const params = new URLSearchParams(location.search);
      if (params.has("demo")) {
        setTimeout(() => {
          this._onreading({
            stabilized: true,
            weight: 72,
            impedance: 2000 * Math.random() // human average
          });
        }, 200);
        return;
      }

      try {
        scan = await navigator.bluetooth.requestLEScan({
          filters: [{ name: "MIBCS" }]
        })

        navigator.bluetooth.addEventListener('advertisementreceived', event => {
          event.serviceData.forEach((dataView) => {  
            const reading = this.parseReading(dataView);
            this._onreading(reading);
          })
        })
      } catch (e) {
        if (e.code === 11) return
        if (e.code === 0) {
          alert('Bluetooth scanning permission denied. Please update browser settings to allow access.')
          return
        }
        console.error(e.message);
        alert(e.message)
      }
    }
  }
  
  customElements.define("ws-view", WSView);
