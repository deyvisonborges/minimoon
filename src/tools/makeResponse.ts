import fs from "fs";
import { Server, ServerResponse } from "http";
import { MimeTypeProps } from "../interfaces/MimeTypeProps";
import { MIME_TYPES } from "../constants/mimeTypes";

interface ResponseProps {
  statusCode: number;
  data: string | object | fs.ReadStream;
  type: MimeTypeProps;
  previousResponse: ServerResponse;
}

const tmpHttpStatusResponse: Record<number, string> = {
  200: "Created",
  400: "Bad Request",
};

export function makeResponse({
  statusCode,
  type,
  data,
  previousResponse,
}: ResponseProps) {
  const tmpRes = {} as ResponseProps;
  let res: ServerResponse = previousResponse;

  if (typeof data === "string") {
    tmpRes.data = data;
    tmpRes.type = MIME_TYPES.html;
  } else if (typeof data === "object") {
    tmpRes.data = JSON.stringify(data);
    tmpRes.type = MIME_TYPES.json;
  }

  res.setHeader("Content-Type", tmpRes.type);
  res.writeHead(statusCode, tmpHttpStatusResponse[statusCode] as string);
  res.write(tmpRes.data);
  res.end();
}
