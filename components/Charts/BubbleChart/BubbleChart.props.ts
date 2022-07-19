interface Props {
	width: number;
	height: number;
	data: IChartDataItem[];
	onClickBubble?: (data: any) => void;
};

interface IChartDataItem {
	x: number;
	y: number;
	z: number;
	
	color: string;
	title: string;
	keywords: string[] | string;
}

export default Props;
