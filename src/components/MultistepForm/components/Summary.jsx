import { selectPlan as selectPlanDetails, pickAddons as pickAddonsDetails, durations, steps  } from "../multistepFormDetails"

const Summary = ({step, multiFormData, onStepIndexChange}) => {
  const stepFormData = multiFormData[step.id] || {}
  const { selectPlan, pickAddons } = multiFormData
  const currentPlanDetails = selectPlanDetails.plans[selectPlan.plan]
  const currentDurationDetails = durations[selectPlan.duration]
  const durationPrice = currentPlanDetails.price[selectPlan.duration]
  const handleClick = () => {
    const selectPlanIndex = steps.findIndex(step => step.id === 'selectPlan')
    onStepIndexChange(selectPlanIndex)
  }
  const calculateTotal = () => {
    const addonsPrice = pickAddons.selectedAddons.reduce((acc, addon) => {
      const addonDetails = pickAddonsDetails.addons[addon]
      const addonPrice = addonDetails.price[selectPlan.duration]
      return  acc += addonPrice
    }, 0)
    return addonsPrice + durationPrice
  }

  return (
    <div>
      <p>{currentPlanDetails.name}({currentDurationDetails.title}) <span>${durationPrice}/{currentDurationDetails.short}</span> </p>
      <button onClick={handleClick}>Change</button>
      <div> 
        {pickAddons.selectedAddons.map(addon => {
          const addonDetails = pickAddonsDetails.addons[addon]
          const addonPrice = addonDetails.price[selectPlan.duration]
         return  <p key={addon}>{addonDetails.name} <span>${addonPrice}/{currentDurationDetails.short}</span> </p>
        }
        )}
      </div>
      <div>
        <p>Total per {currentDurationDetails.period}</p> <span>+${calculateTotal()}/{currentDurationDetails.short}</span>
      </div>
    </div>
    
  )
}
export default Summary