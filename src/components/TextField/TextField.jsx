import React from "react"
import "./TextField.css"

export const TextField = ({ label, name, type = 'text', value, onChange }) => {

  const handleBlur = (event) => {
    const { target } = event

    console.log(target.textLength);

    if (target.textLength !== 0) {
      return target.previousElementSibling.classList.add('has-value')
    }

    if (target.textLength === undefined || target.textLength === 0) {
      return target.previousElementSibling.classList.remove('has-value')
    }

    return target.previousElementSibling.classList.toggle('has-value')
  }

  const handleChange = internalHandler => (event) => {

    if (internalHandler === undefined) {
      return
    }
    return internalHandler(event)
  }

  return (
    <div className="textfield">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onBlur={handleBlur} onChange={handleChange(onChange)}/>
    </div>
  )
}
