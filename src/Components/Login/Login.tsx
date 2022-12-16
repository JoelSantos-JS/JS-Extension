import React from 'react'
import Input from '../Input/Input'
import { Container, FormContainer, PageTitle } from './styles'

function Login() {
  return (
    <Container>
        <span>JS-Extension</span>
        <PageTitle>Login</PageTitle>
        <FormContainer>
          <Input/>
        </FormContainer>
    </Container>
  )
}

export default Login