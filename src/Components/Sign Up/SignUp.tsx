import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../Input/Input'
import { Button, Container, FormContainer, OrContainer, PageTitle,  } from '../Login/styles'

import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { HookFormInput } from '../HookFormInput'
import { HiOutlineLockClosed, HiOutlineMail } from 'react-icons/hi';
import { useAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

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

function SignUp() {
  const {
    control,
    handleSubmit,

    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });


  const {register} = useAuth()
  async function HandleSignUp(form: FormData) {
    await register(form)

  }


  const navigate = useNavigate()

  function HandleLogin() {
    navigate('/login')
  }

  return (
    <Container>
        <span>JS-Extension</span>
        <PageTitle>SignUp</PageTitle>
        <FormContainer onSubmit={handleSubmit(HandleSignUp)}>
          <HookFormInput label='Email' error={errors.email?.message} control={control} id='email' type='email' icon={<HiOutlineMail/>}/>
          <HookFormInput label='Password' error={errors.password?.message} control={control} id='password' type='password' icon={<HiOutlineLockClosed/>}/>

          <Button type='submit'>SignUp</Button>

          <OrContainer>
            <div>
              <p>Or</p>
            </div>
          
        </OrContainer>
        <Button type='submit' onClick={HandleLogin}>Login</Button>
        </FormContainer>
        
        
    </Container>
  )
}

export default SignUp