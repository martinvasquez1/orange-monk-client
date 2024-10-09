export default function Pagination({ currentPage, totalPages, setPage }) {
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

  return (
    <div className="join">
      {Array.from({ length: amountOfButtons }).map((_, index) => {
        const pageNumber = initialPage + index;

        if (pageNumber < 1 || pageNumber > totalPages) return null;

        return (
          <button
            className={`btn join-item ${currentPage === pageNumber ? 'btn-primary' : ''}`}
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
