import React, { useState } from 'react'

const ToggleSwitch = ({onChange, isChecked}) => {

  const handleCheckboxChange = () => {
    const currentChecked = !isChecked
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
          className={`slider mx-6 flex h-[20px] w-[38px] items-center rounded-full p-1 duration-200 bg-marine-blue`}
        >
          <span
            className={`dot h-[12px] w-[12px] rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-[1.1rem]' : ''
            }`}
          ></span>
        </span>
      </label>
    </>
  )
}

export default ToggleSwitch