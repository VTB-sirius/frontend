import Link from 'next/link';
import Props from './MainLayout.props';

const MainLayout: React.FC<Props> = ({ className = '', children, ...props }) => {
	return (
		<div className={className + ' px-30 pt-[63px]'} {...props}>
			<Link href='/'>
				<a className='font-bold text-[34px]'>
					Skady
				</a>
			</Link>
			{children}
		</div>
	);
};

export default MainLayout;
