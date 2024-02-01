import * as S from './styles'

type Props = {
  title?: string
}

const Main: React.FC<Props> = ({ title = 'Title' }) => {
  return (
    <S.Wrapper>
      <h1>{title}</h1>
    </S.Wrapper>
  )
}

export default Main
