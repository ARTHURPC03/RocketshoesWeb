import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({ host: '10.0.2.2' })
    .use(reactotronRedux())
    .connect()

  tron.clear()

  console.tron = tron
}
