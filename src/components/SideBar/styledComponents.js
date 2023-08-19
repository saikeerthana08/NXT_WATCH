import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 280px;
    min-height: 100vh;
    position: sticky;
    position: -webkit-sticky;
    background-color: ${props => props.bgColor};
  }
`

export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 30px;
`
export const TextItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.isActive};
  width: 100%;
  height: 50px;
  cursor: pointer;
`
export const ItemText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 150px;
  margin-left: 20px;
`

export const SideBarBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const BottomText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  width: 140px;
  font-size: 20px;
  margin-left: 20px;
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 20px;
`
export const IconImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 15px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.color};
`
