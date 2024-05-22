import { base_api } from "~/boot/base_api";
import type { GenericServicesResponse } from "~/interfaces/GenericServicesResponse";

export async function getGenericServices<T>(url = '') : Promise<GenericServicesResponse<T>> {
    try {
        const token = localStorage.getItem('token');
        if(!token){
            return {
                status: 401,
                data: null
            }
        }
        const response = await fetch(base_api + '/' + url, {
            method: 'GET',
            headers:{
                "Authorization": "Token " + token
            }
        });
        if(response.status === 401){
            return {
                status: 401,
                data: null
            }
        }

        if(response.status !== 200){
            return {
                status: response.status,
                data: null
            }
        }

        const data = await response.json();
        return {
            status: response.status,
            data
        }
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}

export async function getGenericServicesById<T>(url:string) : Promise<GenericServicesResponse<T>> {
    try {
        const token = localStorage.getItem('token');
        if(!token){
            return {
                status: 401,
                data: null
            }
        }
        const response = await fetch(base_api + '/' + url, {
            method: 'GET',
            headers:{
                "Authorization": "Token " + token
            }
        });
        if(response.status === 401){
            return {
                status: 401,
                data: null
            }
        }

        if(response.status !== 200){
            return {
                status: response.status,
                data: null
            }
        }

        const data = await response.json();
        return {
            status: response.status,
            dataOnly: data
        }
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}

export async function postGenericServices<T>(url = '', body = {}) : Promise<GenericServicesResponse<T>> {
    try {
        const token = localStorage.getItem('token');
        if(!token){
            return {
                status: 401,
                data: null
            }
        }
        const response = await fetch(base_api + '/' + url, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(body)
        });
        if(response.status === 401){
            return {
                status: 401,
                data: null
            }
        }

        if(![201,200].includes(response.status)){
            return {
                status: response.status,
                data: null
            }
        }

        const data = await response.json();
        return {
            status: response.status,
            data,
            dataOnly: data
        }
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}

export async function patchGenericServices<T>(url = '', body = {}) : Promise<GenericServicesResponse<T>> {
    try {
        const token = localStorage.getItem('token');
        if(!token){
            return {
                status: 401,
                data: null
            }
        }
        const response = await fetch(base_api + '/' + url, {
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(body)
        });
        if(response.status === 401){
            return {
                status: 401,
                data: null
            }
        }

        if(response.status !== 200){
            return {
                status: response.status,
                data: null
            }
        }

        const data = await response.json();
        return {
            status: response.status,
            data,
            dataOnly: data
        }
    } catch (error) {
        return {
            status: 500,
            data: null
        }
    }
}