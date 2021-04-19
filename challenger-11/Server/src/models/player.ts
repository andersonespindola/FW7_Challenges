import mongoose, {
  Schema,
  Document,
  SchemaOptions,
  SchemaDefinition
} from 'mongoose'

/**
 * Players.
 */
const players: SchemaDefinition = {
  name: String,
  score: Number,
  fails: Number
}

/**
 * Options.
 */
const options: SchemaOptions = {
  timestamps: true
}

/**
 * Document.
 */
export interface PlayerDocument extends Document {
  name: string
  score: number
  fails: number
}

/**
 * Schema.
 */
export const PlayerSchema = new Schema(players, options)

/**
 * Model.
 */
export const Player = mongoose.model<PlayerDocument>('player', PlayerSchema)
