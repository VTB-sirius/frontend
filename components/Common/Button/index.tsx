import Props from './Button.props';
import { COMMON_STYLES, OUTLINE_STYLES, PRIMARY_STYLES } from './Button.styles';

const Button: React.FC<Props> = ({ variant = 'primary', className = '', children, ...props }) => {
	switch(variant) {
		case 'primary':
			return (
				<button className={`${className} ${COMMON_STYLES} ${PRIMARY_STYLES}`} {...props}>
					{children}
				</button>
			);
		case 'outline':
			return (
				<button className={`${className} ${COMMON_STYLES} ${OUTLINE_STYLES}`} {...props}>
					{children}
				</button>
			);
	}
};

export default Button;
