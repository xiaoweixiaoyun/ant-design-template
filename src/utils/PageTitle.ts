import language from '../language/index';
import store from '../store';
import { getLanguage } from './language';

const cn: any = language.CN;
const us: any = language.US;
export default function getPageTitle(key: any) {
  if (key) {
    if (getLanguage() === 'CN') {
      return cn['menu'][key] + '-' + store.state.app.name;
    } else if (getLanguage() === 'US') {
      return us['menu'][key] + '-' + store.state.app.name;
    }
  }
  return store.state.app.name;
}
