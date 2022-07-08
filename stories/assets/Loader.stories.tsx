import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoaderIcon from '../../assets/loader.svg';

export default {
	title: 'Assets/Loader',
	component: LoaderIcon,
} as ComponentMeta<typeof LoaderIcon>;

const Template: ComponentStory<typeof LoaderIcon> = (args) => <LoaderIcon {...args} />;

export const Primary = Template.bind({});
