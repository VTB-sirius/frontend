import { useEffect, useRef } from 'react';
import Props from './Preloader.props';

//import PreloaderWatchIcon from '../../../assets/loaderWatch.svg';

const Preloader: React.FC<Props> = ({ className = '', ...props }) => {
	const iframeRef = useRef(null);

	useEffect(() => {
		iframeRef.current.focus();
	}, []);

	return (
		<div className={className + ''} {...props}>
			<iframe
				ref={iframeRef}
				scrolling='no'
				width={317}
				height={420}
				src='https://game2048.ru/'
				className='mx-auto rounded-2xl'
			>
			</iframe>
			<p className='font-semibold text-xl text-center mt-5'>
				Немного подождите, обучаем модель.
				<br />
				А пока можете сыграть в 2048 (управление стрелками).
			</p>
		</div>
	);
};

export default Preloader;
