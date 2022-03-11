import { Container, Content } from './styles'

import { ChildrenCountry } from '../content/country'
import { ChildrenAttendance } from '../content/attendance'
import { ChildrenAcessibility } from '../content/acessibility'
import { HeaderOption } from './headerOption'
import { HeaderNav } from './headerNav'
import { HeaderSearch } from './headerSearch'

export function Header() {
  return (
    <Container>
      <Content>
        <ul className="header-left">
          <li>
            <HeaderOption
              name="acessibilidade"
              content={ChildrenAcessibility}
            />
          </li>
          <li>
            <HeaderOption name="atendimento" content={ChildrenAttendance} />
          </li>
        </ul>

        <ul className="header-right">
          <li>
            <span>mundo chilli</span>
          </li>
          <li>
            <span>seja um franqueado</span>
          </li>
          <li>
            <HeaderOption name="selecione seu País" content={ChildrenCountry} />
          </li>
        </ul>
      </Content>
      <HeaderSearch />
      <HeaderNav />
    </Container>
  )
}
