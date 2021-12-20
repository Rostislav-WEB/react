import React from 'react'; 
import preloader from '../../../Accets/preloader.svg'

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt='Идет загрузка, подождите' />
        </div>
    )
    
}

export default Preloader;