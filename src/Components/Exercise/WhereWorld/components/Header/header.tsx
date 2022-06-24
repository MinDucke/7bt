import './Header.modules.scss';
import { BsMoon } from "react-icons/bs"


function HeaderWW() {
    return ( 
<div className='header-ww'>
            <h1 className='title-ww'> Where in the world?</h1>
            <span className='dark-mode'>
            <BsMoon/>
                <div>Dark Mode</div>
            </span>
        </div>
     );
}

export default HeaderWW;