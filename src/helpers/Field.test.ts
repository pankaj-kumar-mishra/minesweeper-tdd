import { emptyFieldGenerator, fieldGenerator, CellState, Cell } from "./Field";

const { empty, bomb, hidden } = CellState;

const cellWithBombFilter = (cell: Cell) => cell === bomb;

describe("Field generator tests", () => {
	describe("emptyFieldGenerator test", () => {
		it("2 X 2", () => {
			expect(emptyFieldGenerator(2)).toStrictEqual([
				[empty, empty],
				[empty, empty],
			]);
		});
		it("3 X 3", () => {
			expect(emptyFieldGenerator(3)).toStrictEqual([
				[empty, empty, empty],
				[empty, empty, empty],
				[empty, empty, empty],
			]);
		});
		it("3 X 3 with hidden state", () => {
			expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
				[hidden, hidden, hidden],
				[hidden, hidden, hidden],
				[hidden, hidden, hidden],
			]);
		});
	});
	describe("fieldGenerator test", () => {
		// NOTE
		// expect(fieldGenerator(1, 2)).toThrow(errorText);
		// In this line, we want to test an error case. So, when you call
		// fieldGenerator(1, 2)
		// It immediately throws an error and our script will be broken.
		// So, to make the matcher toThrow work we make one more function wrapper
		// () => fieldGenerator(1, 2)
		// so when jest call this function under the hood, it wraps it in try/catch ! It's the only way to test the result of the code that throws an error in a script.

		it("wrong probability", () => {
			const errorText = "Probability must be between 0 and 1";
			expect(() => fieldGenerator(1, -1)).toThrow(errorText);
			expect(() => fieldGenerator(1, 2)).toThrow(errorText);
		});
		it("Smallest possible field without mine/bomb", () => {
			expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
		});
		it("Big field without mine/bomb", () => {
			expect(fieldGenerator(6, 0)).toStrictEqual([
				[empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty],
			]);
		});
		it("Smallest possible field with mine/bomb", () => {
			expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
		});
		it("2 X 2 field with mines/bombs", () => {
			expect(fieldGenerator(2, 1)).toStrictEqual([
				[bomb, bomb],
				[bomb, bomb],
			]);
		});
		it("2 X 2 field with 50% probability of mines/bombs", () => {
			// expect(fieldGenerator(2, 0.5)).toStrictEqual([
			// 	[bomb, bomb],
			// 	[empty, empty],
			// ]);
			const field = fieldGenerator(2, 0.5);
			const flatField = field.flat();
			// console.table(field);
			// console.table(flatField);

			const cellsWithBombs = flatField.filter(cell => cell === bomb);
			// const emptyCells = flatField.filter(cell => cell === empty);
			const emptyCells = flatField.filter(cell => cell === 2);

			expect(cellsWithBombs).toHaveLength(2);
			expect(emptyCells).toHaveLength(2);
		});
		// 10 X 10
		it("Real game field size = 10x10 with 1/4 mined cells (25 mines)", () => {
			const size = 10;
			const mines = 25;

			const probability = mines / (size * size);
			const field = fieldGenerator(size, probability);
			// console.table(field);

			const flatField = field.flat();

			expect(flatField.filter(cellWithBombFilter)).toHaveLength(25);
		});
	});
});
