const TextInput = ({label, type, name, placeholder, value, onChange, errorText}) => {
  return (
    <label className="flex flex-col text-marine-blue text-xs pb-4">
        {label}
        <input 
          type={type}
          required
          className="border-light-gray border-[1px] rounded-sm h-9 pl-3 font-medium text-sm mt-0.5" 
          name={name} 
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
        />
        <span>{errorText}</span>
      </label>
  )
}
export default TextInput