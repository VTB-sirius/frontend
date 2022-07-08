import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	themes: IItem[];
	themesOptions: string[];
	onAddItem: (newItem: string) => void;
	onDeleteItem: (itemId: number) => void;
};

interface IItem {
	label: string;
	color: string;
}

export default Props;
