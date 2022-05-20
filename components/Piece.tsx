import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { GiChessKing } from 'react-icons/gi'
import { PIECES } from '../utils/constants'

interface PieceProps {
	piece: number
}

const Piece: React.FC<PieceProps> = ({ piece }) => {
	const DEFAULT_CSS = 'cursor-pointer'
	switch (piece) {
		case PIECES.K:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'
						alt='white king'
					/>
				</Box>
			)
		case PIECES.Q:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'
						alt='white queen'
					/>
				</Box>
			)
		case PIECES.R:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'
						alt='white rook'
					/>
				</Box>
			)
		case PIECES.B:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'
						alt='white bishop'
					/>
				</Box>
			)
		case PIECES.N:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'
						alt='white knight'
					/>
				</Box>
			)
		case PIECES.P:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
						alt='white pawn'
					/>
				</Box>
			)
		case PIECES.k:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg'
						alt='black king'
					/>
				</Box>
			)
		case PIECES.q:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg'
						alt='black queen'
					/>
				</Box>
			)
		case PIECES.r:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'
						alt='black rook'
					/>
				</Box>
			)
		case PIECES.b:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'
						alt='black bishop'
					/>
				</Box>
			)
		case PIECES.n:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'
						alt='black knight'
					/>
				</Box>
			)
		case PIECES.p:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
						alt='black pawn'
					/>
				</Box>
			)

		default:
			return <></>
	}
}

export default Piece
