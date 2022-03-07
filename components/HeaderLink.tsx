import Link from 'next/link'
import styled from 'styled-components'

import { headerSpacing }from './Layout'

import type { ComponentProps } from 'react'


const StyledLink = styled.a`
  font-size: 1.5rem;
  margin: -${headerSpacing} 0;
  padding: ${headerSpacing};
`

const HeaderLink = ({ children, ...props }: ComponentProps<typeof Link>) => {
  return (
    <Link {...props} passHref>
      <StyledLink>
        {children}
      </StyledLink>
    </Link>
  )
}

export default HeaderLink
