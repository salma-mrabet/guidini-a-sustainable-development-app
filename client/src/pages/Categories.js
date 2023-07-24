import React, { useEffect, useState } from 'react';
import './Tinder.css';

const TinderCard = ({ imageSrc, title, duration, onCardClick }) => {
  return (
    <div className="card_card" style={{ marginTop: '100px' }} onClick={onCardClick}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="screen"></div>
        <div className="text">
          <p>{title}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.card_card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'none';
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transition = 'all 0.2s linear';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
  };

  const handleFreshProduceClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="wrapper" style={{ marginTop: '100px' }}>
      <h1>Show Categories</h1>
      <div className="cards">
        <div className="cardsWrapper">
          <TinderCard
            imageSrc="https://www.jbtc.com/foodtech/wp-content/uploads/sites/2/2021/08/Fresh-Produce-Collage.jpg"
            title="Fresh Produce"
            onCardClick={handleFreshProduceClick}
          />
          <TinderCard
            imageSrc="https://www.bruker.com/en/applications/food-analysis-and-agriculture/food-quality/milk-and-dairy/_jcr_content/root/herostage/backgroundImageVPL.coreimg.82.1280.jpeg/1596451146895/milk-dairy.jpeg"
            title="Dairy Products"
          />
          <TinderCard
            imageSrc="https://buzzer.lk/wp-content/uploads/2023/06/Bakery.jpg"
            title="Bakery Products"
          />
          <TinderCard
            imageSrc="https://vikingvillagefoods.com/wp-content/uploads/2018/01/meat-buying-items-68c.jpg"
            title="Meat and Poultry"
            
          />
          <TinderCard
            imageSrc="https://www.thehealthy.com/wp-content/uploads/2017/10/00_Myths-About-Frozen-Food-You-Need-to-Stop-Believing_223395673_Niloo_FT.jpg"
            title="Frozen Foods"
            
          />
          <TinderCard
            imageSrc="https://i.pinimg.com/originals/0e/ca/35/0eca35acbe3795f9507413d563471231.jpg"
            title="Dry Goods"
            
          /><TinderCard
            imageSrc="https://cdn.sanity.io/images/92ui5egz/production/e800a8eabc6f17a0eaed1bf6621b46aefa57b8cb-990x557.jpg?rect=0,19,990,520&w=1200&h=630&fm=jpg"
            title="Personal Care Products"
            
          />
          {/* Add more cards here... */}
          </div>
      </div>
      {showPopup && (
        <div className="popup">
          <h2>10 Advices for Fresh Produce:</h2>
          <ul>
            
            <li>Inspect for Quality: Always check the produce for signs of freshness. Look for vibrant colors, firmness, and avoid any bruised or damaged areas.</li>
            <li>Buy Seasonal Produce: Choose fruits and vegetables that are in-season. They are more likely to be fresher, tastier, and less expensive.</li>
            <li>Choose Locally Sourced: If possible, buy produce from local farmers or markets. It reduces the time between harvesting and consumption, ensuring better quality.</li>
            <li>Proper Storage: Learn how to store each type of produce correctly. Some fruits and vegetables are best kept in the fridge, while others should be stored at room temperature.</li>
            <li>Wash Thoroughly: Rinse fruits and vegetables under cool running water before consumption to remove dirt, bacteria, and pesticide residues.</li>
            <li>Use Ethylene Separators: Certain fruits and vegetables release ethylene gas, which can cause others to ripen or spoil faster. Use ethylene-absorbing liners or store them separately.</li>
            <li>Avoid Overloading: Don't overload your refrigerator or storage areas with too much produce. It can lead to improper air circulation and faster spoilage.</li>
            <li>Cut and Prepare Properly: If you need to cut or prepare produce in advance, do so properly and keep them in airtight containers to maintain freshness.</li>
            <li>Use within Timeframe: Consume fresh produce within the recommended timeframes. Some items have a short shelf life, while others can be frozen for later use.</li>
            <li>Be Mindful of Ripening: If you have produce approaching its ripeness, prioritize using or preserving it to avoid wastage.</li>
          </ul>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
      <div className="footer">
        <p>Booking rules</p>
        <p>Terms of use</p>
      </div>
    </div>
  );
};

export default Categories;
//