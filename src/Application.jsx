import { styles } from 'ansi-colors'
import React, { useState } from 'react'

export default function Application(props) {
	{
		const [currentCounter, setCounter] = useState(20)
		const [currentHistory, setHistory] = useState([])
		function Calculator(number) {
			const calculatedState = currentCounter + number
			setCounter(calculatedState)
			setHistory(currentHistory.concat([currentCounter]))
		}

		return (
			<Container>
				<CurrentState
					currentNumber={currentCounter}
					calcNewCounter={Calculator}
				/>
				<HistoryList
					list={currentHistory}
					onDelete={(index) =>
						setHistory(currentHistory.filter((element, id) => index !== id))
					}
				/>
			</Container>
		)
	}

	function Container(props) {
		return <div className={styles.container}>{props.children}</div>
	}

	function CurrentState(props) {
		return (
			<div>
				Current state: {props.currentNumber}
				<div>
					<button onClick={() => props.calcNewCounter(4)}> 4 </button>
					<button onClick={() => props.calcNewCounter(-4)}> -4 </button>
					<button onClick={() => props.calcNewCounter(10)}> 10 </button>
					<button onClick={() => props.calcNewCounter(5)}> 5 </button>
					<button onClick={() => props.calcNewCounter(8)}> 8 </button>
				</div>
			</div>
		)
	}

	function HistoryList(props) {
		const { list, onDelete } = props
		return (
			<>
				<ul>
					{list.map((item, index) => (
						<li key={index}>
							<div>
								{item}
								<button onClick={() => onDelete(index)}>Delete</button>
							</div>
						</li>
					))}
				</ul>
			</>
		)
	}
}
