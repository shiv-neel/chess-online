import { Chess, Move, PieceType, ShortMove, Square } from 'chess.js'
import { BoardTileType, PromotionType } from './types'

const chess = new Chess()

export const startGame = () => {
	const savedGame = localStorage.getItem('savedGame') // change to pulling FEN from firestore
	if (savedGame) {
		chess.load(savedGame) // loads stored FEN
	}
	updateGame()
}

export interface GameType {
	board: (BoardTileType | null)[][]
	pendingPromotion: PromotionType | void
	isGameOver: boolean
	turn: 'w' | 'b'
	result: string | null
}

export const updateGame = (pendingPromotion: PromotionType | void) => {
	const isGameOver = chess.game_over()
	const newGame: GameType = {
		board: chess.board(),
		pendingPromotion,
		isGameOver,
		turn: chess.turn(),
		result: isGameOver ? getGameResult() : null,
	}
	localStorage.setItem('savedGame', chess.fen()) // change to saving FEN to firestore
}

export const getGameResult = () => {
	if (chess.in_checkmate()) {
		const winner = chess.turn() === 'w' ? 'b' : 'w'
		return `Checkmate! ${winner} wins`
	}
	if (chess.in_draw()) {
		if (chess.in_stalemate()) {
			return 'Draw Game: Stalemate'
		}
		if (chess.in_threefold_repetition()) {
			return 'Draw Game: Threefold Repetition'
		}
		if (chess.insufficient_material()) {
			return 'Draw Game: Insufficient Material'
		}
	}
	return null
}

export const resetGame = () => {
	chess.reset()
	updateGame()
}

export const move = (
	src: Square,
	dest: Square,
	promotion: Exclude<PieceType, 'p' | 'k'> | undefined
) => {
	let move: ShortMove = { from: src, to: dest }
	if (promotion) move.promotion = promotion
	chess.move(move)
}

export const moveHandler = () => {}
