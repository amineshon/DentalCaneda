import 'react-redux';

import { RootState } from 'redux/store';

declare module 'react-redux' {
  export interface DefaultRootState extends RootState { }
}
