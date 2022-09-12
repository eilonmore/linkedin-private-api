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

export interface CreditSummary {
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