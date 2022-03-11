import React, { useState } from 'react'

export function HeaderOption({ name, content: Content }) {
  const [items, setItems] = useState()
  const [optionsId, setOptionsId] = useState(false)

  function handleMouseEnter() {
    setOptionsId(!optionsId)
  }

  return (
    <>
      <span onMouseEnter={handleMouseEnter}>{name}</span>

      {items && <Content />}
    </>
  )
}
