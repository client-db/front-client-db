import { useEffect, useRef, useState } from 'react';
import { useApi } from '../../api';
import { SearchRes } from '../../api/admin/admin.types';
import ThreeDots from '../../common/components/SeeMore';
import { Card, Delete, DeleteField, PropField, SeeMore } from './resultCardStyles';

interface IProps {
	isOpen: boolean;
	onSeeMoreClick: () => void;
	handleDeleteItem: () => void;
	client: SearchRes;
	deleteClient?: boolean;
}

export default function ResultCard(props: IProps) {
	const [deleteContainer, setDeleteContainer] = useState<boolean>(false);
	const client = props.client;
	const isOpen = props.isOpen;
	const onSeeMoreClick = props.onSeeMoreClick;
	const handleDeleteItem = props.handleDeleteItem;
	const deleteClient = props.deleteClient;

	const handleDelete = async () => {
		try {
			const data = {
				phoneNumber: client.phonenumber,
			};
			await useApi.deleteClient(data);
		} finally {
			handleDeleteItem();
		}
	};
	const useOutsideClick = (callback: () => void) => {
		const ref = useRef<HTMLDivElement | null>(null);

		useEffect(() => {
			const handleClick = (event: MouseEvent) => {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					callback();
				}
			};

			document.addEventListener('click', handleClick);

			return () => {
				document.removeEventListener('click', handleClick);
			};
		}, [ref, callback]);

		return ref;
	};
	const handleClickOutside = () => {
		setDeleteContainer(false);
	};
	const handleDeleteFieldClick = (event: React.MouseEvent) => {
		event.stopPropagation();
		handleDelete();
	};
	const ref = useOutsideClick(handleClickOutside);

	return (
		<Card seeMore={isOpen}>
			<PropField>
				<span>Позиція:</span>
				<p>{client.position}</p>
				{deleteClient && (
					<>
						<Delete
							onClick={() => setDeleteContainer(!deleteContainer)}
							ref={ref}
						>
							<ThreeDots />
						</Delete>
						{deleteContainer && (
							<DeleteField onClick={handleDeleteFieldClick}>Видалити</DeleteField>
						)}
					</>
				)}
			</PropField>
			<PropField>
				<span>Менеджер:</span>
				<p>{client.manager}</p>
			</PropField>
			<PropField>
				<span>Рекомендація:</span>
				<p>{client.recommendation}</p>
			</PropField>
			<SeeMore
				seeMore={!isOpen}
				onClick={onSeeMoreClick}
			>
				<ThreeDots />
			</SeeMore>
			{isOpen && (
				<>
					<PropField>
						<span>Адреса:</span>
						<p>{client.address}</p>
					</PropField>
					<PropField>
						<span>Номер телефону:</span>
						<p>+38{client.phonenumber}</p>
					</PropField>
					<PropField>
						<span>Номер об&#39;єкту:</span>
						<p>{client.objectnumber}</p>
					</PropField>
					<PropField>
						<span>Абонплата:</span>
						<p>{client.subfee} грн/міс</p>
					</PropField>
					<PropField>
						<span>Наявність документів:</span>
						<p>{client.docsavailability}</p>
					</PropField>
					<PropField>
						<span>Дата підключення:</span>
						<p>{client.connectiondate}</p>
					</PropField>
					<PropField>
						<span>Дата надсилання договору:</span>
						<p>{client.contractsenddate}</p>
					</PropField>
					<PropField>
						<span>Дата отримання договору:</span>
						<p>{client.contractsigndate}</p>
					</PropField>
				</>
			)}
		</Card>
	);
}
