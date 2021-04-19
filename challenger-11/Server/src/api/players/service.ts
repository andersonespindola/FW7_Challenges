import { Player } from '../../models/player'
import { PlayerRequest } from './requests/player-request'

/**
 * Save score.
 */
export const save = async (player: PlayerRequest) => {
  console.log('Está salvando um resultado')
  Player.create(player)
}

/**
 * Return scores.
 */
export const findScores = async () => {
  console.log('Está procurando os resultados')
  return Player.find().sort({ score: -1 }).lean()
}
