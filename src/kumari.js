import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar} from '@fortawesome/free-solid-svg-icons'
import './kumari.css';
function Kumari() {
    return <div className='font-awsome'>
        <FontAwesomeIcon className='coffee' icon={faCoffee} />
        <FontAwesomeIcon className='star' icon={faStar} />
        <FontAwesomeIcon className='moon' icon={faStar} />
    </div>
}
export default Kumari

