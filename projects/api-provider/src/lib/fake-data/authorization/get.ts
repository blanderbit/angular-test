import {FormFields} from "../../models/authorization/index";

const registrationFormFieldsResponseExample: FormFields[] = [
    {
        type: 'text',
        name: 'first_name',
        label: 'First Name',
        required: true,
        validations: [
            {
                name: 'pattern',
                message: 'Only English characters are allowed.',
                value: '^[a-zA-Z0-9]*$',
            },
            {
                name: 'maxLength',
                message: 'Must be less than 64 characters.',
                value: 63,
            },
        ],
    },
    {
        type: 'text',
        name: 'middle_name',
        label: 'Middle Name',
        required: false,
        validations: [
            {
                name: 'pattern',
                message: 'Only English characters are allowed.',
                value: '^[a-zA-Z0-9]*$',
            },
            {
                name: 'maxLength',
                message: 'Must be less than 64 characters.',
                value: 63,
            },
        ],
    },
    {
        type: 'text',
        name: 'last_name',
        label: 'Last Name',
        required: true,
        validations: [
            {
                name: 'pattern',
                message: 'Only English characters are allowed.',
                value: '^[a-zA-Z0-9]*$',
            },
            {
                name: 'maxLength',
                message: 'Must be less than 64 characters.',
                value: 63,
            },
        ],
    },
    {
        type: 'email',
        name: 'email',
        label: 'Email',
        required: true,
        validations: [
            {
                name: 'pattern',
                message: 'No valid email',
                value: '^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,}$',
            },
            {
                name: 'maxLength',
                message: 'Must be less than 47 characters.',
                value: 46,
            },
        ],
    },
    {
        type: 'phone',
        name: 'phone_number',
        label: 'Mobile number',
        required: true,
        validations: [
            {
                name: 'pattern',
                message: 'Only numbers are allowed.',
                value: '^[0-9]+$',
            },
            {
                name: 'maxLength',
                message: 'Must be less than 47 characters.',
                value: 10,
            },
            {
                name: 'minLength',
                message: 'Must not be less than 4 characters.',
                value: 4,
            },
        ],
    },
    {
        type: 'password',
        name: 'password',
        label: 'Password',
        required: true,
        validations: [
            {
                name: 'maxLength',
                message: 'Must be less than 15 characters.',
                value: 15,
            },
            {
                name: 'minLength',
                message: 'Must not be less than 8 characters.',
                value: 8,
            },
            {
                name: 'pattern',
                message: '1 or more numbers.',
                value: '^.*[0-9].*$',
            },
            {
                name: 'pattern',
                message: '1 or more lower case letters.',
                value: '^.*[a-z].*$',
            },
            {
                name: 'pattern',
                message: '1 or more upper case letters.',
                value: '^.*[A-Z].*$',
            },
        ],
    },
];



const loginFormFieldsResponseExample: FormFields[] = [
    {
        type: 'email',
        name: 'email',
        label: 'Email',
        required: true,
        validations: [
            {
                name: 'pattern',
                message: 'No valid email',
                value: '^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,}$',
            },
            {
                name: 'maxLength',
                message: 'Must be less than 47 characters.',
                value: 46,
            },
        ],
    },
    {
        type: 'password',
        name: 'password',
        label: 'Password',
        required: true,
        validations: [
            {
                name: 'maxLength',
                message: 'Must be less than 15 characters.',
                value: 15,
            },
            {
                name: 'minLength',
                message: 'Must not be less than 8 characters.',
                value: 8,
            },
            {
                name: 'pattern',
                message: '1 or more numbers.',
                value: '^.*[0-9].*$',
            },
            {
                name: 'pattern',
                message: '1 or more lower case letters.',
                value: '^.*[a-z].*$',
            },
            {
                name: 'pattern',
                message: '1 or more upper case letters.',
                value: '^.*[A-Z].*$',
            },
        ],
    },
];


export const get = {
    registrationFields: registrationFormFieldsResponseExample,
    loginFields: loginFormFieldsResponseExample
}