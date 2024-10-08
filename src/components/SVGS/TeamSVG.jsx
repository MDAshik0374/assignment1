
export default function TeamSVG({width,height,viewBox,xmlns,path}) {
    
  return (
    <>
      <svg
          width={width}
          height = {height}
          viewBox = {viewBox}
          fill = {"none"}
          xmlns = {xmlns}
          >
         {path.map((p, index) => (
          <path fillRule="evenodd" clipRule="evenodd" key={index}d={p} fill="#3056D3"/>
        ))}
      </svg>
    </>
  )
}
