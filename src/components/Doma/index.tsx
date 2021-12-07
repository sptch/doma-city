import Contact from './Contact'
import Header from './Header'
import Introduction from './Introduction'
import SmartContract from './SmartContract'
import { Content } from './styles'
import Vancouver from './Vancouver'
import Calculator from './Calculator'

export default function Doma() {
  return <>
  <Header/>
  <Content>
    <SmartContract/>
    <Vancouver/>
    <Calculator/>
    <Introduction/>
    <Contact/>
  </Content>
</>

}