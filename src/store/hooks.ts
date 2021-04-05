import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppRootStateT, AppDispatchT } from "./store";

// * Use throughout your app instead of plain `useDispatch` and `useSelector`
// * https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppDispatch = () => useDispatch<AppDispatchT>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateT> = useSelector;
