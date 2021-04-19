import React from 'react'

import './styles.css'
import Counter from '../../components/Counter'
import KeyboardPlay from '../../components/KeyboardPlay'
import Score from '../../components/Score'

export const Game: React.FC = () => {
  return (
    <div className="background">
      <Counter />
      <Score></Score>
      <KeyboardPlay />
    </div>
  )
}
