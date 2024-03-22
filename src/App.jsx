import { Col, Container, Row } from "react-bootstrap";
import './App.css';
import MenuSection from "./components/MenuSection";
import MenuItem from "./components/MenuItem";
import { useState } from "react";


export default function App() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      <Container
        className={`flippable-menu ${isFlipped ? 'flipped-menu' : ''}`}
        onClick={handleClick}
      >
        <div className="menu-front" >
          <Row className="p-5 g-5" >
            <Col sm={6} >
              <Row sm={4} className="mb-4 d-flex justify-content-center "  >
                <span style={{ fontSize: '117px', lineHeight: '90px', marginLeft: '-80px' }}>MENU</span>
              </Row>
              <Row sm={5} >
                <MenuSection title={'Main Course'} >
                  <MenuItem
                    menuName={'Nasi Lemak'}
                    price={'5.00'}
                    description={'Fragrant coconut rice served with sambal (spicy chili paste), fried anchovies, peanuts, boiled egg, and cucumber slices.'} />
                  <MenuItem
                    menuName={'Char Kway Teow'}
                    price={'6.50'}
                    description={'Stir-fried flat rice noodles with prawns, cockles, Chinese lap cheong (sausage), eggs, bean sprouts, and chives in a savory soy sauce.'} />
                  <MenuItem
                    menuName={'Hainanese Chicken Rice'}
                    price={'7.00'}
                    description={'Poached chicken served with fragrant rice cooked in chicken broth, accompanied by chili sauce, ginger paste, and soy sauce.'} />

                </MenuSection>
              </Row>
              <Row sm={3} >
                <MenuSection title={'Dessert Section'} >
                  <MenuItem
                    menuName={'Cendol'}
                    price={'3.00'}
                    description={'A traditional Malaysian dessert made of pandan-flavored rice flour jelly served with coconut milk, palm sugar syrup, and shaved ice.'} />
                  <MenuItem
                    menuName={'Ais Kacang (ABC)'}
                    price={'4.00'}
                    description={'Sliced bananas coated in batter, deep-fried until crispy, and served with a dusting of powdered sugar or a drizzle of sweet syrup.'} />
                </MenuSection>
              </Row>
            </Col>
            <Col sm={6} >
              <Row sm={4} >
                <MenuSection title={'Starter'} >
                  <MenuItem
                    menuName={'Popiah'}
                    price={'4.00'}
                    description={'Fresh spring rolls filled with julienned vegetables, tofu, shrimp, and sometimes minced pork, served with a sweet hoisin-based sauce.'} />
                  <MenuItem
                    menuName={'Sambal Udang'}
                    price={'4.00'}
                    description={'Spicy chili shrimp stir-fried with onions, garlic, and belacan (shrimp paste), served with cucumber slices.'} />
                </MenuSection>
              </Row>
              <Row sm={4} >
                <MenuSection title={'Appetizer'} >
                  <MenuItem
                    menuName={'Satay'}
                    price={'1.50'}
                    description={'Skewered and grilled marinated meat (commonly chicken, beef, or lamb) served with a peanut sauce, cucumber, and ketupat (compressed rice cake).'} />
                  <MenuItem
                    menuName={'Otak-Otak'}
                    price={'2.00'}
                    description={'Spicy fish paste wrapped in banana leaves and grilled, giving it a smoky flavor, often served as a snack or appetizer.'} />
                </MenuSection>
              </Row>
              <Row sm={4} >
                <MenuSection title={'Drinks'} >
                  <MenuItem
                    menuName={'Teh Tarik'}
                    price={'1.50'}
                    description={'Malaysian-style pulled tea made from black tea and condensed milk, giving it a creamy and frothy texture.'} />
                  <MenuItem
                    menuName={'Kopi O'}
                    price={'1.20'}
                    description={'Strong black coffee brewed with dark roasted beans and served without milk, often sweetened with sugar.'} />
                </MenuSection>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="menu-back" >
          <Row className="p-5 g-5" >
            <Col sm={6} >
              <Row sm={5} >
                <MenuSection title={'Western Food'} >
                  <MenuItem
                    menuName={'Classic Cheeseburger'}
                    price={'10.90'}
                    description={'A juicy beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles, served on a toasted sesame seed bun.'} />
                  <MenuItem
                    menuName={'Spaghetti Bolognese'}
                    price={'12.90'}
                    description={'Al dente spaghetti tossed in a rich and savory homemade Bolognese sauce made with ground beef, tomatoes, onions, and herbs, sprinkled with Parmesan cheese.'} />
                  <MenuItem
                    menuName={'Chicken Alfredo Pasta'}
                    price={'14.90'}
                    description={'Fettuccine noodles tossed in a creamy Alfredo sauce with tender slices of grilled chicken breast, finished with a sprinkle of parsley and cracked black pepper.'} />

                </MenuSection>
              </Row>
              <Row >
                <MenuSection title={'Seafood'} >
                  <MenuItem
                    menuName={'Grilled Salmon Fillet'}
                    price={'16.00'}
                    description={'Fresh Atlantic salmon fillet seasoned with herbs and lemon, grilled to perfection, and served with a side of steamed vegetables and lemon butter sauce.'} />
                  <MenuItem
                    menuName={'New England Clam Chowder'}
                    price={'11.00 (Bowl)'}
                    description={'Rich and creamy clam chowder made with tender clams, potatoes, onions, celery, and smoky bacon.'} />
                  <MenuItem
                    menuName={'Crab Cakes'}
                    price={'18.00'}
                    description={'Handcrafted crab cakes made with lump crab meat, breadcrumbs, and spices, served with a side of remoulade sauce and a fresh lemon wedge.'} />
                </MenuSection>
              </Row>
            </Col>
            <Col sm={6} >
              <Row sm={4} >
                <MenuSection title={'Sushi and Sashimi'} >
                  <MenuItem
                    menuName={'California Roll'}
                    price={'9.00'}
                    description={'Crab meat, avocado, and cucumber wrapped in sushi rice and seaweed, served with pickled ginger, wasabi, and soy sauce.'} />
                  <MenuItem
                    menuName={'Sashimi Platter'}
                    price={'15.00'}
                    description={'Assorted slices of fresh raw fish including tuna, salmon, and yellowtail, served with shredded daikon radish and soy sauce.'} />
                </MenuSection>
              </Row>
              <Row sm={5} >
                <MenuSection title={'Noodles and Rice'} >
                  <MenuItem
                    menuName={'Chicken Teriyaki Donburi'}
                    price={'10.50'}
                    description={'Grilled chicken glazed with sweet teriyaki sauce, served over a bed of steamed Japanese rice and garnished with sesame seeds and green onions.'} />
                  <MenuItem
                    menuName={'Chirashi Bowl'}
                    price={'17.00'}
                    description={'Assorted sashimi slices served atop a bowl of sushi rice, accompanied by shredded egg, seaweed salad, and a dollop of wasabi.'} />
                </MenuSection>
              </Row>
              <Row sm={3} >
                <MenuSection title={'Juice'} >
                  <MenuItem
                    menuName={'Mango Lychee Cooler'}
                    price={'5.50'}
                    description={'A tropical blend of sweet mango and fragrant lychee juice, served over ice for a refreshing taste.'} />
                  <MenuItem
                    menuName={'Watermelon Mint Refresher'}
                    price={'4.50'}
                    description={'Juicy watermelon juice muddled with fresh mint leaves, offering a cool and hydrating drink perfect for hot days.'} />
                </MenuSection>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}


