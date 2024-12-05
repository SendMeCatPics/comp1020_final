fetch('https://files.catbox.moe/hc8l5q.xml')
.then(response => response.text())
.then(databaseQC => {
        let parser = new DOMParser(),
        xml = parser.parseFromString(databaseQC, "text/xml");

        let owners = xml.getElementsByTagName("Owner");
        let i;
        let tableOwners = "";
        for (i = 0; i < owners.length; i++) {
            tableOwners += "<tr><td>" +
            owners[i].getElementsByTagName("Registration_ID_Number")[0].childNodes[0].nodeValue + "</td><td>" + 
            owners[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue + "</td><td>" + 
            owners[i].getElementsByTagName("Contact_Number")[0].childNodes[0].nodeValue + "</td><td>" + 
            owners[i].getElementsByTagName("Province_ID")[0].childNodes[0].nodeValue + "</td><td>" + 
            owners[i].getElementsByTagName("Postal_Code")[0].childNodes[0].nodeValue + "</td></tr>";
        }
        document.getElementById("OwnersB").innerHTML = tableOwners;

        let vehicles = xml.getElementsByTagName("Vehicle");
        let j;
        let tableVehicles = "";
        for (j = 0; j < vehicles.length; j++) {
            tableVehicles += "<tr><td>" +
            vehicles[j].getElementsByTagName("Vehicle_Information_Number")[0].childNodes[0].nodeValue + "</td><td>" + 
            vehicles[j].getElementsByTagName("Registration_ID_Number")[0].childNodes[0].nodeValue + "</td><td>" + 
            vehicles[j].getElementsByTagName("Province_ID")[0].childNodes[0].nodeValue + "</td><td>" + 
            vehicles[j].getElementsByTagName("Brand")[0].childNodes[0].nodeValue + "</td><td>" + 
            vehicles[j].getElementsByTagName("Model")[0].childNodes[0].nodeValue + "</td><td>" + 
            vehicles[j].getElementsByTagName("Date_Acquired")[0].childNodes[0].nodeValue + "</td></tr>";
        }
        document.getElementById("VehiclesB").innerHTML = tableVehicles;

        let reports = xml.getElementsByTagName("Report");
        let k;
        let tableReports = "";
        for (k = 0; k < reports.length; k++) {
            tableReports += "<tr><td>" +
            reports[k].getElementsByTagName("Date_Stolen")[0].childNodes[0].nodeValue + "</td><td>" + 
            reports[k].getElementsByTagName("Registration_ID_Number")[0].childNodes[0].nodeValue + "</td><td>" + 
            reports[k].getElementsByTagName("Vehicle_Information_Number")[0].childNodes[0].nodeValue + "</td><td>" + 
            reports[k].getElementsByTagName("Location")[0].childNodes[0].nodeValue + "</td><td>" + 
            reports[k].getElementsByTagName("Province_ID")[0].childNodes[0].nodeValue + "</td><td>" + 
            reports[k].getElementsByTagName("Status")[0].childNodes[0].nodeValue + "</td></tr>";
        }
        document.getElementById("TheftsB").innerHTML = tableReports;

});