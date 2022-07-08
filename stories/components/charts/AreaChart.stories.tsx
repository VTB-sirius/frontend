import { ComponentStory, ComponentMeta } from '@storybook/react';

import AreaChart from '../../../components/Charts/AreaChart';

export default {
	title: 'Components/Charts/AreaChart',
	component: AreaChart,
} as ComponentMeta<typeof AreaChart>;

const Template: ComponentStory<typeof AreaChart> = (args) => <AreaChart {...args} />;

export const Primary = Template.bind({});

let data = [];

for(let i = 0; i < 10; i++) {
	data.push({
		name: i,
		one: Math.floor(Math.random() * 100),
		two: Math.floor(Math.random() * 50) + 100,
		three: Math.floor(Math.random() * 150) + 150,
		keywords: {
			one: ['котик', 'собачка', 'крабик'],
			two: ['питон', 'удав', 'змея'],
			three: ['Ангелина', 'Кристина', 'Эльза'],
		},
	});
}

Primary.args = {
	width: 1000,
	height: 700,
	data,
	colors: {
		one: '#F94144',
		two: '#F3722C',
		three: '#F8961E',
	},
};
