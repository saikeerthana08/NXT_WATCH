import {Component} from 'react'

import {IoMdClose} from 'react-icons/io'

import Header from '../Header'

import SearchVideos from '../SearchVideos'

import CartContext from '../../context/CartContext'

import {
  HomeContainer,
  HomeSideContainer,
  BannerImage,
  HomeStickyContainer,
  CloseButton,
  ModalContainer,
  GetItNowButton,
  BannerImageContainer,
  BannerText,
  AlignRow,
} from './styledComponents'

import SideBar from '../SideBar'

class HomeRoute extends Component {
  state = {isPopup: true}

  onCloseBanner = () => {
    this.setState({isPopup: false})
  }

  renderHomeVideos = () => (
    <BannerImageContainer data-testid="banner">
      <AlignRow>
        <ModalContainer>
          <BannerImage
            src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>
            Buy Nxt Watch Premium prepaid plans with <br /> UPI
          </BannerText>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </ModalContainer>
        <CloseButton
          type="button"
          data-testid="close"
          onClick={this.onCloseBanner}
        >
          <IoMdClose size={20} color="#231f20" />
        </CloseButton>
      </AlignRow>
    </BannerImageContainer>
  )

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const {isPopup} = this.state

          return (
            <>
              <Header />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <HomeStickyContainer>
                  <SideBar onChangeActiveTab={this.onChangeActiveTab} />
                </HomeStickyContainer>
                <HomeSideContainer bgColor={bgColor}>
                  {isPopup && this.renderHomeVideos()}
                  <SearchVideos />
                </HomeSideContainer>
              </HomeContainer>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default HomeRoute
