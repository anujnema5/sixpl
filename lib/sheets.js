import { google } from 'googleapis'

const getPricingList = async () => {
    try {
        const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
        const jwt = new google.auth.JWT(
            process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            null,
            (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
            target
        )
        
        const sheets = google.sheets({ version: 'v4', auth: jwt })
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'fbPaid'
        })

        const rows = response.data.values

        console.log(`The length is ${rows.length}`)

        if(rows.length) {
            return rows.map((row) => ({
                activityDescription: row[0] || null ,
                starterPlan: row[1] || null,
                standardPlan: row[2] || null,
                plusPlan: row[3] || null,
            }))
        }
        
    } catch (error) {
        console.log(error)
        
    }
    return []
}

export default getPricingList