import { ApiDeleteUser, ApiGetUser, ApiSignIn, ApiSignUp, ApiUpdateUser } from "../@types/Auth"
import { ApiDeleteTransaction, ApiGetTransaction, ApiGetTransactions, ApiNewTransaction, ApiUpdateTransaction, TransactionStatus } from "../@types/Transaction"
import { api } from "./api"

// Auth
export const signUp = async (name: string, email: string, password: string) => {
    return await api<ApiSignUp>({
        endpoint: 'auth/signup', method: 'POST', data: { name, email, password }, withAuth: false
    })
}

export const signIn = async (email: string, password: string) => {
    return await api<ApiSignIn>({
        endpoint: 'auth/signin', method: 'POST', data: { email, password }, withAuth: false
    })
}

// User
export const getUser = async () => {
    return await api<ApiGetUser>({
        endpoint: 'auth/me'
    })
}

export const updateUser = async (name: string, email: string) => {
    return await api<ApiUpdateUser>({
        endpoint: 'users', method: 'PUT', data: { name, email }
    })
}

export const deleteUser = async () => {
    return await api<ApiDeleteUser>({
        endpoint: 'users', method: 'DELETE'
    })
}

// Transaction
export const getTransactions = async () => {
    return await api<ApiGetTransactions>({
        endpoint: 'transactions'
    })
}

export const getTransaction = async (id: number) => {
    return await api<ApiGetTransaction>({
        endpoint: `transactions/${id}`
    })
}

export const newTransaction = async (title: string, amount: number, status?: TransactionStatus) => {
    return await api<ApiNewTransaction>({
        endpoint: 'transactions', method: 'POST', data: { title, amount, status }
    })
}

export const updateTransaction = async (id: number, title: string, amount: number, status: TransactionStatus) => {
    return await api<ApiUpdateTransaction>({
        endpoint: `transactions/${id}`, method: 'PUT', data: { title, amount, status }
    })
}

export const deleteTransaction = async (id: number) => {
    return await api<ApiDeleteTransaction>({
        endpoint: `transactions/${id}`, method: 'DELETE'
    })
}