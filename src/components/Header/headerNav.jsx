import { ContainerNav, ContentOptions } from './styles'

export function HeaderNav() {
  return (
    <ContainerNav>
      <ContentOptions>
        <div className="nav">
          <ul className="navItems">
            <li>
              <span>ÓCULOS DE SOL</span>{' '}
            </li>
            <li>
              {' '}
              <span>ÓCULOS DE GRAU</span>
            </li>
            <li>
              <span>RELÓGIOS</span>{' '}
            </li>
            <li>
              <span> ACESSÓRIOS</span>
            </li>
            <li>
              <span style={{ color: 'red' }}>
                <b>OUTLET</b>
              </span>
            </li>
            <li>
              <span>HISTÓRIA DA MARCA</span>
            </li>
          </ul>
        </div>
      </ContentOptions>
    </ContainerNav>
  )
}
