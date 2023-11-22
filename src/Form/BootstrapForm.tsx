/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {useState} from 'react';
import { Container, Row, Col,Button, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
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
    gender: Yup.string().oneOf(['male','female'], 'Invalid Gender').required('Required'),
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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="background-container">
      <Container style={{maxWidth: "auto",backgroundColor: "rgba(0, 0, 150, 0.2)", borderRadius:"20px", color:"white"}}>
        <Row  className="mb-3">
          <Col md={6}>
        <h2  className="text-center with-background">Student Registration Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isSubmitting, handleSubmit, isValid }) => (
             <Form onSubmit={handleSubmit}>
             <FormGroup controlId="firstName">
               <FormLabel >First Name:</FormLabel>
               <Field
                 as={FormControl}
                 type="text"
                 name="firstName"
                 value={values.firstName}
                 className={errors.firstName && touched.firstName ? 'is-invalid' : ''}
               />
               <FormControl.Feedback type="invalid">
                 <ErrorMessage name="firstName" />
               </FormControl.Feedback>
             </FormGroup>

             <FormGroup controlId="lastName">
               <FormLabel>Last Name:</FormLabel>
               <Field
                 as={FormControl}
                 type="text"
                 name="lastName"
                 value={values.lastName}
                 className={errors.lastName && touched.lastName ? 'is-invalid' : ''}
               />
               <FormControl.Feedback type="invalid">
                 <ErrorMessage name="lastName" />
               </FormControl.Feedback>
             </FormGroup>

             <FormGroup controlId="email">
               <FormLabel>Email:</FormLabel>
               <Field
                 as={FormControl}
                 type="text"
                 name="email"
                 value={values.email}
                 className={errors.email && touched.email ? 'is-invalid' : ''}
               />
               <FormControl.Feedback type="invalid">
                 <ErrorMessage name="email" />
               </FormControl.Feedback>
             </FormGroup>

             <FormGroup controlId="phone">
               <FormLabel>Phone:</FormLabel>
               <Field
                 as={FormControl}
                 type="text"
                 name="phone"
                 value={values.phone}
                 className={errors.phone && touched.phone ? 'is-invalid' : ''}
               />
               <FormControl.Feedback type="invalid">
                 <ErrorMessage name="phone" />
               </FormControl.Feedback>
             </FormGroup>

             <FormGroup controlId="password">
               <FormLabel>Password:</FormLabel>
               <Field
                 as={FormControl}
                 type="password"
                 name="password"
                 value={values.password}
                 className={errors.password && touched.password ? 'is-invalid' : ''}
               />
               <FormControl.Feedback type="invalid">
                 <ErrorMessage name="password" />
               </FormControl.Feedback>
             </FormGroup>

             <FormGroup controlId="confirmPassword">
               <FormLabel>Confirm Password:</FormLabel>
               <Field
                 as={FormControl}
                 type="password"
                 name="confirmPassword"
                 value={values.confirmPassword}
                 className={errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}
               />
               <FormControl.Feedback type="invalid">
                 <ErrorMessage name="confirmPassword" />
               </FormControl.Feedback>
             </FormGroup>

             <FormGroup controlId="gender">
               <FormLabel>Gender:</FormLabel>
                 <label>
                   <Field
                     type="radio"
                     name="gender"
                     value="male"
                     checked={values.gender === 'male'}
                     className={errors.gender && touched.gender ? "input-error" : ''}
                   />
                   Male
                 </label>
                 <label>
                   <Field
                     type="radio"
                     name="gender"
                     value="female"
                     checked={values.gender === 'female'}
                     className={errors.gender && touched.gender ? "input-error" : ''}
                   />
                   Female
                 </label>
               <Col > {errors.gender}</Col>
             </FormGroup>

             <div className="d-grid gap-2"><Button
               type="submit"
               disabled={!isValid || isSubmitting}
               variant="primary"
               size="lg"
             >
               Submit
             </Button></div>
           </Form>
          )}
        </Formik>
        </Col>
        <Col md={6}>
        <h2 className="text-center with-background">Entered Data</h2>
        <table className="table table-bordered">
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