import styled from 'styled-components'

export const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  /* gap: 2rem; */

  background-color: ${(props) => props.theme['blue-700']};

  border-radius: 10px;
  margin-top: -88px;

  h2 {
    margin-top: 1.2rem;

    line-height: 1.6;

    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-50']};
  }
`

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    gap: 0.5rem;

    text-decoration: none;
    color: ${(props) => props.theme['blue-350']};
    font-size: 0.75rem;
    font-weight: 700;
    transition: border-bottom 0.1s;

    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-350']};
    }
  }
`

export const PostFooter = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;

  svg {
    color: ${(props) => props.theme['blue-400']};
  }

  span {
    display: flex;
    gap: 0.5rem;

    color: ${(props) => props.theme['blue-100']};
  }
`
