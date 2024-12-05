fetch('https://temp.staticsave.com/67512d0c73a2c.json')
.then(response => response.json())
.then(databaseON => {
    databaseON["Ontario Vehicle Information"].Owner_Details.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.Registration_ID_Number}</td>
            <td>${element.Name}</td>
            <td>${element.Contact_Number}</td>
            <td>${element.Province_ID}</td>
            <td>${element.Postal_Code}</td>`

        document.getElementById("OwnersA").appendChild(row);
    });
    databaseON["Ontario Vehicle Information"].Vehicle_Information.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.Province_ID}</td>
            <td>${element.Registration_ID_Number}</td>
            <td>${element.Vehicle_Information_Number}</td>
            <td>${element.Date_Acquired}</td>
            <td>${element.Brand}</td>
            <td>${element.Model}</td>`

        document.getElementById("VehiclesA").appendChild(row);
    });
    databaseON["Ontario Vehicle Information"].Theft_Reports.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.Date_Stolen}</td>
            <td>${element.Registration_ID_Number}</td>
            <td>${element.Vehicle_Information_Number}</td>
            <td>${element.Location}</td>
            <td>${element.Province_ID}</td>
            <td>${element.Status}</td>`

        document.getElementById("TheftsA").appendChild(row);
    });
});