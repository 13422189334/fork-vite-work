import { AxiosResponse } from "axios";

// 都是字符串
export enum STATUS {
	// 成功
	SUCCESS = '0',
	// 无数据
	NONE_DATA = '1',
	// token过期需要重登录
	TOKENE_XPIRED = '100',
	// 系统异常
	SYSTEM_ERROR = '-1',
	// 验证码不对
	ERROR_CODE = '111',
	// 账号密码错误
	ERROR_ACCOUNT = '114',
	// 账号重复
	REPEAT_ACCOUNT = '109',
	// 手机号重复
	REPEAT_PHONE = '107',
}
interface BaseResponse {
	errorCode: STATUS; // 编码
	resultDesc: string; // 描述
	success: boolean; // 无用的状态
}

export interface Response extends BaseResponse {
	data?: any;
}

// export interface TableResponse<T = any> extends BaseResponse {
//   data: {
//     total: number; // 总页数
//   } & Record<string, T[]>; // 数据
// }

export interface TableResponse<T = any> extends BaseResponse {
	data: T[] | {
		[K: string]: T[]
	};
}

export interface ArrayResponse<T = any> extends BaseResponse {
	data: T[]
}

export type ResponseBlob = AxiosResponse<Blob>

export interface TableRequest<T> {
	(params?: any): Promise<TableResponse<T>>
}

export interface DownRequest {
	(...rest: any[]): Promise<ResponseBlob>
}


type baseQuery = Record<'pageSize', number>;
export type pageNoQuery = baseQuery & Record<'pageNo', number>;
export type currentPageQuery = baseQuery & Record<'currentPage', number>;