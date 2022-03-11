import React from 'react'
import { ContentAcessibility, ContentAttendance } from './styles'

export const ChildrenAcessibility = () => {
  return (
    <ContentAttendance>
      <ContentAcessibility>
        <ul className="children-right">
          <li>Ajustar Zoom</li>
          <li>Escala de cinza</li>
        </ul>
      </ContentAcessibility>
    </ContentAttendance>
  )
}
