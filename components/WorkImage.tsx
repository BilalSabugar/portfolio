import Image, { type ImageProps } from "next/image";
import imageManifest from "@/public/work/image-manifest.json";

type Props = Omit<ImageProps, "src"> & { src: string };
export function WorkImage({ src, alt, priority, fetchPriority, loading, sizes, ...props }: Props) {
  const stem = src.replace(/\.(png|jpe?g)$/i, "");
  const manifest: Record<string, { width: number; height: number; variants: number[] }> = imageManifest;
  const metadata = manifest[src.split("/").pop() ?? ""];
  const widths = metadata?.variants ?? [];
  const dimensions = props.fill || !metadata ? {} : { width: metadata.width, height: metadata.height };
  if (!widths.length) return <Image {...props} alt={alt} src={src} sizes={sizes} loading={priority ? "eager" : loading} fetchPriority={priority ? "high" : fetchPriority} />;
  return <picture><source type="image/webp" srcSet={widths.map(width => `${stem}-${width}.webp ${width}w`).join(", ")} sizes={sizes ?? "100vw"} /><Image {...props} {...dimensions} alt={alt} src={src} sizes={sizes} loading={priority ? "eager" : loading} fetchPriority={priority ? "high" : fetchPriority} /></picture>;
}
