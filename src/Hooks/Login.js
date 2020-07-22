import React from "react";
import { useAxiosPost } from "./HttpRequests";

export function useApiLogin(url, logindata) {
  return useAxiosPost(url + "/login", logindata);
}
