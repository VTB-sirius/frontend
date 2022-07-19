import models from '../models.type';

interface IProject {
	intertopic_map: IIntertopicMap[];
	topics?: ITopic[];
	documents: IDocument[];
}

interface IIntertopicMap {
	id: number;
	keywords: string[];
	size: number;
	cord_x: number;
	cord_y: number;
}

interface ITopic {
	id: number;
	keywords: string[];
	timestamps: ITimestamp[];
}

interface ITimestamp {
	timestamp: string;
	value: number;
	keywords: string[];
}

interface IDocument {
	_id?: string;
	id?: string;
	cord_x: number;
	cord_y: number;
	cluster_id: number;
	description: string;
}

interface ICreateProjectsRequest {
	file: File;
}

interface ICreateProjectResponse {
	status: 'success';
	payload: {
		id: string;
	}
}

interface IProjectByIdRequest {
	id: string;
	model: models;
}

interface IProjectByIdResponse {
	status: 'success' | 'pending';
	payload?: IProject;
}

export type {
	ICreateProjectsRequest,
	ICreateProjectResponse,
	IProjectByIdRequest,
	IProjectByIdResponse,
	IProject,
};
