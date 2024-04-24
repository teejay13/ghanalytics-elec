import { csvFormat } from "d3";

interface DataRow {
  Specification: string;
  Keyword: string;
  RGBhexvalue: string;
}

export const message = (data: DataRow[]) => {
  let message = "";
  message = message + Math.round(csvFormat(data).length / 1024) + " kB\n";
  message = message + data.length + " rows\n";
  message = message + data.columns.length + " columns";
  return message;
};
