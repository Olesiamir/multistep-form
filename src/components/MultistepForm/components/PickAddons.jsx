import { durations } from "../multistepFormDetails"


const PickAddons = ({onChange, step, multiFormData}) => {
  const stepFormData = multiFormData[step.id] || {}
  const planData = multiFormData['selectPlan']
  const handleChange = (name, value) => {
    onChange(step.id, {
      ...stepFormData,
      [name]: value
    })
  }
  const handleAddonChange = (addonId) => {
    const isSelected = stepFormData.selectedAddons.includes(addonId)
    if(isSelected) {
      handleChange('selectedAddons', stepFormData.selectedAddons.filter(selectedAddonId => addonId !== selectedAddonId))
      return
    }
    handleChange('selectedAddons', [...stepFormData.selectedAddons, addonId])
  }
  return (
    <div>
      {Object.values(step.addons).map(addon => (
        <div key={addon.name} onClick={() => handleAddonChange(addon.id)} className={`${stepFormData.selectedAddons.includes(addon.id)? 'border-2 border-red-600': ''}`}>
          <p>{addon.name}</p>
          <p>{addon.description}</p>
          <p>${addon.price[planData.duration]}/{durations[planData.duration].short}</p>
        </div>
      ))}
    </div>
  )
}
export default PickAddons