import { CsvStringToTable } from "./csvStringToTable.js";

const ZonAnnFile = async () => {
    // const response = await fetch("./assets/ZonAnn.Ts+dSST.csv");
    const response = await fetch("./assets/ZonAnn.Ts+dSST.csv");
    console.log(response);
    const data = await response.text();//forgot the await, that's why I was having that issue with the promise pending
    console.log(data);

    const table = data.split("\n").slice(1);//data. split is using an escape character sequence; \n = split the csv file everywhere there is table line break. slice out the array from the first index forward
    console.table(table);

    //each row from the split method is now a string index. there are 2 indexes in this array. split each index by the commas
    table.forEach(item => {
        // console.log(item);
        const b = item.split(",");
        // console.log(b);
        const year = b[0];
        const temp = b[1];
        console.log(year, temp);
    });

    return response;
}

const annualFile = async () => {
    // const response = await fetch(`./assets/annual-enterprise-survey-2021-financial-year-provisional-csv.csv`);
    const response = await fetch(`./assets/test.csv`);
    console.log(response);
    const data = await response.text();
    console.log(data);

    //create html element for table
    const div = document.createElement("div");
    div.id = "table";
    console.log(div);
    const p = document.createElement("p");
    console.log(p);
    // p.innerHTML = data;
    div.appendChild(p);
    document.body.prepend(div);

    //call csvStringToTable.js
    const a = CsvStringToTable(data, div);
}; 

export {ZonAnnFile};
export {annualFile};