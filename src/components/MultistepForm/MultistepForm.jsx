import { useEffect, useState } from 'react'
import { steps, stepComponents } from './multistepFormDetails'
import FormCard from './components/FormCard'
import Congrats from './components/Congrats'


const StepIndicator = ({index, isActive, step}) => {

  return (
    <div className='md:flex md:w-full md:justify-start'>
      <div className={`${isActive ? 'bg-white text-marine-blue' : 'bg-transparent  text-white'} cursor-pointer h-[35px] w-[35px] flex items-center justify-center rounded-full box-border border-white border-[1px] text-sm font-medium`}>
        {index + 1}
      </div>
      <div className='sm:hidden md:inline-block md:pl-4'>
        <p className='text-light-blue text-[12px] uppercase'>Step {index + 1}</p>
        <p className='uppercase text-white font-medium text-sm'>{step.name}</p> 
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
    <div className=' left-4 h-full flex flex-col items-center md:bg-main-desktop md:bg-no-repeat
     md:bg-white  md:flex-row md:max-w-[68%] md:min-w-[678px] md:bg-origin-padding md:h-[84%] md:grid md:grid-cols-24 md:grid-rows-24 
     md:bg-[center_left_15px] md:min-h-[600px] md:rounded-[12px] lg:min-w-[940px] lg:max-w-[940px] lg:max-h-[600px]'>
      <div className='flex gap-4 h-[100px] items-center md:flex-col md:items-center md:justify-center md:h-full md:col-start-3 md:col-span-5
      lg:col-start-2 lg:col-end-6 md:row-start-5 md:row-end-12 md:gap-8 lg:row-start-5'>
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
          <div className={`${isFirstStep ? 'justify-end' : 'justify-between'} footer flex self-end w-full items-center h-[71px] fixed bottom-0 bg-white px-4 md:w-auto 
          md:static md:col-start-14 md:col-span-9 md:row-start-21 md:row-span-3 md:p-0 lg:col-start-11 lg:col-span-12 lg:row-start-21 lg:row-span-3 `}>
            {!isFirstStep && <button className='h-10 text-sm font-medium flex rounded items-center justify-center bg-white text-cool-gray' onClick={handleBackClick}>Go Back</button>}            
            {isLastStep 
            ? 
            <button className='h-10 w-24 md:w-28 text-sm  flex rounded items-center justify-center bg-marine-blue text-magnolia hover:bg-purplish-blue cursor-pointer' onClick={handleNextClick}>Confirm</button> 
            : 
            <button className='h-10 w-24 md:w-28 text-sm flex rounded items-center justify-center bg-marine-blue text-magnolia cursor-pointer md:hover:bg-[#17498b]' onClick={handleNextClick}>Next Step</button>}
            
          </div>
        </>
      )}
      {isCompleted && <Congrats />}
    </div>
  )
}
export default MultistepForm