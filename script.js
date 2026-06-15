let data, info, output, result;

async function init(){

    let link = "data.json";

    info = await fetch(link);
    data = await info.json();
    console.log(data);

    output = document.getElementById("output");
    result = document.getElementById("result");

    let build = "";
    let ct = 0;

    for(let i = 0; i < data.length; i++) {

        let crime = data[i];

        build += `<div class="card">
                    <h3>${crime.ofns_desc}</h3>
                    <hr>
                    <p>${crime.boro_nm}</p>
                    <p>${crime.law_cat_cd}</p>
                    <p>${crime.cmplnt_fr_dt}</p>
                    <hr>
                    <p>${crime.cmplnt_num}</p>
                  </div>`;

        ct++;
    }

    result.innerHTML = `${ct} Results found`;
    output.innerHTML = build;
}

function filterborough(){

    let borough = document.getElementById("borough").value;

    let build = "";
    let ct = 0;

    for(let i = 0; i < data.length; i += 1) {

        let crime = data[i];

        if(crime.boro_nm == borough || crime.boro_nm == borough.toUpperCase()) {

            build += `<div class="card">
                        <h3>${crime.ofns_desc}</h3>
                        <hr>
                        <p>${crime.boro_nm}</p>
                        <p>${crime.law_cat_cd}</p>
                        <p>${crime.cmplnt_fr_dt}</p>
                        <hr>
                        <p>${crime.cmplnt_num}</p>
                      </div>`;

            ct += 1;
        }
    }

    result.innerHTML = `${ct} Results found`;
    output.innerHTML = build;
}

function filtercrime() {

    let offense = document.getElementById("crime").value;

    let build = "";
    let ct = 0;

    for(let i = 0; i < data.length; i += 1) {

        let crime = data[i];

        if(crime.ofns_desc == offense || crime.ofns_desc == offense.toUpperCase()) {

            build += `<div class="card">
                        <h3>${crime.ofns_desc}</h3>
                        <hr>
                        <p>${crime.boro_nm}</p>
                        <p>${crime.law_cat_cd}</p>
                        <p>${crime.cmplnt_fr_dt}</p>
                        <hr>
                        <p>${crime.cmplnt_num}</p>
                      </div>`;

            ct += 1;
        }
    }

    result.innerHTML = `${ct} Results found`;
    output.innerHTML = build;
}

function showAll() {

    let build = "";
    let ct = 0;

    for(let i = 0; i < data.length; i++) {

        let crime = data[i];

        build += `<div class="card">
                    <h3>${crime.ofns_desc}</h3>
                    <hr>
                    <p>${crime.boro_nm}</p>
                    <p>${crime.law_cat_cd}</p>
                    <p>${crime.cmplnt_fr_dt}</p>
                    <hr>
                    <p>${crime.cmplnt_num}</p>
                  </div>`;

        ct++;
    }

    result.innerHTML = `${ct} Results found`;
    output.innerHTML = build;
}

function filterBorough(){

  let b = 0, m = 0, q = 0, si = 0, br = 0;

  for(let i = 0; i < data.length; i++){

    let crime = data[i];

    if(crime.boro_nm == "BROOKLYN"){
      br++;
    }else if(crime.boro_nm == "MANHATTAN"){
      m++;
    }else if(crime.boro_nm == "QUEENS"){
      q++;
    }else if(crime.boro_nm == "BRONX"){
      b++;
    }else if(crime.boro_nm == "STATEN ISLAND"){
      si++;
    }

  }

  let chartData = [
    ["Brooklyn", br],
    ["Manhattan", m],
    ["Queens", q],
    ["Bronx", b],
    ["Staten Island", si]
  ];

  let chartType = document.getElementById("chartType").value;

  displayChart(chartData, "chart", chartType);
}

function filterCrime(){

  let f = 0, m = 0, v = 0;

  for(let i = 0; i < data.length; i++){

    let crime = data[i];

    if(crime.law_cat_cd == "FELONY"){
      f++;
    }else if(crime.law_cat_cd == "MISDEMEANOR"){
      m++;
    }else if(crime.law_cat_cd == "VIOLATION"){
      v++;
    }

  }

  let chartData2 = [
    ["Felony", f],
    ["Misdemeanor", m],
    ["Violation", v]
  ];

  let chartType = get("chartType").value;

  displayChart(chartData2, "chart", chartType);
}