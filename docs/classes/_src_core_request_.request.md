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
* [getHeaders](_src_core_request_.request.md#getheaders)
* [post](_src_core_request_.request.md#post)
* [setHeaders](_src_core_request_.request.md#setheaders)
* [updateHeaders](_src_core_request_.request.md#updateheaders)

## Constructors

### constructor

\+ **new Request**(`__namedParameters?`: { proxy: undefined \| AxiosProxyConfig  }): [Request](_src_core_request_.request.md)

*Defined in [src/core/request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L18)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { proxy: undefined \| AxiosProxyConfig  } | {} |

**Returns:** [Request](_src_core_request_.request.md)

## Properties

### request

•  **request**: AxiosInstance

*Defined in [src/core/request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L18)*

## Methods

### get

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Defined in [src/core/request.ts:48](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L48)*

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

*Defined in [src/core/request.ts:49](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L49)*

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

### getHeaders

▸ **getHeaders**(): any

*Defined in [src/core/request.ts:44](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L44)*

**Returns:** any

___

### post

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Defined in [src/core/request.ts:56](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L56)*

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

*Defined in [src/core/request.ts:57](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L57)*

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

*Defined in [src/core/request.ts:36](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L36)*

#### Parameters:

Name | Type |
------ | ------ |
`headers` | Record<string, string\> |

**Returns:** void

___

### updateHeaders

▸ **updateHeaders**(`headers`: Record<string, string\>): void

*Defined in [src/core/request.ts:40](https://github.com/cosiall/linkedin-private-api/blob/f0f3775/src/core/request.ts#L40)*

#### Parameters:

Name | Type |
------ | ------ |
`headers` | Record<string, string\> |

**Returns:** void
