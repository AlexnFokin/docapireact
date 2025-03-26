import { Link } from 'react-router-dom'
import * as classes from './Navbar.module.scss'

export const Navbar = () => {
return (
    <div>
       

         <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
    </div>
)
}