import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"

// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': '2f9b54d82bmshd7ff625ee873b9bp1b525cjsn1120fed610c1'
// }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '2f9b54d82bmshd7ff625ee873b9bp1b525cjsn1120fed610c1'
        }
    })
    return data
}