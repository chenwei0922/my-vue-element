import { isObject, isArray } from '@vue/shared'

export { isArray, isObject, isString } from '@vue/shared'

export const isNumber = (val: any): val is number => typeof val === 'number'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isUndefined = (val: any): val is undefined => val === undefined || val === null

export const isEmpty = (val: unknown) =>
  (!val && val !== 0) || (isArray(val) && val.length === 0) || (isObject(val) && !Object.keys(val).length)
