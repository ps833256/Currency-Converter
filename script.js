let countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

for (let x in countryList) {
  let option = document.createElement("option");
  option.setAttribute("value", x);
  option.innerText = x;
  document.getElementById("fromCurrency").append(option);
}

for (let y in countryList) {
  let option = document.createElement("option");
  option.setAttribute("value", y);
  option.innerText = y;
  document.getElementById("toCurrency").append(option);
}

let fromval = document.getElementById("fromCurrency");
fromval.addEventListener("change", function () {
  fetchdata(fromval.value);
  document.getElementById("fromimg").innerHTML = null;

  for (let keys in countryList) {
    if (fromval.value === keys) {
      let flag = document.createElement("img");
      flag.setAttribute(
        "src",
        `https://flagsapi.com/${countryList[keys]}/flat/64.png`
      );
      document.getElementById("fromimg").append(flag);
    }
  }
});

let ToVal = document.getElementById("toCurrency");
ToVal.addEventListener("change", function () {
  document.getElementById("Toimg").innerHTML = null;
  for (let keys in countryList) {
    if (ToVal.value === keys) {
      let flag = document.createElement("img");
      flag.setAttribute(
        "src",
        `https://flagsapi.com/${countryList[keys]}/flat/64.png`
      );
      document.getElementById("Toimg").append(flag);
    }
  }
});

function fetchdata(searchtext) {
  fetch(`https://api.exchangerate-api.com/v4/latest/${searchtext}`)
    .then(function (res) {
      let data = res.json();
      return data;
    })
    .then(function (data) {

        console.log(data.rates)
        
      let tovalue = document.getElementById("toCurrency");
      tovalue.addEventListener("change", function () {
       
           for(let x in data.rates){
            if(tovalue.value ===x){
               document.getElementById("exchangeBtn").addEventListener("click",function(){
               let inputval = document.getElementById("fromAmount")
               let show= document.getElementById("show")
               show.innerText= `Exchange rates- ${Math.floor(inputval.value * data.rates[x])}`
            
               })
            }
           
           }
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}



