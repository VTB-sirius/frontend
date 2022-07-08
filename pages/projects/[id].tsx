import Preloader from '../../components/Common/Preloader';
import MainLayout from '../../layouts/MainLayout';
import Button from '../../components/Common/Button';
import SelectList from '../../components/Common/SelectList';
import { useState, useEffect } from 'react';
import BubbleChart from '../../components/Charts/BubbleChart';
import useWindowDemantions from '../../hooks/useWindowDemantions';
import AreaChart from '../../components/Charts/AreaChart';
import ThemesList from '../../components/Common/ThemesList';

import ArrowIcon from '../../assets/arrow.svg';
import Arrow2Icon from '../../assets/arrow2.svg';

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
//DEV ONLY

const ProjectPage = (): JSX.Element => {
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

	return (
		<MainLayout>
			{false ? (
				<Preloader className='mt-[40px]' />
			) : (
				<>
					<div className='mt-16 grid grid-cols-[auto_auto_1fr_auto] gap-2'>
						<h1 className='font-bold text-4xl'>
							Тип модели:
						</h1>
						<div className='relative'>
							<input
								className='absolute z-10 w-full h-full opacity-0 cursor-pointer'
								onFocus={() => setShowMenuSelect(true)}
								onBlur={() => setShowMenuSelect(false)} />
							<div className='font-bold text-4xl flex items-center'>
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
						<Button variant='outline' className='h-[50px] px-3'>
							Отфильтровать данные
							<Arrow2Icon className='inline-block stroke-primary' />
						</Button>
					</div>
					<section className='mt-9'>
						<h2 className='font-bold text-4xl'>
							Intertopic distance map
						</h2>
						<div className='grid grid-cols-[1fr_auto]'>
							<article className='pt-[30px]'>
								<BubbleChart
									width={windowSizes.width - 600}
									height={400}
									data={chartData} />
							</article>
							<article className='pt-5 grid gap-9 h-fit'>
								<h3 className='font-bold text-3xl'>
									Параметры
								</h3>
								<div className='grid grid-flow-col items-center gap-2 font-semibold text-[22px] text-grey'>
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
						<h2 className='font-bold text-4xl'>
							Topics over Time
						</h2>
						<article className='mt-9'>
							<AreaChart
								width={windowSizes.width - 240}
								height={500}
								data={chartData2}
								colors={{
									one: '#F94144',
									two: '#F3722C',
									three: '#F8961E',
								}} />
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
						<h2 className='font-bold text-4xl mb-[30px]'>
							Document clustering
						</h2>
						<BubbleChart
							onClickBubble={setSelectedCluster}
							width={windowSizes.width - 240}
							height={400}
							data={chartData} />
					</section>
					{selectedCluster && (
						<section className='mt-20'>
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

								Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем
								так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более
								двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney,
								штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur, и занялся
								его поисками в классической латинской литературе. В результате он нашёл неоспоримый
								первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги de Finibus Bonorum et Malorum
								(О пределах добра и зла), написанной Цицероном в 45 году н.э. Этот трактат по теории этики
								был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, Lorem ipsum dolor sit
								amet.., происходит от одной из строк в разделе 1.10.32
							</p>
							<h2 className='mt-[50px] font-bold text-4xl'>
								Topic Distribution in the Text
							</h2>
						</section>
					)}
				</>
			)}
		</MainLayout>
	);
};

export default ProjectPage;
