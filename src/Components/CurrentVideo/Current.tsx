import React from 'react'
import { Title } from '../Title'
import Videoitem from '../VideoItem/Videoitem'
import { Container } from './style'

function Current() {
  return (
    <Container>
    <Title>Current video</Title>
    <Videoitem/>
    </Container>
  )
}

export default Current