import { inject, computed, ref, unref } from 'vue'
import * as Languages from '@chenwei02/locale'
import type { Language } from '@chenwei02/locale'

export const localeContextKey = 'localeContextKey'

export type TranslatorOption = Record<string, string | number>

const buildTranslator = (locale: any) => (path: string, option?: TranslatorOption) =>
  translate(path, option, unref(locale))
const translate = (path: string, option: undefined | TranslatorOption, locale: Language) => {
  // qy.datepicker.selectDate
  /*
    \s：用于匹配单个空格符，包括tab键和换行符；
    \S：用于匹配除单个空格符之外的所有字符；
    \d：用于匹配从0到9的数字；
    \w：用于匹配字母，数字或下划线字符；
    \W：用于匹配所有与\w不匹配的字符；
    . ：用于匹配除换行符之外的所有字符。
    */
  const keys: string[] = path.split('.')
  const str = keys.reduce((result, value) => {
    return result[value]
  }, locale as any)
  // 'hello world {type}'
  const result = (str as string).replace(/\{(\w+)\}/g, (_, key) => {
    // value: {type}, key: type
    return option?.[key] ?? key
  })
  return result
}

export const useLocale = () => {
  const localeConfig = inject(localeContextKey, ref())
  // 配置的locale
  const globalLocale = computed(() => localeConfig.value?.['locale'])
  // 配置的lang
  const globalLang = computed(() => localeConfig.value?.['lang'])

  const lang = computed(() => {
    return globalLang?.value || globalLocale?.value?.name || 'en'
  })
  const locale = computed(() => {
    return globalLocale?.value || Languages[lang.value]
  })
  return {
    lang,
    locale,
    t: buildTranslator(locale)
  }
}
