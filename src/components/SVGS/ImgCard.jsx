
import BedSvg from './BedSvg'
import BathSvg from './BathSvg'

export default function ImgCard({link,name,price,n_bed,n_bath}) {
  return (
    <>
       <div className="p-4 bg-white rounded-lg border border-gray-600/10">
          
          <img src={link} alt="property"/>

          <div className="p-6">
            <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
            {/*<!-- <div>
                  2 beds &bull; 2 baths
              </div> -->*/}
            <div className="mt-2">
              <span className="text-xl font-extrabold text-blue-600">{price}</span> /M
            </div>

          </div>
          <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
            <div className="flex items-center">
              <BedSvg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"/>
              <p><span className="font-bold text-gray-900">{n_bed}</span> Bedrooms</p>
            </div>
            <div className="flex items-center">
               <BathSvg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"/>
              <p><span className="font-bold text-gray-900">{n_bath}</span> Bathrooms</p>
            </div>
          </div>
        </div>
    </>
  )
}
