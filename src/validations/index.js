export const validations = {
    login: {
        required: true,
        maxLength: 20,
    },
    email: {
        required: true,
        pattern: /^\S+@\S+$/i
    },
    password: {
        required: true,
        minLength: 3,
        maxLength: 20
    },
    firstName: {
        required: true,
        maxLength: 30,
        pattern: /^[A-Za-z]+$/i
    },
    lastName: {
        required: true,
        maxLength: 30,
        pattern: /^[A-Za-z]+$/i
    },

}