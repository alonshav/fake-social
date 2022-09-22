import axios, {Method} from "axios";
import {IAjaxResponse, IRequestParams} from "@fake-social/api-interfaces";

export class AjaxAdapter {
  async request<T>({
                     url,
                     queryParams,
                     method,
                     body,
                     headers,
                   }: IRequestParams): Promise<IAjaxResponse<T | null>> {
    method = method.toLowerCase() as Method
    let data
    try {
      data = (await axios({method, url, data: body, headers})).data
      return {data, error: null}
    } catch (error) {
      return {data: null, error}
    }
  }


  async authenticatedRequest<T>({
                                  url,
                                  method,
                                  body,
                                  getToken,
                                  headers,
                                }: IRequestParams & { getToken: any }): Promise<IAjaxResponse<T | null>> {
    let token: string
    try {
      token = await getToken()
    } catch (error) {
      return {data: null, error}
    }

    return this.request({
      url,
      method,
      body,
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    })
  }
}
