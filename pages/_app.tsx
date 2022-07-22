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
					Classify — сервис для лёгкого анализа данных
				</title>
				<meta httpEquiv='Content-Security-Policy' content='upgrade-insecure-requests' /> 
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
				<meta
					name='description'
					content='В пару кликов анализируйте данные и запускайте модели машинного обучения без кода' />
				<meta
					name='keywords'
					content='данные, анализ, кластеры, искусственный, интеллект, машинное, обучение, болльшие' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://classify.ml/' />
				<meta property='og:title' content='Classify — сервис для лёгкого анализа данных' />
				<meta
					property='og:description'
					content='В пару кликов анализируйте данные и запускайте модели машинного обучения без кода' />
				<meta
					property='og:image'
					content='/og_image.png' />
					
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://classify.ml/' />
				<meta property='twitter:title' content='Classify — сервис для лёгкого анализа данных' />
				<meta
					property='twitter:description'
					content='В пару кликов анализируйте данные и запускайте модели машинного обучения без кода' />
				<meta
					property='twitter:image'
					content='/og_image.png' />
			</Head>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
};

export default MyApp;
