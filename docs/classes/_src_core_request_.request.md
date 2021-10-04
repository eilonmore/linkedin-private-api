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

\+ **new Request**(`proxy?`: AxiosProxyConfig): [Request](_src_core_request_.request.md)

*Defined in [src/core/request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L18)*

#### Parameters:

Name | Type |
------ | ------ |
`proxy?` | AxiosProxyConfig |

**Returns:** [Request](_src_core_request_.request.md)

## Properties

### request

•  **request**: AxiosInstance

*Defined in [src/core/request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L18)*

## Methods

### get

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Defined in [src/core/request.ts:32](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L32)*

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

*Defined in [src/core/request.ts:33](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L33)*

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

*Defined in [src/core/request.ts:40](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L40)*

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

*Defined in [src/core/request.ts:41](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L41)*

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

*Defined in [src/core/request.ts:28](https://github.com/cosiall/linkedin-private-api/blob/156bcd3/src/core/request.ts#L28)*

#### Parameters:

Name | Type |
------ | ------ |
`headers` | Record<string, string\> |

**Returns:** void
