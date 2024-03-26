import './inputSearch.style.css'
import { PiHouseSimple } from "react-icons/pi";

export const InputSearch = () => {
    return (
        <div>
            <form className='formSearch flex items-center'>
                <><PiHouseSimple className='inputIcon'/></>
                <input
                className='inputSearch'
                type="text"
                name='search'
                placeholder='Enter an address, neighborhood, city or ZIP Code'
                />
            </form>
        </div>
    )
}