import React from 'react'
import { Button, Container, Details, Thumb } from './style'
import {BsFillPlayFill} from 'react-icons/bs' 
import {AiOutlineClockCircle} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import {RiAddCircleLine} from 'react-icons/ri'

interface VideoProps {
    addMode? : boolean
}
function Videoitem({addMode} : VideoProps) {
  return (
    <Container>

        <Thumb imgUrl='http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'/>

        <Details>
            <strong>Meu titulo</strong>
            <div>
                 <div>
                    {addMode ? ( <Button >
                        <RiAddCircleLine/>
                        Adicionar a Lista</Button>
                       
                        
                        ): (
                            <>
                             <Button >
                        <BsFillPlayFill/>
                        Play Now</Button>
                        <FaTrashAlt size={12}/>  
                            </>
                        ) }
                     
                    </div>  
                     
                    <span>
                            <AiOutlineClockCircle/>
                        15:35</span>
            </div>
        </Details>
    </Container>
  )
}

export default Videoitem