import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilterMenu from '../../layouts/FilterMenu';

export default {
	title: 'Layouts/FilterMenu',
	component: FilterMenu,
} as ComponentMeta<typeof FilterMenu>;

const Template: ComponentStory<typeof FilterMenu> = (args) => <FilterMenu {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	onBack: () => {},
};
