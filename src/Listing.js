import React from 'react';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  if (title.length < 51) {
    return <p className="item-title">{title}</p>
  }
  return <p className="item-title">{`${title.slice(0, 50)}...`}</p>
}

const Price = ({currencyCode, price}) => {
  if (currencyCode === 'USD') {
    return <p className="item-price">${price}</p>
  }
  if(currencyCode === 'EUR') {
    return <p className="item-price">€{price}</p>
  }
  return <p className="item-price">{`${price} ${currencyCode}`}</p>
}

const Quantity = ({quantity}) => {
  let quantityLevel = null;

  if (quantity <= 10) {
    quantityLevel = 'low';
  }
  if (quantity >= 10) {
    quantityLevel = 'medium';
  }
  if (quantity > 20) {
    quantityLevel = 'high';
  }

  return <p className={`item-quantity level-${quantityLevel}`}>{`${quantity} left`}</p>
}

const Card = ({item}) => {
  if (item.state === 'active') {
    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <Title title={item.title} />
          <Price currencyCode={item.currency_code} price={item.price} />
          <Quantity quantity={item.quantity} />
        </div>
      </div>
    )
  }
  return null;
}

const Listing = ({items}) => {
  return (
    <div className="wrapper">
      <div className="item-list">
        {
          items.map(item => {
            return <Card item={item} key={item.listing_id}/>
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