import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: 16.25rem;
  gap: 2rem;

  margin-top: 3rem;
`

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  padding: 2rem;

  background: ${(props) => props.theme['blue-600']};
  border-radius: 10px;

  overflow: hidden;

  cursor: pointer;

  span {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.6;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['blue-400']};
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['blue-50']};
    line-height: 1.6;
  }

  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['blue-300']};
    white-space: nowrap;
  }
`
