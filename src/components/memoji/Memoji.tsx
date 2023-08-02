import styled from 'styled-components';
interface IProps {
	srcLink?: string;
	bigMemoji?: boolean;
	left?: boolean;
	toTop?: boolean;
}

export default function Memoji(props: IProps) {
	const link = props.srcLink;
	const bigMemoji = props.bigMemoji;
	const left = props.left;
	const toTop = props.toTop;
	return (
		<MemojiField
			bigMemoji={bigMemoji}
			left={left}
			toTop={toTop}
		>
			<img src={link} />
		</MemojiField>
	);
}
const MemojiField = styled.div<IProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 150px;
	height: 150px;
	border-radius: 100%;
	background-color: #ffe5ed;
	left: ${(props) => (props.left ? '0' : 'auto')};
	right: ${(props) => (props.left ? 'auto' : '0')};

	img {
		margin: ${(props) => (props.bigMemoji ? '0 5px' : '0')};
		margin: ${(props) => (props.toTop ? '-10px 0 0 !important' : '0')};
		width: 150px;
		height: 150px;
	}
	user-select: none;
`;
