import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from './../lib/axios'

interface GithubContextProviderProps {
  children: ReactNode
}

interface GithubProfile {
  login: string
  avatarUrl: string
  htmlUrl: string
  bio: string
  followers: number
  company: string
  name: string
}

export interface GithubIssue {
  id: number
  title: string
  htmlUrl: string
  comments: number
  createdAt: string
  body: string
  authorLogin?: string
}

interface GithubContextType {
  profile: GithubProfile
  issues: GithubIssue[]
  fetchRepository: (query?: string) => Promise<void>
  getIssueById: (id: string) => Promise<GithubIssue>
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubContextProvider({
  children,
}: GithubContextProviderProps) {
  // const repo = 'github-blog'
  const repo = 'reactjs-github-blog-challenge'
  const repoOwner = 'rocketseat-education'
  const user = 'LeonardoPaes'

  const [profile, setProfile] = useState<GithubProfile>({} as GithubProfile)
  const [issues, setIssues] = useState<GithubIssue[]>([])

  const fetchProfile = useCallback(async () => {
    // const response = await api.get(`/users/${user}`, {
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    const response = await api.get(`/users/${user}`)

    const { login, bio, followers, company, name } = response.data

    setProfile({
      login,
      avatarUrl: response.data.avatar_url,
      htmlUrl: response.data.html_url,
      bio,
      followers,
      company,
      name,
    })
  }, [])

  const fetchRepository = useCallback(async (query?: string) => {
    const response = await api.get(
      `/search/issues?q=${query || ''}repo:${repoOwner}/${repo}`,
    )
    const { items } = response.data
    const gitHubItems = items.map((item: any) => {
      return {
        id: item.number,
        title: item.title,
        htmlUrl: item.html_url,
        comments: item.comments,
        createdAt: item.created_at,
        body: item.body,
      }
    })
    setIssues(gitHubItems)
  }, [])

  const getIssueById = useCallback(async (id: string) => {
    const response = await api.get(`/repos/${repoOwner}/${repo}/issues/${id}`)
    const item = response.data
    return {
      id: item.number,
      title: item.title,
      htmlUrl: item.html_url,
      comments: item.comments,
      createdAt: item.created_at,
      body: item.body,
      authorLogin: item.user.login,
    }
  }, [])

  useEffect(() => {
    fetchProfile()
    // fetchRepository()
  }, [fetchProfile])

  return (
    <GithubContext.Provider
      value={{ profile, issues, fetchRepository, getIssueById }}
    >
      {children}
    </GithubContext.Provider>
  )
}
