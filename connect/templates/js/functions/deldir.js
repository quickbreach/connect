function deldir(path) {
  if ({{ variables['file-system-object'][0] }}.FolderExists(path) == false){
    return 'Directory does not exist.';
  }
  {{ variables['file-system-object'][0] }}.DeleteFolder(path);
  return 'Successfully deleted directory.';
}