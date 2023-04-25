import { ProfileHeader } from './components/ProfileHeader'
import { SearchForm } from './components/SearchForm/index'
import { Posts } from './components/PostContainer'

export function Home() {
  return (
    <>
      <ProfileHeader />
      <SearchForm />
      <Posts />
    </>
  )
}
