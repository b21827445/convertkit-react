import ClareInline from './templates/clare-inline'
import MillsInline from './templates/mills-inline'
import RainerInline from './templates/rainer-inline'
import Minimal from './templates/minimal'

const options = {
  settings: {
    after_subscribe: {
      action: 'message',
      success_message: 'Success! Now check your email to confirm your subscription.',
      redirect_url: ''
    },
    analytics: {
      google: null,
      facebook: null,
      segment: null,
      pinterest: null
    },
    modal: {
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    powered_by: {
      show: true,
      url: 'https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form'
    },
    recaptcha: {
      enabled: false
    },
    return_visitor: {
      action: 'show',
      custom_content: ''
    },
    slide_in: {
      display_in: 'bottom_right',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    },
    sticky_bar: {
      display_in: 'top',
      trigger: 'timer',
      scroll_percentage: null,
      timer: 5,
      devices: 'all',
      show_once_every: 15
    }
  },
  uid: '',
  version: '5'
}

const renderTemplate = template => {
  const allTemplates = {
    clare: ClareInline,
    mills: MillsInline,
    rainer: RainerInline,
    minimal: Minimal,
  }

  if (!allTemplates.hasOwnProperty(template)) {
    const errorMessage = `The chosen template "${template}" is not yet supported`
    throw new ReferenceError(errorMessage)
  }

  return allTemplates[template]
}

function useTemplate(template) {
  return {
    options,
    Template: renderTemplate(template)
  }
}

export default useTemplate;