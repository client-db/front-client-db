import HttpClient from '../http/http-client';
import { UploadDataReqArgs, UploadDataRes } from './admin.types';

class Admin extends HttpClient {
	private static instanceCached: Admin;

	private constructor() {
		super('https://client-db.onrender.com');
	}

	static getInstance = () => {
		if (!Admin.instanceCached) {
			Admin.instanceCached = new Admin();
		}

		return Admin.instanceCached;
	};

	public uploadData = (body: UploadDataReqArgs) =>
		this.instance.post<UploadDataRes>('/uploadData', body);
}

export default Admin;
