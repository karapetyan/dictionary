const RemoveIcon = ({i, removeIconEntityIndex, removeEntry}) =>
    i === removeIconEntityIndex ?
        <div className="remove-icon" onClick={() => removeEntry(i)}></div> :
            null

export default RemoveIcon;