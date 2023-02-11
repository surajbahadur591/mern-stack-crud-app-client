import axios from "axios";

export const addUserService = async (data) => {
    // paste backend url
    const URL = 'http://localhost:8000'

    try {

        return await axios.post(`${URL}/adduser`, data )

    } catch(error) {
        console.log('Error while calling addUser API', error)
    }

}