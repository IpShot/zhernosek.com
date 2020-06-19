export default function(birthday) {
  const birthdate = Date.parse(new Date(birthday));
  const ms = Date.now() - birthdate;

  let s = Math.floor(ms / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  let y = Math.floor(d / 365);

  s = s % 60;
  m = m % 60;
  h = h % 24;
  d = d % 365;

  return `${y} years ${d} days ${h}h\xa0${m}m\xa0${s}s`;
}
