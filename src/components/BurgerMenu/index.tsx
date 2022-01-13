import { BurgerWrapper, Menu } from 'components/styles'
import { atoms, useLayout } from 'misc'
import { HamburgerCollapse } from 'react-animated-burgers'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'


export default function BurgerMenu(){
  const [menu, setMenu] = useRecoilState(atoms.menu)
  const layout =  useLayout()

  return layout==='mobile'? <>
    <BurgerWrapper>
      <HamburgerCollapse isActive={menu} toggleButton={()=>{setMenu(!menu)}} barColor='#fff' buttonWidth={24}/>
    </BurgerWrapper>
    <Menu open={menu}>
      <nav onClick={()=>setMenu(false)}>
        <ul className="menu">
          <li>
            <Link to="/vancouver">
              Vancouver
            </Link>
          </li>
          <li>
            <a href="/#smart-contract">
              About
            </a>
          </li>
          
          <li>
            <a href="/#introduction">
              Video
            </a>
          </li>
          <li>
            <a href="/#get-in-touch">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Menu>
  </>: null
}
