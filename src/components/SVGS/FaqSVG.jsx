

export default function FaqSVG({width,height, viewBox ,className,path}) {
  return (
    <>
      <svg width={width} height={height}viewBox={viewBox}className={className}>
      {path.map((p, index) => (
          <path key={index}d={p}/>
        ))}
      </svg>
    </>
  )
}
