type HeadingProps = {
text: string
}


function Heading({ text }: HeadingProps) {
return <h1 className="text-3xl font-bold">{text}</h1>
}
export default Heading;