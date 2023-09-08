/*
 * @Author: J_in
 * @Date: 2023-09-08 19:25:53
 * @LastEditors: J_in
 * @LastEditTime: 2023-09-08 19:29:27
 * @FilePath: /vite_vue3_ts/src/api/login/login.ts
 */
import http from "@/service/http";
import * as T from './types'

const loginApi: T.ILoginApi = {
    login(params) {
        return http.post('/login', params)
    }
}

export default loginApi