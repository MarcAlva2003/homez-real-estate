import './input.style.css'
import clsx from 'clsx'

interface IInput{
    iconRight?: JSX.Element
    iconLeft?: JSX.Element
    indexPosition: 'default'
}

export const Input = (props: IInput) => {
    const {iconLeft, iconRight, indexPosition} = props
    const inputSearch = clsx('input-ui-component', indexPosition)
    return (
        <div>
            <form className='formSearch flex items-center'>
                {iconLeft && iconLeft}
                <input
                className={inputSearch}
                placeholder='Enter an address, neighborhood, city or ZIP Code'
                />
                {iconRight && iconRight}
            </form>
        </div>
    )
}