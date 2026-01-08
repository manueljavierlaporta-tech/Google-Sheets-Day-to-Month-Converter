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

## 🧱 Google Sheets Structure

<div>
      <p>
            Due to restrictions imposed by the Advertising Agency and the clients we work for, I cannot show real data, but I have taken the trouble to supplement it with example data to make it understandable:
      </p>
      <img src="assets/Delivered Sheet 1.png" alt="" >
      <p>
            And this is the counter of materials for each month:
      </p>
      <img src="assets/Delivered Sheet 2.png" alt="" >
</div>
> [!NOTE]
