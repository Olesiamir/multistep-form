const TextInput = ({label, type, name, placeholder, value, onChange, errorText}) => {
  return (
    <label className="flex flex-col text-marine-blue">
        {label}
        <input 
          type={type}
          required
          className="border-light-gray border-[1px] rounded-sm" 
          name={name} 
          placeholder={""}
          value={value} 
          onChange={onChange}
        />
        <span>{errorText}</span>
      </label>
  )
}
export default TextInput