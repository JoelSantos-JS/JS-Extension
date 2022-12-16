import { Container, Header } from "./styles";
import {FiLogOut} from 'react-icons/fi'
import VideoList from "../../Components/Videos";
import Current from "../../Components/CurrentVideo/Current";
export function Home() {
  return (
    <Container>
     <Header>
        <span>JS-Extension</span>
      <FiLogOut/>
     </Header>
     <Current/>
     <VideoList/>
    </Container>
  )
}