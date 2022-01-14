import request from '@/utils/request';
import service from '@/utils/request';
import { STATUS, Response } from '@/api/interface';
import { ElMessage } from 'element-plus';

// 登录接口参数
export interface LoginParams {
	username: string;
	password: string;
	captcha: string;
}

/**
 * 用户登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
// export function signIn(params: object) {
// 	return request({
// 		url: '/user/signIn',
// 		method: 'post',
// 		data: params,
// 	});
// }
export function signIn (params: LoginParams) {
	return new Promise<void>(async (resolve, reject) => {
		const { errorCode, resultDesc, data } = await service.post('/cstmr-manager/user/login', params) as Response;
		if (errorCode !== STATUS.SUCCESS) {
			ElMessage.error(resultDesc || "登录失败");
			reject(resultDesc)
		}
		resolve(data)
	})

}

/**
 * 用户退出登录
 * @param params 要传的参数值
 * @returns 返回接口数据
 */
export function signOut(params: object) {
	return request({
		url: '/user/signOut',
		method: 'post',
		data: params,
	});
}
