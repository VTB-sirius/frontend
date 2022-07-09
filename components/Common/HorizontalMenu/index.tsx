import { useRef } from 'react';
import Props from './HorizontalMenu.props';

const HorizontalMenu = ({ className = '', onItemChange, selectedItem, items, ...props }: Props): JSX.Element => {
	const selectedRef = useRef(null);

	function getAdditionalPadding() {
		if(selectedItem === 0) 
			return '+ 3px';
		else if(selectedItem + 1 === items.length)	
			return '- 3px';
		else
			return '';
	}

	return (
		<div
			className={className + ' relative h-10 p-[3px] bg-veryLightGrey rounded-[13px]'}
			{...props}
		>
			<div
				className='absolute w-full h-[calc(100%-6px)] z-10 grid gap-[3px]'
				style={{
					gridTemplateColumns: `repeat(${items.length}, 1fr)`,
				}}
			>
				{items.map((i, num) => (
					<button
						ref={num === selectedItem ? selectedRef : null}
						className='font-semibold text-sm'
						key={num}
						onClick={() => onItemChange(num)}
					>
						{i}
					</button>
				))}
			</div>
			<div
				className='absolute bg-white rounded-[13px] h-[calc(100%-6px)] transition-all duration-300'
				style={{
					width: 100 / items.length + '%',
					left: `calc(${100 / items.length * selectedItem + '%'} ${getAdditionalPadding()})`,
				}}
			>
			</div>
		</div>
	);
};

export default HorizontalMenu;
