import { AxiosInstance } from "axios";

type ApiUrlType = "/schedule" | "/users";

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get<T>(url: ApiUrlType, queryString = "") {
    return this.service
      .get<T>(`${url}?${queryString}`)
      .then((response) => response.data);
  }

  post<T>(url: ApiUrlType, data: T) {
    return this.service.post(`${url}`, data);
  }

  patch<T>(url: ApiUrlType, id: string, data: T) {
    return this.service
      .patch(`${url}/${id}`, data)
      .then((response) => response.data);
  }
}
