**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/core/linkedin-request"](../modules/_src_core_linkedin_request_.md) / LinkedInRequest

# Class: LinkedInRequest

## Hierarchy

* [Request](_src_core_request_.request.md)

  ↳ **LinkedInRequest**

## Index

### Constructors

* [constructor](_src_core_linkedin_request_.linkedinrequest.md#constructor)

### Properties

* [auth](_src_core_linkedin_request_.linkedinrequest.md#auth)
* [conversation](_src_core_linkedin_request_.linkedinrequest.md#conversation)
* [invitation](_src_core_linkedin_request_.linkedinrequest.md#invitation)
* [message](_src_core_linkedin_request_.linkedinrequest.md#message)
* [profile](_src_core_linkedin_request_.linkedinrequest.md#profile)
* [request](_src_core_linkedin_request_.linkedinrequest.md#request)
* [salesNavigatorConnection](_src_core_linkedin_request_.linkedinrequest.md#salesnavigatorconnection)
* [salesNavigatorMessage](_src_core_linkedin_request_.linkedinrequest.md#salesnavigatormessage)
* [salesNavigatorProfile](_src_core_linkedin_request_.linkedinrequest.md#salesnavigatorprofile)
* [salesNavigatorTypeahead](_src_core_linkedin_request_.linkedinrequest.md#salesnavigatortypeahead)
* [search](_src_core_linkedin_request_.linkedinrequest.md#search)

### Methods

* [get](_src_core_linkedin_request_.linkedinrequest.md#get)
* [post](_src_core_linkedin_request_.linkedinrequest.md#post)
* [setHeaders](_src_core_linkedin_request_.linkedinrequest.md#setheaders)

## Constructors

### constructor

\+ **new LinkedInRequest**(): [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

*Inherited from [Request](_src_core_request_.request.md).[constructor](_src_core_request_.request.md#constructor)*

*Defined in [src/core/request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L18)*

**Returns:** [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

\+ **new LinkedInRequest**(`proxy`: AxiosProxyConfig): [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

*Inherited from [Request](_src_core_request_.request.md).[constructor](_src_core_request_.request.md#constructor)*

*Defined in [src/core/request.ts:20](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`proxy` | AxiosProxyConfig |

**Returns:** [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

## Properties

### auth

•  **auth**: AuthRequest = new AuthRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:24](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L24)*

___

### conversation

•  **conversation**: ConversationRequest = new ConversationRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:14](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L14)*

___

### invitation

•  **invitation**: InvitationRequest = new InvitationRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:16](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L16)*

___

### message

•  **message**: MessageRequest = new MessageRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L18)*

___

### profile

•  **profile**: ProfileRequest = new ProfileRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:20](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L20)*

___

### request

•  **request**: AxiosInstance

*Inherited from [Request](_src_core_request_.request.md).[request](_src_core_request_.request.md#request)*

*Defined in [src/core/request.ts:18](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L18)*

___

### salesNavigatorConnection

•  **salesNavigatorConnection**: SalesNavigatorConnectionRequest = new SalesNavigatorConnectionRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:32](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L32)*

___

### salesNavigatorMessage

•  **salesNavigatorMessage**: SalesNavigatorMessageRequest = new SalesNavigatorMessageRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:28](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L28)*

___

### salesNavigatorProfile

•  **salesNavigatorProfile**: SalesNavigatorProfileRequest = new SalesNavigatorProfileRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:26](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L26)*

___

### salesNavigatorTypeahead

•  **salesNavigatorTypeahead**: SalesNavigatorTypeaheadRequest = new SalesNavigatorTypeaheadRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:30](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L30)*

___

### search

•  **search**: SearchRequest = new SearchRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:22](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/linkedin-request.ts#L22)*

## Methods

### get

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Inherited from [Request](_src_core_request_.request.md).[get](_src_core_request_.request.md#get)*

*Defined in [src/core/request.ts:34](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L34)*

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

*Inherited from [Request](_src_core_request_.request.md).[get](_src_core_request_.request.md#get)*

*Defined in [src/core/request.ts:35](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L35)*

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

*Inherited from [Request](_src_core_request_.request.md).[post](_src_core_request_.request.md#post)*

*Defined in [src/core/request.ts:42](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L42)*

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

*Inherited from [Request](_src_core_request_.request.md).[post](_src_core_request_.request.md#post)*

*Defined in [src/core/request.ts:43](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L43)*

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

*Inherited from [Request](_src_core_request_.request.md).[setHeaders](_src_core_request_.request.md#setheaders)*

*Defined in [src/core/request.ts:30](https://github.com/cosiall/linkedin-private-api/blob/114c782/src/core/request.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`headers` | Record<string, string\> |

**Returns:** void
