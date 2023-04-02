import { DELETE, GET, POST, PUT } from "@/models/constant"

const http = async (method: string, url: string, payload: any, options: any) => {
    const config = {
        method: method,
        body: JSON.stringify(payload)
    }
    const response = await fetch(url, config)
    const data = await response.json()
    
    if (response.status === 200 || response.ok) {
        return {
            success: true,
            data: data
        }
    }    
    return data.data

}

export const get = async (url: string, payload?: any, options?: any) => {
    return await http(GET, url ,payload, options)
}

export const post = async (url: string, payload?: any, options?: any) => {
    return await http(POST, url, payload, options)
}

export const put = async (url: string, payload?: any, options?: any) => {
    return await http(PUT, url ,payload, options)
}

export const deleteMethod = async (url: string, payload?: any, options?: any) => {
    return await http(DELETE, url ,payload, options)
}