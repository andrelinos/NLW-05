export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600); // 3600 segundos
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);

  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':');

  return timeString;
}