# Google Sheets Day to Month Converter 📅

This project contains a **Google Apps Script** associated to a personalized **Google Sheets** (which I won't be providing in full, rather just the bare minimum for context), which objective is to normalize dates that have been entered in argentinian format (`DD/MM/YYYY`) so that internal **Google Sheets functions** can correctly operate.

## Workflow

<p>
In an **advertising agency**, the order of orders and their data entry are managed using a Google Sheets spreadsheet, divided into different sheets:  
<br />**a.** Some sheets are individual sheets corresponding to each Account Executive, where each one must enter certain important information:  
      - Work Order  
      - Date Received  
      - Date Sketched  
      - Deadline  
      - Client  
      - Subject of Order  
      - Type of Material  
      - Quantity of Material  
      - Status  
      - Name of Account Executive  
      - Name of Graphic Designer  
  **b.** Other sheets are also individual, but these correspond to each month of the year, where the jobs are separated by a set of columns representing both the Account Executive and the Graphic Designer, and the columns are differentiated by clearly defined days within weeks.

Naturally, if you're from the US you wouldn't need any converter, because you would simply enter dates like this:
  - `MM/DD/YYYY`

But here in Argentina, it's the norm to use the following date structure:
  - `DD/MM/YYYY`
</p> 

