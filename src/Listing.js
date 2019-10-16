import React from 'react';
import PropTypes from 'prop-types';

const Listing = ({items}) => {
  return (
    <div className="wrapper">
      <div className="item-list">
        {
          items.map(item => {
            return (
              item.state === 'active'
              &&
              <div key={item.listing_id} className="item">
                <div className="item-image">
                  <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                  </a>
                </div>
                <div className="item-details">
                  {
                    item.title < 51 
                    ? <p className="item-title">{item.title}</p> 
                    : <p className="item-title">{`${item.title.slice(0, 50)}...`}</p>
                  }
                  {
                    item.currency_code === 'USD'
                    ? <p className="item-price">${item.price}</p>
                    : item.currency_code === 'EUR'
                      ? <p className="item-price">€{item.price}</p>
                      : <p className="item-price">{`${item.price} ${item.currency_code}`}</p>
                  }
                  {
                    item.quantity <= 10 
                    && <p className={`item-quantity level-low`}>{`${item.quantity} left`}</p>
                  }
                  {
                    item.quantity >= 10 && item.quantity <= 20 
                    && <p className={`item-quantity level-medium`}>{`${item.quantity} left`}</p>
                  }
                  {
                    item.quantity > 20 
                    && <p className={`item-quantity level-high`}>{`${item.quantity} left`}</p>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

Listing.defaultProps = {
  items: [],
}

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      listing_id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      MainImage: PropTypes.shape({
        url_570xN: PropTypes.string.isRequired,
      }),
      title: PropTypes.string.isRequired,
      currency_code: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  )
}

export default Listing;