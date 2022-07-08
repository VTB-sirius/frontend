import { ComponentStory, ComponentMeta } from '@storybook/react';

import ThemesList from '../../../components/Common/ThemesList';

export default {
	title: 'Components/Common/ThemesList',
	component: ThemesList,
} as ComponentMeta<typeof ThemesList>;

const Template: ComponentStory<typeof ThemesList> = (args) => <ThemesList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	themes: [
		{
			label: 'theme 1',
			color: '#F94144',
		},
		{
			label: 'theme 2',
			color: '#F3722C',
		},
		{
			label: 'theme 3',
			color: '#F8961E',
		},
	],
	themesOptions: ['Theme 1', 'Theme 2', 'Theme 3', 'Theme 4', 'Theme 5'],
};
