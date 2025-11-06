import { Claim } from "./data-models"

export type ReconciliationData = {
    name: string,
    total_invoiced: number,
    difference: number,
    status: string
} & Claim