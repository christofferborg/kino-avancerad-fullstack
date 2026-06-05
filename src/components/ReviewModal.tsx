"use client";
import {useState, FormEvent} from "react";
import { useRouter } from "next/navigation";

interface ReviewModalProps {
    movieId: string;
}

export default function ReviewModal({movieId}: ReviewModalProps) {
   const router = useRouter();
    const [isOpen, setIsOpen] = useState(false); 
    const [name, setName] = useState("");
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hoverRating, setHoverRating] = useState<number | null>(null);
    
    

    async function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/comments", {method: "POST", headers: {"content-type": "application/json"},
            body: JSON.stringify({name, rating, comment, movieId}),
        })
            if(response.ok){
                const databaseResult = await response.json();
                console.log("Svar från databasen:", databaseResult);
                setName("")
                setComment("")
                setIsOpen(false)
                router.refresh()
            } else {
                alert("Något gick fel!")
            }
            }catch{
                {console.error( "Nätverksfel")}
        }
        setIsSubmitting(false)
    }
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-between bg-card text-main text-left text-base h-[72px] w-[400px] mt-4 px-8 rounded-[10px] hover:text-muted transition cursor-pointer"
        >
          <span>Skriv recension</span>
          <span>›</span>
        </button>

        {isOpen && (
          <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <form
              onSubmit={handleSubmit}
              className="bg-card p-4 pt-1 lg:w-[560px] sm:w-[382px] rounded-[10px] flex flex-col gap-2 m-4"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="self-end text-muted h-12 hover:text-main transition text-right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-9 h-10 stroke-current" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="w-full max-w-[334px] lg:max-w-[400px] mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Lämna en recension
                </h2>

                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-sm font-bold mb-1">Namn*</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background text-white p-3 rounded-[5px] border border-muted focus:outline-none focus:border-main"
                    placeholder="Namn Namnsson"
                  />
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-sm font-bold mb-4">Betyg(1-5):</label>
                  <div className="flex flex-row w-full pl-6 pr-6 justify-between">
                    {[1, 2, 3, 4, 5].map((starNumber) => {
                      const isFilled = starNumber <= (hoverRating || rating);
                      return (
                        <button
                          type="button"
                          key={starNumber}
                          onClick={() => setRating(starNumber)}
                          onMouseEnter={() => setHoverRating(starNumber)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="transition-transform hover:scale-110 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            fill={isFilled ? "currentColor" : "none"}
                            className={`w-10 h-10 ${isFilled ? "text-secondary stroke-secondary" : "text-secondary stroke-secondary"}`}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499c.151-.326.621-.326.772 0l2.36 4.78 5.274.767c.36.052.504.494.244.749l-3.817 3.72.901 5.251c.062.362-.317.637-.643.465L12 16.732l-4.717 2.482c-.325.172-.705-.103-.643-.465l.901-5.251-3.817-3.72c-.26-.255-.117-.697.244-.749l5.274-.767 2.36-4.78z"
                            />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  <label className="text-sm font-bold mb-1">Kommentar*</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                    className="bg-background text-white p-3 rounded-[5px] border border-muted focus:outline-none focus:border-main resize-none"
                    placeholder="Jag tycker att..."
                  />
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" mb-6 flex-1 text-lg bg-secondary font-bold text-background h-12 rounded-[5px] hover:bg-secondary-hover transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sparar..." : "Skicka recension"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </>
    );
}