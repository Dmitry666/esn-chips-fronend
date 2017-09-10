'use strict'

import ajax from 'ajax-request';

export default class Service {

	static request(params) {

		return new Promise((resolve, reject) => {
			ajax({
				url: 'http://localhost:5656' + params.url,
				method: params.method,
				data: params.data,
				withCredentials: true
			}, 
			(err, res, body) => {

				if (res.statusCode == 200) {
					resolve(body);
				} else {
					reject(new Error("Network Error"));
				}
			});
		});
	}
}