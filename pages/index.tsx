import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { DndProvider } from 'react-dnd'
import Board from '../components/Board'
import styles from '../styles/Home.module.css'
import { COLORS, defaultFEN, startingBoard } from '../utils/constants'

const Home: NextPage = () => {
	const [fen, setFen] = useState(defaultFEN)

	return <></>
}

export default Home
