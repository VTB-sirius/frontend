import { ComponentStory, ComponentMeta } from '@storybook/react';

import BarChart from '../../../components/Charts/BarChart';

export default {
	title: 'Components/Charts/BarChart',
	component: BarChart,
} as ComponentMeta<typeof BarChart>;

const Template: ComponentStory<typeof BarChart> = (args) => <BarChart {...args} />;

export const Primary = Template.bind({});

let data = [];

for(let i = 0; i < 10; i++) {
	data.push({
		name: 'Product ' + i,
		one: Math.floor(Math.random() * 100),
	});
}

Primary.args = {
	width: 1000,
	height: 700,
	data,
	colors: {
		one: '#F94144',
	},
};
