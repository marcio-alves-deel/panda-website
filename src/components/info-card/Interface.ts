export interface IStyled {
  color?: string
  top?: string | number
  left?: string | number
}

export interface IProps extends IStyled {
  title: string
  icon: string
  subtitle: string
}
