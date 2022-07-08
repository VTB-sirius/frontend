import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowIcon from '../../assets/arrow.svg';

export default {
	title: 'Assets/Arrow',
	component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>;

const Template: ComponentStory<typeof ArrowIcon> = (args) => <ArrowIcon {...args} />;

export const Primary = Template.bind({});
