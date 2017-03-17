import { enabledLanguages, localizationData } from './setup';
import { SWITCH_LANGUAGE } from './IntlActions';

const initLocale = global.navigator && global.navigator.language || 'en';

const initialState = {
  locale: get_language(initLocale),
  enabledLanguages,
  ...(localizationData[get_language(initLocale)] || {}),
};

function get_language(locale)
{
    const dash_index = locale.indexOf('-')
    if (dash_index >= 0)
    {
        return locale.substring(0, dash_index)
    }
    return locale
}

const IntlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE: {
      const { type, ...actionWithoutType } = action; // eslint-disable-line
      return { ...state, ...actionWithoutType };
    }
    default:
      return state;
  }
};

export default IntlReducer;
