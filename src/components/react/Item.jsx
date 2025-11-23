export default function Item({item}){
    const style = {
        "background-color": "green"
    }
    return(
        <p className="test" style={style}>item: {item}</p>
    )
}