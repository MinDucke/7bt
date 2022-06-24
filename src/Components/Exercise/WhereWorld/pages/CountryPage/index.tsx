import './CountryPage.modules.scss'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { CountryTS } from '../../Types/Country'
import { api } from '../../Api/Api'
import { Link } from 'react-router-dom'
import { OnlyCountry } from '../../components/OnlyCountry'
import {IoIosArrowRoundBack} from 'react-icons/io'

export const CountryPage = () => {
    const {name, code } = useParams()

    const[loading, setLoading] = useState(false)
    const[country, setCountry] = useState<CountryTS[]>([])

    useEffect(() => {
        if(name) {
            getCountry(name)
        }else if(code){
            getCountry(code)
        }
        
    },[name, code])

    const getCountry = async (param:string) => {
        setLoading(true)
        let country = name ? await api.getCountry(param) : await api.getCountryByCode(param)
        setCountry(country)
        // console.log(country);
        setLoading(false)
        
    }
    return (
        <div className='country-page'>
            <Link to='/world' className='back-btn'>
                <IoIosArrowRoundBack/>
                Back
                </Link>
            {
                loading && <div className='loading-country-page'>Loading</div>

            }
            {!loading && country.map((item) =>(
                    <OnlyCountry 
                    flags={item.flags.png}
                    name={item.name}
                    // nativeName={item.name.nativeName.common}
                    population={item.population}
                    region={item.region}
                    subregion={item.subregion}
                    capital={item.capital}
                    tld={item.tld[0]}
                    currencies ={item.currencies}
                    languages={item.languages}
                    borders={item.borders}  
                                    
                    />
                ))
            }
        </div>
    )
}