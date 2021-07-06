export const validations = {
    login: {required: true, maxLength: 20},
    email: {
        required: "Enter your e-mail",
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Enter a valid e-mail address"
    },
    password: {required: true, minLength: 8, maxLength: 12, message: "Password is not valid"}
}