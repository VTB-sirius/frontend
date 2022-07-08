import { ComponentStory, ComponentMeta } from '@storybook/react';

import Arrow2Icon from '../../assets/arrow2.svg';

export default {
	title: 'Assets/Arrow2',
	component: Arrow2Icon,
} as ComponentMeta<typeof Arrow2Icon>;

const Template: ComponentStory<typeof Arrow2Icon> = (args) => <Arrow2Icon {...args} />;

export const Primary = Template.bind({});
