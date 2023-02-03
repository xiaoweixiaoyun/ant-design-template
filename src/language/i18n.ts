import { getLanguage } from '@/utils/language';
import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import messages from './index';

const i18n = createI18n({
  legacy: false,
  locale: getLanguage() || 'CN',
  messages
});

export default function(app: App) {
  app.use(i18n);
}
