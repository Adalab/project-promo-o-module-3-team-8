import '../style/App.scss';
import { useState, useEffect } from 'react';
import CallToApi from '../services/CallToApi';
import ls from '../services/localStorage';
import Header from './Header';
import Preview from './Preview';
import Footer from './Footer';
import WhiteSection from './3WhiteSection';

function App() {
  const [dataCard, setDataCard] = useState('');

  const handleInput = (name, value) => {
    const inputChange = name;
    setData({
      ...data,
      [inputChange]: value,
    });
  };

  const [data, setData] = useState(
    ls.get('lsData', {
      palette: 'palette1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    })
  );
console.log(data.photo);
  useEffect(() => {
    ls.set('lsData', data);
  }, [data]);

  const [cardLink, setCardLink] = useState('hidden');

  // Componente imagen
  const updateAvatar = (avatar) => {
    setData({
      ...data,
      photo: avatar,
    });
  };

  // Reset button
  const handleResetBtn = () => {
    setData({
      palette: 'palette1',
      name: '',
      job: '',
      email: '',
      photo: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  // Fetch y Botón de compartir
  const handleSharebtn = (ev) => {
    ev.preventDefault();
    CallToApi(data).then((dataCard) => {
      setDataCard(dataCard.cardURL);
    });
  };

  return (
    <div className="page">
      <Header />
      <main>
        <form className="maincontainer" action="#" method="post">
          <Preview data={data} handleResetBtn={handleResetBtn} />
          <WhiteSection
            data={data}
            handleInput={handleInput}
            handleSharebtn={handleSharebtn}
            dataCard={dataCard}
            cardLink={cardLink}
            updateAvatar={updateAvatar}
          />
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
