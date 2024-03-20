import './button.header.style.css'

import clsx from 'clsx'

interface IButton {
  children: JSX.Element
  variant: 'header-button'
  color: 'black'
}

export const ButtonHeader = (props: IButton) => {
  const { children, variant, color} = props
  const buttonClass = clsx('button-ui-component text-sm font-medium', variant, color)
  return <button className={buttonClass}>{children}</button>
}
