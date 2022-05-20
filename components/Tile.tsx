import { Box } from '@chakra-ui/react'
import React from 'react'
import Piece from './Piece'

interface ChessTile {
	piece: number
	tileColor: string
}

const Tile: React.FC<ChessTile> = ({ tileColor, piece }) => {
	return (
		<Box
			className='flex justify-center h-16'
			bg={tileColor ? tileColor : 'white'}
		>
			<Box className='flex justify-center items-center'>
				{<Piece piece={piece} />}
			</Box>
		</Box>
	)
}

export default Tile
