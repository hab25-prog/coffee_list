import React from 'react'
import './CoffeeCard.css'

function CoffeeCard({ coffee }) {
  const { name, price, rating, votes, image, isPopular, isSoldOut } = coffee

  const renderRating = () => {
    if (rating === null || votes === 0) {
      return (
        <div className="rating">
          <svg className="star-icon empty" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          <span className="rating-text">No ratings</span>
        </div>
      )
    }

    return (
      <div className="rating">
        <svg className="star-icon filled" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
        <span className="rating-text">
          {rating} ({votes} votes)
        </span>
      </div>
    )
  }

  return (
    <div className="coffee-card">
      <div className="card-image-container">
        <img 
          src={image} 
          alt={name}
          className="card-image"
          referrerPolicy="no-referrer"
        />
        {isPopular && (
          <span className="popular-badge">Popular</span>
        )}
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{name}</h3>
          <span className="card-price">{price}</span>
        </div>
        
        <div className="card-footer">
          {renderRating()}
          {isSoldOut && (
            <span className="sold-out-badge">Sold out</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
