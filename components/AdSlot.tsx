export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return <div className="ad-slot" aria-label={label}>{label} · AdSense slot</div>;
}
