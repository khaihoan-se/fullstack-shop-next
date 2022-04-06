import React from "react";
import Image from "next/image";

type Props = {}

const Logo: React.FC<Props> = () => {
    return <Image src='/logo2.png' layout="fill" objectFit="contain" alt="logo" />
}

export default Logo