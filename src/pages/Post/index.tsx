import {
  ArrowLeft,
  ArrowSquareOut,
  CalendarBlank,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { useCallback, useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { GithubContext } from '../../contexts/GithubContext'
import { PostActions, PostFooter, PostHeader } from './styles'
import { GithubIssue } from './../../contexts/GithubContext'
import { PostContent } from './PostContent'

export function Post() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [issue, setIssue] = useState<GithubIssue>({} as GithubIssue)

  const getIssueById = useContextSelector(
    GithubContext,
    (context) => context.getIssueById,
  )

  const handleGetIssue = useCallback(async () => {
    const response = await getIssueById(id!)
    setIssue(response)
  }, [getIssueById, id])

  useEffect(() => {
    handleGetIssue()
  }, [handleGetIssue])

  return (
    <>
      <PostHeader>
        <PostActions>
          <a href="#" onClick={() => navigate(-1)}>
            <ArrowLeft size={12} />
            VOLTAR
          </a>
          <a href={issue.htmlUrl} target="_blank" rel="noreferrer">
            VER NO GITHUB
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </PostActions>
        <h2>{issue.title}</h2>
        <PostFooter>
          <span>
            <GithubLogo size={18} />
            {issue.authorLogin}
          </span>
          <span>
            <CalendarBlank size={18} weight="fill" />{' '}
            {issue.createdAt &&
              formatDistanceToNow(new Date(issue.createdAt), {
                locale: ptBR,
                addSuffix: true,
              })}
          </span>
          <span>
            <ChatCircle size={18} weight="fill" />
            {issue.comments} Comentários
          </span>
        </PostFooter>
      </PostHeader>
      <PostContent content={issue.body} />
    </>
  )
}
