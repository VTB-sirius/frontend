import { ComponentStory, ComponentMeta } from '@storybook/react';

import BubbleChart from '../../../components/Charts/BubbleChart';

export default {
	title: 'Components/Charts/BubbleChart',
	component: BubbleChart,
} as ComponentMeta<typeof BubbleChart>;

const Template: ComponentStory<typeof BubbleChart> = (args) => <BubbleChart {...args} />;

export const Primary = Template.bind({});

let data = [];

for(let i = 0; i < 160; i++) {
	data.push({
		x: Math.floor(Math.random() * 100),
		y: Math.floor(Math.random() * 100),
		z: Math.floor(Math.random() * 100),
		color: ['#F94144', '#F3722C', '#F8961E'][Math.floor(Math.random() * 3)],
		title: 'Product ' + Math.floor(Math.random() * 10),
		keywords: ['Собака', 'Кошка', 'Лягкушка', 'Животные', 'Птицы', 'Ежи'],
	});
}

Primary.args = {
	width: 1000,
	height: 700,
	data,
};
