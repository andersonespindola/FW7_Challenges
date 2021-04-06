import React from 'react'
import { Grid } from '@material-ui/core'

import './styles.css'
import Counter from '../../components/Counter'

const isFinished = (history: any) => {
  console.log('acabou')
  history.push('/ranking')
}

export const Game: React.FC = () => {
  return (
    <div className="background">
      <Grid item xs={12} sm={6}>
        <Counter finish={isFinished} />
      </Grid>
    </div>
  )
}
