import React from 'react'
import ImgCard from './SVGS/ImgCard'

export default function Available() {

    const propertyInfo =[
        {
            link:"https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Modern Design villa",
            price:"$3000.00",
            n_bed: 3,
            n_bath: 2
        },
        {
            link:"https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Special Design villa",
            price:"$5000.00",
            n_bed: 3,
            n_bath: 2
        },
        {
            link:"https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=",
            name:"Latest Design villa",
            price:"$2000.00",
            n_bed: 2,
            n_bath: 1
        },
        {
            link:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Italian Design villa",
            price:"$4000.00",
            n_bed: 4,
            n_bath: 2
        },
        {
            link:"https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Artistic Design villa",
            price:"$3500.00",
            n_bed: 5,
            n_bath: 2
        }
    ]
  return (
    <>
       <section>
    <div className="container">
      <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
        <span className="mb-2 block text-lg font-semibold text-primary">
          Properties
        </span>
        <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
          Grab your Dream Property
        </h2>
        <p className="text-base text-body-color dark:text-dark-6">
          There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {propertyInfo.map((item, index) => (
        <ImgCard key={index} link={item.link} name={item.name} price={item.price} n_bed={item.n_bed} n_bath={item.n_bath}/>
      ))}

      
        
      </div>
    </div>

  </section>
    </>
  )
}
