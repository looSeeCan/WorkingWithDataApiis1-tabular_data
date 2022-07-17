console.log("helslo");

const a = document.title = "Tabular Data"//name the title of the document

//test
const test = async () => {
    const response = await fetch("tabular_data/assets/test.csv");
    console.log(response);
    const data = response.text();
    console.log(data);
}

test();

//test commit... something is wrong with the commit... my files are messed up. I will fix it later.
////sss sss