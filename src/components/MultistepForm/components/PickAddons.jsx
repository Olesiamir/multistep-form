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
        <div key={addon.name} onClick={() => handleAddonChange(addon.id)} className={`${stepFormData.selectedAddons.includes(addon.id) ? 'border-purplish-blue bg-Pastel-blue/10': ' border-light-gray'} border 
        flex justify-between items-center rounded-lg mb-3 p-2.5 lg: h-20 lg:hover:border-purplish-blue cursor-pointer`}>
            <input type="checkbox" checked={stepFormData.selectedAddons.includes(addon.id)} className='rounded-md w-5 h-5 accent-purplish-blue'/>
          <div className="info flex-1 pl-4">
            <p className="text-marine-blue text-sm font-medium">{addon.name}</p>
            <p className="text-cool-gray text-[12px]">{addon.description}</p>
          </div>
          <p className="text-[12px] text-purplish-blue">+${addon.price[planData.duration]}/{durations[planData.duration].short}</p>
        </div>
        
      ))}
    </div>
  )
}
export default PickAddons