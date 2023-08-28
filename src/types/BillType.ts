export interface BillType {
	id: number
	invoiceNumber: string
	customerNumber: string
	monthReference: string
	expirationDate: string
	electricityKwh: number
	electricityUnitPrice: number
	electricityTotalPrice: number
	injectedEnergyKwh: number
	injectedEnergyUnitPrice: number
	injectedEnergyTotalPrice: number
	icmsKwh: number
	icmsUnitPrice: number
	icmsTotalPrice: number
	valueContribIlum: number
	totalValue: number
}
