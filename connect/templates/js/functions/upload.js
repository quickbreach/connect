function upload(data, path) {
    if ({{ variables['file-system-object'][0] }}.FileExists(path) == true){
      return 'File already exists.';
    }
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Open();
    stream.Type = 1;
    stream.Write(data);
    stream.Position = 0;
    stream.SaveToFile(path, 2);
    stream.Close();
    return 'Successfully uploaded file.';
}