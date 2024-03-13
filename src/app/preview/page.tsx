import { Button } from '@/components/button/button.component'
import { PiArrowUpRightLight } from "react-icons/pi";



export default function Page() {
  return (
    <>
      <Button size="medium" variant="rounded"  color='black' font='narrow'>
        <div className='flex items-center'>
          <p>Ad Property</p>
          <PiArrowUpRightLight className='arrowUpRight'/>   
        </div>
      </Button>
        
      <Button size="small-2" variant="solid" color='white' font='narrow'>
        <div className='flex items-center'>
          <p>For Sale</p>
        </div>
      </Button>
          
      <Button size="medium" variant="solid-rounded" color='white' font='broad'>
        <div className='flex items-center'>
          <p>Contact Us</p>
          <PiArrowUpRightLight className='arrowUpRight'/>   
        </div>
      </Button>   

      <Button size="small" variant="solid" color='black' font='narrow'>
        <div className='flex items-center'>
          <p>For Rent</p>
        </div>
      </Button> 

      <Button size="large" variant="solid" color='salmon' font='broad'>
        <div className='flex items-center'>
          <p>See All Properties</p>  
          <PiArrowUpRightLight className='arrowUpRight'/>   
        </div> 
      </Button>
    </>
  )
}
