import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tooltip from '../../../components/Charts/Tooltip';

export default {
	title: 'Components/Charts/Tooltip',
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	title: 'Product 1',
	keywords: ['Собака', 'Кошка', 'Лягкушка', 'Животные', 'Птицы', 'Ежи'],
};
