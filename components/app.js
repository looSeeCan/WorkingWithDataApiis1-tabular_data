console.log("helslos");

const a = document.title = "Tabular Data"//name the title of the document

const test = async () => {
    const response = await fetch("./assets/ZonAnn.Ts+dSST.csv");
    // const response = await fetch("./assets/test.csv");
    console.log(response);
    const data = await response.text();//forgot the await, that's why I was having that issue with the promise pending
    console.log(data);
    return response
}

test();

