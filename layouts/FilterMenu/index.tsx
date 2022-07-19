import Props from './FilterMenu.props';

import CrossIcon from '../../assets/cross.svg';
import Loader from '../../assets/loader.svg';
import Button from '../../components/Common/Button';
import Checkbox from '../../components/Common/Checkbox';
import { useFormik } from 'formik';

const FilterMenu: React.FC<Props> = ({ className = '', onBack, clusters, onFormSubmit, ...props }) => {
	const formik = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			onFormSubmit(Object.keys(values).filter((i) => values[i].length));
		},
	});

	return (
		<aside className={className + ' grid grid-rows-[auto_1fr_auto]'} {...props}>
			<div className='px-6 py-4 flex justify-between items-center border-b-[1px] border-button-secondary'>
				<h2 className='font-semibold text-lg'>
					Отфильтровать данные
				</h2>
				<button onClick={onBack}>
					<CrossIcon className='fill-icon-secondary' />
				</button>
			</div>
			<form onSubmit={formik.handleSubmit} className='p-6'>
				{clusters.map((i, num) => (
					<Checkbox
						key={num}
						className='mb-3'
						name={i}
						onChange={formik.handleChange}
						checked={formik[i] && formik[i].length}
						label={i} />
				))}
			</form>
			<div className='px-6 py-4 grid grid-cols-[auto_auto_1fr] gap-[10px] border-t-[1px] border-button-secondary'>
				{false ? (
					<Loader className='h-9 w-9 mx-5' />
				) : (
					<Button className='h-9 px-4 text-sm' style={{ borderRadius: 8 }} onClick={formik.submitForm}>
						Отфильтровать данные
					</Button>
				)}
				<Button
					variant='secondary'
					type='button'
					className='h-9 px-4 text-sm'
					onClick={onBack}
					style={{
						borderRadius: 8,
					}}
				>
					Отменить
				</Button>
			</div>
		</aside>
	);
};

export default FilterMenu;
