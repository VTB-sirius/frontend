import { ComponentStory, ComponentMeta } from '@storybook/react';

import Preloader from '../../../components/Common/Preloader';

export default {
	title: 'Components/Common/Preloader',
	component: Preloader,
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) => <Preloader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	
};
