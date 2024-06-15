import { loggedOutInstance } from "./axios"

export class AuthService {
 static signin = async (username: string, password: string) => {
  try {
    const response = await loggedOutInstance({
      method: 'POST',
      url: "admin/signin",
      data: { username, password}
    })

    return response.data
  } catch (error) {
    throw error
  }
 }
}