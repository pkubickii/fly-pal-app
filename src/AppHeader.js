import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DropMenu from './components/DropMenu'
import logo from './fplogo.svg'

const AppHeader = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 700px)').matches
  )

  useEffect(() => {
    window
      .matchMedia('(min-width: 700px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  const buttonRight = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
  const buttonLeft = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  }
  return (
    <header className="App-header">
      {matches && (
        <>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo fly-pal" />
          </Link>
          <Link to="/">
            <div className="App-name">FlyPal</div>
          </Link>
          <div style={buttonRight}>
            <DropMenu />
          </div>
        </>
      )}
      {!matches && (
        <>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo fly-pal" />
          </Link>
          <div style={buttonLeft}>
            <DropMenu />
          </div>
        </>
      )}
    </header>
  )
}
export default AppHeader
