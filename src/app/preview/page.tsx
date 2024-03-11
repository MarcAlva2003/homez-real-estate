import { Button } from '@/components/button/button.component'
import { FaRegCircleUser } from "react-icons/fa6";

export default function Page() {
  return (
    <>
      <Button size="small" variant="outlined">
        <div className='flex items-center'>
          <FaRegCircleUser className='mr-2 text-common-white'/>
          <p>Button</p>
        </div>
      </Button>
      <Button size="small" variant="primary">
        <p>Button</p>
      </Button>
      <Button size="small" variant="secondary">
        <p>Button</p>
      </Button>
      <Button size="small" variant="outlined">
        <p>Button</p>
      </Button>
      <Button size="small" variant="outlined">
        <p>Button</p>
      </Button>
      <Button size="small" variant="outlined">
        <p>Button</p>
      </Button>
    </>
  )
}
