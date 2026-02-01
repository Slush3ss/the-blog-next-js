import { format, formatDistanceToNow as formatDistanceAgo } from "date-fns";
import { ptBR } from "date-fns/locale";

export function FormatDate(rawDate: string): string {
  const date = new Date(rawDate)
  return format(date, "dd/MM/yyyy 'ás' HH'h'mm", { locale: ptBR })
}

export function FormatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate)
  return formatDistanceAgo(date, { locale: ptBR, addSuffix: true })
}

export function FormatHour(rawDate: number) {
  return format(rawDate, "HH:mm:ss", { locale: ptBR })
}