import data from './data.json'
import { HeartIcon } from '@/assets/icons'

function TestComponent() {
  return (
    <p>
      Hello I am JSON
      {JSON.stringify(data)}
      <HeartIcon width='100' />
    </p>
  )
}

export default TestComponent
