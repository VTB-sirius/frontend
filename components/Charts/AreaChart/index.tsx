import { CartesianGrid, AreaChart as AreaReChart, Tooltip as RechartTooltip, XAxis, YAxis, Area } from 'recharts';
import Tooltip from '../Tooltip';
import Props from './AreaChart.props';

const AreaChart: React.FC<Props> = ({ data, colors, width, height }) => {
	return (
		<AreaReChart width={width} height={height} data={data}>
			<XAxis dataKey='name' />
			<YAxis />
			<CartesianGrid strokeDasharray='3 3' />
			<RechartTooltip
				content={(i) => (
					<Tooltip
						className='w-[270px]'
						title='Ключевые слова'
						content={i.payload.length
							? Object.keys(colors)
								.map((j) => `${j}: ${i.payload[0].payload.keywords[j].join(' • ')}`)
							: ''} />
				)} />
			{data.length && Object.keys(data[0]).filter((i) => i !== 'name').map((i, num) => (
				<Area
					key={num}
					type='monotone'
					dataKey={i}
					stroke={colors[i]}
					fillOpacity={0.2}
					fill={colors[i]} />
			))}
		</AreaReChart>
	);
};	

export default AreaChart;
