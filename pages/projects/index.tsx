import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ProjectsPage = (): JSX.Element => {
	const router = useRouter();

	useEffect(() => {
		router.push('/');
	}, [router]);

	return null;
};

export default ProjectsPage;
