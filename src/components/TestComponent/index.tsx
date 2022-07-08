import data from './data.json'
import { HeartIcon } from '@/assets/icons'
import Bg from '@/assets/images/bg_1.jpeg'

import styles from './styles.module.sass'

function TestComponent() {
  return (
    <p className={styles.test}>
      Hello I am JSON
      {JSON.stringify(data)}
      <HeartIcon width='100' />
      <br />
      And this is image
      <img className={styles.bg} src={Bg} alt='bg' />
    </p>
  )
}

export default TestComponent
