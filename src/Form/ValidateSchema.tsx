import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/;

export const ValidateSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(20, 'Name must be 20 characters or less'),
  email: Yup.string().email('Valid email is required').required('Email is required')
    .matches(emailRegex, 'Please enter a valid email.'), 
  password: Yup.string()
  .required('Password is required')
    .min(8, 'Password must be at most 10 characters')  
    .matches(
      passwordRules,
      'Password must meet the specified requirements'
    ),
    
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),

    dob: Yup.date()
    .max(new Date(new Date().getTime() - 24 * 60 * 60 * 1000), "Date of birth cannot be in the future.")
    // .max(
    //   Yup.ref("yesterday"),
    //   "Date of birth cannot be today or in the future."
    // )
    .required("Please enter your date of birth."),
  // yesterday: Yup.date().default(
  //   () => new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  // ),




    age: Yup.number().positive().integer().min(19, 'Please enter valid age.')
    .max(50, 'Age must be less than or equal to 50')
      .test(
        'is-valid-age',
        'Age must be between 0 and 100',
        (value?: number) => value === undefined || (value >= 0 && value <= 100),
      )
      .required("Please enter your age."),
      });

// eslint-disable-next-line react-refresh/only-export-components
export const valTable = Yup.object().shape({
  type: Yup.string().required('Type is required').min(10, 'Type must be at least 10 characters'),
  date:Yup.date()
  .min(
    Yup.ref("today"),
    "Date must be in the future."
  ).required("Please enter a date"),
  today:Yup.date().default(()=>new Date()),

  notes: Yup.string().test('isRequired', 'Notes is required if Percent is entered', function (value) {
    const percentValue = this.parent.percent;
    return percentValue !== undefined && percentValue !== null && percentValue !== '' ? !!value : true;
  })
  .max(35, 'Notes must not exceed 35 characters'),
  percent: Yup
  .number()
  .integer('Percent must be an integer')
  .positive('Percent must be a positive number')
  .max(100, 'Percent must be less than or equal to 100')
  .required('Percent is required'),
  });
