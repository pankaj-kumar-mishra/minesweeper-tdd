import { incrementNeighbors } from "./CellManipulator";

export type Cell = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Field = Cell[][];
export type Coords = [number, number];

export const CellState: Record<string, Cell> = {
	empty: 0,
	bomb: 9,
	hidden: 10,
	mark: 11,
	weakMark: 12,
};

// const size = 3;
// const state = 1;
// let result;
// result = new Array(size).fill(null);
// console.log(result);// [null, null, null]
// result = result.map(() => new Array(size).fill(state));
// console.log(result);// [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

// [
// 	[0, 0],
// 	[0, 0],
// ]
export const emptyFieldGenerator = (
	size: number,
	state: Cell = CellState.empty
): Field => new Array(size).fill(null).map(() => new Array(size).fill(state));

export const fieldGenerator = (size: number, probability: number): Field => {
	if (probability < 0 || probability > 1) {
		throw new Error("Probability must be between 0 and 1");
	}

	let unProcessedCells = size * size; // 10 * 10
	let restCellsWithBombs = unProcessedCells * probability; // 100 * 0.1 = 10

	const result: Field = emptyFieldGenerator(size);
	// loop every row and column inside of field
	for (let y = 0; y < size; y++) {
		for (let x = 0; x < size; x++) {
			if (restCellsWithBombs === 0) {
				return result;
			}

			// if (restCellsWithBombs / unProcessedCells > 0) {
			// to add bomb in random cell
			if (restCellsWithBombs / unProcessedCells > Math.random()) {
				result[y][x] = CellState.bomb;
				incrementNeighbors([y, x], result);

				restCellsWithBombs--;
			}

			// Decrease cell 1 on each loop
			unProcessedCells--;
		}
	}

	return result;
};
