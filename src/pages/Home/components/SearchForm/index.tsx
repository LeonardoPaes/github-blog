import { ChangeEvent, useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { GithubContext } from '../../../../contexts/GithubContext'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  const { fetchRepository, issues } = useContextSelector(
    GithubContext,
    (context) => {
      return {
        fetchRepository: context.fetchRepository,
        issues: context.issues,
      }
    },
  )

  const [search, setSearch] = useState('')

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRepository(search)
    }, 500)

    return () => clearTimeout(timer)
  }, [search, fetchRepository])

  return (
    <SearchFormContainer>
      <header>
        <h4>Publicações</h4>
        <span>{issues.length} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={search}
        onChange={handleSearchChange}
      />
    </SearchFormContainer>
  )
}
