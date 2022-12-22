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

export function addRow() {
  // create a new table row element
  var newRow = document.createElement("tr");

  // create cells for the new row and append them to the row
  var cell1 = document.createElement("td");
  var cell2 = document.createElement("td");
  var cell3 = document.createElement("td");
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);

  // add input fields to the cells for capturing data
  cell1.innerHTML = "<input type='text' name='input'>";
  cell2.innerHTML = "<input type='text' name='input'>";
  cell3.innerHTML = "<input type='text' name='input'>";

  // get the existing table and append the new row to it
  var table = document.getElementById("myTable");
  table.appendChild(newRow);
}

export function myFunction() {
  const table = document.getElementById("myTable");
  table.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = table.querySelectorAll("input");
    const data = {};
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
  });
}
