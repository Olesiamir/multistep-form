const TextInput = ({label, type, name, placeholder, value, onChange, errorText}) => {
  return (
    <label className="flex flex-col text-marine-blue text-xs pb-4 md:pb-7">
        <div className="flex flex-row justify-between">
          {label}
          <span className="text-strawberry-red">{errorText}</span>
        </div>
        <input 
          type={type}
          required
          className= {`${errorText && `border-strawberry-red`} border-light-gray border-[1px] rounded-sm md:rounded-md h-9 md:h-12 pl-3 
          font-medium text-sm md:text-base placeholder:text-[12px] mt-0.5`} 
          name={name} 
          placeholder={placeholder}
          value={value} 
          onChange={onChange}
        />
        
      </label>
  )
}
export default TextInput