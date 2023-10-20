import React from 'react'
import { Link } from 'react-router-dom';
import { Book, User, Location} from './CardSvg';
import { ReadMore } from '../../others/Button';

const CardOne = ({ cardImage, cardPrice, cardTitle }) => {
  return (
    <div className='Classes-Card'>
        <div className="Card">
          <div className="Card-image">
            <img src={cardImage} alt="Card-img" className='card-img'/>
          </div>
          <div className="Card-info">
            <div className="price">
              <p>{cardPrice}</p>
            </div>
            <h4 className="Class-title"><Link href="/">{cardTitle}</Link></h4>
            <div className="Class-info">
              <ul className='Class-structure'>
                <li>
                  <Book />
                  13 Lessons
                </li>
                <li>
                  <User />
                  20 Students
                </li>
              </ul>
              <ul className='Class-location'>
                <li>
                  <Location />
                  Alice Bohm, Linda Glendell
                </li>
              </ul>
            </div>
            <ReadMore title="Enroll Now" />
          </div>
        </div>
    </div>
  )
}

export default CardOne;