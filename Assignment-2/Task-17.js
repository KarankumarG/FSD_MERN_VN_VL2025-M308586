function downloadFile(filename, callback) {
  console.log(`Downloading ${filename}...`);
  callback();
}

function onDownloadComplete() {
  setTimeout(() => {
    console.log("Download complete!");
  }, 2000); 
}

downloadFile("assignment.pdf", onDownloadComplete);
