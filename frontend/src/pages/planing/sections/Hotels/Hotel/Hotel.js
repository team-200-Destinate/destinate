import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from '../../../../../components/Button6/Button';
// import img from '../../../../../assets/images/heroIMG.jpg';
import './style.scss';

function Hotel(name, photoUrl, rating) {
  return (
    // <Card style={{ width: '18rem' }} className='gotelCard'>
    //   <Card.Img variant="top" src={img} />
    //   <Card.Body>
    //     <Card.Title>Hotel Name</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </Card.Text>
    //     <Button variant="primary"></Button>
    //   </Card.Body>
    // </Card>

    <>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 pt-14">
            <div className="max-w-lg mx-auto shadow-lg flex flex-col bg-slate-50 rounded-lg">
              <img src={photoUrl} alt='bla' className="w-full h-60 object-cover rounded-t-lg" />
              <div className="flex-grow flex flex-col justify-between">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{name}</div>
                  <p className="text-gray-700 text-base">{rating}</p>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Hotel