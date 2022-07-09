import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: string[];
	onItemChange: (value: number) => void;
	selectedItem: number;
}

export default Props;
