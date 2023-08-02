import { ChangeEvent, useState } from 'react';
import DropdownComponent from '../../home/components/dropdown/Dropdown';
import { Main, Input, Btn, DatepickerContainer } from './inputsFieldStyles';
import { useApi } from '../../../api';
import { SearchRes } from '../../../api/admin/admin.types';
import Datepicker from '../../../components/datePicker/Datepicker';
import Loader from '../../../common/components/Loader';
import PhoneInput from 'react-phone-input-2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IProp {
	client: SearchRes;
	setSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
}
const notify = () =>
	toast.success('Ви успішно оновили дані!', {
		position: 'bottom-left',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: 'light',
	});
const InputsField = (props: IProp) => {
	const client = props.client;
	const setSuccess = props.setSuccess;
	const [manager, setManager] = useState<string>(client.manager);
	const [recomendation, setRecomendation] = useState<string>(client.recommendation);
	const [address, setAddress] = useState<string>(client.address);
	const [phone, setPhone] = useState<string>(client.phonenumber);
	const [connectionDate, setConnectionDate] = useState<string>(client.connectiondate);
	const [objectNum, setObjectNum] = useState<string>(client.objectnumber);
	const [subFee, setSubFee] = useState<string>(client.subfee);
	const [contractSendDate, setContractSendDate] = useState<string>(client.contractsenddate);
	const [contractSignDate, setContractSignDate] = useState<string>(client.contractsigndate);
	const [docsAvailability, setDocsAvailability] = useState<string>(client.docsavailability);
	const position = client.position;
	const [loading, setLoading] = useState<boolean>(false);

	const explicitly = 'Наявно';
	const notAvailable = 'Немає';
	const handleSubmit = async () => {
		try {
			setLoading(true);
			const data = {
				position: position,
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
			if (setSuccess) setSuccess(false);
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
				value={`+38${phone}`}
				country={'ua'}
				placeholder='Номер телефону'
				disableDropdown
				inputClass={'phoneInput'}
				specialLabel=''
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
				docsAvailability={docsAvailability}
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
				{!loading && 'Оновити дані клієнта'}
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
