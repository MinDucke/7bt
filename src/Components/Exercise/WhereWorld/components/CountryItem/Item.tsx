import './Item.modules.scss'
import  {CountryItemType} from '../../Types/ItemType'
import { Link } from 'react-router-dom';


function CountryItem({name, capital, population, region, flag}:CountryItemType) {
    
    return (
        <Link to={`/world/${name.common}`}>
        <div className='in4' >
            <img src={flag} alt ={ `Flag of : ${name.common}`} style={{borderRadius:"6px",}}/>
        <div className='data-country'> 
             <div className='name-country'>{name.common}</div>
            <p className='population'>Population: {population}</p>
            <p className='area'>Region: {region}</p>
            <p className='capital'>Capital: {capital}</p>

        </div>
        </div>
        </Link>
      );
}

export default CountryItem;
