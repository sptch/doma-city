import {ReactComponent as Logo} from 'assets/icons/logo.svg'
import { Header } from './styles'


export default function HeaderComponent(){


  return <Header>
    <div>
      <div>
        <a href="http://doma.city/" rel="home">
          <Logo/>
        </a>
      </div>

      <nav>
        <ul className="menu">
          <li>
            <a href="#smart-contract">
              About
            </a>
          </li>
          <li>
            <a href="#affordability-map">
              About
            </a>
          </li>
          
          <li>
            <a href="#introduction">
              Video
            </a>
          </li>
          <li>
            <a href="#get-in-touch">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Header>
}