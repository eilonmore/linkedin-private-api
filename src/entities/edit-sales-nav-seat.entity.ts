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
    createdDate: number;
    state: string;
    seatJsonExt: SeatJsonExt;
    lang: Lang;
    isAdminOnly: boolean;
    dateAdded: string;
}

export interface TeamSummary {
    active: number;
    total: number;
    seatRole: string;
    pending: number;
    available: number;
}

export interface AdminSummary {
    active: number;
    total: number;
    seatRole: string;
    pending: number;
    available: number;
}

export interface TleSummary {
    active: number;
    total: number;
    seatRole: string;
    pending: number;
    available: number;
    accepted: number;
    declined: number;
}

export interface Summary {
    teamSummary: TeamSummary;
    adminSummary: AdminSummary;
    contractId: number;
    isOnlineContract: boolean;
    helpCenterUrl: string;
    seatRole: string;
    csvUploadPollInterval: number;
    csvUploadMaxFileSize: number;
    seatsAssignCountMax: number;
    isOnlineNonrecurringContract: boolean;
    tleSummary: TleSummary;
    isContractInBulkFreeTrial: boolean;
    isTier1: boolean;
}