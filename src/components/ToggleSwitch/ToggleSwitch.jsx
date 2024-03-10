import React, { useState } from 'react'

const ToggleSwitch = ({onChange}) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    const currentChecked = !isChecked
    setIsChecked(currentChecked)
    onChange(currentChecked)
  }

  return (
    <>
      <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          name='autoSaver'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 bg-marine-blue`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
        <span className='label flex items-center text-sm font-medium text-black'>
          
        </span>
      </label>
    </>
  )
}

export default ToggleSwitch