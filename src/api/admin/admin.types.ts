export type UploadDataReqArgs = {
	connectionDate: string;
	objectNumber: string;
	address: string;
	phoneNumber: string;
	subFee: string;
	docsAvailability: string;
	contractSendDate: string;
	contractSignDate: string;
	manager: string;
	recommendation: string;
};
export type UploadDataRes = {
	status: 200;
	message: string;
};

export type SearchReqArgs = {
	searchType: string;
	searchValue: string;
};
export type SearchRes = {
	address: string;
	connectiondate: string;
	contractsenddate: string;
	contractsigndate: string;
	docsavailability: string;
	manager: string;
	objectnumber: string;
	phonenumber: string;
	position: number;
	recommendation: string;
	subfee: string;
};

export type DeleteClientReqArgs = {
	phoneNumber: string;
};
export type DeleteClientRes = {
	status: 200;
	message: string;
};

export type UpdateClientReqArgs = {
	position: number;
	connectionDate: string;
	objectNumber: string;
	address: string;
	phoneNumber: string;
	subFee: string;
	docsAvailability: string;
	contractSendDate: string;
	contractSignDate: string;
	manager: string;
	recommendation: string;
};
export type UpdateClientRes = {
	status: 200;
	message: string;
};
