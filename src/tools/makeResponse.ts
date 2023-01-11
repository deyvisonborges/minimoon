// import fs from "fs";
// import { ServerResponse } from "http";
// import { MimeTypeProps } from "../interfaces/MimeTypeProps";
// import { MIME_TYPES } from "../constants/mimeTypes";
// import { HttpStatus } from "../constants/httpStatus";

// interface ResponseProps {
//   data: string | object | fs.ReadStream;
// }

// export const makeResponse = (props: ResponseProps) => {
//   const tmpRes = {}

//   if (typeof props.data === "string") {
//     tmpRes.data = props.data;
//     tmpRes.type = MIME_TYPES.html;
//   } else if (typeof props.data === "object") {
//     tmpRes.data = JSON.stringify(props.data);
//     tmpRes.type = MIME_TYPES.json;
//   }

//   res.writeHead(props.statusCode, HttpStatus[props.statusCode].message);
//   res.write(tmpRes.data);
//   res.end();
// }