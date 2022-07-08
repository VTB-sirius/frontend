import { CartesianGrid, BarChart as BarReChart, XAxis, YAxis, Tooltip as RechartTooltip, Bar } from 'recharts';
import Props from './BarChart.props';

const BarChart: React.FC<Props> = ({ width, height, data, colors }) => {
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
			<RechartTooltip />
			{Object.keys(data[0]).map((i, num) => <Bar key={num} dataKey={i} fill={colors[i]} />)}
		</BarReChart>
	);
};

export default BarChart;
