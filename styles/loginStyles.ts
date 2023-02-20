export const loginStyles = {
	title: {
		fontWeight: 700,
		mb: 3,
	},
	body: {
		background:
			'linear-gradient(90deg, rgba(245,155,155,0.04254201680672265) 0%, rgba(245,155,155,0.10136554621848737) 35%, rgba(157,220,235,0.10136554621848737) 100%)',
		width: '100%',
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	box: {
		background: 'white',
		boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.25)',
		borderRadius: 2,
		my: 3,
		display: 'flex',
		justifyContent: 'center',
		minWidth: '80%',
		alignItems: 'center',
	},
	subtract: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
		height: '100%',
		background:
			'linear-gradient(197.86deg, #F59B9B 17.24%, #1B9CC3 69.35%, #107797 83.49%)',

		'@media (max-width: 900px)': {
			display: 'none',
		},
	},
	glass: {
		position: 'absolute',
		minWidth: '70%',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		background:
			'linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(197.86deg, #F59B9B 17.24%, #2295B8 52.62%, #0F5E76 61.46%)',
		mixBlendMode: 'normal',
		backdropFilter: 'blur(2px)',
		borderRadius: '20px',
	},
	button: {
		m: 1,
		marginBottom: 2,
		color: 'black',
		borderColor: '#a1a1a1',
		borderWidth: 2,
		borderRadius: 5,
		fontSize: '16px',
		fontWeight: 400,
		textTransform: 'none',
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	socials: {
		minWidth: '70%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},
	right: {
		flexGrow: 1,
		p: 3,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dividerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		mt: 2,
		mb: 2,
		width: '100%',
	},
	divider: {
		background: '#1A055F',
		height: '1px',
		width: '100px',
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '70%',

		'& .MuiTextField-root': {
			m: 1,
		},
	},
	input: {
		borderRadius: 10,

		'& .MuiOutlinedInput-root': {
			borderRadius: 10,
		},
		'& .MuiOutlinedInput-input': {
			padding: '14px 15px',
			fontSize: '16px',
			fontWeight: 400,
		},
	},
	submit: {
		background: '#1A055F',
		color: 'white',
		'&:hover': {
			background: '#000000',
		},
	},
	note: {
		fontWeight: 700,
		color: 'white',
		position: 'relative',
		top: '1rem',
		left: '1rem',
		maxWidth: '200px',
		textTransform: 'capitalize',
	},
};
