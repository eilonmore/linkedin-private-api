export interface Artifact {
    width: number;
    fileIdentifyingUrlPathSegment: string;
    height: number;
}

export interface VectorImage {
    artifacts: Artifact[];
    rootUrl: string;
}

export interface SeatPicture {
    vectorImage: VectorImage;
}

export interface Artifact2 {
    width: number;
    fileIdentifyingUrlPathSegment: string;
    height: number;
}

export interface VectorImage2 {
    artifacts: Artifact2[];
    rootUrl: string;
}

export interface SeatJsonExt {
    isReportingSeat: boolean;
    isReportingOnlySeat: boolean;
    isTLEOnly: boolean;
    isTLESeat: boolean;
    profileId: string;
}

export interface Lang {
    locale: string;
    code: string;
}

export interface Seat {
    seatId: number;
    memberId: number;
    nameFormatted: string;
    isCrmSeat: boolean;
    isAdminSeat: boolean;
    isSalesSeat: boolean;
    isBuyer: boolean;
    seatPicture: SeatPicture;
    vectorImage: VectorImage2;
    headline: string;
    authToken: string;
    authType: string;
    email: string;
    isUser: boolean;
    createdDate: any;
    state: string;
    profileUrl: string;
    seatJsonExt: SeatJsonExt;
    lang: Lang;
    isAdminOnly: boolean;
    dateAdded: string;
}

export interface Pagination {
    start: number;
    count: number;
    total: number;
    firstPage: boolean;
}

export interface Tag {
    id: number;
    name: string;
    editable: boolean;
}
