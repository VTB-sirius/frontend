import { ICreateProjectResponse, ICreateProjectsRequest, IProjectByIdRequest,
	IProjectByIdResponse } from '../types/api/projects.type';
import instance from './axios';

const createProject = (data: ICreateProjectsRequest): Promise<ICreateProjectResponse> => {
	const formData = new FormData();
	formData.set('file', data.file);

	return instance.post('/projects', formData)
		.then((res) => res.data);
};

const getProjectById = (data: IProjectByIdRequest): Promise<IProjectByIdResponse> => {
	return instance.get(`/projects/${data.id}/`, {
		params: {
			model: data.model,
		},
	}).then((res) => res.data);
};

export {
	createProject,
	getProjectById,
};
