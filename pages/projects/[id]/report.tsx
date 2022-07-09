import Button from '../../../components/Common/Button';
import Preloader from '../../../components/Common/Preloader';
import MainLayout from '../../../layouts/MainLayout';
import { useRouter } from 'next/router';

import Arrow2Icon from '../../../assets/arrow2.svg';

const ReportPage = (): JSX.Element => {
	const router = useRouter();

	const tableItems = [
		{
			name: 'class 1',
			precision: 0.7,
			recall: 0.35,
			f1: 0.66,
			pointsCount: 50,
		},
		{
			name: 'class 2',
			precision: 0.28,
			recall: 0.92,
			f1: 0.43,
			pointsCount: 50,
		},
		{
			name: 'class 3',
			precision: 0.23,
			recall: 0.65,
			f1: 0.44,
			pointsCount: 50,
		},
	];

	const tableGlobalItems = [
		{
			name: 'accuracy',
			precision: ' ',
			recall: ' ',
			f1: 0.66,
			pointsCount: 50,
		},
		{
			name: 'macro avg',
			precision: 0.28,
			recall: 0.92,
			f1: 0.43,
			pointsCount: 50,
		},
		{
			name: 'weighted avg',
			precision: 0.23,
			recall: 0.65,
			f1: 0.44,
			pointsCount: 50,
		},
	];

	const matrix = [
		{
			name: 'class 1',
			values: [13, 13, 13, 13, 13],
		},
		{
			name: 'class 2',
			values: [13, 13, 13, 13, 13],
		},
		{
			name: 'class 3',
			values: [13, 13, 13, 13, 13],
		},
		{
			name: 'class 4',
			values: [13, 13, 13, 13, 13],
		},
		{
			name: 'class 5',
			values: [13, 13, 13, 13, 13],
		},
	];

	return (
		<MainLayout>
			{false ? (
				<Preloader className='mt-[40px]' />
			) : (
				<>
					<div className='flex justify-between flex-col lg:flex-row lg:items-center mt-[40px]'>
						<h1 className='font-bold text-2xl lg:text-4xl'>
							Отчёт о классификации
						</h1>
						<Button
							variant='outline'
							className='grid grid-flow-col gap-1 p-3 mt-4 lg:mt-auto'
							onClick={() => router.push('/projects/1/markup')}
						>
							Доразменить данные
							<Arrow2Icon className='stroke-primary' />
						</Button>
					</div>
					<div className='overflow-x-scroll'>
						<table className='text-lg mx-auto mt-11'>
							<thead>
								<tr>
									<th className='px-[35px]'>

									</th>
									<th className='font-semibold px-[35px]'>
										Precision
									</th>
									<th className='font-semibold px-[35px]'>
										Recall
									</th>
									<th className='font-semibold px-[35px]'>
										F1-score
									</th>
									<th className='font-semibold px-[35px]'>
										Число точек
									</th>
								</tr>
							</thead>
							<tbody>
								{tableItems.map((i, num) => (
									<tr key={num}>
										<th className='font-semibold py-[15px]'>
											{i.name}
										</th>
										<td className='text-center py-[15px]'>
											{i.precision}
										</td>
										<td className='text-center py-[15px]'>
											{i.recall}
										</td>
										<td className='text-center py-[15px]'>
											{i.f1}
										</td>
										<td className='text-center py-[15px]'>
											{i.pointsCount}
										</td>
									</tr>
								))}
								<tr>
									<th className='font-semibold py-[30px]'>
										
									</th>
									<td className='text-center py-[30px]'>
										
									</td>
									<td className='text-center py-[30px]'>
										
									</td>
									<td className='text-center py-[30px]'>
										
									</td>
									<td className='text-center py-[30px]'>

									</td>
								</tr>
								{tableGlobalItems.map((i, num) => (
									<tr key={num}>
										<th className='font-semibold py-[15px]'>
											{i.name}
										</th>
										<td className='text-center py-[15px]'>
											{i.precision}
										</td>
										<td className='text-center py-[15px]'>
											{i.recall}
										</td>
										<td className='text-center py-[15px]'>
											{i.f1}
										</td>
										<td className='text-center py-[15px]'>
											{i.pointsCount}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<h1 className='font-bold text-2xl lg:text-4xl mt-14'>
						Матрица ошибок
					</h1>
					<div className='overflow-x-scroll'>
						<table className='mx-auto font-semibold text-lg my-10'>
							<tbody>
								{matrix.map((i, num) => (
									<tr key={num}>
										{num === 0 && (
											<th rowSpan={matrix.length + 1} className='font-semibold pr-10'>
												True label
											</th>
										)}
										<th className='font-semibold text-center pr-10'>
											{i.name}
										</th>
										{i.values.map((j, num2) => (
											<td
												key={num2}
												className='min-w-[100px] max-w-[100px] h-[100px] text-center bg-primary'
												style={{
													backgroundColor: `rgba(242, 75, 74, ${Math.random()})`,
												}}
											> 
												{j}
											</td>
										))}
									</tr>
								))}
							</tbody>
							<thead></thead>
							<thead>
								<tr>
									<th colSpan={2}></th>
									{matrix.map((i, num) => (
										<th key={num} className='font-semibold pt-10'>
											{i.name}
										</th>
									))}
								</tr>
								<tr>
									<th colSpan={2}></th>
									<th colSpan={matrix.length} className='font-semibold text-center pt-10'>
										Predicted label
									</th>
								</tr>
							</thead>
						</table>
					</div>
				</>
			)}
		</MainLayout>
	);
};

export default ReportPage;
