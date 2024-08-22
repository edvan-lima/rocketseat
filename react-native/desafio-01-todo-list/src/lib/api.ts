import { AppError } from "@/lib/app-error"
import axios from "axios"

const api = axios.create({
  baseURL: "http://apptnote.eastus.cloudapp.azure.com:3000",
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.error))
    } else {
      return Promise.reject(
        new AppError("Erro no servidor. Tente novamente mais tarde")
      )
    }
  }
)

export { api }
