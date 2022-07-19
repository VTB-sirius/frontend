interface IDistribution {
	label: string;
	value: number;
}
 
interface IGetDocumentRequest {
	_id: string;
}

interface IGetDocumentResponse {
	status: 'success';
	payload: {
		_id: string;
		content: string;
		distribution: IDistribution[];
	}
}

export type {
	IGetDocumentRequest,
	IGetDocumentResponse,
};
