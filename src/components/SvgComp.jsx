
//import PathforSVG from './PathforSVG'

export default function SvgComp({width , height ,viewBox,fill, className , xmlns="http://www.w3.org/2000/svg",path}) {
  return (
    <>
      <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill= {fill}
      xmlns={xmlns}
      className={className}
      >
      {path.map((p, index) => (
          <path key={index}d={p}/>
        ))}
      </svg>
      
    </>
  )
}
