//TODO: I finished this with just a test, because the original csv file is huge. I have to try to css the table!!
const CsvStringToTable = (data, elementToInsertTable) => {
    console.log(data);
    // const rows1 = data.split("\n");//this seems to be the same as the trim bellow. will come back to this
    // console.log(rows1);
    const rows = data.trim().split(/\r?\n|\r/);//seperate the data by lines and split them up as indexes in an array
    console.log(rows); 

    let table = "";
    let tableRows = "";
    let tableHeader = "";

    console.groupCollapsed();
        rows.forEach((row, rowIndex) => {//cycle thru each index. rowIndex = the index number of the element that it is cyclling thru
            console.log(rowIndex);
            let tableColumns = "";
            console.log(row);
            const columns = row.split(",");//and split up the index by the commas. this will create another array  
            // console.log(columns);
            
            columns.forEach((column, colun_index) => {
                // tableColumns += rowIndex === 0 ? "<th>" + column + "</th>" : "<td>" + column + "</td>";
                tableColumns += rowIndex === 0 ? `<th>${column}</th>` : `<td>${column}</td>`;
                // tableColumns = tableColumns + rowIndex ? "<th>" + column + "</th>" : "<td>" + column + "</td>";
                console.log(tableColumns);
                // console.log(rowIndex);
                // console.log(tableColumns);
            });
            if (rowIndex === 0) {
                tableHeader += `<tr>${tableColumns}</tr>`
                console.log(tableHeader);
            }else {
                tableRows += `<tr>${tableColumns}</tr>`
            };
        });

        table += `<table>`;
        console.log(table);
            table += `<thead>`;
            console.log(table);
                table += tableHeader;
                    console.log(table);
            table += `<thead>`;
            console.log(table);
            table += `<tbody>`;
            console.log(table);
                table += tableRows;
                console.log(table);
            table += `</tbody>`;
            console.log(table);
        table += `</table>`;
        console.log(table);
        
        console.log(elementToInsertTable);
        const a = document.getElementById("table");
        a.innerHTML += table;
    console.groupEnd;

};




export {CsvStringToTable};