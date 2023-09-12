import { google } from 'googleapis'

export const POST = async(req, res) => {
        const { date, fullName, email, phone, site, serviceUrl, message } = req.body

        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                client_id: process.env.CLIENT_ID,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        try {
            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: process.env.SPREADSHEET_ID_2,
                range: 'leads!A1:F5',
                valueInputOption: 'USER_ENTERED',
                requestBody: {
                    values: [[date, fullName, email, phone, site, serviceUrl, message]]
                },

            })
            res.status(201).json({ message: 'It works!', response })

        } catch (error) {
            console.error(error)
            res.send(error.message)

        }
}

export default sendData



