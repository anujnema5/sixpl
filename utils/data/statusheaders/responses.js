export const statusData = [
    {
      type: 'success',
      message: 'Successful responses',
      codes: [
        { code: 200, message: 'OK' },
        { code: 201, message: 'Created' },
        { code: 202, message: 'Accepted' },
        { code: 203, message: 'Non-Authoritative Information' },
      ],
      style: 'green'
    },
    {
      type: 'error',
      message: 'Client error responses',
      codes: [
        { code: 400, message: 'Bad Request' },
        { code: 401, message: 'Unauthorized' },
        { code: 402, message: 'Payment Required' },
        { code: 403, message: 'Forbidden' },
        { code: 404, message: 'Not Found' },
      ],
      style: 'red'
    },
    {
      type: 'serverError',
      message: 'Server error responses',
      codes: [
        { code: 500, message: 'Internal Server Error' },
        { code: 501, message: 'Not Implemented' },
        { code: 502, message: 'Bad Gateway' },
        { code: 503, message: 'Service Unavailable' },
        { code: 504, message: 'Gateway Timeout' },
      ],
      style: 'yellow'
    },
    {
      type: 'redirection',
      message: 'Redirection messages',
      codes: [
        { code: 300, message: 'Multiple Choice' },
        { code: 301, message: 'Moved Permanently' },
        { code: 302, message: 'Found' },
        { code: 303, message: 'See Other' },
        { code: 304, message: 'Not Modified' },
      ],
      style: 'blue'
    },

    {
      type: 'informational',
      message: 'Informational responses',
      codes: [
        { code: 100, message: 'Continue' },
        { code: 101, message: 'Switching Protocols' },
        { code: 102, message: 'Processing' },
      ],
      style: 'slate'
    },
  ];

  export const codeMessages = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non-Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    308: "Permanent Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Payload Too Large",
    414: "URI Too Long",
    415: "Unsupported Media Type",
    416: "Range Not Satisfiable",
    417: "Expectation Failed",
    418: "I'm a Teapot",
    422: "Unprocessable Entity",
    423: "Locked",
    424: "Failed Dependency",
    426: "Upgrade Required",
    429: "Too Many Requests",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported",
  };
  