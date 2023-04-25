import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h4 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['blue-100']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['blue-300']};
    }
  }

  input {
    width: 100%;

    padding: 0.75rem 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['blue-500']};

    background-color: ${(props) => props.theme['blue-900']};
    color: ${(props) => props.theme['blue-200']};

    &::placeholder {
      color: ${(props) => props.theme['blue-400']};
    }

    &:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme['blue-350']};
    }
  }
`
