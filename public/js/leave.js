import axios from "axios";
import { showAlert } from "./alerts";

export const leave = async (
  name,
  regNo,
  session,
  sponsorship,
  phone,
  leaveDuration,
  leavePeriod,
  resumption,
  catsDone,
  assignDone
) => {
  console.log(regNo);
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/leaves/leave-request",
      data: {
        name,
        regNo,
        session,
        sponsorship,
        phone,
        leaveDuration,
        leavePeriod,
        resumption,
        catsDone,
        assignDone,
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
