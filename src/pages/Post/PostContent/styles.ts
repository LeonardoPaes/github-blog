import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem 2rem;
  line-height: 1.6;

  img {
    width: 100%;
  }

  pre {
    padding: 1rem;
    background: ${(props) => props.theme['blue-600']};
    border-radius: 2px;

    span,
    pre {
      padding: 0 !important;
      background: ${(props) => props.theme['blue-600']} !important;
    }
  }

  h3 code {
    color: 'inherit';
  }
`
