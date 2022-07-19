import { annualFile, ZonAnnFile } from "./csvFile.js";

const a = document.title = "Tabular Data"//name the title of the document

// ZonAnnFile()
//     .then(response => {
//         console.log("good");
//     })
//     .catch(error => {
//         console.log(error);
//     });

annualFile()
    .then(response => {
        console.log("good");
    })
    .catch(error => {
        console.log(error);
    });