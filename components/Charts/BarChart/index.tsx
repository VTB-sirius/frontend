import { CartesianGrid, BarChart as BarReChart, XAxis, YAxis, Tooltip as RechartTooltip, Bar } from 'recharts';
import Tooltip from '../Tooltip';
import Props from './BarChart.props';

const BarChart: React.FC<Props> = ({ width, height, data, colors }) => {
	function getContent(i) {
		if(i.payload.length && Array.isArray(i.payload[0].payload.keywords))
			return i.payload[0].payload.keywords.join(' • ');
		else if(i.payload.length)
			return i.payload[0].payload.keywords;
		else
			return '';
	}

	return (
		<BarReChart
			width={width}
			height={height}
			data={data}
			layout='vertical'
			margin={{
				left: 10,
			}}
		>
			<CartesianGrid strokeDasharray='3 3' />
			<YAxis type='category' dataKey='name' />
			<XAxis type='number' />
			<RechartTooltip content={(i) => (
				<Tooltip
					className='w-[270px]'
					title='Ключевые слова'
					content={getContent(i)} />
			)} />
			{Object.keys(data[0])
				.filter((i) => i !== 'keywords' && i !== 'name')
				.map((i, num) => <Bar key={num} dataKey={i} fill={colors[i]} />)}
		</BarReChart>
	);
};

export default BarChart;
