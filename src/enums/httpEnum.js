/**
 * @description: 请求结果集
 */
export const ResultEnum = {
  DATA_SUCCESS: 0,
  SUCCESS: 200,
  SERVER_ERROR: 500,
  SERVER_FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 60000
}

/**
 * @description: 请求方法
 */
export const RequestHttpEnum = {
  GET: 'get',
  POST: 'post',
  PATCH: 'patch',
  PUT: 'put',
  DELETE: 'delete'
}

/**
 * @description: 请求间隔
 */
export const RequestHttpIntervalEnum = {
  // 秒
  SECOND: 'second',
  // 分
  MINUTE: 'minute',
  // 时
  HOUR: 'hour',
  // 天
  DAY: 'day'
}

/**
 * @description: 请求间隔名称
 */
export const SelectHttpTimeNameObj = {
  [RequestHttpIntervalEnum.SECOND]: '秒',
  [RequestHttpIntervalEnum.MINUTE]: '分',
  [RequestHttpIntervalEnum.HOUR]: '时',
  [RequestHttpIntervalEnum.DAY]: '天'
}

/**
 * @description: 请求头部类型
 */
export const RequestBodyEnum = {
  NONE: 'none',
  FORM_DATA: 'form-data',
  X_WWW_FORM_URLENCODED: 'x-www-form-urlencoded',
  JSON: 'json',
  XML: 'xml'
}

/**
 * @description: 请求头部类型数组
 */
export const RequestBodyEnumList = [
  RequestBodyEnum.NONE,
  RequestBodyEnum.FORM_DATA,
  RequestBodyEnum.X_WWW_FORM_URLENCODED,
  RequestBodyEnum.JSON,
  RequestBodyEnum.XML
]

/**
 * @description: 请求参数类型
 */
export const RequestParamsTypeEnum = {
  PARAMS: 'Params',
  BODY: 'Body',
  HEADER: 'Header'
}

/**
 * @description:  常用的contentTyp类型
 */
export const ContentTypeEnum = {
  // json
  JSON: 'application/json;charset=UTF-8',
  // text
  TEXT: 'text/plain;charset=UTF-8',
  // xml
  XML: 'application/xml;charset=UTF-8',
  // application/x-www-form-urlencoded 一般配合qs
  FORM_URLENCODED: 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  上传
  FORM_DATA: 'multipart/form-data;charset=UTF-8'
}
