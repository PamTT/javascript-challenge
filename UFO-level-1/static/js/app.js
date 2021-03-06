// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

//build_table Fn

function buildTable(data){
    tbody.html("");
    data.forEach((dataRow)=>{
        var row = tbody.append("tr"); 
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                cell.text(val);
        });    
    });
}

//Handle_click Fn
function handleClick(){ 
    //grab dateTime value
    var inputDate = d3.select("#datetime").property("value");  
    let filteredData = tableData;
    
    // filter
    if (inputDate){
        filteredData = filteredData.filter( row => row.datetime === inputDate);
    }

    buildTable(filteredData); 
}

//event listener
d3.selectAll("#filter-btn").on("click",  handleClick);

//call build_table Fn
buildTable(tableData);





