import { Main, Input, Btn } from './inputsFieldStyles';

const InputsField = () => {
	return (
		<Main>
			<Input placeholder='Manager' />
			<Input placeholder='Recomendation' />
			<Input placeholder='Address' />
			<Input placeholder='Phone number' />
			<Input placeholder='Connection date' />
			<Input placeholder='Object number' />
			<Input placeholder='Subscription fee' />
			<Input placeholder='Docs availability' />
			<Input placeholder='Contract send date' />
			<Input placeholder='Contract sign date' />
			<Btn>Add new client</Btn>
		</Main>
	);
};

export default InputsField;
