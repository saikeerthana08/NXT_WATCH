import {Link, withRouter} from 'react-router-dom'

import {BsMoon} from 'react-icons/bs'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {
  NavHeader,
  ProfileImage,
  ContentContainer,
  LogoutButton,
  ThemeButton,
  WebsiteLogo,
  ModalContainer,
  CloseButton,
  AlignRow,
  ConfirmButton,
  ModalDesc,
  AlignColumn,
  ContentListItem,
  IconButton,
} from './styledComponents'

import CartContext from '../../context/CartContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {onChangeTheme, isDarkTheme} = value

        const onClickChangeTheme = () => {
          onChangeTheme()
        }

        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

        const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
        const logOutButton = isDarkTheme ? '#f9f9f9' : '#0967d2'

        const websiteLogo = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavHeader bgColor={bgColor}>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <ContentContainer>
              <ContentListItem>
                <ThemeButton
                  onClick={onClickChangeTheme}
                  data-testid="theme"
                  color={textColor}
                >
                  {isDarkTheme ? <FiSun /> : <BsMoon />}
                </ThemeButton>
              </ContentListItem>
              <ContentListItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <IconButton>
                  <GiHamburgerMenu color={textColor} size={22} />
                </IconButton>
              </ContentListItem>
              <ContentListItem>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      data-testid="iconButton"
                      logOutButton={logOutButton}
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer>
                      <AlignColumn>
                        <ModalDesc>Are you sure, you want to logout</ModalDesc>
                        <AlignRow>
                          <CloseButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </AlignRow>
                      </AlignColumn>
                    </ModalContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <IconButton type="button" data-testid="iconButton">
                      <FiLogOut color={textColor} size={22} />
                    </IconButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer>
                      <AlignColumn>
                        <ModalDesc>Are you sure, you want to logout</ModalDesc>
                        <AlignRow>
                          <CloseButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                          >
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </AlignRow>
                      </AlignColumn>
                    </ModalContainer>
                  )}
                </Popup>
              </ContentListItem>
            </ContentContainer>
          </NavHeader>
        )
      }}
    </CartContext.Consumer>
  )
}

export default withRouter(Header)
