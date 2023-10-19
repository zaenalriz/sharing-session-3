import axios from "axios";
import Cookies from "js-cookie";
const API = "https://serverwan.com/lms-ultima/api-lms/public/api";

async function get(url, params, header = false) {
  let response;
  try {
    response = await axios.get(`${API}${url}`, {
      header,
    });
  } catch (error) {
    console.log(error);
  } finally {
    return response.data.data;
  }
}
async function getWithHeader(url, params) {
  let response;
  try {
    response = await axios.get(`${API}${url}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("X-TOKEN-APP")}`,
      },
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log(response);
    if (response.data.code == 401) {
      Cookies.remove("X-TOKEN-APP");
      window.location.href = "/login";
    }
    return response.data.data;
  }
}
async function post(url, data) {
  let response;
  try {
    response = await axios.post(`${API}${url}`, data);
  } catch (error) {
    console.log(error);
  } finally {
    return response.data;
  }
}

export { get, post, getWithHeader };
