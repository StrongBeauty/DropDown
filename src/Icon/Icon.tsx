import {FC} from "react";

export type IconProps = {
    src: string;
    width?: string;
    height?: string;
}

export const Icon: FC<IconProps> = ({ src,
                                      width,
                                      height
                                   }) => {
    return(
        <img
            src={src}
            alt="Icon"
            width={width}
            height={height}
        />
    )
}