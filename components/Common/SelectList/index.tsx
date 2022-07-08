import Props from './SelectList.props';

import CheckIcon from '../../../assets/check.svg';

const SelectList: React.FC<Props> = ({ className = '', items, selectedItem, onSelectItem, ...props }) => {
	return (
		<div
			className={className + ' rounded-b-xl'}
			style={{
				boxShadow: `0px 184px 74px rgba(35, 47, 59, 0.01), 0px 104px 62px rgba(35, 47, 59, 0.03), 0px 46px 46px
					rgba(35, 47, 59, 0.04), 0px 12px 25px rgba(35, 47, 59, 0.05), 0px 0px 0px rgba(35, 47, 59, 0.05)`,
			}}
			{...props}
		>
			{items.map((i, num) => (
				<button
					className='w-full p-4 text-sm flex justify-between items-center'
					onClick={() => onSelectItem(num)}
					onMouseDown={() => onSelectItem(num)}
					key={num}
				>
					{i}
					{selectedItem === num && (
						<CheckIcon className='fill-primary' />
					)}
				</button>
			))}
		</div>
	);
};

export default SelectList;
