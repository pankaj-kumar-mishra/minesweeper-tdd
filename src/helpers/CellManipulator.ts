import { Cell, Field, Coords } from "./Field";

export const getNeighborsItems = ([y, x]: Coords): Record<
	string,
	[number, number]
> => ({
	top: [y - 1, x],
	topRight: [y - 1, x + 1],
	right: [y, x + 1],
	rightBottom: [y + 1, x + 1],
	bottom: [y + 1, x],
	bottomLeft: [y + 1, x - 1],
	left: [y, x - 1],
	leftTop: [y - 1, x - 1],
});

// const {length} = [[1, 1], [1, 1]];
export const checkItemInField = ([y, x]: Coords, { length }: Field): boolean =>
	y >= 0 && x >= 0 && length - y > 0 && length - x > 0;

export const incrementNeighbors = (coords: Coords, field: Field): Field => {
	const items = getNeighborsItems(coords);

	for (const item of Object.values(items)) {
		if (checkItemInField(item, field)) {
			const [y, x] = item;
			const cell = field[y][x];
			// to restrict cell to 9 or above
			if (cell < 8) {
				// assertion that it is an Cell
				field[y][x] = (cell + 1) as Cell;
			}
		}
	}
	// console.log(field);
	return field;
};
