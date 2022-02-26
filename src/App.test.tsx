import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const mul = (a: number, b: number): number => a * b;

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test('test', () => {
	expect(mul(2, 4)).toBe(8);
});
