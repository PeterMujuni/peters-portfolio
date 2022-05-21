import img from '../../assets/images/petermujuni.png'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <img src={img} alt="" className='my-photo' />
    </header>
  )
}
