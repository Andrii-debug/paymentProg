import React, {useState} from 'react';
import './App.css';
import Card from './components/Card';
import ModalForm from './UI/ModalForm';
import PaidText from './UI/PaidText';
import Image from './components/Image';
import Iban from './components/Iban';

function App(props) {

  
  
  const [data, setData] = useState(props.data)
  const [totalAmount, setTotalAmount] = useState(1000)
  const [paid, setPaid] = useState(0)
  



  function calculate(data) {
    console.log(data);
    let int = parseFloat(data.value)
    if (int > totalAmount) {
      return 
    }
    let sum = totalAmount - int
    let calcPaid = paid + int
    setTotalAmount(sum)
    setPaid(calcPaid)
  }




  function importAll(r) {
  return r.keys().map(r);
  }

    const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

    const items = data.loans.map(loan => <Iban key={Math.random().toString()} title={loan.title} iban={loan.IBAN} /> )
    const imgs = images.map(item => <Image item={item} key={Math.random().toString()} items={items} />)
  
    return (
    <React.Fragment>
      
      
    <div className="App">
        
    <div className='main_block'>
    
            <div className="amount">
            Усього на Балансі: ₴{totalAmount}
        </div>

            
            <Card items={items[0]} images={imgs[0]} data={calculate} totalAmount={totalAmount} />
            <Card items={items[1]} images={imgs[1]} data={calculate} totalAmount={totalAmount} />
            <Card items={items[2]} images={imgs[2]} data={calculate} totalAmount={totalAmount} />
            <Card items={items[3]} images={imgs[3]} data={calculate} totalAmount={totalAmount} />
            <Card items={items[4]} images={imgs[4]} data={calculate} totalAmount={totalAmount} />
            <Card items={items[5]} images={imgs[5]} data={calculate} totalAmount={totalAmount} />
          
          
            <div className='total'>Оплачено Усього: ₴{paid}</div>
        </div>
   
    </div>
    </React.Fragment>
);
}

export default App;
