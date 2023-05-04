import fs from "fs";
import { Server, ServerResponse } from "http";
import { MimeTypeProps } from "../../modules/http/MimeTypeProps";
import { MIME_TYPES } from "../../modules/http/mimeTypes";
interface ResponseProps {
  data: string | object | fs.ReadStream;
}

const tmpHttpStatusResponse: Record<number, string> = {
  200: "Created",
  400: "Bad Request",
};

export type MakeResponseData = {
  data: string | object | fs.ReadStream
  type: MimeTypeProps
}

export function makeResponse({ data }: ResponseProps) {
  const responseData: MakeResponseData = {} as MakeResponseData;


  if (typeof data === "object") {
    if(data instanceof fs.ReadStream) {
      responseData.data = data;
      const ext = data.path.toString().split('.').pop()
      responseData.type = MIME_TYPES[ext as string] || MIME_TYPES.octetStream;
    } else {

      /**
       * @description
       * Essa abordagem é mais eficiente em termos de desempenho, 
       * porque o JSON.stringify converte objetos JavaScript em uma 
       * string JSON, que pode ser grande e levar tempo para serializar. 
       * Em contrapartida, o buffer armazena dados brutos e 
       * é mais eficiente no uso de memória e processamento.
       */
      responseData.data = Buffer.from(JSON.stringify(data));
      responseData.type = MIME_TYPES.json;
    }
  } else if (typeof data === "string") {
    responseData.data = data;
    responseData.type = MIME_TYPES.text;
  }
  return responseData;
}
