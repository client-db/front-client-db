import { ChangeEvent, useState } from 'react';
import DropdownComponent from '../dropdown/Dropdown';
import { Main, Input, Btn, DatepickerContainer } from './inputsFieldStyles';
import { useApi } from '../../../../api';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import Datepicker from '../../../../components/datePicker/Datepicker';
import Loader from '../../../../common/components/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>
	toast.success('Ви успішно додали клієнта!', {
		position: 'bottom-left',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});

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
	const [loading, setLoading] = useState<boolean>(false);

	const explicitly = 'Наявно';
	const notAvailable = 'Немає';
	const handleSubmit = async () => {
		try {
			setLoading(true);
			const data = {
				connectionDate: connectionDate,
				objectNumber: objectNum,
				address: address,
				phoneNumber: phone.slice(2),
				subFee: subFee,
				docsAvailability: docsAvailability,
				contractSendDate: contractSendDate,
				contractSignDate: contractSignDate,
				manager: manager,
				recommendation: recomendation,
			};
			await useApi.uploadData(data);
		} catch (error) {
			console.error('Error occurred:', error);
		} finally {
			setAddress('');
			setConnectionDate('');
			setContractSignDate('');
			setContractSendDate('');
			setDocsAvailability('');
			setManager('');
			setObjectNum('');
			setPhone('');
			setRecomendation('');
			setSubFee('');
			setLoading(false);
			notify();
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
			<PhoneInput
				country={'ua'}
				placeholder='Номер телефону'
				disableDropdown
				inputClass={'phoneInput'}
				specialLabel=''
				value={phone}
				onChange={(phoneNum) => setPhone(phoneNum)}
			/>
			<DatepickerContainer>
				<Input
					disabled
					datepicker
					placeholder='Дата підключення'
					value={connectionDate}
				/>
				<Datepicker setData={setConnectionDate} />
			</DatepickerContainer>
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
			<DatepickerContainer>
				<Input
					disabled
					datepicker
					placeholder='Дата надсилання договору'
					value={contractSendDate}
				/>
				<Datepicker setData={setContractSendDate} />
			</DatepickerContainer>

			<DatepickerContainer>
				<Input
					disabled
					datepicker
					placeholder='Дата отримання договору'
					value={contractSignDate}
				/>
				<Datepicker setData={setContractSignDate} />
			</DatepickerContainer>

			<Btn
				onClick={handleSubmitWrapper}
				disabled={loading}
				loading={loading}
			>
				{loading && <Loader />}
				{!loading && 'Додати нового клієнта'}
			</Btn>
			<ToastContainer
				position='bottom-left'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={false}
				theme='light'
			/>
		</Main>
	);
};

export default InputsField;
