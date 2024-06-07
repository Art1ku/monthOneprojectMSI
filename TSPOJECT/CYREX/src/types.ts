export interface JSONResponse {
    completed: boolean
    id: number
    title: string
    userId: number
}

export interface JSONArrayResponse{
    data: JSONResponse[]
    amount: number
}