const minLength = 8;
const maxLength = 20;
export const validatePassword = {
    isEnoughLength(password) {
        return password.length >= minLength && password.length <= maxLength;
    },

    isEnoughCharacter(password) {
        return /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).+$/.test(password);
    },
};

export const validateEmail = {
    isEmail(email) {
        return /^\S+@\S+\.\S+$/.test(email);
    },
};

export const validateCode = {
    isCode(code) {
        return /[a-zA-Z]/.test(code);
    },
};
