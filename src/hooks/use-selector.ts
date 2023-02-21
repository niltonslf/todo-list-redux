import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { store } from '../store'

type GetStateType = typeof store.getState
type RootState = ReturnType<GetStateType>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
