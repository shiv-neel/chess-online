export const PIECES: { [index: string]: number } = {
	// uppercase = white, lowercase = black
	EMPTY: 0,
	P: 1,
	p: 2,
	K: 3,
	k: 4,
	Q: 5,
	q: 6,
	R: 7,
	r: 8,
	N: 9,
	n: 10,
	B: 11,
	b: 12,
}

export const INDEXES: { [index: number]: string } = {
	0: 'EMPTY',
	1: 'P',
	2: 'p',
	3: 'K',
	4: 'k',
	5: 'Q',
	6: 'q',
	7: 'R',
	8: 'r',
	9: 'N',
	10: 'n',
	11: 'B',
	12: 'b',
}

export const isPiece = (c: string) => {
	const char = c.toLowerCase()
	return (
		char === 'p' ||
		char === 'k' ||
		char === 'q' ||
		char === 'r' ||
		char === 'b' ||
		char === 'n'
	)
}

export const COLORS = {
	NONE: -1,
	WHITE: 0,
	BLACK: 1,
}

export const CASTLING = {
	WhiteKingSide: 1,
	WhiteQueenSide: 2,
	BlackKingSide: 4,
	BlackQueenSide: 8,
}

export const defaultFEN =
	'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

export const startingBoard: number[][] = [
	[
		PIECES.R,
		PIECES.N,
		PIECES.B,
		PIECES.Q,
		PIECES.K,
		PIECES.B,
		PIECES.N,
		PIECES.R,
	],
	[
		PIECES.P,
		PIECES.P,
		PIECES.P,
		PIECES.P,
		PIECES.P,
		PIECES.P,
		PIECES.P,
		PIECES.P,
	],
	[
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
	],
	[
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
	],
	[
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
	],
	[
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
		PIECES.EMPTY,
	],
	[
		PIECES.p,
		PIECES.p,
		PIECES.p,
		PIECES.p,
		PIECES.p,
		PIECES.p,
		PIECES.p,
		PIECES.p,
	],
	[
		PIECES.r,
		PIECES.n,
		PIECES.b,
		PIECES.q,
		PIECES.k,
		PIECES.b,
		PIECES.n,
		PIECES.r,
	],
]
