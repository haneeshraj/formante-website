import { google } from "googleapis";

const addToSheets = async (name, email, number, subject, message) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./src/utils/cred.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId =
    process.env.EXCEL_SHEET_ID ||
    "1TQcVVrjSJRIt2P_cL_8kJcU69Pv5ykf9bipzKhzgOds";
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
