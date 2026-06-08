import axios from 'axios'

const API_URL = "https://inbaucxtuepgnicbknsf.supabase.co/rest/v1/note"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImluYmF1Y3h0dWVwZ25pY2JrbnNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NTc1ODEsImV4cCI6MjA5NjQzMzU4MX0.Ugbh0nicJaAc59YI83GWzy_8ILYknmTsjD7qeB4PIqs"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}