import request from '@/utils/request';
import service from '@/utils/request';
import { STATUS, Response } from '@/api/interface';
import { ElMessage } from 'element-plus';
import { adminRoles, adminAuthBtnList, adminPhoto, testRoles, testAuthBtnList, testPhoto } from '@/api/login/mock/role';
import { Session } from '@/utils/storage';
import { resetRoute } from '@/router';

// 登录接口参数
export interface LoginParams {
	username: string;
	password: string;
	captcha: string;
}

// 用户权限接口参数
export interface UserPermission {
	username: string;
	photo: string;
	time: Number;
	roles: Array<string>;
	authBtnList: Array<string>;
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
export function signIn({ username, password, captcha }: LoginParams) {
	return new Promise<UserPermission | string>(async (resolve, reject) => {
		// 不同用户模拟不同的用户权限
		let isAdmin: boolean = username === 'admin';
		let defaultRoles: Array<string> = isAdmin ? adminRoles : testRoles;
		let defaultAuthBtnList: Array<string> = isAdmin ? adminAuthBtnList : testAuthBtnList;
		let defaultPhoto: string = isAdmin ? adminPhoto : testPhoto;
		// 用户信息模拟数据
		const userInfos: UserPermission = {
			username: username,
			photo: defaultPhoto,
			time: new Date().getTime(),
			roles: defaultRoles,
			authBtnList: defaultAuthBtnList,
		};
		// 存储 用户信息、token 到浏览器缓存
		Session.set('userInfo', userInfos);
		// const { errorCode, resultDesc, data } = await service.post('/cstmr-manager/user/login', {
		// 	username,
		// 	password,
		// 	captcha,
		// }) as Response;
		// if (errorCode !== STATUS.SUCCESS) {
		// 	ElMessage.error(resultDesc || '登录失败');
		// 	reject(resultDesc);
		// }
		resolve(userInfos);
	});

}

/**
 * 用户退出登录
 */
// export function signOut(params: object) {
// 	return request({
// 		url: '/user/signOut',
// 		method: 'post',
// 		data: params,
// 	});
// }
export function signOut() {
	return new Promise<void>((resolve, reject) => {
		Session.clear(); // 清除缓存/token等
		resetRoute(); // 删除/重置路由
		resolve()
	})
}
