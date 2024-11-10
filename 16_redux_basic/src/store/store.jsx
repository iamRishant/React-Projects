import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './reducer/counterSlice'// kissy naam se import kro no issue bas sahi jgh se import kro


// yha par reducer ko import krke store me rakh lenge
export default configureStore({
  reducer: {
    counter:counterReducer,
  },
})