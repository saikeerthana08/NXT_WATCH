import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SearchVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 100%;
  padding: 20px;
`

export const SearchInput = styled.input`
  width: 200px;
  border: 1px solid #424242;
  padding: 3px;
  padding-right: 10px;
  padding-left: 10px;
  height: 35px;
  margin-left: 15px;
  background-color: ${props => props.bgColor};

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ButtonIcon = styled.button`
  padding: 5px;
  width: 70px;
  height: 35px;
  cursor: pointer;
  background-color: ${props => props.iconColor};
  border: 1px solid #424242;
  color: #000000;
  outline: none;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  flex-wrap: wrap;
  padding-left: 0px;
  justify-content: space-evenly;
`

export const ProductsLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: #fff;
`

export const Image = styled.img`
  width: 300px;
  margin: 20px;
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const Retry = styled.button`
  padding: 15px;
  color: blue;
  cursor: pointer;
`
