import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainLayout from '../../layouts/MainLayout';

export default {
	title: 'Layouts/MainLayout',
	component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => <MainLayout {...args} />;

export const Primary = Template.bind({});
