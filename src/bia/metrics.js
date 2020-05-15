const enforceLimits = (value, min, max) => Math.min(max, Math.max(min, value));

import { html } from "../../web_modules/lit-html.js";

function findLabel(value, ranges, labels) {
  let pos;
  for (pos = 0; pos < ranges.length; pos++) {  
    if (value <= ranges[pos]) break;
  }
  return labels[pos];
}

export default class Metrics {
  constructor(options) {
    console.table(options);
    this.weight = options.weight;
    this.impedance = options.impedance;
    this.height = options.height;
    this.age = options.age;
    this.sex = options.gender;
  }

  items() { 
    return [
      this.weightItem(),
      this.bmiItem(), // Body Mass Index
      this.bodyAgeItem(),
      this.bodyFatItem(),
      this.tbwItem(), // Total Body Water
      this.bmrItem(), // Basal metabolism
      this.visceralFatItem(),
      this.muscleMassItem(),
      this.boneMassItem()
    ]
  }
  
  idealWeight() {
    if (this.sex == 'female') {
      return (this.height - 70) * 0.6;
    }
    return (this.height - 80) * 0.7
  }

  weightItem() {
    const ranges = [18.5, 25, 28, 32].map(v => v * (this.height / 100) ** 2);
    const labels = ["Low", "Normal", "Increased", "High", "Very High"];

    const label = findLabel(this.weight, ranges, labels);

    return html`
      <mwc-list-item twoline>
        <span>Weight</span><span> <b>${this.weight.toFixed(1)}</b> kg</span>
        <span slot="secondary">${label} (ideal weight ${this.idealWeight().toFixed(1)} kg)</span>
      </mwc-list-item>
    `;
  }
  
  bodyAge() {
    let metabolicAge;
    if (this.sex == 'female') {
      metabolicAge = (this.height * -1.1165) + (this.weight * 1.5784) + (this.age * 0.4615) + (this.impedance * 0.0415) + 83.2548;
    } else {
      metabolicAge = (this.height * -0.7471) + (this.weight * 0.9161) + (this.age * 0.4184) + (this.impedance * 0.0517) + 54.2267;
    }
    return enforceLimits(metabolicAge, 15, 80);
  }

  bodyAgeItem() {
    const bodyAge = this.bodyAge();
    let label = "";
    if (bodyAge < this.age) {
      label = "Younger";
    } else if (bodyAge > this.age) {
      label = "Older";
    }

    return html`
      <mwc-list-item twoline>
        <span>Body age</span><span> <b>${bodyAge.toFixed(0)}</b></span>
        <span slot="secondary">${label}</span>
      </mwc-list-item>
    `;
  }
  
  visceralFat() {
    let subsubcalc, subcalc, vfal;
    if (this.sex === 'female') {
      if (this.weight > (13 - (this.height * 0.5)) * -1) {
        subsubcalc = ((this.height * 1.45) + (this.height * 0.1158) * this.height) - 120;
        subcalc = this.weight * 500 / subsubcalc;
        vfal = (subcalc - 6) + (this.age * 0.07);
      } else {
        subcalc = 0.691 + (this.height * -0.0024) + (this.height * -0.0024);
        vfal = (((this.height * 0.027) - (subcalc * this.weight)) * -1) + (this.age * 0.07) - this.age;
      }
    } else if (this.height < this.weight * 1.6) {
      subcalc = ((this.height * 0.4) - (this.height * (this.height * 0.0826))) * -1;
      vfal = ((this.weight * 305) / (subcalc + 48)) - 2.9 + (this.age * 0.15);
    } else {
      subcalc = 0.765 + this.height * -0.0015;
      vfal = (((this.height * 0.143) - (this.weight * subcalc)) * -1) + (this.age * 0.15) - 5.0;
    }
    return enforceLimits(vfal, 1, 59);
  }

  visceralFatItem() {
    const value = this.visceralFat();
    const ranges = [10, 15];
    const labels = ["Normal", "High", "Very High"];

    const label = findLabel(value, ranges, labels);

    return html`
      <mwc-list-item twoline>
        <span>Visceral Fat Level</span><span> <b>${value.toFixed(0)}</b></span>
        <span slot="secondary">${label}</span>
      </mwc-list-item>
    `;
  }

  tbw() {
    let waterPercentage = (100 - this.bodyFat()) * 0.7;
    let coefficient = 0.98;
    if (waterPercentage <= 50) coefficient = 1.02;
    if (waterPercentage * coefficient >= 65) waterPercentage = 75;
    return enforceLimits(waterPercentage * coefficient, 35, 75);
  }

  tbwRanges() {
    // From https://www.healthline.com/health/body-water-percentage
    if (this.age < 0.5) return [64, 84];
    if (this.age < 1) return [57, 64];
    if (this.age < 12) return [49, 75];
    if (this.sex == "female") {
      if (this.age < 18) return [49, 63];
      if (this.age < 50) return [41, 60];
      return [39, 57, 100];
    }
    if (this.sex == "male") {
      if (this.age < 18) return [52, 66];
      if (this.age < 50) return [43, 73];
      return [47, 67];
    }
  }

