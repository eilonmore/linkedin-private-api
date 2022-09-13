**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/repositories/salesnav.repository"](../modules/_src_repositories_salesnav_repository_.md) / SalesNavRepository

# Class: SalesNavRepository

## Hierarchy

* **SalesNavRepository**

## Index

### Constructors

* [constructor](_src_repositories_salesnav_repository_.salesnavrepository.md#constructor)

### Methods

* [addSalesNavSeat](_src_repositories_salesnav_repository_.salesnavrepository.md#addsalesnavseat)
* [editSalesNavSeat](_src_repositories_salesnav_repository_.salesnavrepository.md#editsalesnavseat)
* [getSalesNavSeats](_src_repositories_salesnav_repository_.salesnavrepository.md#getsalesnavseats)
* [removeSalesNavSeat](_src_repositories_salesnav_repository_.salesnavrepository.md#removesalesnavseat)

## Constructors

### constructor

\+ **new SalesNavRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [SalesNavRepository](_src_repositories_salesnav_repository_.salesnavrepository.md)

*Defined in [src/repositories/salesnav.repository.ts:8](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/salesnav.repository.ts#L8)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [SalesNavRepository](_src_repositories_salesnav_repository_.salesnavrepository.md)

## Methods

### addSalesNavSeat

▸ **addSalesNavSeat**(`__namedParameters`: { csrfToken: string ; emailAddress: string  }): Promise<AddSalesNavSeatResponse\>

*Defined in [src/repositories/salesnav.repository.ts:35](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/salesnav.repository.ts#L35)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { csrfToken: string ; emailAddress: string  } |

**Returns:** Promise<AddSalesNavSeatResponse\>

___

### editSalesNavSeat

▸ **editSalesNavSeat**(`__namedParameters`: { csrfToken: string ; isAdminSeat: boolean ; isSalesSeat: boolean ; seatId: number  }): Promise<EditSalesNavSeatResponse\>

*Defined in [src/repositories/salesnav.repository.ts:19](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/salesnav.repository.ts#L19)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { csrfToken: string ; isAdminSeat: boolean ; isSalesSeat: boolean ; seatId: number  } |

**Returns:** Promise<EditSalesNavSeatResponse\>

___

### getSalesNavSeats

▸ **getSalesNavSeats**(): Promise<GetSalesNavSeatsResponse\>

*Defined in [src/repositories/salesnav.repository.ts:14](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/salesnav.repository.ts#L14)*

**Returns:** Promise<GetSalesNavSeatsResponse\>

___

### removeSalesNavSeat

▸ **removeSalesNavSeat**(`__namedParameters`: { csrfToken: string ; seatId: number  }): Promise<RemoveSalesNavSeatResponse\>

*Defined in [src/repositories/salesnav.repository.ts:43](https://github.com/cosiall/linkedin-private-api/blob/803c213/src/repositories/salesnav.repository.ts#L43)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { csrfToken: string ; seatId: number  } |

**Returns:** Promise<RemoveSalesNavSeatResponse\>
