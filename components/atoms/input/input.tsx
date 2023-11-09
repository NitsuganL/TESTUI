import React, {forwardRef} from 'react'
import cn from 'classnames'

interface FormItemModel {
    placeholder: string
    type: string
    required?: boolean
    invalid?: boolean
    valid?: boolean
    value?: string
}


export type InputProps = FormItemModel


  

    

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({placeholder, valid, invalid, type, value, ...props}: InputProps, ref) => {
        return(
            <input
            {...props}
            ref={ref}
            type={type || 'text'}
            defaultValue={value}
            placeholder={placeholder}
            className={cn('Input input-bordered w-full dark:border-base-content',{
                'input-error': invalid,
                'input-success': valid,
            })}
            ari-invalid={invalid ? 'true' : 'false'}
            />
        )
    }
)

Input.displayName = 'Input'

export default Input