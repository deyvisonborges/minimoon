import { HttpStatusProps } from "../interfaces/HttpStatusProps";

const HttpStatus: Record<
  string,
  {
    statusCode: number;
    message: HttpStatusProps;
    description: string;
  }
> = {
  // 2xx Successful
  OK: {
    statusCode: 200,
    message: "OK",
    description:
      "The request is OK (this is the standard response for successful HTTP requests)",
  },
  CREATED: {
    statusCode: 201,
    message: 'Created',
    description: 'The request has been fulfilled, and a new resource is created ',
  },
  ACCEPTED: {
    statusCode: 202,
    message: "Accepted",
    description: 'The request has been accepted for processing, but the processing has not been completed',
  },
  NON_AUTHORITATIVE_INFORMATION: {
    statusCode: 203,
    message: 'Non-Authoritative Information',
    description: 'The request has been successfully processed, but is returning information that may be from another source',
  },
  NO_CONTENT: {
    statusCode: 204,
    message: 'No Content',
    description: 'The request has been successfully processed, but is not returning any content',
  },
  RESET_CONTENT: {
    statusCode: 205,
    message: 'Reset Content',
    description: 'The request has been successfully processed, but is not returning any content, and requires that the requester reset the document view',
  },
  PARTIAL_CONTENT: {
    statusCode: 206,
    message: 'Partial Content',
    description: 'The client needs to authenticate to gain network access',
  },

  // 3xx Redirection
  MULTIPLE_CHOICES: {
    statusCode: 300,
    message: 'Multiple Choices',
    description: 'A link list. The user can select a link and go to that location. Maximum five addresses',
  },
  MOVED_PERMANENTLY: {
    statusCode: 301,
    message: 'Moved Permanently',
    description: 'The requested page has moved to a new URL',
  },
  FOUND: {
    statusCode: 302,
    message: 'Found',
    description: 'The requested page has moved temporarily to a new URL',
  },
  SEE_OTHER: {
    statusCode: 303,
    message: 'See Other',
    description: 'The requested page can be found under a different URL',
  },
  NOT_MODIFIED: {
    statusCode: 304,
    message: 'Not Modified',
    description: 'Indicates the requested page has not been modified since last requested',
  },
  TEMPORARY_REDIRECT: {
    statusCode: 307,
    message: 'Temporary Redirect',
    description: 'The requested page has moved temporarily to a new URL',
  },
  PERMANENT_REDIRECT: {
    statusCode: 308,
    message: 'Permanent Redirect',
    description: 'The requested page has moved permanently to a new URL',
  },
  200: {
    statusCode: 200,
    message: "Created",
    description:
      "The request is OK (this is the standard response for successful HTTP requests)",
  },
  SERVER_ERROR: {
    statusCode: 500,
    message: 'Internal Server Error',
    description: ''
  }
};

export { HttpStatus }