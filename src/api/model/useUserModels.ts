import { useState } from "react";
import { apiRequest } from "../instance/instance";
import { UserProps } from "../../types/user";
export const useUsersModel = () => {
  const addUsers = async (data: UserProps) => {
    const response: void | any = await apiRequest.post("/users", data);
    return response;
  };

  return {
    addUsers,
  };
};
