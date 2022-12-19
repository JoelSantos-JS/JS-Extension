import React from 'react'
import { useList } from '../../Context/ListContext'
import { useLoading } from '../../Context/LoadingContext'
import { formatMs } from '../../utils/formatYTDuration'
import { Title } from '../Title'
  import {VideoItem} from '../VideoItem'

import { Container, ListContainer } from './styles'




function VideoList() {
  const {list, totalTime} = useList()
  const {isLoading} = useLoading()

    const formattedTime = formatMs(totalTime)

  return (
    <Container>
        <header>
        <Title>Video List</Title>
        <span>Total time : {formattedTime}</span>
        </header>

        <ListContainer>

          
        {!isLoading && list.map(video => (
          <VideoItem key={video.id} data={video} />
          
        ))}
        

      {!isLoading && list.length <= 0 && <p>Your list is empty</p>}
        </ListContainer>

               
    </Container>
  )
}

export default VideoList