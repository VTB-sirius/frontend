import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	onBack: () => void;
	clusters: string[];
	onFormSubmit: (selectedItems: string[]) => void;
};

export default Props;
