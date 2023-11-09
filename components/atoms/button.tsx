interface inputProps{
    type: SubmitEvent,
    className: string,
}
export default function Button({type,className}: inputProps){
    return(
        <button
        type={"submit"}
        className={className}
        />
    )
}