import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  padding: 2.5rem 2rem;
  gap: 2rem;

  background-color: ${(props) => props.theme['blue-700']};

  border-radius: 10px;
  margin-top: -88px;
`

export const Avatar = styled.img`
  width: 9.25rem;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterProfile = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  svg {
    color: ${(props) => props.theme['blue-400']};
  }

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    color: ${(props) => props.theme['blue-100']};
  }
`

export const HeaderProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  flex: 1;

  margin-top: 0.5rem;

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

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-50']};
  }
`

export const SubTitle = styled.span`
  line-height: 1.625;
  margin-top: 0.5rem;
`
