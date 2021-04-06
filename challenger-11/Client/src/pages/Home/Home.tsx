import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

import './styles.css'

export const Home: React.FC = () => {
  return (
    <div className="App">
      <Link to={'/game'}>
        <Button text="Jogar" />
      </Link>
      <Link to={'/ranking'}>
        <Button text="Ranking" />
      </Link>
    </div>
  )
}
