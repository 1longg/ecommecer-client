export type ILogin = {
    username: string,
    password: string
}

export type IRegister = {
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    confirmPassword: string
}

export type IRefreshToken = {
    accessToken: string
}