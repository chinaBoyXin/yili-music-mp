import { get } from "../request";

export const testApi = ():Promise<string> => {
  return get("/test") as Promise<string>
}