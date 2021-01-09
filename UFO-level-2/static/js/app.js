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
    var inputCity = d3.select("#city").property("value");
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape = d3.select("#shape").property("value");
    console.log(inputShape);

    let filteredData = tableData;
    
    // filter
    if (inputDate){
        filteredData = filteredData.filter( row => row.datetime === inputDate);
    }
    if (inputCity){
        filteredData = filteredData.filter( row => row.city === inputCity);
    }
    if (inputState){
        filteredData = filteredData.filter( row => row.state === inputState);
    }
    if (inputCountry){
        filteredData = filteredData.filter( row => row.country === inputCountry);
    }
    if (inputShape){
        filteredData = filteredData.filter( row => row.shape === inputShape);
    }
    
    buildTable(filteredData);
}

//event listener
d3.selectAll("#filter-btn").on("click",  handleClick);

//call build_table Fn
buildTable(tableData);





