**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/core/request"](../modules/_src_core_request_.md) / Request

# Class: Request

## Hierarchy

* **Request**

  ↳ [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

## Index

### Constructors

* [constructor](_src_core_request_.request.md#constructor)

### Properties

* [request](_src_core_request_.request.md#request)

### Methods

* [get](_src_core_request_.request.md#get)
* [post](_src_core_request_.request.md#post)
* [setHeaders](_src_core_request_.request.md#setheaders)

## Constructors

### constructor

\+ **new Request**(`__namedParameters?`: { httpAgent: any ; httpsAgent: any ; proxy: undefined \| AxiosProxyConfig  }): [Request](_src_core_request_.request.md)

*Defined in [src/core/request.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L19)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { httpAgent: any ; httpsAgent: any ; proxy: undefined \| AxiosProxyConfig  } | {} |

**Returns:** [Request](_src_core_request_.request.md)

## Properties

### request

•  **request**: AxiosInstance

*Defined in [src/core/request.ts:19](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L19)*

## Methods

### get

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Defined in [src/core/request.ts:35](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L35)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`reqConfig?` | ConfigNonFullResponse |

**Returns:** Promise<T\>

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigFullResponse): Promise<AxiosResponse<T\>\>

*Defined in [src/core/request.ts:36](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L36)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`reqConfig?` | ConfigFullResponse |

**Returns:** Promise<AxiosResponse<T\>\>

___

### post

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Defined in [src/core/request.ts:43](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L43)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`data` | string \| Record<string, unknown\> |
`reqConfig?` | ConfigNonFullResponse |

**Returns:** Promise<T\>

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigFullResponse): Promise<AxiosResponse<T\>\>

*Defined in [src/core/request.ts:44](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L44)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`data` | string \| Record<string, unknown\> |
`reqConfig?` | ConfigFullResponse |

**Returns:** Promise<AxiosResponse<T\>\>

___

### setHeaders

▸ **setHeaders**(`headers`: Record<string, string\>): void

*Defined in [src/core/request.ts:31](https://github.com/eilonmore/linkedin-private-api/blob/a05191c/src/core/request.ts#L31)*

#### Parameters:

Name | Type |
------ | ------ |
`headers` | Record<string, string\> |

**Returns:** void
