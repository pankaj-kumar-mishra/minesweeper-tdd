import { emptyFieldGenerator, fieldGenerator, CellState } from "./Field";

const { empty, bomb, hidden, mark, weakMark } = CellState;

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
		it("wrong density", () => {
			const errorText = "Density must be between 0 and 1";
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
		// it("Smallest possible field with mine/bomb", () => {
		// 	expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]]);
		// });
	});
});
