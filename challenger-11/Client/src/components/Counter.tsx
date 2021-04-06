import React, { useEffect, useState } from 'react'
import { Container, LinearProgress } from '@material-ui/core'
import { useHistory } from 'react-router'

export interface Props {
  finish: Function
}

const Counter: React.FC<Props> = ({ finish }) => {
  const MIN = 0
  const MAX = 60

  const [seconds, setSeconds] = useState(5)

  const normalize = (value: number) => ((value - MIN) * 100) / (MAX - MIN)

  const history = useHistory()

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(interval)
        finish(history)
        return
      }
      setSeconds(seconds - 1)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <Container>
      <div>Tempo restante: {seconds}</div>
      <LinearProgress variant="determinate" value={normalize(seconds)} />
    </Container>
  )
}

export default Counter
