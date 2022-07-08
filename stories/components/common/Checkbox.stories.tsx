import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from '../../../components/Common/Checkbox';

export default {
	title: 'Components/Common/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: 'Checkbox',
};
