import React from 'react'
import { HomeContainer } from './Home.styled'
import HomeBG from '../../assets/home_bg.png'
import LockIcon from '../../assets/lock-icon.svg'

const Home = () => {
  return (
    <HomeContainer className='hero-wrapper'>
        <div className='hero-img-wrapper'>
            <img className='hero-img' width={"100%"} src={HomeBG} alt='Hero Background Img'/>
        </div>

        <div className='hero-content-wrapper'>
            <h1 className='hero-header'>Pocket Notes</h1>
            <p className='hero-desc'>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        </div>

        <footer>
            <img src={LockIcon} alt="lock icon" />
            <p>end-to-end encrypted</p>
        </footer>
    </HomeContainer>
  )
}

export default Home