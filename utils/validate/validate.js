export const validate = (values) => {
    const errors = {};

    if (!values.name) {
        errors.name = 'Вы неверно указали имя';
    } else if (!values.name.length > 3) {
        errors.name = 'Вы неверно указали имя';
    }

    if (!values.phoneNumber){
        errors.phoneNumber = 'Вы неверно указали номер';
    } else if (!/^((\+7|7|8)+([0-9]){10})$/gm.test(values.phoneNumber)) {
        errors.phoneNumber = "Невалидный номер телефона"
    }

    if (!values.email) {
        errors.email = 'Вы неверно указали почту';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Невалидная почта';
    }
    return errors;
};