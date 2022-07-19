import MainLayout from '../layouts/MainLayout';
import Button from '../components/Common/Button';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { createProject } from '../shared/api/projects';

import UploadIcon from '../assets/upload.svg';
import LoaderIcon from '../assets/loader.svg';

const MainPage = (): JSX.Element => {
	const router = useRouter();

	const [isDragged, setIsDragged] = useState(false);

	const { mutate, isLoading } = useMutation(createProject, {
		onSuccess: (res) => router.push(`/projects/${res.payload.id}?model=bert`),
	});

	return (
		<MainLayout>
			<div
				onDragOver={() => setIsDragged(true)}
				onDragLeave={() => setIsDragged(false)}
				className={'relative bg-veryLightGrey rounded-[20px] max-w-[784px] w-full py-[53px] mx-auto mt-24 '
					+ (isDragged && 'border-2 border-dashed border-primary')}
			>
				<input
					type='file'
					accept='.xls,.xlsx'
					onChange={(e) => {
						mutate({
							file: e.target.files[0],
						});
					}}
					className='absolute top-0 w-full h-full cursor-pointer opacity-0' />
				<UploadIcon className='fill-primary mx-auto mb-7' />
				<p className='font-semibold text-xl text-center mb-[30px]'>
					{isLoading ? 'Загружаем файл... ' : 'Выберите файл или перетащите его сюда'}
				</p>
				{isLoading ? (
					<LoaderIcon className='w-[73px] h-[73px] mx-auto' />
				) : (
					<Button className='block h-[73px] max-w-[343px] w-full mx-auto'>
						выбрать файл
					</Button>
				)}
			</div>
		</MainLayout>
	);
};

export default MainPage;
