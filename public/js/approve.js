import axios from "axios";
import { showAlert } from "./alerts";

export const approve = async () => {
  try {
    const res = await axios({
      method: "PATCH",
      url: "/api/v1/bookings/approve",
    });
    if ((res.data.status = "success")) location.assign("/activities");
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error trying to approve! Try again.");
  }
};
