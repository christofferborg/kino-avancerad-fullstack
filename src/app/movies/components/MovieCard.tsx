export default function MovieCard() {   
    return (

        
        <div className="
        flex flex-col
        bg-[var(--color-card)]
        rounded-[1rem]
        overflow-hidden
        max-w-[220px]
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
        transition-transform
        transition-shadow
        duration-300
        hover:scale-105
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.8)]
      ">
        
          <div>
          <img className="w-full h-[272px] object-cover" 
          src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" alt="Pulp Fiction"></img>
          </div>
          
          <div className="py-3 px-4">
            <h2 className="text-sm font-bold mb-0.5">Pulp Fiction</h2>
            <p className="text-sm font-semibold mb-0.5 text-gray-400">Unknown genre</p>
          </div>

        </div>

        //TODO: Ändra bild till bildlänk när vi har datan, och img till Image?
 

    );
}