export interface GavySidhRecords{
  name: string,
  mobileNo: string,
  email: string,
  age?: number,
  address: {
    state: string,
    city: string,
    locality: string,
    pincode: number
  },
  gender: string,
  workingArea?: string,
  isFullTime: boolean,
  profession?: string,
  showDetails?: boolean
}