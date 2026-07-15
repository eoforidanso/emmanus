export default function Logo({ size = 34 }) {
  return (
    <img
      src="/icon-192.png"
      width={size}
      height={size}
      alt=""
      style={{ borderRadius: "22%", flex: "none" }}
    />
  );
}
