import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from '../../../components/Common/Select';

export default {
	title: 'Components/Common/Select',
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

export const Transparent = Template.bind({});

Primary.args = {
	options: [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	],
};

Transparent.args = {
	options: [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	],
	variant: 'transparent',
};
