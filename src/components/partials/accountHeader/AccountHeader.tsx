import { Link } from 'react-router-dom';
import './AccountHeader.scss';

export default function AccountHeader() {
  return (
    <>
      <nav className='second-header'>
        <p className='option'>Settings</p>
        <p className='option'>
          <Link to="/stats">
            Stats
          </Link>
        </p>
        <p className='option'>Saved</p>
      </nav>
    </>
  )
}