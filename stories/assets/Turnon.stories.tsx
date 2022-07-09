import { ComponentStory, ComponentMeta } from '@storybook/react';

import TurnOnIcon from '../../assets/turnon.svg';

export default {
	title: 'Assets/Turnon',
	component: TurnOnIcon,
} as ComponentMeta<typeof TurnOnIcon>;

const Template: ComponentStory<typeof TurnOnIcon> = (args) => <TurnOnIcon {...args} />;

export const Primary = Template.bind({});
