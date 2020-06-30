import React,{useState} from 'react';
import {Container, Header, Divider, Icon} from 'semantic-ui-react';
import Navbar from './Navbar';
import {Footer} from './Footer';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [active, setActive] = useState('false');
  return (
    <div class={styles.body}>
      <Navbar tab='Home'/>
      <div class={styles.Body}>
        <Header size='huge' textAlign='center' content='Portfolio'/>
        <Divider/>
        <Container>
          Cillum in singulis. Quem deserunt ubi appellat. Commodo veniam te admodum
          praesentibus, deserunt ita magna, se nescius comprehenderit de id fore
          adipisicing.Iis ullamco concursionibus. Fabulas in singulis do ut amet doctrina
          sempiternum, quid despicationes laboris legam offendit, te esse quae ut
          cernantur. De ipsum ipsum dolor admodum se quamquam sempiternum aut excepteur id
          aliqua ita quamquam ab aliqua sed expetendis e tamen laborum qui laborum enim
          officia se enim graviterque ullamco quorum litteris aut singulis ex nulla,
          veniam pariatur ut quid anim. Nescius summis senserit.
          <div onClick={()=>{(active==='true')?setActive('false'):setActive('true')}} class={(active==='false')?styles.show:styles.hide}>
            <Icon name='angle double right'/>
          </div>
          <div class={(active==='true')?styles.show:styles.hide}>
            Ullamco cillum esse nescius velit o cillum se a quis incididunt, qui fore
            senserit constias ad aliquip labore fabulas. Ingeniis nam ullamco hic laboris
            consectetur ita doctrina ab ita sunt cillum tamen incididunt, singulis esse
            litteris mentitum. Sint id a nulla appellat, voluptate est magna, fabulas
            eruditionem se expetendis in export officia e nulla sunt a ita dolor probant
            officia hic o id fugiat quae quae, ut possumus a probant, anim consequat
            exercitation.Irure id in ipsum laboris. Singulis sunt aliquip. Hic multos
            cupidatat graviterque ubi offendit aliqua ab singulis reprehenderit, occaecat
            velit malis ab dolor, culpa senserit laborum. Aliquip labore senserit deserunt a
            aliquip aute cillum an enim, id quibusdam voluptatibus ea dolor e mandaremus sed
            sint, qui iis despicationes, appellat est deserunt, a occaecat sempiternum hic
            sint iudicem sed exquisitaque.
          </div>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}
