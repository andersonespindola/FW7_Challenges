import React from 'react'
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import axios from 'axios'

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      textAlign: 'center'
    },
    body: {
      fontSize: 14,
      textAlign: 'center'
    }
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow)

const createRankingData = async () => {
  const response = await axios.get('http://localhost:4000/player')

  const rankingPlayers = response.data
  // const normalizedPlayer = rankingPlayers.data
  //   ? rankingPlayers.data.map((player: object) => player._doc)
  //   : []
  console.log({ rankingPlayers })
}

function createData(name: string, score: number, fails: number) {
  return { name, score, fails }
}

const rows = [
  createData('Frozen yoghurt', 159, 20),
  createData('Ice cream sandwich', 237, 20),
  createData('Eclair', 262, 15),
  createData('Gingerbread', 50, 26)
]

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
})

export const ScoreTable = () => {
  const classes = useStyles()

  createRankingData()

  return (
    <TableContainer
      component={Paper}
      style={{ width: 800, marginTop: 20, marginBottom: 20 }}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Posição</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Acertos</StyledTableCell>
            <StyledTableCell>Falhas</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.score}</StyledTableCell>
              <StyledTableCell>{row.fails}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
