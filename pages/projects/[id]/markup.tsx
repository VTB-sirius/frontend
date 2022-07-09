import { useState } from 'react';
import Select from '../../../components/Common/Select';
import MainLayout from '../../../layouts/MainLayout';
import Button from '../../../components/Common/Button';
import { useRouter } from 'next/router';

import TurnOffIcon from '../../../assets/turnoff.svg';
import TurnOnIcon from '../../../assets/turnon.svg';
import HorizontalMenu from '../../../components/Common/HorizontalMenu';
import useWindowDemantions from '../../../hooks/useWindowDemantions';
import { LG } from '../../../shared/consts/breakpoints';

const LOREM = `
	Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.
	Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.
	Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных
	слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе.
	В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus
	Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории
	этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..",
	происходит от одной из строк в разделе 1.10.32
`;

const MarkupPage = (): JSX.Element => {
	const router = useRouter();

	const windowSizes = useWindowDemantions();

	const [selectedMenuItem, setSelectedMenuItem] = useState(1);
	const [inputValue, setInputValue] = useState('');

	const [items, setItems] = useState([
		{
			content: LOREM,
			selectedCluster: null,
			isActive: true, 
		},
		{
			content: LOREM,
			selectedCluster: 'Theme 1',
			isActive: true, 
		},
		{
			content: LOREM,
			selectedCluster: 'Theme 2',
			isActive: true, 
		},
	]);

	const themesOptions = ['Theme 1', 'Theme 2', 'Theme 3', 'Theme 4'];

	return (
		<MainLayout disablePadding>
			<div className='flex justify-between lg:items-center flex-col lg:flex-row mt-7 lg:mt-16 px-[30px] lg:px-30'>
				<h1 className='font-bold text-2xl lg:text-4xl'>
					Разметка данных
				</h1>
				<HorizontalMenu
					className='w-[324px] mt-[13px] lg:mt-auto'
					onItemChange={setSelectedMenuItem}
					selectedItem={selectedMenuItem}
					items={['Размечено', 'Доразметка']} />
			</div>
			<div className='border-b-2 w-full bg-lightGrey mt-10'></div>
			{items.map((i, num) => (
				<div
					key={num}
					className={`border-b-2 border-b-lightGrey px-[30px] py-[20px] lg:px-40 lg:py-[30px] pb-[100px] lg:pb-auto
						grid grid-cols-[auto_36px] lg:grid-cols-[1fr_auto_36px] gap-5 items-start`}
				>
					<p
						className={!i.isActive && 'text-primary'}
						style={windowSizes.width < LG ? {
							gridColumn: '1 / 3',
						} : {}}
					>
						{i.content}
					</p>
					<Select
						value={i.selectedCluster && { value: i.selectedCluster, label: i.selectedCluster }}
						variant='primary'
						isDanger={!i.isActive}
						onInputChange={(value) => setInputValue(value)}
						onChange={(item) => {
							setItems((prev) => {
								prev[num].selectedCluster = item.label;

								return [...prev];
							});
						}}
						options={inputValue.length
							? [
								{ label: inputValue, value: inputValue },
								...themesOptions.map((i) => ({ label: i, value: i })),
							]
							: themesOptions.map((i) => ({ label: i, value: i }))}
						placeholder='Добавить тему'
						noOptionsMessage={() => 'Ничего не найдено -_-'} />
					{i.isActive ? (
						<button
							className='mt-1'
							onClick={() => {
								setItems((prev) => {
									prev[num].isActive = false;

									return [...prev];
								});
							}}
						>
							<TurnOffIcon className='fill-grey' />
						</button>
					) : (
						<button
							className='mt-1'
							onClick={() => {
								setItems((prev) => {
									prev[num].isActive = true;

									return [...prev];
								});
							}}
						>
							<TurnOnIcon className='fill-grey' />
						</button>
					)}
				</div>
			))}
			<Button
				className={`h-[50px] w-[calc(100vw-60px)] lg:w-[220px]
				fixed bottom-[30px] lg:bottom-[50px] left-[30px] lg:left-auto lg:right-[120px]`}
				onClick={() => router.push('/projects/1/report')}
			>
				Готово
			</Button>
		</MainLayout>
	);
};

export default MarkupPage;
