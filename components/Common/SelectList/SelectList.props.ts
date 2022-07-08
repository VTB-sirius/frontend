import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	items: string[];
	selectedItem?: number;
	onSelectItem: (newValue: number) => void;
};

export default Props;
