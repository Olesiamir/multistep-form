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
    <div className="">
      <div className="bg-alabaster rounded-md px-4 pt-6">
        <div className="border-b border-b-light-gray flex justify-between items-center">
          <div className="pb-3">
            <p className="text-marine-blue text-base font-medium">{currentPlanDetails.name} ({currentDurationDetails.title})</p> 
            <button className="text-cool-gray text-sm underline" onClick={handleClick}>Change</button>
          </div>
          <p className="text-marine-blue text-sm font-bold">${durationPrice}/{currentDurationDetails.short}</p>
        </div>
        <div className="pt-4"> 
          {pickAddons.selectedAddons.map(addon => {
            const addonDetails = pickAddonsDetails.addons[addon]
            const addonPrice = addonDetails.price[selectPlan.duration]
          return  (
            <div className="flex justify-between items-center pb-4">
            <p key={addon} className="text-cool-gray text-sm ">{addonDetails.name}</p>
            <span className="text-marine-blue text-sm">+${addonPrice}/{currentDurationDetails.short}</span>
            </div>
            )
          }
          )}
        </div>
      </div>
      <div className="flex justify-between items-center px-4 pt-7">
        <p className="text-cool-gray text-sm ">Total per ({currentDurationDetails.period})</p> 
        <span className="text-purplish-blue text-sm font-bold">+${calculateTotal()}/{currentDurationDetails.short}</span>
      </div>
    </div>
    
  )
}
export default Summary