import { BannerLogoChilli, Container, ContentNav } from './styles'

import ChilliLogo from '../../assets/chilliLogo.svg'
import SearchIcon from '../../assets/search.svg'
import LocationIcon from '../../assets/location.svg'
import UsersIcon from '../../assets/users.svg'
import BagIcon from '../../assets/bag.svg'
import HeartIcon from '../../assets/heart.svg'

export function HeaderSearch() {
  return (
    <Container>
      <ContentNav>
        <BannerLogoChilli src={ChilliLogo} alt="Chilli" />
        <form className="searchForm">
          <input type="text" placeholder="Busque por modelos ou coleção" />
          <button>
            <img src={SearchIcon} alt="Pesquisar" />
          </button>
        </form>
        <ul className="children-search">
          <li>
            <span>encontre uma loja</span>
            <img src={LocationIcon} alt="Localização" />
          </li>
          <li>
            <span>minha conta</span>
            <img src={UsersIcon} alt="Minha Conta" />
            <img src={HeartIcon} alt="Minha conta" className="heart" />
          </li>
          <li style={{ border: 'none' }}>
            <span>sacola </span>
            <img src={BagIcon} alt="Sacola" />
          </li>
        </ul>
      </ContentNav>
    </Container>
  )
}
