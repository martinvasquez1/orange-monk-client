export default function Pagination({ currentPage, setPage, totalPages }) {
  const amountOfButtons = 7;
  const offset = Math.floor(amountOfButtons / 2);

  let initialPage = null;
  if (currentPage <= offset) {
    initialPage = 1;
  } else if (currentPage >= totalPages - offset) {
    initialPage = totalPages - amountOfButtons + 1;
  } else {
    initialPage = currentPage - offset;
  }

  if (totalPages === 1) return null;

  return (
    <div className="join my-8 flex w-full justify-center">
      {Array.from({ length: amountOfButtons }).map((_, index) => {
        const pageNumber = initialPage + index;

        if (pageNumber < 1 || pageNumber > totalPages) return null;

        return (
          <button
            className={`btn join-item ${currentPage === pageNumber ? 'btn-primary border-primary' : 'bg-base-100'} min-w-14 border-base-100`}
            key={index}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
}
