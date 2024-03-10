import TextInput from "../../TextInput/TextInput"

const PersonalInfo = ({onChange, step, multiFormData}) => {
  const stepFormData = multiFormData[step.id] || {}
  console.log({ stepFormData })
  const handleChange = (e) => {
    onChange(step.id, {
      ...stepFormData,
      [e.target.name]: e.target.value,
      validation: {
        ...stepFormData.validation,
        [e.target.name]: ''
      } 
    })
  }

  return (
    <div className="flex flex-col">     
      <TextInput
        label="Name"
        type="text"
        name='name' 
        placeholder="e.g. Stephen King"
        errorText={stepFormData.validation?.name}
        value={stepFormData.name || ''} 
        onChange={handleChange} />
      <TextInput
        label="Email Address"
        type="email"
        name='email' 
        placeholder="e.g. stephenking@lorem.com" 
        errorText={stepFormData.validation?.email}
        value={stepFormData.email || ''} 
        onChange={handleChange} />
      <TextInput
        label="Phone Number"
        type="phone"
        name='phone' 
        errorText={stepFormData.validation?.phone}
        placeholder="e.g. +1 234 567 890" 
        value={stepFormData.phone || ''} 
        onChange={handleChange} />
    </div>
  )
}
export default PersonalInfo