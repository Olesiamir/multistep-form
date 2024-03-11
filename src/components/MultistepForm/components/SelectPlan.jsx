import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch"
import { durations } from "../multistepFormDetails"

const SelectPlan = ({onChange, step, multiFormData}) => {
  const stepFormData = multiFormData[step.id] || {}
  const handleChange = (name, value) => {
    onChange(step.id, {
      ...stepFormData,
      [name]: value
    })
  }
  const handlePlanChange = (value) => {
    handleChange('plan', value)
  }
  const handleDurationToggleChange = () => {
    const duration = stepFormData.duration === durations.monthly.id ? durations.yearly.id : durations.monthly.id
    handleChange('duration', duration)
  }


  return (
    <div>
      {Object.values(step.plans).map(plan => (
        <div 
          key={plan.name} 
          onClick={() => handlePlanChange(plan.id)} 
          className={`${stepFormData.plan === plan.id ? 'border-purplish-blue bg-Pastel-blue/10': ' border-light-gray'} border rounded-lg mb-3 flex p-4`}>
          <img src={plan.icon} alt="icon" className="self-start "/>
          <div className="info flex flex-col pl-4">
            <p className="text-marine-blue font-medium">{plan.name}</p>
            <p className="text-cool-gray text-[12px]">${plan.price[stepFormData.duration]}/{durations[stepFormData.duration].short}</p>
            <p className="text-marine-blue text-[10px]">{plan.discount[stepFormData.duration]}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-around w-full bg-alabaster rounded-lg p-3 my-3">
        <span className={`${stepFormData.duration === 'monthly' ? 'text-marine-blue' : 'text-cool-gray'} font-medium text-sm`}>{durations.monthly.title}</span>  
          <ToggleSwitch isChecked={stepFormData.duration === 'yearly'} onChange={handleDurationToggleChange}/>
        <span className={`${stepFormData.duration === 'yearly' ? 'text-marine-blue' : 'text-cool-gray'} font-medium text-sm`}>{durations.yearly.title}</span>  
      </div>
    </div>
  )
}
export default SelectPlan

