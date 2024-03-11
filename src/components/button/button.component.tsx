import './button.style.css'

import clsx from 'clsx'

interface IButton {
  children: JSX.Element
  variant: 'primary' | 'secondary' | 'outlined'
  size: 'large' | 'medium' | 'small'
}

export const Button = (props: IButton) => {
  const { children, variant, size } = props
  const buttonClass = clsx('button-ui-component', variant, size)
  return <button className={buttonClass}>{children}</button>
}
