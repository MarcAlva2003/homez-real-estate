import './filterSearchBar.style.css'
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoOptionsOutline } from "react-icons/io5";
import { PiHouseSimple } from "react-icons/pi";
import { InputSearch } from '../inputBarSearch/inputSearch';


export const Search = () => {
    return (
        <div className='searchTable'>
            <div className='flex items-center optionButtons'>
                <button className='optionText'><b>All</b></button>
                <button className='optionText'><b>For Sale</b></button>
                <button className='optionText'><b>For Rent</b></button>
            </div>
            <div className='flex items-center searchMenu'>
                <div>
                    <>
                        <InputSearch></InputSearch>
                    </>
                </div>
                <div>
                    <button className='flex items-center icon1'>
                        <div className='icon2'><IoOptionsOutline /></div>
                        <div className='iconText'>Advanced</div>
                    </button>
                </div>
                <div>
                    <button className='magnifyingGlass'><HiMagnifyingGlass /></button>
                </div>
            </div>
        </div>
    )
}