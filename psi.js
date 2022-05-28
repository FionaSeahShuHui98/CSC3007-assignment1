// To ensure that JS is successfully linked to HTML
// alert('1')

fetch ("https://api.data.gov.sg/v1/environment/psi").then ((psi_data) => {

    // To ensure that the link has successfully been connected
    // console.log(psi_data);

    // Conversion from JSON to Object
    return psi_data.json();

}).then(function(psi_object) {

    // To ensure that all data has been coverted to Object //
    // console.log (psi_object);

    // Ensure that able to read all datas  //
    // console.log (psi_object["items"][0].readings);

    // Ensure that able to read Timestamp //
    // console.log (psi_object["items"][0].update_timestamp);

    // Declarations //
    var metric = Object.keys(psi_object.items[0].readings);
    var length = metric.length;
    var time_updated = psi_object["items"][0].update_timestamp;
    // console.log(time_updated)

    // PSI Data Table
    for (var i = 0; i < length; i++) {
        var national_column = Object.values(psi_object.items[0].readings)[i].national
        var central_column =  Object.values(psi_object.items[0].readings)[i].central
        var west_column =  Object.values(psi_object.items[0].readings)[i].west
        var east_column =  Object.values(psi_object.items[0].readings)[i].east
        var north_column =  Object.values(psi_object.items[0].readings)[i].north
        var south_column =  Object.values(psi_object.items[0].readings)[i].south
        $("#psi_data_table tr:last").after("<tr><td>" + metric[i] + "</td><td>" + national_column + "</td><td>" + central_column + "</td><td>" + west_column + "</td><td>" + east_column + "</td><td>" + north_column + "</td><td>" + south_column + "</td></tr>");
    } 

    // Time formating
    time_updated = moment(time_updated).format("DD MMMM YYYYY, hh:mm a")

    // Display Update Time
    document.getElementById("time_frame").innerHTML = time_updated;
    
})