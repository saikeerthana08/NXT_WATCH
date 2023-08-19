import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items:flex-start;
  cursor: pointer;
  width: 350px
  margin: 25px;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`

export const ThumbnailImage = styled.img`
  width: 40%;
`
export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`
export const VideoDetailsText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  margin-bottom: 10px;
  margin-top: 0px;
`
export const VideoDetailsHeading = styled(VideoDetailsText)`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.textColor};
`
export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
