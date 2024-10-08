

import CtaSvg1 from "./SVGS/CtaSvg1";
import CtaSvg2 from "./SVGS/CtaSvg2";

export default function CTA() {
  return (
    <>
     <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
    <div className="container mx-auto">
      <div className="relative overflow-hidden">
        <div className="-mx-4 flex flex-wrap items-stretch">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[570px] text-center">
              <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                <span>What Are You Looking For?</span>
                <span className="text-3xl font-normal md:text-[40px]">
                  Get Started Now
                </span>
              </h2>
              <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                There are many variations of passages of Lorem Ipsum but the
                majority have suffered in some form.
              </p>
              <a href="javascript:void(0)"
                className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]">
                Let&apos;s have a meeting
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <span className="absolute left-0 top-0">
        <CtaSvg1 width="495" height="470" viewBox="0 0 495 470" fill="none" xmlns="http://www.w3.org/2000/svg"/>
       
      </span>
      <span className="absolute bottom-0 right-0">
        <CtaSvg2 width="493" height="470" viewBox="0 0 493 470" fill="none" xmlns="http://www.w3.org/2000/svg"/>
      
      </span>
    </div>
  </section>
    </>  
    )
}
