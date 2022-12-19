import React from 'react'
import { useLoading } from '../../Context/LoadingContext'
import { LoadingContainer, Spinner } from './styles'

function Loading() {
    const {isLoading} = useLoading()
  return (
    <LoadingContainer isLoading={isLoading}>
        <Spinner>
         <div className='sk-cube1' />
         <div className='sk-cube2' />
         <div className='sk-cube3' />
         <div className='sk-cube4' />
         <div className='sk-cube5' />
         <div className='sk-cube6' />
         <div className='sk-cube7' />
         <div className='sk-cube8' />
         <div className='sk-cube9' />

        </Spinner>
    </LoadingContainer>
  )
}

export default Loading