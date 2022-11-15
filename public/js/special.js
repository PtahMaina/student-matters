import axios from "axios";
import { showAlert } from "./alerts";

export const special = async (
  regNo,
  department,
  programme,
  year,
  grounds,
  yearSemExamTime,
  monthYearOfExam,
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
        regNo,
        department,
        programme,
        year,
        grounds,
        yearSemExamTime,
        monthYearOfExam,
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
