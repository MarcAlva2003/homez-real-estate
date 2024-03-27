import './button.style.css'

import clsx from 'clsx'

interface IButton {
  children: JSX.Element
  variant: 'rounded' | 'solid-rounded' | 'solid'
  size: 'large' | 'medium' | 'small' | 'small-2'
  color: 'black' | 'white' | 'salmon'
}

export const Button = (props: IButton) => {
  const { children, variant, size, color} = props
  const buttonClass = clsx('button-ui-component text-sm font-medium', variant, size, color)
  return <button className={buttonClass}>{children}</button>
}
