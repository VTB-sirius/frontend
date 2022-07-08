import { useEffect, useState } from 'react';
import { IResponse } from './useWindowDemantions.props';

const useWindowDemantions = (): IResponse => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	}, []);

	return {
		width,
		height,
	};
};

export default useWindowDemantions;
