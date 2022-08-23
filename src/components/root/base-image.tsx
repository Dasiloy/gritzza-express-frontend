import Image from "next/image";

export interface IBaseImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

export default function BaseImage({
  src,
  alt,
  width,
  height,
  ...props
}: IBaseImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}
