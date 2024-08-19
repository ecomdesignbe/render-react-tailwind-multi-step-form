import React, { useState } from 'react'
import IdentificationForm from './IdentificationForm'
import ReviewForm from './ReviewForm'
import SummaryForm from './SummaryForm'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    satisfaction: '',
    comments: ''
  })

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  switch (step) {
    case 1:
      return <IdentificationForm formData={formData} setFormData={setFormData} nextStep={nextStep} />
    case 2:
      return <ReviewForm formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
    case 3:
      return <SummaryForm formData={formData} prevStep={prevStep} />
    default:
      return null
  }
}

export default MultiStepForm
