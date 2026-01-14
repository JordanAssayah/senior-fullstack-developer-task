import { createStore, createLogger } from "vuex"
import auth from './modules/authentication'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
