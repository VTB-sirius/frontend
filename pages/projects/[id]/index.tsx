import Preloader from '../../../components/Common/Preloader';
import MainLayout from '../../../layouts/MainLayout';
import SelectList from '../../../components/Common/SelectList';
import { useState, useEffect } from 'react';
import BubbleChart from '../../../components/Charts/BubbleChart';
import useWindowDemantions from '../../../hooks/useWindowDemantions';
import BarChart from '../../../components/Charts/BarChart';
import { slide as Menu } from 'react-burger-menu';
import FilterMenu from '../../../layouts/FilterMenu';
import { useRouter } from 'next/router';
import { LG } from '../../../shared/consts/breakpoints';
import { useMutation } from 'react-query';
import { getProjectById } from '../../../shared/api/projects';
import models from '../../../shared/types/models.type';
import MODELS, { MODEL_TO_NAME } from '../../../shared/consts/models';
import COLORS from '../../../shared/consts/colors';
import { getDocument } from '../../../shared/api/documents';

import ArrowIcon from '../../../assets/arrow.svg';

const ProjectPage = (): JSX.Element => {
	const router = useRouter();

	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const [filterMenuWidth, setFilterMenuWidth] = useState(0);
	const [bubbleChart1Width, setBubbleChart1Width] = useState(0);
	const [barChartWidth, setBarChartWidth] = useState(0);

	const [showModelSelect, setShowMenuSelect] = useState(false);
	const [selectedModel, setSelectedModel] = useState(1);
	
	const [selectedCluster, setSelectedCluster] = useState<any>();

	const windowSizes = useWindowDemantions();

	const { data, isLoading, mutate } = useMutation(getProjectById, {
		onSuccess: (res) => {
			if(!res.payload) {
				setTimeout(() => {
					mutate({
						model: MODEL_TO_NAME[router.query.model as models] as any,
						id: router.query.id as string,
					});
				}, 5000);
			}
		},
	});
	
	const documentMutation = useMutation(getDocument);

	useEffect(() => {
		window.scrollBy({
			top: 300,
			behavior: 'smooth',
		});
	}, [selectedCluster]);

	useEffect(() => {
		if(router && router.query && router.query.id) {
			mutate({
				model: MODEL_TO_NAME[router.query.model as models] as any,
				id: router.query.id as string,
			});
			
			setSelectedModel(MODELS.indexOf(router.query.model as models));
		}
	}, [router]);

	useEffect(() => {
		setFilterMenuWidth(windowSizes.width < LG ? windowSizes.width : 457);
		setBubbleChart1Width(windowSizes.width < LG ? 1200 : windowSizes.width - 600);
		setBubbleChart1Width(windowSizes.width < LG ? 1200 : windowSizes.width - 240);
		setBarChartWidth(windowSizes.width < LG ? 1200 : windowSizes.width - 240);
	}, [windowSizes]);

	return (
		<>
			<Menu
				isOpen={isMenuOpened}
				burgerButtonClassName='hidden'
				onClose={() => setIsMenuOpened(false)}
				right
				width={filterMenuWidth}
			>
				<FilterMenu
					className='h-full'
					style={{
						display: 'grid',
					}}
					clusters={['checkbox 1', 'checkbox 2', 'checkbox 3', 'checkbox 4']}
					onFormSubmit={() => router.push('/projects/1/markup')}
					onBack={() => setIsMenuOpened(false)} />
			</Menu>
			<MainLayout>
				{isLoading || !data || !Object.keys(data.payload).length ? (
					<Preloader className='mt-[40px]' />
				) : (
					<>
						<div
							className='mt-16 grid grid-cols-[auto_auto_1fr] lg:grid-cols-[auto_auto_1fr_auto] gap-2'
						>
							<h1 className='font-bold text-2xl lg:text-4xl'>
								Тип модели:
							</h1>
							<div className='relative'>
								<input
									className='absolute z-10 w-full h-full opacity-0 cursor-pointer'
									onFocus={() => setShowMenuSelect(true)}
									onBlur={() => setShowMenuSelect(false)} />
								<div className='font-bold flex items-center text-2xl lg:text-4xl'>
									{MODELS[selectedModel]}
									<ArrowIcon />
								</div>
								{showModelSelect && (
									<SelectList
										className='absolute z-20 w-36'
										selectedItem={selectedModel}
										onSelectItem={(item) => {
											setSelectedModel(item);

											router.push(`/projects/${router.query.id}?model=${MODELS[item]}`);
										}}
										items={MODELS} />
								)}
							</div>
							<div></div>
							{/*<Button
								variant='outline'
								className='h-[50px] px-3 mt-[10px] lg:mt-auto lg:w-fit'
								style={{
									gridColumn: windowSizes.width < LG ? '1 / 4' : '',
								}}
								onClick={() => setIsMenuOpened(true)}
							>
								Отфильтровать данные
								<Arrow2Icon className='inline-block stroke-primary' />
							</Button>*/}
						</div>
						<section className='mt-9'>
							<h2 className='font-bold text-2xl lg:text-4xl'>
								Intertopic distance map
							</h2>
							<div>
								<article className='pt-[30px] overflow-x-scroll'>
									<BubbleChart
										width={bubbleChart1Width}
										height={400}
										data={data.payload.intertopic_map && data.payload.intertopic_map.map((i) => ({
											x: i.cord_x,
											y: i.cord_y,
											z: i.size < data.payload.intertopic_map.length
												? data.payload.intertopic_map.length / i.size
												: i.size,
											s: null,
											color: COLORS[Math.floor(Math.random() * 3)],
											title: 'Cluster ' + i.id,
											keywords: i.keywords,
										}))} />
								</article>
								{/*<article className='pt-5 grid gap-9 h-fit'>
									<h3 className='font-bold text-2xl lg:text-3xl'>
										Параметры
									</h3>
									<div className='grid grid-flow-col items-center gap-2 font-semibold lg:text-[22px] text-grey'>
										<label htmlFor='clustersCount'>
											Число кластеров:
										</label>
										<input
											type='number'
											id='clustersCount'
											min={0}
											placeholder={'30'}
											className='outline-none border-2 border-lightGrey rounded-lg p-2 w-28' />
									</div>
									<Button className='h-[50px] w-full'>
										Дообучить модель
									</Button>
								</article>*/}
							</div>
						</section>
						{/*<section className='mt-9'>
							<h2 className='font-bold text-2xl lg:text-4xl'>
								Topics over Time
							</h2>
							<article className='mt-9'>
								<div className='overflow-x-scroll'>
									<AreaChart
										width={areaChartWidth}
										height={500}
										data={chartData2}
										colors={{
											one: '#F94144',
											two: '#F3722C',
											three: '#F8961E',
										}} />
								</div>
								<ThemesList
									className='mt-[30px]'
									themes={selectedThemes}
									onAddItem={(newItem) => {
										setSelectedThemes((prev) => [
											...prev,
											{
												label: newItem,
												color: ['rgba(249, 65, 68, 0.2)',
													'rgba(243, 114, 44, 0.2)',
													'rgba(248, 150, 30, 0.2)'][Math.floor(Math.random() * 3)],
											},
										]);
									}}
									onDeleteItem={(item) => {
										setSelectedThemes((prev) => {
											prev.splice(item, 1);

											return [...prev];
										});
									}}
									themesOptions={['Theme 1', 'Theme 2', 'Theme 3', 'Theme 4', 'Theme 5']} />
							</article>
						</section>*/}
						<section className='mt-9'>
							<h2 className='font-bold mb-[30px] text-2xl lg:text-4xl'>
								Document clustering
							</h2>
							<div className='overflow-x-scroll'>
								<BubbleChart
									onClickBubble={(data) => {
										setSelectedCluster(data);

										documentMutation.mutate({
											_id: data.payload._id,
										});
									}}
									width={bubbleChart1Width}
									height={400}
									data={data.payload.documents && data.payload.documents.map((i) => ({
										x: i.cord_x,
										y: i.cord_y,
										z: 30,
										s: null,
										color: COLORS[Math.abs(i.cluster_id)],
										title: 'Cluster '+ i.cluster_id,
										keywords: i.description,
										_id: i._id,
									}))} />
							</div>
						</section>
						{selectedCluster && documentMutation.isSuccess && documentMutation.data.payload ? (
							<section className='my-20'>
								<p>
									{documentMutation.data.payload.content}
								</p>
								<h2 className='mt-[50px] mb-8 font-bold text-2xl lg:text-4xl'>
									Topic Distribution in the Text
								</h2>
								<div className='overflow-x-scroll'>
									<BarChart
										width={barChartWidth}
										height={500}
										data={documentMutation.data.payload.distribution.map((i) => ({
											name: i.label,
											one: i.value,
											keywords: i.label,
										}))}
										colors={{
											one: '#F94144',
										}} />
								</div>
							</section>
						) : ''}
					</>
				)}
			</MainLayout>
		</>
	);
};

export default ProjectPage;
