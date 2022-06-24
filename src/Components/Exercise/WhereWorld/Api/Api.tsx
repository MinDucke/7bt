import axios from "axios";

const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})
export const api = {
    getCountries:async () => { 
        let res = await http.get('/all')
        return res.data
    },
    getCountry: async (name: string) => {
        let res = await http.get(`/name/${name}`)
        return res.data
    },
    getCountryByCode: async (code: string) => {
        let response = await http.get(`/alpha?codes=${code}`)
        return response.data
    },
    // getBySearch: async (name) => {
    //     let res = await http.get(`/name/${searchValue}`)
    //     return res.data
    // },
}