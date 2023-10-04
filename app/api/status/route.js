import axios from "axios"
import { STATUS_BASE_URL } from "constants/constants";

export const POST = async(request)=> {    
    const {url} = await request.json()
    
    try {
    const data = await axios.get(STATUS_BASE_URL + url)
    return new Response(JSON.stringify(data.data)) 
} 
    
    catch (error) {
        const data = error.response.data
        return Response.json(data)
    }
}