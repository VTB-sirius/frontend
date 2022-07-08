import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoaderWatchIcon from '../../assets/loaderWatch.svg';

export default {
	title: 'Assets/LoaderWatch',
	component: LoaderWatchIcon,
} as ComponentMeta<typeof LoaderWatchIcon>;

const Template: ComponentStory<typeof LoaderWatchIcon> = (args) => <LoaderWatchIcon {...args} />;

export const Primary = Template.bind({});
