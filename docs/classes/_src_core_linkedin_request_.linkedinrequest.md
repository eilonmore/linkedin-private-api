**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/core/linkedin-request"](../modules/_src_core_linkedin_request_.md) / LinkedInRequest

# Class: LinkedInRequest

## Hierarchy

- [Request](_src_core_request_.request.md)

  ↳ **LinkedInRequest**

## Index

### Constructors

- [constructor](_src_core_linkedin_request_.linkedinrequest.md#constructor)

### Properties

- [auth](_src_core_linkedin_request_.linkedinrequest.md#auth)
- [conversation](_src_core_linkedin_request_.linkedinrequest.md#conversation)
- [invitation](_src_core_linkedin_request_.linkedinrequest.md#invitation)
- [message](_src_core_linkedin_request_.linkedinrequest.md#message)
- [profile](_src_core_linkedin_request_.linkedinrequest.md#profile)
- [request](_src_core_linkedin_request_.linkedinrequest.md#request)
- [search](_src_core_linkedin_request_.linkedinrequest.md#search)

### Methods

- [get](_src_core_linkedin_request_.linkedinrequest.md#get)
- [post](_src_core_linkedin_request_.linkedinrequest.md#post)
- [setHeaders](_src_core_linkedin_request_.linkedinrequest.md#setheaders)

## Constructors

### constructor

\+ **new LinkedInRequest**(): [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

_Inherited from [Request](_src_core_request_.request.md).[constructor](_src_core_request_.request.md#constructor)_

_Defined in [src/core/request.ts:13](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L13)_

**Returns:** [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

## Properties

### auth

• **auth**: AuthRequest = new AuthRequest({ request: this })

_Defined in [src/core/linkedin-request.ts:20](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/linkedin-request.ts#L20)_

---

### conversation

• **conversation**: ConversationRequest = new ConversationRequest({ request: this })

_Defined in [src/core/linkedin-request.ts:10](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/linkedin-request.ts#L10)_

---

### invitation

• **invitation**: InvitationRequest = new InvitationRequest({ request: this })

_Defined in [src/core/linkedin-request.ts:12](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/linkedin-request.ts#L12)_

---

### message

• **message**: MessageRequest = new MessageRequest({ request: this })

_Defined in [src/core/linkedin-request.ts:14](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/linkedin-request.ts#L14)_

---

### profile

• **profile**: ProfileRequest = new ProfileRequest({ request: this })

_Defined in [src/core/linkedin-request.ts:16](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/linkedin-request.ts#L16)_

---

### request

• **request**: AxiosInstance

_Inherited from [Request](_src_core_request_.request.md).[request](_src_core_request_.request.md#request)_

_Defined in [src/core/request.ts:13](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L13)_

---

### search

• **search**: SearchRequest = new SearchRequest({ request: this })

_Defined in [src/core/linkedin-request.ts:18](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/linkedin-request.ts#L18)_

## Methods

### get

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

_Inherited from [Request](_src_core_request_.request.md).[get](_src_core_request_.request.md#get)_

_Defined in [src/core/request.ts:26](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L26)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name         | Type                  |
| ------------ | --------------------- |
| `url`        | string                |
| `reqConfig?` | ConfigNonFullResponse |

**Returns:** Promise<T\>

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigFullResponse): Promise<AxiosResponse<T\>\>

_Inherited from [Request](_src_core_request_.request.md).[get](_src_core_request_.request.md#get)_

_Defined in [src/core/request.ts:27](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L27)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name         | Type               |
| ------------ | ------------------ |
| `url`        | string             |
| `reqConfig?` | ConfigFullResponse |

**Returns:** Promise<AxiosResponse<T\>\>

---

### post

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

_Inherited from [Request](_src_core_request_.request.md).[post](_src_core_request_.request.md#post)_

_Defined in [src/core/request.ts:34](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L34)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name         | Type                               |
| ------------ | ---------------------------------- |
| `url`        | string                             |
| `data`       | string \| Record<string, unknown\> |
| `reqConfig?` | ConfigNonFullResponse              |

**Returns:** Promise<T\>

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigFullResponse): Promise<AxiosResponse<T\>\>

_Inherited from [Request](_src_core_request_.request.md).[post](_src_core_request_.request.md#post)_

_Defined in [src/core/request.ts:35](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L35)_

#### Type parameters:

| Name |
| ---- |
| `T`  |

#### Parameters:

| Name         | Type                               |
| ------------ | ---------------------------------- |
| `url`        | string                             |
| `data`       | string \| Record<string, unknown\> |
| `reqConfig?` | ConfigFullResponse                 |

**Returns:** Promise<AxiosResponse<T\>\>

---

### setHeaders

▸ **setHeaders**(`headers`: Record<string, string\>): void

_Inherited from [Request](_src_core_request_.request.md).[setHeaders](_src_core_request_.request.md#setheaders)_

_Defined in [src/core/request.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/84c9c15/src/core/request.ts#L22)_

#### Parameters:

| Name      | Type                    |
| --------- | ----------------------- |
| `headers` | Record<string, string\> |

**Returns:** void
