import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ReviewForm = ({ formData, setFormData, nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      satisfaction: Yup.string().required('Please select a review option')
    }),
    onSubmit: (values) => {
      setFormData(values)
      nextStep()
    }
  })

  const options = [
    { value: 'unhappy', emoji: '😞', label: 'Unhappy' },
    { value: 'could be better', emoji: '😕', label: 'Could be better' },
    { value: 'satisfied', emoji: '😊', label: 'Satisfied' },
    { value: 'very satisfied', emoji: '😁', label: 'Very satisfied' }
  ]

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex flex-col items-center cursor-pointer w-full"
          >
            <input
              type="radio"
              name="satisfaction"
              value={option.value}
              onChange={formik.handleChange}
              checked={formik.values.satisfaction === option.value}
              className="hidden"
              aria-label={option.label}
            />
            <div
              className={`p-4 shadow-md ${formik.values.satisfaction === option.value ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300'} rounded-custom w-full flex flex-col items-center justify-center`}
              role="radiogroup"
              aria-labelledby={option.label}
            >
              <span className="text-3xl">{option.emoji}</span>
              <span className="capitalize mt-2">{option.label}</span>
            </div>
          </label>
        ))}
      </div>

      {formik.errors.satisfaction ? (
        <div className="text-red-500 text-sm mt-2">
          {formik.errors.satisfaction}
        </div>
      ) : null}

      <div>
        <label htmlFor="comments" className="block text-sm font-semibold text-gray-200">Comments (optional)</label>
        <textarea
          id="comments"
          name="comments"
          onChange={formik.handleChange}
          value={formik.values.comments}
          className="mt-2 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 mr-2.5"
        >
          Back
        </button>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </form>
  )
}

export default ReviewForm
