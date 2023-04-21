import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div className='navbar'>
        <FontAwesomeIcon icon={faPodcast} />
        <title>Podcasts</title>
        </div>
    )
  }
  