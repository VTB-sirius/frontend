import Props from './ThemesList.props';
import CrossIcon from '../../../assets/cross.svg';
import Select from '../Select';
import { useState } from 'react';

const ThemesList: React.FC<Props> = ({ className = '', themes = [], themesOptions, onAddItem, onDeleteItem, ...props }) => {
	const [inputValue, setInputValue] = useState('');

	return (
		<div className={className + ' flex flex-wrap'} {...props}>
			{themes.map((i, num) => (
				<div
					key={num}
					className='m-2 px-2 py-1 rounded-[4px] grid grid-cols-[1fr_auto] items-center gap-3'
					style={{
						backgroundColor: i.color,
					}}
				>
					<p>
						{i.label}
					</p>
					<button onClick={() => onDeleteItem(num)}>
						<CrossIcon className='fill-grey' />
					</button>
				</div>
			))}
			<Select
				value={null}
				variant='transparent'
				onInputChange={(value) => setInputValue(value)}
				onChange={(item) => onAddItem(item.label)}
				options={inputValue.length
					? [
						{ label: inputValue, value: inputValue },
						...themesOptions.map((i) => ({ label: i, value: i })),
					]
					: themesOptions.map((i) => ({ label: i, value: i }))}
				placeholder='Добавить тему'
				noOptionsMessage={() => 'Ничего не найдено -_-'} />
		</div>
	);
};

export default ThemesList;
