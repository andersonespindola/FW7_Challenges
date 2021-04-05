import React from 'react'

import Fab from '@material-ui/core/Fab'
import SportsEsportsIcon from '@material-ui/icons/SportsEsports'
import StarIcon from '@material-ui/icons/Star'

export interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  const buttonIcon =
    text === 'Jogar' ? (
      <SportsEsportsIcon style={{ marginRight: 5 }} />
    ) : (
      <StarIcon style={{ marginRight: 5 }}></StarIcon>
    )

  return (
    <div style={{ marginBottom: 10 }}>
      <Fab variant="extended">
        {buttonIcon}
        {text}
      </Fab>
    </div>
  )
}

export default Button
