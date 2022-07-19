import { IGetDocumentRequest, IGetDocumentResponse } from '../types/api/documents.type';
import instance from './axios';

const getDocument = (data: IGetDocumentRequest): Promise<IGetDocumentResponse> => {
	return instance.get(`/documents/${data._id}`)
		.then((res) => res.data);
};

export {
	getDocument,
};
