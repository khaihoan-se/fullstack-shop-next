import React from "react";
import Image from "next/image";

type Props = {}

const SearchIcon: React.FC<Props> = () => {
    return <Image src='/icon_search.png' layout="fill" objectFit="contain" alt="search icon" />
}

export default SearchIcon