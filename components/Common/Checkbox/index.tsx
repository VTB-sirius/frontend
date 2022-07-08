import Props from './Checkbox.props';

const Checkbox: React.FC<Props> = ({ className = '', label, id, ...props }) => {
	return (
		<div className={className}>
			<input
				id={id ? id : label}
				className='custom-checkbox w-5 h-5 cursor-pointer'
				type='checkbox'
				{...props} />
			<label htmlFor={id ? id : label} className='cursor-pointer grid grid-flow-col w-fit gap-2'>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
