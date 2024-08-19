import React from 'react'
import MultiStepForm from './components/MultiStepForm'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Multi-step Form Email</h1>
        <MultiStepForm />
      </div>
    </div>
  )
}

export default App