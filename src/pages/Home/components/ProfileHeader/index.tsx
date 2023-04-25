import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector'
import { GithubContext } from '../../../../contexts/GithubContext'
import {
  Avatar,
  FooterProfile,
  HeaderProfile,
  ProfileContainer,
  ProfileInfo,
  SubTitle,
} from './styles'

export function ProfileHeader() {
  const profile = useContextSelector(
    GithubContext,
    (context) => context.profile,
  )

  return (
    <ProfileContainer>
      <Avatar src={profile.avatarUrl} />
      <ProfileInfo>
        <HeaderProfile>
          <h2>{profile.name}</h2>
          <a href={profile.htmlUrl} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowSquareOut size={12} weight="bold" />
          </a>
        </HeaderProfile>
        <SubTitle>{profile.bio}</SubTitle>
        <FooterProfile>
          <span>
            <GithubLogo size={18} />
            {profile.login}
          </span>
          <span>
            <Buildings size={18} weight="fill" /> {profile.company}
          </span>
          <span>
            <Users size={18} weight="fill" />
            {profile.followers} seguidores
          </span>
        </FooterProfile>
      </ProfileInfo>
    </ProfileContainer>
  )
}
