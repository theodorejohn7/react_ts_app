import { get } from "./apiHandler";
import { env_var } from "../jwt_ts/config/env";

export const getUserList = async function () {
  return await get(`${env_var.BASE_URL}users`);
};
