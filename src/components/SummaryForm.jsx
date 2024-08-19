import React from 'react'
import emailjs from 'emailjs-com'

const SummaryForm = ({ formData, prevStep }) => {
  const sendEmail = () => {
    const templateParams = {
      to_name: formData.name,
      from_name: 'Steve',
      from_email: formData.email,
      review: formData.satisfaction,
      comments: formData.comments
    }

    emailjs.send('service_7gsbxb1', 'template_dd16iqq', templateParams, 'orpWoDCOVzSajauVB')
      .then((response) => {
        alert('Email sent successfully!')
      }, (error) => {
        console.error('Failed to send email:', error)
      })
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-100">Review Summary</h3>
        <p className="mt-2"><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Review:</strong> {formData.satisfaction}</p>
        <p><strong>Comments:</strong> {formData.comments || 'None'}</p>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
        >
          Back
        </button>

        <button
          type="button"
          onClick={sendEmail}
          className="bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default SummaryForm
