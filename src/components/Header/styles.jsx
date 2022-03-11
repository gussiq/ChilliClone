import styled from 'styled-components'

export const Container = styled.div`
  background: var(--black);
`
export const Content = styled.div`
  max-width: 1360px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left,
  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      height: 35px;
      display: flex;
      align-items: center;
      padding: 0 15px;
      cursor: pointer;
      color: #ccc;

      position: relative;

      :hover {
        background-color: var(--black-trans);
        color: #fff;
      }
    }
  }
`
export const ContentNav = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  height: 85px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .children-search {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    li {
      height: 30px;
      display: flex;
      padding: 0 20px;
      align-items: center;
      border-right: 1px solid #707070;

      :hover {
        opacity: 0.9;
        color: #ccc;
      }
    }

    li > img {
      margin-left: 15px;
    }
  }

  .searchForm {
    width: 100%;
    height: 45px;
    display: flex;
    max-width: 500px;
    border-radius: 4px;
    background-color: #fff;
    align-items: center;

    input {
      outline: none;
      border: none;
      width: calc(100% - 45px);
      padding: 10px 15px;
    }
    button {
      border: none;
      outline: none;
      background-color: transparent;

      height: 45px;
      width: 45px;
    }
  }
`
export const BannerLogoChilli = styled.img`
  height: 35px;
  margin-right: 35px;
  cursor: pointer;
`

export const ContainerNav = styled.div`
  background: var(--black);
  color: white;
  border-top: 1px solid #707070;
  display: flex;
  justify-content: center;
`

export const ContentOptions = styled.div`
  max-width: 1360px;
  padding: 0 15px;

  width: 100%;

  .nav {
    width: 950px;
    margin: 0 auto;
    padding: 0;
  }

  .navItems {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 30px;
      cursor: pointer;
      :hover {
        background-color: var(--black-trans);
      }
    }
  }
`
