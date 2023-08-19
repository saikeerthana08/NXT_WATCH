import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: sticky;
  scroll-behavior: smooth;
  height: 50px;
  background-color: ${props => props.bgColor};
`

export const ProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ContentContainer = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    width: 15%;
  }
`

export const ContentListItem = styled.li`
  display: flex;
`

export const IconButton = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        display: none;
    }
  }
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 10px;
  padding: 8px 16px;
  color: ${props => props.logOutButton};
  background-color: transparent;
  border-color: ${props => props.logOutButton};
  border-radius: 4px;
  margin-left: 14px;
  border: 2px solid ${props => props.logOutButton};
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px none;
  cursor: pointer;
  color: ${props => props.color};
`

export const WebsiteLogo = styled.img`
  width: 110px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  width: 400px;
  background-color: #cbd5e1;
  border-radius: 10px;
`

export const NavbarLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
  }
`

export const NavbarSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  background-color: ${props => props.background};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: 1px solid grey;
  padding: 13px;
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  margin: 10px;
  color: black;
`

export const ConfirmButton = styled.button`
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  padding-right: 20px;
  padding-left: 20px;
  border: none;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 15px;
`

export const HeaderList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`
