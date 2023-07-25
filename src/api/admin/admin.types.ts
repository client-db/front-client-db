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
