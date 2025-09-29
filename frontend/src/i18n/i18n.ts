// Removed i18next and react-i18next dependencies
// Keeping a dummy i18n implementation to maintain compatibility
import pt from './pt';

const dummyI18n = {
  // Placeholder implementation
  t: (key: string, options?: any) => {
    let result = key;
    result = (pt as any)[key] || key;
    if (options) {
    
      Object.entries(options).forEach(([k, v]) => {
        result = result.replace(new RegExp(`{{${k}}}`, 'g'), String(v));
      });

      return result;
    }
    return result;
  },
  // No-op change language function
  changeLanguage: () => Promise.resolve(),
  // No-op add resource bundle
  addResourceBundle: () => true,
};

export default dummyI18n;