  tbwItem() {
    const value = this.tbw();
    const ranges = this.tbwRanges()
    const labels = ["Insufficient", "Normal", "Good"];

    const label = findLabel(value, ranges, labels);

    return html`
      <mwc-list-item twoline>
        <span>Water</span><span> <b>${value.toFixed(1)}%</b></span>
        <span slot="secondary">${label}</span>
      </mwc-list-item>
    `;
  }

  bmi() {
    return enforceLimits(this.weight / ((this.height / 100) * (this.height / 100)), 10, 90)
  }

  bmiItem() {
    const value = this.bmi();
    const ranges = [18.5, 25, 28, 32];
    const labels = ["Low", "Normal", "Increased", "High", "Very High"];

    const label = findLabel(value, ranges, labels);

    return html`
      <mwc-list-item twoline>
        <span>Body Mass Index</span><span> <b>${value.toFixed(1)}</b></span>
        <span slot="secondary">${label}</span>
      </mwc-list-item>
    `;
  }

  bmr() {
    let bmr
    if (this.sex === 'female') {
      bmr = 864.6 + this.weight * 10.2036
      bmr -= this.height * 0.39336
      bmr -= this.age * 6.204
    } else {
      bmr = 877.8 + this.weight * 14.916
      bmr -= this.height * 0.726
      bmr -= this.age * 8.976
    }

    if (this.sex === 'female' && bmr > 2996) bmr = 5000
    else if (this.sex === 'male' && bmr > 2322) bmr = 5000
    return enforceLimits(bmr, 500, 10000)
  }

  bmrItem() {
    const value = this.bmr();

    return html`
      <mwc-list-item twoline>
        <span>Basal metabolism</span><span> <b>${value.toFixed(0)} Cal</b></span>
        <span slot="secondary"></span>
      </mwc-list-item>
    `;
  }

  bodyFat() {
    let value = 0.8;
    if (this.sex === 'female' && this.age <= 49) value = 9.25;
    else if (this.sex === 'female' && this.age > 49) value = 7.25;

    const LBM = this.computeLBMCoefficient();
    let coefficient = 1.0;

    if (this.sex == 'male' && this.weight < 61) coefficient = 0.98;
    else if (this.sex == 'female' && this.weight > 60) {
      if (this.height > 160) {
        coefficient *= 1.03;
      } else {
        coefficient = 0.96;
      }
    }
    else if (this.sex == 'female' && this.weight < 50) {
      if (this.height > 160) {
        coefficient *= 1.03;
      } else {
        coefficient = 1.02;
      }
    }
    let fatPercentage = (1.0 - (((LBM - value) * coefficient) / this.weight)) * 100;

    if (fatPercentage > 63) fatPercentage = 75;
    return enforceLimits(fatPercentage, 5, 75);
  }

  bodyFatRanges() {
    // From American Council on Exercise
    if (this.sex == "female") {
      return [14, 21, 25, 32];
    } else {
      return [5, 14, 18, 25];
    }

  }

  bodyFatItem() {
    const value = this.bodyFat();
    const ranges = this.bodyFatRanges();
    const labels = ["Very Low", "Low", "Normal", "Increased", "High"];

    const label = findLabel(value, ranges, labels);

    return html`
      <mwc-list-item twoline>
        <span>Body fat</span><span> <b>${value.toFixed(1)}%</b></span>
        <span slot="secondary">${label}</span>
      </mwc-list-item>
    `;
  }

  muscleMass() {
    let muscleMass = this.weight - ((this.bodyFat() * 0.01) * this.weight) - this.boneMass();
    if (this.sex == 'female' && muscleMass >= 84) muscleMass = 120;
    else if (this.sex == 'male' && muscleMass >= 93.5) muscleMass = 120;
    return enforceLimits(muscleMass, 10, 120);
  }

  muscleMassItem() {
    const value = this.muscleMass();

    return html`
      <mwc-list-item twoline>
        <span>Muscle mass</span><span> <b>${value.toFixed(1)} kg</b></span>
        <span slot="secondary"></span>
      </mwc-list-item>
    `;
  }

  boneMass() {
    let base = 0.18016894;
    if (this.sex == 'female') base = 0.245691014;

    let boneMass = (base - (this.computeLBMCoefficient() * 0.05158)) * -1;

    if (boneMass > 2.2) boneMass += 0.1;
    else boneMass -= 0.1;

    if (this.sex == 'female' && boneMass > 5.1) boneMass = 8;
    else if (this.sex == 'male' && boneMass > 5.2) boneMass = 8;

    return enforceLimits(boneMass, 0.5, 8);
  }

  boneMassItem() {
    const value = this.boneMass();

    return html`
      <mwc-list-item twoline>
        <span>Bone mass</span><span> <b>${value.toFixed(1)} kg</b></span>
        <span slot="secondary"></span>
      </mwc-list-item>
    `;
  }

  computeLBMCoefficient() {
    let lbm = (this.height * 9.058 / 100) * (this.height / 100);
    lbm += this.weight * 0.32 + 12.226;
    lbm -= this.impedance * 0.0068;
    lbm -= this.age * 0.0542;
    return lbm;
  }
}
