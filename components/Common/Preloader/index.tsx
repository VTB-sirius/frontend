import { useEffect, useRef, useState } from 'react';
import Props from './Preloader.props';
import { isMobile as isMobileDevice } from 'react-device-detect';

import PreloaderWatchIcon from '../../../assets/loaderWatch.svg';

const Preloader: React.FC<Props> = ({ className = '', ...props }) => {
	const iframeRef = useRef(null);

	const [isMobile, setisMobile] = useState(false);
 
	useEffect(() => {
		setisMobile(isMobileDevice);

		if(!isMobileDevice)
			iframeRef.current.focus();
	}, []);

	return (
		<div className={className + ''} {...props}>
			{isMobile ? (
				<PreloaderWatchIcon className='mx-auto mt-[40px]' />
			) : (
				<iframe
					ref={iframeRef}
					scrolling='no'
					width={317}
					height={420}
					src='https://game2048.ru/'
					className='mx-auto rounded-2xl'
				>
				</iframe>
			)}
			<p className='font-semibold text-xl text-center mt-5'>
				Немного подождите, обучаем модель.
				<br />
				{!isMobile && 'А пока можете сыграть в 2048 (управление стрелками).'}
			</p>
		</div>
	);
};

export default Preloader;
