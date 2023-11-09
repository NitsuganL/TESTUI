interface inputProps{
    type: string,
    name: string,
    id: string,
    placeholder?: string,
    className?: string,
    isRequired: boolean

}
export default function Input({type,name,id,placeholder,className,isRequired}: inputProps){
    return(
        <input
        type={type}
        name={name}
        id={id}
        className={className}
        placeholder={placeholder}
        required={isRequired}
        />
    )
}