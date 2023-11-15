import { useFormik } from 'formik';
import { ValidateSchema } from './ValidateSchema';
import './form.css';


interface FormData {
  name: string;
  email: string;
  age: string;
  password: string;
  confirmPassword: string;
  dob: string;
}

const UserForm= () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: any, actions: any) => {
    console.log('The Form details are', values);
    console.log(actions, isValid);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    handleBlur,
    isValid,
  } = useFormik<FormData>({
    initialValues: {
      name: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
      dob: '',
    },
    validationSchema: ValidateSchema,
    onSubmit,
  });


  console.log(errors);
  return (
    <div className='form-container'>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label htmlFor="name">Name :  </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={20}
            placeholder='Enter Name (max 20 characters) '
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? 'input-error' : ''}
          />
          {touched.name && errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :  </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            placeholder='Enter Valid Email'
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          {touched.email && errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password :  </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='(Max 10 characters, no spaces)'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password ? 'input-error' : ''}
          />
          {touched.password && errors.password && (
            <div className="error">{errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password : </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            placeholder='Confirm Password'
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth :  </label>
          <input
            type="date"
            id="dob"
            name="dob"
            max={new Date().toISOString().split('T')[0]}
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dob && touched.dob ? 'input-error' : ''}
          />
          {touched.dob && errors.dob && <div className="error">{errors.dob}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age :  </label>
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            placeholder='(greater than 18)'
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? 'input-error' : ''}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onInput={(event: any) => {
              if (!event.target.value) {
                event.target.value =
                  event.nativeEvent.data !== null ? values.age : '';
              }
            }}
          />
          {touched.age && errors.age && <div className="error">{errors.age}</div>}
        </div>

        <div className="form-group">
          <button disabled={!isValid || isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
