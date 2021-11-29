function cpfile(source, destination) {
  if ({{ variables['file-system-object'][0] }}.FileExists(source) == false){
    return 'Source file does not exist.';
  }
  if ({{ variables['file-system-object'][0] }}.FileExists(destination) == true){
    return 'Destination file already exists.';
  }
  {{ variables['file-system-object'][0] }}.CopyFile(source, destination);
  return 'Successfully copied file.';
}