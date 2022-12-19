import { Container, Header } from "./styles";
import {FiLogOut} from 'react-icons/fi'
import VideoList from "../../Components/Videos";
import Current from "../../Components/CurrentVideo/Current";
import { useAuth } from "../../Context/AuthContext";
export function Home() {
    const {logout} = useAuth()

  return (
    <Container>
     <Header>
        <span>JS-Extension</span>
      <FiLogOut onClick={logout}/>
     </Header>
     <Current/>
     <VideoList/>
    </Container>
  )
}