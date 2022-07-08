import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectList from '../../../components/Common/SelectList';

export default {
	title: 'Components/Common/SelectList',
	component: SelectList,
} as ComponentMeta<typeof SelectList>;

const Template: ComponentStory<typeof SelectList> = (args) => <SelectList {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	items: ['BERT', 'ruBERT', 'LDA', 'Deep K-Means'],
	selectedItem: 0,
	onSelectItem: () => {},
};
