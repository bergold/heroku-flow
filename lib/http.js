define(function(require, exports, module) {

  var underscore = require('pkg/underscore');

  function buildResponse(xhr) {
    function parseHeaders(headers) {
      if (headers === null) return {};
      var obj = {};
      var lines = headers.split('\n');
      underscore.each(lines, function(el, index, _) {
        var i = el.indexOf(':');
        var header = el.slice(0, i).trim();
        var value = el.slice(i + 1).trim();
        if (header == '') return;
        obj[header] = value;
      });
      return obj;
    }
    var res = underscore.pick(xhr, 'response', 'status', 'statusText');
    res.headers = parseHeaders(xhr.getAllResponseHeaders());
    return res;
  }

  function ajax(opts) {
    opts = underscore.defaults(opts, {
      'method': 'GET',
      'url': undefined,
      'async': true,
      'data': undefined,
      'headers': {},
      'timeout': 0,
      'responseType': '',
      'progress': underscore.noop
    });

    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, opts.url, opts.async);

    xhr.timeout = opts.timeout;
    xhr.responseType = opts.responseType;

    underscore.each(opts.headers, function(val, key, _) {
      xhr.setRequestHeader(key, val);
    });

    return new Promise(function(resolve, reject) {
      xhr.addEventListener("progress", opts.progress.bind(xhr), false);
      xhr.addEventListener("load", function() {
        resolve(buildResponse(xhr));
      }, false);
      xhr.addEventListener("error", function() {
        reject(buildResponse(xhr));
      }, false);

      xhr.send(opts.data);
    });
  }

  exports.ajax = ajax;

});
