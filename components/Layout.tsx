import styled from 'styled-components';

export const headerSpacing = '1rem'
const separatorBorder = '1px solid #eaeaea'

export const Container = styled.div`
  padding: 0 2rem;
`
export const Footer = styled.header`
  display: flex;

  border-top: ${separatorBorder};
  flex: 1;
  padding: 2rem 0;

  align-items: center;
  justify-content: center;
`
export const Header = styled.header`
  display: flex;

  border-bottom: ${separatorBorder};
  padding: ${headerSpacing};

  align-items: center;
  justify-content: center;
`
export const Main = styled.main`
  display: flex;

  flex: 1;
  padding-bottom: 4rem;
  min-height: 100vh;

  align-items: center;
  flex-direction: column;
`
