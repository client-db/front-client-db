const Loader = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={217}
		height={217}
		preserveAspectRatio='xMidYMid'
		style={{
			margin: 'auto',
			display: 'block',
			shapeRendering: 'auto',
		}}
		viewBox='0 0 100 100'
		{...props}
	>
		<circle
			cx={31}
			cy={50}
			r={19}
		>
			<animate
				attributeName='cx'
				begin='-0.4132231404958678s'
				dur='0.8264462809917356s'
				keyTimes='0;0.5;1'
				repeatCount='indefinite'
				values='31;69;31'
			/>
		</circle>
		<circle
			cx={69}
			cy={50}
			r={19}
			fill='#fff'
		>
			<animate
				attributeName='cx'
				begin='0s'
				dur='0.8264462809917356s'
				keyTimes='0;0.5;1'
				repeatCount='indefinite'
				values='31;69;31'
			/>
		</circle>
		<circle
			cx={31}
			cy={50}
			r={19}
		>
			<animate
				attributeName='cx'
				begin='-0.4132231404958678s'
				dur='0.8264462809917356s'
				keyTimes='0;0.5;1'
				repeatCount='indefinite'
				values='31;69;31'
			/>
			<animate
				attributeName='fill-opacity'
				calcMode='discrete'
				dur='0.8264462809917356s'
				keyTimes='0;0.499;0.5;1'
				repeatCount='indefinite'
				values='0;0;1;1'
			/>
		</circle>
	</svg>
);
export default Loader;
