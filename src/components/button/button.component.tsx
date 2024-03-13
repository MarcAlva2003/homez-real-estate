import './button.style.css'

import clsx from 'clsx'

interface IButton {
  children: JSX.Element
  variant: 'rounded' | 'solid-rounded' | 'solid'
  size: 'large' | 'medium' | 'small' | 'small-2'
  color: 'black' | 'white' | 'salmon'
  font: 'narrow' | 'broad'
}

export const Button = (props: IButton) => {
  const { children, variant, size, color, font } = props
  const buttonClass = clsx('button-ui-component', variant, size, color, font)
  return <button className={buttonClass}>{children}</button>
}
