import models from '../types/models.type';

const MODELS = ['dbscan', 'lda', 'bert', 'deep K-means'];

const MODEL_TO_NAME: Record<models, string> = {
	dbscan: 'dbscan',
	lda: 'lda',
	bert: 'bert',
	'deep K-means': 'deep',
};

export default MODELS;

export {
	MODEL_TO_NAME,
};
