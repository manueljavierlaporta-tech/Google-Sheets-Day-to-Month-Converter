# 📅 Google Sheets | Day to Month Converter 

This project contains a **Google Apps Script** associated to a personalized **Google Sheets** (which I won't be providing in full, rather just the bare minimum for context), which objective is to normalize dates that have been entered in argentinian format (`DD/MM/YYYY`) so that internal **Google Sheets functions** can correctly operate.

## ✍🏻 Workflow

<div>
      <p>In an <b>advertising agency</b>, the order of orders and their data entry are managed using a Google Sheets spreadsheet, divided into different sheets:</p>
      <ol type="A">
            <li>Some sheets are individual sheets corresponding to each Account Executive, where each one must enter certain important information:  </li>
            <ul>
                  <li>Work Order</li>
                  <li>Date Received</li>
                  <li>Date Sketched</li>
                  <li>Deadline</li>
                  <li>Client</li>
                  <li>Subject of Order</li>
                  <li>Type of Material</li>
                  <li>Quantity of Material</li>
                  <li>Status</li>
                  <li>Name of Account Executive</li>
                  <li>Name of Graphic Designer</li>
           </ul>
           <br />
           <li>Other sheets are also individual, but these correspond to each month of the year, where the jobs are separated by a set of columns representing both the Account Executive and the Graphic Designer, and the columns are differentiated by clearly defined days             within weeks.  </li>
      </ol>
      <p>Naturally, if you're from the US you wouldn't need any converter, because you would simply enter dates like this:  
            <blockquote>
              MM/DD/YYYY
            </blockquote>  
      But here in Argentina, it's the norm to use the following date structure:
            <blockquote>
              DD/MM/YYYY
            </blockquote>  
      This provoques an unwanted error when I implement a DATE function (native to Google Sheets) inside of a SUM and FILTER function (also native to Google Sheets), because the order of the parameters expected in the cell are *month/day/year*, but it's receiving 
      *day/month/year* instead.
      </p>
</div>

## 📊 Google Sheets Structure

<div>
      <p>
            Due to restrictions imposed by the Advertising Agency and the clients we work for, I cannot show real data, but I have taken the trouble to supplement it with example data to make it understandable:
      </p>
      <img src="assets/Delivered Sheet 1.png" alt="" >
      <p>
            And this is the counter of materials for each month:
      </p>
      <img src="assets/Delivered Sheet 2a.png" alt="" >
</div>
  
> [!NOTE]
> First of all, cells on the right of each month are mostly blank because of the use IFERROR function (native to Google Sheets).  
> Second of all, you can CLEARLY see that the sum of functions is giving me an incorrect result.

## 🎯 Script Objetive

So, the script has to:
<div>
      <ol>
            <li>Find the <b>ENTRY DATE</b> column.</li>
            <li>Iterate through it.</li>
            <li>Reorder the value from each cell in that range.</li>
            <li>Set the values in the same range.</li>
      </ol>
</div>

This was my first attempt:
```
function DayMonthInverter() {
  for(let i = 0; i < DeliveredSheet.length; i++){
    if(typeof DeliveredSheet[i][0] == "object") {
      let objectString = JSON.stringify(DeliveredSheet[i][0]);
      let objectStringWithoutT = objectString.split("T")[0].split('"')[1];

      let year = '2025';
      let month = objectStringWithoutT.split("-")[2];
      let day = objectStringWithoutT.split("-")[1];

      if(month.length < 2){
        month = "0"+month;
      } else if(month.length > 2){
        month = month[0]+month[1];
      }

      if(day.length < 2){
        day = "0"+day;
      }

      let fullDate = `${month}/${day}/${year}`;

      entryDateArray.push([fullDate]);
    } else if (typeof DeliveredSheet[i][0] == "string"){
      if(DeliveredSheet[i][0] == ""){
        entryDateArray.push([""]);
      } else {
        let cadena = DeliveredSheet[i][0];
      
        let year = '2025';
        let month = cadena.split("/")[1];
        let day = cadena.split("/")[0];

        if(month.length < 2){
          month = "0"+month;
        } else if(month.length > 2){
          month = month[0]+month[1];
        }

        if(day.length < 2){
          day = "0"+day;
        }

        let fullDate = `${month}/${day}/${year}`;

        entryDateArray.push([fullDate]);
      }
    } 
  }

  StatusSheet.getSheetByName('DELIVERED').getRange('B2:B2000').setValues(entryDateArray);
}
```

Nevertheless, I found some problems while implementing the first code:  
<div>
      <ol>
            <li></li>
      </ol>
</div>

