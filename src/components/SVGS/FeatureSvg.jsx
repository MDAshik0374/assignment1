

export default function FeatureSvg({width , height ,viewBox,fill, xmlns,path}) {
  return (
    <>
      <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill= {fill}
      xmlns={xmlns}
      >
      {path.map((p, index) => (
          <path key={index}d={p} fill="white"/>
        ))}
      </svg>
    </>
  )
}
