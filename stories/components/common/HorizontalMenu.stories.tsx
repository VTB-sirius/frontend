import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalMenu from '../../../components/Common/HorizontalMenu';

export default {
	title: 'Components/Common/HorizontalMenu',
	component: HorizontalMenu,
} as ComponentMeta<typeof HorizontalMenu>;

const Template: ComponentStory<typeof HorizontalMenu> = (args) => <HorizontalMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	items: ['Кошка', 'Собака', 'Лягкушка'],
};
