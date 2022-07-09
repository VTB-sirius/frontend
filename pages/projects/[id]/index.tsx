import Preloader from '../../../components/Common/Preloader';
import MainLayout from '../../../layouts/MainLayout';
import Button from '../../../components/Common/Button';
import SelectList from '../../../components/Common/SelectList';
import { useState, useEffect } from 'react';
import BubbleChart from '../../../components/Charts/BubbleChart';
import useWindowDemantions from '../../../hooks/useWindowDemantions';
import AreaChart from '../../../components/Charts/AreaChart';
import ThemesList from '../../../components/Common/ThemesList';
import BarChart from '../../../components/Charts/BarChart';
import { slide as Menu } from 'react-burger-menu';
import FilterMenu from '../../../layouts/FilterMenu';
import { useRouter } from 'next/router';

import ArrowIcon from '../../../assets/arrow.svg';
import Arrow2Icon from '../../../assets/arrow2.svg';
import { LG } from '../../../shared/consts/breakpoints';

//DEV ONLY
let chartData = [];

for(let i = 0; i < 160; i++) {
	chartData.push({
		x: Math.floor(Math.random() * 100),
		y: Math.floor(Math.random() * 100),
		z: Math.floor(Math.random() * 100),
		color: ['#F94144', '#F3722C', '#F8961E'][Math.floor(Math.random() * 3)],
		title: 'Product ' + Math.floor(Math.random() * 10),
		keywords: ['Собака', 'Кошка', 'Лягкушка', 'Животные', 'Птицы', 'Ежи'],
	});
}

let chartData2 = [];

for(let i = 0; i < 10; i++) {
	chartData2.push({
		name: i,
		one: Math.floor(Math.random() * 100),
		two: Math.floor(Math.random() * 50) + 100,
		three: Math.floor(Math.random() * 150) + 150,
		keywords: {
			one: ['котик', 'собачка', 'крабик'],
			two: ['питон', 'удав', 'змея'],
			three: ['Ангелина', 'Кристина', 'Эльза'],
		},
	});
}

let chartData3 = [];

for(let i = 0; i < 10; i++) {
	chartData3.push({
		name: 'Product ' + i,
		one: Math.floor(Math.random() * 100),
		keywords: ['котик', 'собачка', 'крабик'],
	});
}
//DEV ONLY

const ProjectPage = (): JSX.Element => {
	const router = useRouter();

	const [isMenuOpened, setIsMenuOpened] = useState(false);

	const [filterMenuWidth, setFilterMenuWidth] = useState(0);
	const [bubbleChart1Width, setBubbleChart1Width] = useState(0);
	const [areaChartWidth, setAreaChartWidth] = useState(0);
	const [bubbleChart2Width, setBubbleChart2Width] = useState(0);
	const [barChartWidth, setBarChartWidth] = useState(0);

	const [showModelSelect, setShowMenuSelect] = useState(false);
	const [selectedModel, setSelectedModel] = useState(1);

	const [selectedThemes, setSelectedThemes] = useState([]);
	
	const [selectedCluster, setSelectedCluster] = useState<any>();

	const windowSizes = useWindowDemantions();

	useEffect(() => {
		window.scrollBy({
			top: 300,
			behavior: 'smooth',
		});
	}, [selectedCluster]);

	useEffect(() => {
		setFilterMenuWidth(windowSizes.width < LG ? windowSizes.width : 457);
		setBubbleChart1Width(windowSizes.width < LG ? 1200 : windowSizes.width - 600);
		setAreaChartWidth(windowSizes.width < LG ? 1200 : windowSizes.width - 240);
		setBubbleChart2Width(windowSizes.width < LG ? 1200 : windowSizes.width - 240);
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
				{false ? (
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
									{['Transformers', 'BERT', 'ruBERT'][selectedModel]}
									<ArrowIcon />
								</div>
								{showModelSelect && (
									<SelectList
										className='absolute z-20'
										selectedItem={selectedModel}
										onSelectItem={setSelectedModel}
										items={['Transformers', 'BERT', 'ruBERT']} />
								)}
							</div>
							<div></div>
							<Button
								variant='outline'
								className='h-[50px] px-3 mt-[10px] lg:mt-auto'
								style={{
									gridColumn: '1 / 4',
								}}
								onClick={() => setIsMenuOpened(true)}
							>
								Отфильтровать данные
								<Arrow2Icon className='inline-block stroke-primary' />
							</Button>
						</div>
						<section className='mt-9'>
							<h2 className='font-bold text-2xl lg:text-4xl'>
								Intertopic distance map
							</h2>
							<div className='grid lg:grid-cols-[1fr_auto]'>
								<article className='pt-[30px] overflow-x-scroll'>
									<BubbleChart
										width={bubbleChart1Width}
										height={400}
										data={chartData} />
								</article>
								<article className='pt-5 grid gap-9 h-fit'>
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
								</article>
							</div>
						</section>
						<section className='mt-9'>
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
						</section>
						<section className='mt-9'>
							<h2 className='font-bold mb-[30px] text-2xl lg:text-4xl'>
								Document clustering
							</h2>
							<div className='overflow-x-scroll'>
								<BubbleChart
									onClickBubble={setSelectedCluster}
									width={bubbleChart2Width}
									height={400}
									data={chartData} />
							</div>
						</section>
						{selectedCluster && (
							<section className='my-20'>
								<p>
									Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но
									это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э.,
									то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа
									Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur,
									и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый
									первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum
									(О пределах добра и зла), написанной Цицероном в 45 году н.э. Этот трактат по теории этики
									был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, Lorem ipsum dolor sit
									amet.., происходит от одной из строк в разделе 1.10.32

									Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не
									совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более
									двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
									штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur, и занялся
									его поисками в классической латинской литературе. В результате он нашёл неоспоримый
									первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum
									(О пределах добра и зла), написанной Цицероном в 45 году н.э. Этот трактат по теории этики
									был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, Lorem ipsum dolor sit
									amet.., происходит от одной из строк в разделе 1.10.32
								</p>
								<h2 className='mt-[50px] mb-8 font-bold text-2xl lg:text-4xl'>
									Topic Distribution in the Text
								</h2>
								<div className='overflow-x-scroll'>
									<BarChart
										width={barChartWidth}
										height={500}
										data={chartData3}
										colors={{
											one: '#F94144',
										}} />
								</div>
							</section>
						)}
					</>
				)}
			</MainLayout>
		</>
	);
};

export default ProjectPage;
