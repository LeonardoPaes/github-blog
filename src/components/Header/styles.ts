import styled from 'styled-components'
import background from '../../assets/background.svg'

export const HeaderContainer = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;

  /* display: flex;
  align-items: center;
  justify-content: center; */
  position: relative;

  height: 18.5rem;

  img {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translate(-50%);
  }
`
