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
  const handleDurationToggleChange = (isChecked) => {
    const duration = isChecked ? durations.yearly.id : durations.monthly.id
    handleChange('duration', duration)
  }


  return (
    <div>
      {Object.values(step.plans).map(plan => (
        <div key={plan.name} onClick={() => handlePlanChange(plan.id)} className={`${stepFormData.plan === plan.id ? 'border-2 border-red-600': ''}`}>
          <p>{plan.name}</p>
          <p>${plan.price[stepFormData.duration]}/{durations[stepFormData.duration].short}</p>
          <p>{plan.discount[stepFormData.duration]}</p>
        </div>
      ))}
      <div>
        <span>{durations.monthly.title}</span>  
          <ToggleSwitch onChange={handleDurationToggleChange}/>
        <span>{durations.yearly.title}</span>  
      </div>
    </div>
  )
}
export default SelectPlan

