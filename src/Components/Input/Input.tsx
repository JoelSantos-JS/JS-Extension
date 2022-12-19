import React, { ComponentProps, InputHTMLAttributes, useState } from 'react'
import { InputContainer, InputWrapper, Label } from './styles'
import {HiOutlineMail} from 'react-icons/hi'


export type InputPropss =InputHTMLAttributes<HTMLInputElement> & {
    label : string;
    icon: React.ReactNode;
}


function Input({
    label,
    icon,
    id,

    ...rest
}:InputPropss) {
    const [focused , setFocused] = useState(false)


  return (
    <InputWrapper>
    
    <Label htmlFor={id}>{label}</Label>
    <InputContainer isFocused={focused} >
    {icon}
    <input type='email' {...rest} id={id} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />
    
    </InputContainer>
    </InputWrapper>
  )
}

export default Input