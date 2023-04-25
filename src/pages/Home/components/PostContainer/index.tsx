import { formatDistanceToNow } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { GithubContext } from '../../../../contexts/GithubContext'
import { PostCard, PostHeader, PostsContainer } from './styles'
import ptBR from 'date-fns/locale/pt-BR'

export function Posts() {
  const navigate = useNavigate()

  const issues = useContextSelector(GithubContext, (context) => context.issues)

  function handleCardClick(id: number) {
    navigate(`/post/${id}`)
  }

  return (
    <PostsContainer>
      {issues.map((issue) => {
        return (
          <PostCard key={issue.id} onClick={() => handleCardClick(issue.id)}>
            <PostHeader>
              <strong>{issue.title}</strong>
              <time
                title={new Date(issue.createdAt).toLocaleDateString()}
                dateTime={issue.createdAt}
              >
                {formatDistanceToNow(new Date(issue.createdAt), {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </time>
            </PostHeader>
            <span>{issue.body}</span>
          </PostCard>
        )
      })}
    </PostsContainer>
  )
}
