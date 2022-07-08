import { ComponentStory, ComponentMeta } from '@storybook/react';

import UploadIcon from '../../assets/upload.svg';

export default {
	title: 'Assets/Upload',
	component: UploadIcon,
} as ComponentMeta<typeof UploadIcon>;

const Template: ComponentStory<typeof UploadIcon> = (args) => <UploadIcon {...args} />;

export const Primary = Template.bind({});
