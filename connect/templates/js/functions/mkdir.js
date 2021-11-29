function mkdir(path) {
  if ({{ variables['file-system-object'][0] }}.FolderExists(path) == true){
    return 'Folder already exists.';
  }
  {{ variables['file-system-object'][0] }}.CreateFolder(path);
  return 'Successfully created directory.';
}