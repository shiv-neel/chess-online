import { Box, Grid, GridItem, VStack, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BoardType } from '../utils/types'
import Tile from './Tile'

interface BoardProps {
	fen: string
	GameBoard: BoardType
}

const LIGHT_SQUARE_COLOR = '#F8F8F8'
const DARK_SQUARE_COLOR = '#D8D8D8'

const Board: React.FC<BoardProps> = ({ fen, GameBoard }) => {
	const [FEN, setFEN] = useState<string>(fen)

	const [pieces, setPieces] = useState<number[][]>()

	useEffect(() => {}, [FEN])

	return (
		<Box className='flex flex-col justify-center mx-auto'>
			<Box className='flex mx-auto'>
				<Box className='flex flex-col space-y-10 items-center pr-5 pt-5'>
					<p>1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
					<p>5</p>
					<p>6</p>
					<p>7</p>
					<p>8</p>
				</Box>
				<Grid templateRows='repeat(8, 1fr)' templateColumns='repeat(8, 1fr)'>
					{GameBoard.board.map((rank, i) =>
						rank.map((tile, j) => (
							<Tile
								key={j}
								piece={tile}
								tileColor={(i + j) % 2 ? LIGHT_SQUARE_COLOR : DARK_SQUARE_COLOR}
							/>
						))
					)}{' '}
					<p className='mx-auto mt-2'>a</p>
					<p className='mx-auto mt-2'>b</p>
					<p className='mx-auto mt-2'>c</p>
					<p className='mx-auto mt-2'>d</p>
					<p className='mx-auto mt-2'>e</p>
					<p className='mx-auto mt-2'>f</p>
					<p className='mx-auto mt-2'>g</p>
					<p className='mx-auto mt-2'>h</p>
				</Grid>
			</Box>
		</Box>
	)
}

export default Board
