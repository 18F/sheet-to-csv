# sheet-to-csv

Due to security settings, it's difficult for us to share data from Google Sheets as open data. This script makes it trivial to publish a CSV from a google sheet.

## Installation

First thing you'll need to do is set up your repository as follows:

```
git clone https://github.com/18f/sheet-to-csv
cd sheet-to-csv
mv scriptId.json.example scriptId.json
npm install
```

Then, follow the instructions here: https://developers.google.com/apps-script/guides/rest/quickstart/target-script

Instead of copying the code specified in the tutorial, copy the following script into Code.js.

``` js
/**
 * The function in this script will be called by the Apps Script Execution API.
 * Load in a project
 **/

/**
 * This function returns a CSV from Google Drive using the file's id
 * @param {string} fileId the Google Sheet's fileId
 * @return {string} a csv string
 **/
function getCSVbyId(fileId) {
  var f = SpreadsheetApp.openById(fileId).getActiveSheet().getDataRange().getValues();
  var csv = "";
  for (i in f) {
    csv += f[i].join(',') + "\n";
  }
  return csv;
}
```
Copy the script's ID into the `scriptId.json` file.

Finally, follow step 1 of https://developers.google.com/apps-script/guides/rest/quickstart/nodejs.

Now, you're ready for action.

# Usage

Once you identify your sheet's ID (hint, it's in the sheet's URL), getting a csv is as simple as:

`node index SHEET_ID`

# License

See [LICENSE.md](LICENSE.md).