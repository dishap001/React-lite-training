
import { useFormik } from 'formik';
import { useState } from 'react';
import { valTable } from './ValidateSchema';
import './table.css'; 

interface FormData {
  type: string;
  date?: string;
  percent: number;
  notes?: string;
}

const TableForm = () => {
  const [formData, setFormData] = useState<FormData[]>([]);

  const formik = useFormik({
    initialValues: {
      type: '',
      date: '',
      percent: 0,
      notes: '',
    },
    validationSchema: valTable,
    onSubmit: (values) => {
      setFormData([...formData, values]);
      formik.resetForm();
    },
  });

  const handleDeleteRow = (index: number) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  return (
    <div className="container">
      <h2>Table with Form</h2>

      <form onSubmit={formik.handleSubmit}>
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Percent</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td>
                <div className="error">{formik.errors.type && formik.touched.type && formik.errors.type}</div>
                <input
                  type="text"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>

              <td>
                <div className="error">{formik.errors.date && formik.touched.date && formik.errors.date}</div>
                <input
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>

              <td>
                <div className="error">{formik.errors.percent && formik.touched.percent && formik.errors.percent}</div>
                <input
                  type="number"
                  name="percent"
                  value={formik.values.percent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>

              <td>
                <div className="error">{formik.errors.notes && formik.touched.notes && formik.errors.notes}</div>
                <input
                  type="text"
                  name="notes"
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </td>

              <td>
                <button type="submit">Add</button>
              </td>
            </tr>
            {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.type}</td>
              <td>{data.date}</td>
              <td>{data.percent}</td>
              <td>{data.notes}</td>
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default TableForm;
