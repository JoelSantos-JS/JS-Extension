import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { Button, Container, FormContainer, OrContainer, PageTitle, Signup } from './styles'

import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { HookFormInput } from '../HookFormInput'
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

interface FormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
 email: Yup.string().required('Email é requerido').matches(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'Enter a valid email address'
),
 password: Yup.string().required('Password é requerido')
})

function Login() {
  const {
    control,
    handleSubmit,

    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const { login } = useAuth()

  async function HandleLogin(form: FormData) {
     await  login(form)
  
  }

  const navigate = useNavigate()
  function HandleSignUp() {
    navigate('/signup')
  }

  return (
    <Container>
        <span>JS-Extension</span>
        <PageTitle>Login</PageTitle>
        <FormContainer onSubmit={handleSubmit(HandleLogin)}>
          <HookFormInput label='Email' error={errors.email?.message} control={control} id='email' type='email' icon={<HiOutlineMail/>}/>
          <HookFormInput label='Password' error={errors.password?.message} control={control} id='password' type='password' icon={<HiOutlineLockClosed/>}/>

          <Button type='submit'>Login</Button>

          <OrContainer>
            <div>
              <p>Or</p>
            </div>
          
        </OrContainer>
        <Signup onClick={HandleSignUp}>Sign Up</Signup>
        </FormContainer>
        
        
    </Container>
  )
}

export default Login