import { ChangeEvent, useState } from 'react';
import DropdownComponent from '../dropdown/Dropdown';
import { Main, Input, Btn } from './inputsFieldStyles';
import { useApi } from '../../../../api';
import axios, { AxiosResponse } from 'axios';

const InputsField = () => {
	const [manager, setManager] = useState<string>('');
	const [recomendation, setRecomendation] = useState<string>('');
	const [address, setAddress] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const [connectionDate, setConnectionDate] = useState<string>('');
	const [objectNum, setObjectNum] = useState<string>('');
	const [subFee, setSubFee] = useState<string>('');
	const [contractSendDate, setContractSendDate] = useState<string>('');
	const [contractSignDate, setContractSignDate] = useState<string>('');
	const [docsAvailability, setDocsAvailability] = useState<string>('');

	const explicitly = 'Наявно';
	const notAvailable = 'Немає';

	const handleSubmit = async () => {
		try {
			const data = {
				connectionDate: connectionDate,
				objectNumber: objectNum,
				address: address,
				phoneNumber: phone,
				subFee: subFee,
				docsAvailability: docsAvailability,
				contractSendDate: contractSendDate,
				contractSignDate: contractSignDate,
				manager: manager,
				recommendation: recomendation,
			};
			const res = await useApi.uploadData(data);
		} catch (error) {
			console.error('Error occurred:', error);
		}
	};

	const handleSubmitWrapper = () => {
		if (
			!manager ||
			!recomendation ||
			!address ||
			!phone ||
			!connectionDate ||
			!objectNum ||
			!subFee ||
			!contractSendDate ||
			!contractSignDate
		) {
			return alert('all fiels required');
		} else {
			handleSubmit().catch((error) => {
				console.error('Error occurred:', error);
			});
		}
	};

	return (
		<Main>
			<Input
				placeholder='Менеджер'
				value={manager}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setManager(e.target.value)}
			/>
			<Input
				placeholder='Рекомендація'
				value={recomendation}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setRecomendation(e.target.value)}
			/>
			<Input
				placeholder='Адреса'
				value={address}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
			/>
			<Input
				placeholder='Номер телефону'
				value={phone}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
			/>
			<Input
				placeholder='Дата підключення'
				value={connectionDate}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setConnectionDate(e.target.value)}
			/>
			<Input
				placeholder='Номер об&#39;єкту'
				value={objectNum}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setObjectNum(e.target.value)}
			/>
			<Input
				placeholder='Абонплата'
				value={subFee}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setSubFee(e.target.value)}
			/>
			<DropdownComponent
				explicitly={explicitly}
				notAvailable={notAvailable}
				setDocsAvailability={setDocsAvailability}
			/>
			<Input
				placeholder='Дата надсилання договору'
				value={contractSendDate}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setContractSendDate(e.target.value)}
			/>
			<Input
				placeholder='Дата отримання договору'
				value={contractSignDate}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setContractSignDate(e.target.value)}
			/>
			<Btn onClick={handleSubmitWrapper}>Додати нового клієнта</Btn>
		</Main>
	);
};

export default InputsField;
