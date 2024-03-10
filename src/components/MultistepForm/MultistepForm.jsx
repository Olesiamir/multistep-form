import { useEffect, useState } from 'react'
import { steps, stepComponents } from './multistepFormDetails'
import FormCard from './components/FormCard'


const StepIndicator = ({index, isActive}) => {

  return (
    <div className={`${isActive ? 'bg-white text-marine-blue' : 'bg-transparent  text-white'} cursor-pointer h-[35px] w-[35px] flex items-center justify-center rounded-full box-border border-white border-[1px] `}>
      {index}
    </div>
  )
}
const getInitialStateData = () => {
 return steps.reduce((acc, step) => {
    acc[step.id] = step.initialState || {}
    return acc
  }, {})
}
const MultistepForm = () => {
  const [multiFormData, setMultiFormData] = useState(getInitialStateData())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)
  const step = steps[currentIndex]

  const handleNextClick = () => {
    if (currentIndex === steps.length - 1 ) {
      setIsCompleted(true)
      return;
    }

    const stepFormData = multiFormData[step.id] || {}
    const validationResult = validateStepValues(step.validators, stepFormData)
    if (!validationResult.isValid) {
      handleStepFormChange(step.id, {
        ...stepFormData,
        validation: validationResult
      })
      return
    }

    setCurrentIndex(currentIndex + 1)
  }

  const validateStepValues = (validators, stepFormData) => {
    let result = { isValid: true }
    if (!validators) {
      return result
    }
    
    Object.keys(validators).forEach(field => {
      const validate = validators[field]
      const value = stepFormData[field]
      const errorMessage = validate(value)
      if (errorMessage) {
        result.isValid = false
        result[field] = errorMessage
      }
    })

    return result
  }

  const handleBackClick = () => {
    if(currentIndex === 0) {
      return;
    }
    setCurrentIndex(currentIndex - 1)
  }

  const handleStepFormChange = (stepFormId, stepFormData) => {
    setMultiFormData({
      ...multiFormData,
      [stepFormId]: stepFormData
    })
  }
  const handleStepIndexChange = (index) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    console.log({multiFormData})
  }, [multiFormData])

  const StepForm = stepComponents[step.id]
  return (
    <div className='absolute top-0 left-4 w-[345px] h-full m-auto flex flex-col items-center justify-between mt-8 mb-4'>
      <div className='flex gap-4'>
        {steps.map((step, index) => (
          <StepIndicator key={step.id} step={step} index={index} isActive={index === currentIndex}/> 
        ))}
      </div>
      <FormCard title={step.title} description={step.description}>
        <StepForm multiFormData={multiFormData} onChange={handleStepFormChange} step={step} onStepIndexChange={handleStepIndexChange}/>
      </FormCard>
      <div className="footer flex self-end">
        <button className='h-10 flex rounded-md items-center justify-center bg-marine-blue text-white' onClick={handleBackClick}>Go Back</button>
        <button className='h-10 flex rounded-md items-center justify-center bg-marine-blue text-white' onClick={handleNextClick}>Next Step</button>
      </div>
    </div>
  )
}
export default MultistepForm