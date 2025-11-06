export interface Patient {
    id: number,
    name:string
}

export interface Claim {
    claim_id: number,
    patient_id: number,
    date_of_service: string,
    charges_amount: number
}

export interface Invoice {
    claim_id: number,
    invoice_id: number,
    transaction_value: number
}