import { FormatHour } from "@/utils/format-date";

export default async function HourPage() {
  const hour = FormatHour(Date.now());

  return <div>Hora: {hour}</div>;
}
