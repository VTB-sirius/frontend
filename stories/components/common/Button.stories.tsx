import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../../components/Common/Button';

export default {
	title: 'Components/Common/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Outline = Template.bind({});

Primary.args = {
	variant: 'primary',
	children: 'Загрузить файл',
	className: 'w-[343px] h-[73px]',
};

Outline.args = {
	variant: 'outline',
	children: 'Загрузить файл',
	className: 'w-[343px] h-[73px]',
};
