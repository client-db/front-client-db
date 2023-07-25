import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

abstract class HttpClient {
	protected readonly instance: AxiosInstance;

	public constructor(baseURL: string | undefined, contentType = 'application/json') {
		this.instance = axios.create({
			baseURL,
			headers: {
				'Content-Type': contentType,
			},
		});

		this.initializeResponseInterceptor();
	}

	private initializeResponseInterceptor = () => {
		this.instance.interceptors.response.use(this.handleSuccessResponse, this.handleResponseError);
	};

	private handleSuccessResponse = (response: AxiosResponse) => response;

	private handleResponseError = async (error: AxiosError | Error) => {
		return Promise.reject(error);
	};
}

export default HttpClient;
