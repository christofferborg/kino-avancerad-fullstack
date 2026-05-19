 import Image from "next/image";
 
 export default function UpcomingScreening() {
  return (
       <section className="mt-5 grid gap-6 md:mx-auto md:mt-0 md:max-w-7xl md:px-4 md:gap-3 md:grid-cols-[1.7fr_0.7fr]">
               <Image
                 src="/img/action.png"
                 alt="Action Night"
                 width={700}
                 height={400}
                 className="h-full w-full object-cover"
               />
       
               <div className="bg-card px-10 py-8 md:px-5 md:py-2">
                 <h3 className="mb-4 text-center text-xl font-bold md:mb-1">
                   Prislista
                 </h3>
       
                 <div className="space-y-1">
                   <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
                     <span>Vuxen</span>
                     <span>200kr</span>
                   </div>
       
                   <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
                     <span>Barn</span>
                     <span>100kr</span>
                   </div>
       
                   <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
                     <span>Student</span>
                     <span>150kr</span>
                   </div>
       
                   <div className="mx-auto flex max-w-[220px] justify-between text-sm md:max-w-none">
                     <span>Pensionär</span>
                     <span>150kr</span>
                   </div>
                 </div>
       
                 <p className="mt-6 text-center text-xs text-muted md:mt-2 md:text-left">
                   *Andra priser gäller under evenemang.
                 </p>
               </div>
             </section>

            );
}