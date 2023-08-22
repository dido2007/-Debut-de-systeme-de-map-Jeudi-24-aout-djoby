import AnnoncesOffresCard from "./AnnoncesOffresCard";
function OffresGrid() {
    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
            <div key={index}>
                <AnnoncesOffresCard />
            </div>
            ))}
        </div>
      </>
    );
}
  
export default OffresGrid;