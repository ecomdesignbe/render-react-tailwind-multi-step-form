import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const IdentificationForm = ({ formData, setFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
      setFormData(values)
      nextStep()
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-200">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="mt-2 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-400 text-sm mt-1">{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-200">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="mt-2 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-400 text-sm mt-1">{formik.errors.email}</div>
        )}
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
      >
        Next
      </button>
    </form>
  )
}

export default IdentificationForm
