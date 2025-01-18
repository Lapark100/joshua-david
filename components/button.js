export default function Button(props) {
    console.log(props.variants)
const variants = {
    default: ' bg-yellow-500  text-black',
    newBrand: 'bg-[#cadb2b] text-[#34469b]'
}

const sizes = {
    sm: 'text-sm p-3 w-28'
}

return (
    <button {...props} className={`${props.variants? variants[props.variant] : variants['default']} ${props.sizes? sizes[props.sizes] : sizes['sm']} ${props.className}`} ></button>
    
)
}