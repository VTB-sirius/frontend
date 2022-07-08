import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckIcon from '../../assets/check.svg';

export default {
	title: 'Assets/Check',
	component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = (args) => <CheckIcon {...args} />;

export const Primary = Template.bind({});
