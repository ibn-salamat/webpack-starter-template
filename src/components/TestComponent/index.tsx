import data from './data.json'
import { HeartIcon } from '@/assets/icons'
import Bg from '@/assets/images/bg_1.jpeg'

function TestComponent() {
  return (
    <p>
      Hello I am JSON
      {JSON.stringify(data)}
      <HeartIcon width='100' />
      <br />
      And this is image
      <img src={Bg} alt='bg' />
    </p>
  )
}

export default TestComponent
