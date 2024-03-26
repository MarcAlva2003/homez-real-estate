import './style.front.css'
import { Search } from "@/components/filterSearchBar/filterSearchBar.component";

export default function Start() {
    return (
      <div className=''>
        <div className='flex items-center align color overtext'><p>THE BEST WAY TO</p></div>
        <div className='flex items-center align color title'><h1><b>Find Your Dream Home</b></h1></div>
        <div className='flex items-center align color bottomText '><p>We've more than 745,000 apartaments, place & plto.</p></div>
        <div className='flex items-center align searchComponent'>
          <>
            <Search></Search>
          </>
        </div>
      </div>
    )
  }