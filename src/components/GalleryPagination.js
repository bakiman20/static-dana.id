import React from 'react'
import Pagination from 'react-paginating'
import PropTypes from 'prop-types'
import ChevronLeft from 'imgs/svgs/ChevronLeft'
import ChevronRight from 'imgs/svgs/ChevronRight'

import 'styles/GalleryPagination.scss'

const GalleryPagination = ({
  currentPage,
  limit,
  pageCount,
  total,
  handlePageChange,
}) => {
  return (
    <div>
      <Pagination
        total={total}
        limit={limit}
        pageCount={pageCount}
        currentPage={currentPage}
      >
        {({
          pages,
          currentPage,
          hasNextPage,
          hasPreviousPage,
          previousPage,
          nextPage,
          totalPages,
          getPageItemProps,
        }) => (
          <div className="gallery-pages">
            <button
              {...getPageItemProps({
                pageValue: previousPage,
                onPageChange: handlePageChange,
              })}
              disabled={currentPage === 1}
              className="gallery-pages_prev"
            >
              <ChevronLeft />
              <span className="gallery-pages_label">Back</span>
            </button>

            {pages[0] > 1 && (
              <button
                className="gallery-pages_button"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: handlePageChange,
                })}
              >
                1
              </button>
            )}

            {pages[0] > 2 && <span className="gallery-pages_dots">...</span>}

            {pages.map(page => {
              let classNames = 'gallery-pages_button'
              if (currentPage === page) {
                classNames = classNames + ' active'
              }
              return (
                <button
                  key={page}
                  className={classNames}
                  {...getPageItemProps({
                    pageValue: page,
                    onPageChange: handlePageChange,
                  })}
                >
                  {page}
                </button>
              )
            })}

            {pages[pages.length - 1] < totalPages - 1 && (
              <span className="gallery-pages_dots">...</span>
            )}

            {pages[pages.length - 1] < totalPages && (
              <button
                className="gallery-pages_button"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: handlePageChange,
                })}
              >
                {totalPages}
              </button>
            )}

            <button
              {...getPageItemProps({
                pageValue: nextPage,
                onPageChange: handlePageChange,
              })}
              disabled={currentPage === totalPages}
              className="gallery-pages_next"
            >
              <span className="gallery-pages_label">Next</span>
              <ChevronRight />
            </button>
          </div>
        )}
      </Pagination>
    </div>
  )
}
GalleryPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
}

export default GalleryPagination
