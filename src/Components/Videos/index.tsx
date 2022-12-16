import React from 'react'
import { Title } from '../Title'
import Videoitem from '../VideoItem/Videoitem'
import { Container, ListContainer } from './styles'




function VideoList() {
  return (
    <Container>
        <header>
        <Title>Video List</Title>
        </header>

        <ListContainer>
<Videoitem addMode/>

        </ListContainer>

               
    </Container>
  )
}

export default VideoList