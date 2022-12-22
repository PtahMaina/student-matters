import axios from "axios";
import { showAlert } from "./alerts";

export const admin = async (matter) => {
  try {
    console.log(matter);
    const res = await axios({
      method: "PATCH",
      url: "/api/v1/exams/admin-comment",
      data: {
        matter,
      },
      credentials: "include",
      withCredentials: true,
    });
    console.log(res);

    if (res.data.status === "success") {
      showAlert("success", "Updated And Pushed To Dean Successfully");
      window.setTimeout(() => {
        location.assign("/activities");
      }, 1500);
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert("error", err.response.data.message);
  }
};

export const dean = async (status) => {
  try {
    console.log(status);
    const res = await axios({
      method: "PATCH",
      url: "/api/v1/exams/dean-comment",
      data: {
        status,
      },
      credentials: "include",
      withCredentials: true,
    });
    console.log(res);

    if (res.data.status === "success") {
      showAlert("success", "Updated And Pushed To DvC Successfully");
      window.setTimeout(() => {
        location.assign("/activities");
      }, 1500);
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert("error", err.response.data.message);
  }
};

export const dvc = async (comments) => {
  try {
    console.log(comments);
    const res = await axios({
      method: "PATCH",
      url: "/api/v1/exams/dvc-comment",
      data: {
        comments,
      },
      credentials: "include",
      withCredentials: true,
    });
    console.log(res);

    if (res.data.status === "success") {
      showAlert("success", "Updated Successfully");
      window.setTimeout(() => {
        location.assign("/activities");
      }, 1500);
    }
  } catch (err) {
    console.log(err.response.data.message);
    showAlert("error", err.response.data.message);
  }
};
