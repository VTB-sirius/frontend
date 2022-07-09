import Link from 'next/link';
import Props from './MainLayout.props';

const MainLayout: React.FC<Props> = ({ className = '', children, disablePadding, ...props }) => {
	return (
		<div className={className + ' pt-[63px] ' + (!disablePadding ? 'px-4 sm:px-10 md:px-30' : '')} {...props}>
			<Link href='/'>
				<a
					className={`font-bold text-[34px]
						${disablePadding ? 'pl-[30px] pr-4 sm:ml-10 md:ml-30' : 'pl-[14px] lg:pl-auto'}`}
				>
					Skady
				</a>
			</Link>
			{children}
		</div>
	);
};

export default MainLayout;
