import { FormatHour } from "@/utils/format-date";

export const dynamic = "force-dynamic";

export default async function HourPage() {
  const hour = FormatHour(Date.now());

  return <div>Hora: {hour}</div>;
}