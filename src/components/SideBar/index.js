import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import CartContext from '../../context/CartContext'

import {
  SideBarContainer,
  NavItemsContainer,
  ItemText,
  TextItemContainer,
  SideBarBottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
  NavLink,
} from './styledComponents'

class SideBar extends Component {
  renderStatusItems = () => (
    <CartContext.Consumer>
      {value => {
        const {activeTabItem, activeTab, isDarkTheme} = value

        const onClickHomeTabItem = () => {
          activeTabItem('HOME')
        }
        const onClickTrendingTabItem = () => {
          activeTabItem('TRENDING')
        }

        const onClickGamingTabItem = () => {
          activeTabItem('GAMING')
        }

        const onClickSavedVideosTabItem = () => {
          activeTabItem('SAVED VIDEOS')
        }

        const bgColor = isDarkTheme ? '#181818' : '#ffffff'

        const textColor = isDarkTheme ? '#f1f5f9' : '#000000'
        const isActiveItem = isDarkTheme ? '#424242' : '#f1f5f9'

        return (
          <SideBarContainer bgColor={bgColor}>
            <NavItemsContainer>
              <TextItemContainer
                isActive={activeTab === 'HOME' ? isActiveItem : 'transparent'}
                onClick={onClickHomeTabItem}
              >
                <NavLink to="/">
                  <AiFillHome
                    color={activeTab === 'HOME' ? '#ff0000' : '#909090'}
                  />
                  <ItemText
                    color={activeTab === 'HOME' ? textColor : textColor}
                  >
                    Home
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={
                  activeTab === 'TRENDING' ? isActiveItem : 'transparent'
                }
                onClick={onClickTrendingTabItem}
              >
                <NavLink
                  to="/trending"
                  color={activeTab === 'TRENDING' ? '#ff0000' : '#909090'}
                >
                  <AiFillFire />
                  <ItemText
                    color={activeTab === 'TRENDING' ? textColor : textColor}
                  >
                    Trending
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={activeTab === 'GAMING' ? isActiveItem : 'transparent'}
                onClick={onClickGamingTabItem}
              >
                <NavLink
                  to="/gaming"
                  color={activeTab === 'GAMING' ? '#ff0000' : '#909090'}
                >
                  <SiYoutubegaming />
                  <ItemText
                    color={activeTab === 'GAMING' ? textColor : textColor}
                  >
                    Gaming
                  </ItemText>
                </NavLink>
              </TextItemContainer>
              <TextItemContainer
                isActive={
                  activeTab === 'SAVED VIDEOS' ? isActiveItem : 'transparent'
                }
                onClick={onClickSavedVideosTabItem}
              >
                <NavLink
                  to="/saved-videos"
                  color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : '#909090'}
                >
                  <MdPlaylistAdd />
                  <ItemText
                    color={activeTab === 'SAVED VIDEOS' ? textColor : textColor}
                  >
                    Saved videos
                  </ItemText>
                </NavLink>
              </TextItemContainer>
            </NavItemsContainer>
            <SideBarBottomContainer>
              <BottomText color={textColor}>CONTACT US</BottomText>
              <IconsContainer>
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <IconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </IconsContainer>
              <ItemText color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ItemText>
            </SideBarBottomContainer>
          </SideBarContainer>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return <>{this.renderStatusItems()}</>
  }
}

export default SideBar
