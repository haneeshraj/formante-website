import { google } from "googleapis";

const addToSheets = async (name, email, number, subject, message) => {
  const auth = new google.auth.GoogleAuth({
    // keyFile: "./src/utils/cred.json",
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(
        /\\n/g,
        "\n"
      ),
    },
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = process.env.NEXT_PUBLIC_EXCEL_SHEET_ID;
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });
  googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "messages!A:E",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name, email, number, subject, message]],
    },
  });
  console.log("Your message is sent, " + name + "!");
};

export { addToSheets };
