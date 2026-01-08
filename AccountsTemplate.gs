const StatusSheet = SpreadsheetApp.getActiveSpreadsheet();
let DeliveredSheet = StatusSheet.getSheetByName('DELIVERED').getRange('B2:B2000').getValues();
let entryDateArray = [];

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
