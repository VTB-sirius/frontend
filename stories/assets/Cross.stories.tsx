import { ComponentStory, ComponentMeta } from '@storybook/react';

import CrossIcon from '../../assets/cross.svg';

export default {
	title: 'Assets/Cross',
	component: CrossIcon,
} as ComponentMeta<typeof CrossIcon>;

const Template: ComponentStory<typeof CrossIcon> = (args) => <CrossIcon {...args} />;

export const Primary = Template.bind({});
