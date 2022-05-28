// To ensure that JS is successfully linked to HTML
// alert('1')

fetch ("https://api.data.gov.sg/v1/environment/psi").then ((psi_data) => {

    // To ensure that the link has successfully been connected
    // console.log(psi_data);

    // Conversion from JSON to Object
    return psi_data.json();
}).then((psi_object) => {

    // To ensure that all data has been coverted to Object //
    // console.log (psi_object);

    // Ensure that able to read all datas  //
    // console.log (psi_object["items"][0].readings);

    // Ensure that able to read Timestamp //
    // console.log (psi_object["items"][0].update_timestamp);

    // Declarations //
    var data_readings = psi_object["items"][0].readings;
    // console.log(data_readings)
    var data_readings_objects = Object.values(data_readings);
    
    var time_updated = psi_object["items"][0].update_timestamp;
    // console.log(time_updated)


    // Time formating
    time_updated = moment(time_updated).format("DD MMMM YYYYY, hh:mm a")

    // Linking to Frontend HTML
    document.getElementById("time_frame").innerHTML = time_updated;

    let psi_TableData = "";

    data_readings_objects.map((psi_values) => {
        psi_TableData += `
            <tr>
                <td>${psi_values[0]}</td>
            </tr>
        `
    });

})