export interface ITransaction {
    id: string,
    type: string,
    phone: string,
    name: {
        first: string,
        last: string
    },
    email: string,
    company: string,
    amount: string,
    address: string
}