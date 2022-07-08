import { ReactNode } from 'react';

interface Props {
	variant?: SelectVariants;
	isDanger?: boolean;
	defaultInputValue?: string;
	defaultMenuIsOpen?: boolean;
	defaultValue?: ISelectOption;
	placeholder?: null | string | number | boolean;
	options?: ISelectOption[];
	openMenuOnClick?: boolean;
	openMenuOnFocus?: boolean;
	noOptionsMessage?: () => ReactNode;
	menuIsOpen?: boolean;
	maxMenuHeight?: number;
	minMenuHeight?: number;
	loadingMessage?: () => ReactNode;
	isSearchable?: boolean;
	isMulti?: boolean;
	isLoading?: boolean;
	isDisabled?: boolean;
	onChange?: (newValue) => void;
	onFocus?: (e) => void;
	onInputChange?: (newValue: string) => void;
	onKeyDown?: (e) => void;
	onMenuOpen?: () => void;
	onMenuClose?: () => void;
	onMenuScrollToTop?: (e) => void;
	onMenuScrollToBottom?: (e) => void;
	isLazyLoad?: boolean;
	value?: ISelectOption;
};

type SelectVariants = 'primary' | 'transparent';

interface ISelectOption {
	value: string;
	label: string;
}

export default Props;

export type {
	SelectVariants,
	ISelectOption,
};
