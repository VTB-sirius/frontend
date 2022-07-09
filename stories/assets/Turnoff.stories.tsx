import { ComponentStory, ComponentMeta } from '@storybook/react';

import TurnoffIcon from '../../assets/turnoff.svg';

export default {
	title: 'Assets/Turnoff',
	component: TurnoffIcon,
} as ComponentMeta<typeof TurnoffIcon>;

const Template: ComponentStory<typeof TurnoffIcon> = (args) => <TurnoffIcon {...args} />;

export const Primary = Template.bind({});
