function cpdir(source, destination) {
  if ({{ variables['file-system-object'][0] }}.FolderExists(source) == false){
    return 'Source folder does not exist.';
  }
  if ({{ variables['file-system-object'][0] }}.FolderExists(destination) == true){
    return 'Destination folder already exists.';
  }
  {{ variables['file-system-object'][0] }}.CopyFolder(source, destination);
  return 'Successfully copied directory.';
}