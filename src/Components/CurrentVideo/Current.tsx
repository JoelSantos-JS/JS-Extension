import React from 'react'
import { useList } from '../../Context/ListContext'
import { Title } from '../Title'
import  { VideoItem } from '../VideoItem'
import { Container } from './style'

function Current() {
  const { currentVideo} = useList()
  return (
    <Container>
    <Title>Current video</Title>
    {currentVideo?.id ? <VideoItem data={currentVideo} addMode/> : <p>No video  found</p>}
    </Container>
  )
}

export default Current