import { PieceType, Square } from 'chess.js'

export interface BoardTileType {
	square: Square
	type: PieceType
	color: 'b' | 'w'
}

export interface PromotionType {}
