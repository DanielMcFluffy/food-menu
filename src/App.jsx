import { Col, Container, Row } from "react-bootstrap";
import './App.css';
import MenuSection from "./components/MenuSection";
import MenuItem from "./components/MenuItem";


export default function App() {

  return (
    <>
      <Container>
        <Row className="p-5 g-5" >
          <Col sm={6} >
            <Row sm={4} className="mb-4 d-flex justify-content-center "  >
              <span style={{ fontSize: '117px', lineHeight: '90px', marginLeft: '-80px' }}>MENU</span>
              <span>  </span>
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
            <Row sm={5} >
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
            <Row sm={3} >
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
      </Container>
    </>
  )
}


