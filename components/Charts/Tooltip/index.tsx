import Props from './Tooltip.props';

const Tooltip: React.FC<Props> = ({ title, content, className, ...props }) => {
	return (
		<article className={className + ' w-[240px] p-4 rounded-2xl shadow-classic grid gap-[10px] text-sm bg-white'} { ...props}>
			<h3 className='font-semibold'>
				{title}
			</h3>
			{Array.isArray(content)
				? content.map((i, num) => (
					<p key={num}>	
						{i}
					</p>
				)) : (
					<p>	
						{content}
					</p>
				)}
		</article>
	);
};

export default Tooltip;
