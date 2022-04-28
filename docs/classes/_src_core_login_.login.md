**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/core/login"](../modules/_src_core_login_.md) / Login

# Class: Login

## Hierarchy

* **Login**

## Index

### Constructors

* [constructor](_src_core_login_.login.md#constructor)

### Methods

* [userCookie](_src_core_login_.login.md#usercookie)
* [userPass](_src_core_login_.login.md#userpass)

## Constructors

### constructor

\+ **new Login**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [Login](_src_core_login_.login.md)

*Defined in [src/core/login.ts:22](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/core/login.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [Login](_src_core_login_.login.md)

## Methods

### userCookie

▸ **userCookie**(`__namedParameters`: { cookies: { JSESSIONID: string ; li_at?: undefined \| string  } ; useCache: boolean = true; username: undefined \| string  }): Promise<[Client](_src_core_client_.client.md)\>

*Defined in [src/core/login.ts:112](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/core/login.ts#L112)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { cookies: { JSESSIONID: string ; li_at?: undefined \| string  } ; useCache: boolean = true; username: undefined \| string  } |

**Returns:** Promise<[Client](_src_core_client_.client.md)\>

___

### userPass

▸ **userPass**(`__namedParameters`: { password: undefined \| string ; useCache: boolean = true; username: string  }): Promise<[Client](_src_core_client_.client.md)\>

*Defined in [src/core/login.ts:79](https://github.com/eilonmore/linkedin-private-api/blob/d17dc2a/src/core/login.ts#L79)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { password: undefined \| string ; useCache: boolean = true; username: string  } |

**Returns:** Promise<[Client](_src_core_client_.client.md)\>
