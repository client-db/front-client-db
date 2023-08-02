import HttpClient from '../http/http-client';
import {
	DeleteClientReqArgs,
	DeleteClientRes,
	SearchReqArgs,
	SearchRes,
	UpdateClientReqArgs,
	UpdateClientRes,
	UploadDataReqArgs,
	UploadDataRes,
} from './admin.types';

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

	public search = (body: SearchReqArgs) =>
		this.instance.get<SearchRes[]>('/search', {
			params: {
				searchType: body.searchType,
				searchValue: body.searchValue,
			},
		});

	public updateClient = (body: UpdateClientReqArgs) =>
		this.instance.post<UpdateClientRes>('/updateData', body);

	public deleteClient = (body: DeleteClientReqArgs) =>
		this.instance.post<DeleteClientRes>('/deleteClient', body);
}

export default Admin;
