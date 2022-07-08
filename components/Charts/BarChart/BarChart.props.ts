interface Props {
	width: number;
	height: number;
	data: IItem[],
	colors: Record<string, string>;
};

interface IItem extends Record<string, unknown> {
	name: string;
}

export default Props;
