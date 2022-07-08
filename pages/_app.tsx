import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/globals.css';
import '../styles/font.css';
import '../styles/burger-menu.css';
import '../styles/checkbox.css';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>
					LOGO — легкий анализ данных
				</title>
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta
					name='description'
					content='В пару кликов анализируйте данные и запускайте модели машинного обучения без кода' />
				<meta
					name='keywords'
					content='работа, вакансии, работа, поиск вакансий, резюме, работы, работу, работ, ищу работу, поиск' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://sisbi.ru/' />
				<meta property='og:title' content='SkillActive - поиск секций и кружков для ребёнка' />
				<meta
					property='og:description'
					content='Создайте резюме в пару шагов, общайтесь с работодателями через наш встроенный мессенджер!' />
				<meta
					property='og:image'
					content='/assets/og_image.svg' />
					
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://sisbi.ru/' />
				<meta property='twitter:title' content='SISBI — новый сервис по поиску работы' />
				<meta
					property='twitter:description'
					content='Создайте резюме в пару шагов, общайтесь с работодателями через наш встроенный мессенджер!' />
				<meta
					property='twitter:image'
					content='/assets/og_image.svg' />
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default MyApp;
