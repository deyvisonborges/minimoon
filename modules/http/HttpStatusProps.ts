// TODO: https://www.w3schools.com/tags/ref_httpmessages.asp#:~:text=When%20a%20browser%20requests%20a,a%20message%20for%20every%20request.
export type HttpStatusInformationMessageType = 
| 'Continue'
| 'Switching Protocols'
| 'Early Hints'

export type HttpStatusSuccessfulMessageType =
| 'OK'
| 'Created'
| 'Accepted'
| 'Non-Authoritative Information'
| 'No Content'
| 'Reset Content'
| 'Partial Content'

export type HttpStatusRedirectionMessageType =
| 'Multiple Choices'
| 'Moved Permanently'
| 'Found'
| 'See Other'
| 'Not Modified'
| 'Temporary Redirect'
| 'Permanent Redirect'


export type HttpStatusClientErrorMessageType =
| 'Bad Request'
| 'Unauthorized'
| 'Payment Required'
| 'Forbidden'
| 'Not Found'
| 'Method Not Allowed'
| 'Not Acceptable'
| 'Proxy Authentication Required'
| 'Request Timeout'
| 'Conflict'
| 'Gone'
| 'Length Required'
| 'Precondition Failed'
| 'Request Too Large'
| 'Request-URI Too Long'
| 'Unsupported Media Type'
| 'Range Not Satisfiable'
| 'Expectation Failed'

export type HttpStatusServerErrorMessageType =
| 'Internal Server Error'
| 'Not Implemented'
| 'Bad Gateway'
| 'Service Unavailable'
| 'Gateway Timeout'
| 'HTTP Version Not Supported'
| 'Network Authentication Required'

export type HttpStatusProps =
| HttpStatusInformationMessageType
| HttpStatusSuccessfulMessageType
| HttpStatusRedirectionMessageType
| HttpStatusClientErrorMessageType
| HttpStatusServerErrorMessageType