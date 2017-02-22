import {ApiError} from './apierror';

export class Response<T> {

    constructor(public body: T,
                public error: ApiError) {
    }

}