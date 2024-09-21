
const BulletPoint = (props) => {
  return (
    <div className="text-gray-100 text-xl">
        <ul className="list-disc">
            {props.items.map(item => (
                <li>{item}</li> ))}
            
        </ul>
    </div>
  )
}

export default BulletPoint