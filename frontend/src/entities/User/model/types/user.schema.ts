export interface User {
    id: number
    email: string
    name?: string
}

export interface UserSchema {
   authData?: User
}