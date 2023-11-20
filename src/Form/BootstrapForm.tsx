/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import { Container, Row, Col,Button } from 'react-bootstrap';
import './BootstapForm.css';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState<any[]>([]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phone: Yup.string()
      .required('Required')
      .matches(/^[1-9]\d{9}$/, 'Invalid phone number. Must have 10 digits'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
    gender: Yup.string().required('Required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    gender: '',
  };

  const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log('Submitting the form');
    console.log('The Form details are', values);
    setFormData((prevValues) => [...prevValues, values]);
    // Simulate an async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset the form after submission
    resetForm();

    // Set submitting to false after form reset
    setSubmitting(false);
  };

  return (
    <div className="background-container">
      <Container style={{maxWidth:"1200px",backgroundColor: "rgba(0, 0, 150, 0.2)"}}>
        <Row  className="mb-3">
          <Col md={6}>
        <h2 className="text-center">Student Registration Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isSubmitting, handleSubmit, isValid }) => (
            <Form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name:</label>
              <Field
                type="text"
                name="firstName"
                value={values.firstName}
                className={errors.firstName && touched.firstName ? 'is-invalid' : ''}
              />
              <ErrorMessage name="firstName" component="div" />

              <label htmlFor="lastName">Last Name:</label>
              <Field
                type="text"
                name="lastName"
                value={values.lastName}
                className={errors.lastName && touched.lastName ? 'is-invalid' : ''}
              />
              <ErrorMessage name="lastName" component="div" />

              <label htmlFor="email">Email:</label>
              <Field
                type="text"
                name="email"
                value={values.email}
                className={errors.email && touched.email ? 'is-invalid' : ''}
              />
              <ErrorMessage name="email" component="div" />

              <label htmlFor="phone">Phone:</label>
              <Field
                type="text"
                name="phone"
                value={values.phone}
                className={errors.phone && touched.phone ? 'is-invalid' : ''}
              />
              <ErrorMessage name="phone" component="div" />

              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                name="password"
                value={values.password}
                className={errors.password && touched.password ? 'is-invalid' : ''}
              />
              <ErrorMessage name="password" component="div" />

              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                className={
                  errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''
                }
              />
              <ErrorMessage name="confirmPassword" component="div" />

              <label>Gender:</label>
              <div>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    checked={values.gender === 'male'}
                  />
                  Male
                </label>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    checked={values.gender === 'female'}
                  />
                  Female
                </label>
              </div>
              <ErrorMessage name="gender" component="div" />

              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                variant="primary"
                size="lg"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        </Col>
        <Col md={6}>
        <h2 className="text-center">Entered Data</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Password</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.password}</td>
                <td>{data.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Col>
        </Row>
      </Container>
    </div>
   
  );
};

export default StudentRegistrationForm;
