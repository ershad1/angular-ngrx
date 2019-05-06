import {IConfig} from '../../model/iconfig';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
