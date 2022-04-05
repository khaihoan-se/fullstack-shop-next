import React from 'react'
import { HeaderRight, HeaderStyle, LogoStyle } from '@/styles/HeaderStyles'
import { Container } from '@/styles/Containers'
import Logo from '@/components/shared/Logo'
import Link from 'next/link'
import Search from '@/components/shared/Search'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <HeaderStyle>
         <Container>
            <LogoStyle>
               <Link href="/">
                  <a><Logo /></a>
               </Link>
            </LogoStyle>

            <HeaderRight>
               <Search />
            </HeaderRight>
            
         </Container>   
      </HeaderStyle>
   )
}

export default Header