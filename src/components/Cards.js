import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0cm98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
              text='Live the Retro life with a Smile face'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://vistapointe.net/images/adventure-6.jpg'
              text='Visiting to the End of the Earth'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://miro.medium.com/max/9216/1*siqenXUFvg4iinAWF7o-ow.jpeg'
              text='Experience Calmness on the Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
