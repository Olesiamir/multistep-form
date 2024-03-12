import { useEffect, useState } from 'react'
import { steps, stepComponents } from './multistepFormDetails'
import FormCard from './components/FormCard'
import Congrats from './components/Congrats'


const StepIndicator = ({index, isActive, step}) => {

  return (
    <div>
      <div className={`${isActive ? 'bg-white text-marine-blue' : 'bg-transparent  text-white'} cursor-pointer h-[35px] w-[35px] flex items-center justify-center rounded-full box-border border-white border-[1px] text-sm font-medium`}>
        {index + 1}
      </div>
      <div>
        <p>Step {index + 1}</p>
        <p>{step.name}</p> 
      </div>
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
  const isLastStep = currentIndex === steps.length - 1
  const isFirstStep = currentIndex === 0 

  const handleNextClick = () => {
    
    
    const stepFormData = multiFormData[step.id] || {}
    const validationResult = validateStepValues(step.validators, stepFormData)
    if (!validationResult.isValid) {
      handleStepFormChange(step.id, {
        ...stepFormData,
        validation: validationResult
      })
      return
    }

    if (isLastStep) {
      setIsCompleted(true)
      return;
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
    <div className=' left-4 h-full flex flex-col items-center md:bg-main-desktop md:bg-no-repeat md:bg-white  md:flex-row md:bg-left'>
      <div className='flex gap-4 h-[100px] items-center md:flex-col md:items-center md:justify-center md:h-full'>
        {steps.map((step, index) => (
          <StepIndicator key={step.id} step={step} index={index} isActive={index === currentIndex}/> 
        ))}
      </div>
      {!isCompleted && (
        <>
          <FormCard title={step.title} description={step.description}>
            <StepForm multiFormData={multiFormData} onChange={handleStepFormChange} step={step} onStepIndexChange={handleStepIndexChange}/>
          </FormCard>
          {/* <div className='footer w-full h-[71px] bg-white absolute bottom-0 '></div> */}
          <div className={`${isFirstStep ? 'justify-end' : 'justify-between'} footer flex self-end w-full items-center h-[71px] fixed bottom-0 bg-white px-4`}>
            {!isFirstStep && <button className='h-10 text-sm font-medium flex rounded items-center justify-center bg-white text-cool-gray' onClick={handleBackClick}>Go Back</button>}            
            {isLastStep 
            ? 
            <button className='h-10 w-24 text-sm flex rounded items-center justify-center bg-marine-blue text-magnolia' onClick={handleNextClick}>Submit</button> 
            : 
            <button className='h-10 w-24 text-sm flex rounded items-center justify-center bg-marine-blue text-magnolia' onClick={handleNextClick}>Next Step</button>}
            
          </div>
        </>
      )}
      {isCompleted && <Congrats />}
    </div>
  )
}
export default MultistepForm