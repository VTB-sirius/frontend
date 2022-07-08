interface Props {
	data: IDataObject[];
	colors: Record<string, string>;
	width: number;
	height: number;
};

interface IDataObject extends Record<string, string> {
	name: string;
}

export default Props;
