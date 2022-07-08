import { CartesianGrid, Scatter, ScatterChart, Tooltip as RechartTooltip, XAxis, YAxis, ZAxis } from 'recharts';
import Tooltip from '../Tooltip';
import Props from './BubbleChart.props';

const BubbleChart: React.FC<Props> = ({ width, height, data, onClickBubble = () => {} }) => {
	const minZ = data.sort((a, b) => a.z < b.z ? -1 : 1)[0].z;
	const maxZ = data.sort((a, b) => a.z > b.z ? -1 : 1)[0].z;

	let scatters = {};

	data.forEach((i) => {
		if(!scatters[i.color])
			scatters[i.color] = [];
		
		scatters[i.color].push(i);
	});

	return (
		<ScatterChart width={width} height={height}>
			<CartesianGrid />
			<XAxis type='number' dataKey='x' range={[0, 100]} />
			<YAxis type='number' dataKey='y' range={[0, 100]} />
			<ZAxis type='number' dataKey='z' range={[minZ * 5, maxZ * 4]} />
			<RechartTooltip content={(i) => (
				<Tooltip
					title={i.payload.length ? i.payload[0].payload.title : ''}
					content={i.payload.length ? i.payload[0].payload.keywords.join(' • ') : ''} />
			)} />
			{Object.keys(scatters)
				.map((i, num) => (
					<Scatter
						onClick={onClickBubble}
						key={num}
						name={i}
						data={scatters[i]}
						fill={i} />
				))}
		</ScatterChart>
	);
};

export default BubbleChart;
