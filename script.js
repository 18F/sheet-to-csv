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