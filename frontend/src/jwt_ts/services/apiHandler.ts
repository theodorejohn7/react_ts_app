import axios from "axios";
import { env_var } from "../jwt_ts/config/env";
import { history } from "../utils/history";
import { getFormDataHeader, getHeaderInfo } from "../utils/tokenCreator";
import { removeTokens } from "./localStorage";

const handleResponse = (response: any) => {
  if (response.status === 401) {
    removeTokens();
    history.push("/v1");
    window.location.reload();
  }
  if (response.data.status !== "OK") {
    return response.data;
  }
  return response;
};

export const post = async function (url: string, body: any) {
  let header = await getHeaderInfo();
  try {
    let response = await axios.post(env_var.BASE_URL + url, body, header);
    return handleResponse(response);
  } catch (error :any) {
    return handleResponse(error.response);
  }
};

export const get = async function (url: any, params: any = {}) {
  let header = await getHeaderInfo();
  try {
    let response = await axios.get(url, { ...header, params });
    return handleResponse(response);
  } catch (error :any) {
    throw handleResponse(error.response);
  }
};

export const put = async function (body: any, url: any) {
  let header = await getHeaderInfo();

  try {
    let response = await axios.put(env_var.BASE_URL + url, body, header);
    return handleResponse(response);
  } catch (error :any) {
    throw handleResponse(error.response);
  }
};

export const deleteApi = async function (url: any) {
  let header = await getHeaderInfo();
  try {
    let response = await axios.delete(env_var.BASE_URL + url, header);
    return handleResponse(response);
  } catch (error :any) {
    throw handleResponse(error.response);
  }
};

export const postImage = async function (url: string, body: any) {
  let header = await getFormDataHeader();
  let formData = new FormData();
  formData.append("file", body);
  try {
    let resp = await axios.put(env_var.BASE_URL + url, formData, header);
    return handleResponse(resp);
  } catch (error :any)  {
    throw handleResponse(error.response);
  }
};
