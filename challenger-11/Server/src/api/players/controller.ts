import {
  Get,
  Post,
  Body,
  OnUndefined,
  JsonController
} from 'routing-controllers'

import { PlayerRequest } from './requests/player-request'
import { save, findScores } from './service'

@JsonController('/player')
export class PlayerController {
  @Get('/')
  @OnUndefined(204)
  async findScores() {
    /**
     * Get grouped screens.
     */
    return findScores()
  }

  @Post('/')
  @OnUndefined(204)
  async saveScore(@Body() player: PlayerRequest) {
    /**
     * Save player.
     */
    await save(player)
  }
}
