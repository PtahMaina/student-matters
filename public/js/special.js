import axios from "axios";
import { showAlert } from "./alerts";

export const special = async (
  name,
  regNo,
  session,
  sponsorship,
  phone,
  grounds,
  yearSem,
  monthYear,
  unitCode,
  unitName,
  catsAssgnDone
) => {
  console.log(regNo);
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/exams/special",
      data: {
        name,
        regNo,
        session,
        sponsorship,
        phone,
        grounds,
        yearSem,
        monthYear,
        unitCode,
        unitName,
        catsAssgnDone,
      },
      credentials: "include",
      withCredentials: true,
    });
    console.log(res);

    if (res.data.status === "success") {
      showAlert("success", "Information Submitted Successfully");
      window.setTimeout(() => {
        location.assign("/activities");
      }, 1500);
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert("error", err.response.data.message);
  }
};

// export const myFunction = () => {
//   var table = document.getElementById("myTable");
//   var row = table.insertRow(0);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2";
// };

export function myFunction() {
  // Get the table body element in which you want to add row
  let table = document.getElementById("myTable");

  // Create row element
  let row = document.createElement("tr");

  // Create cells
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");

  // Insert data to cells
  c1.innerText = "Elon";
  c2.innerText = "42";
  c3.innerText = "Houston";
  c4.innerText = "C++";

  // Append cells to row
  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);

  // Append row to table body
  table.appendChild(row);
}
