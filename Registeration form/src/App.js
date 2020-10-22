import React from 'react';
import Form from './components/Form'
import './App.css';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-image: url(${require('./extra/images/Cover.png')});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 780px) {
    background-image: url(${require('./extra/images/Cover1.png')});
  }
`
const CenterArea = styled.div`
  width: 80%;
  min-height: 56%;
  background: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 20px auto;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  @media (max-width: 470px) {
    width: 90%;
  }
`
const Info = styled.div`
  width: 45%;
  background: #83ba5e;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px 20px;
  h2{
    color: #fffff8;
    width: 100%;
    text-align: center;
  }
  .fragment{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    width: 100%;
    padding: 0;
  }
  @media(max-width: 770px) {
    min-height: 20rem;
    width: 100%;
  }
  @media(max-width: 430px) {
    h2{
      font-size: 1.25rem
    }
  }
`
const ContactUs = styled.p`
  color: #2e4050;
  text-align: center;
a{
    text-decoration: none;
    color: #986798;
    text-align: center;
    font-weight: bold;
}
`
const TechiaImg = styled.img`
  width: 100%;
`

const NewForm = styled.div`
width: 55%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 35rem;
padding: 20px;
@media (max-width: 770px) {
  min-height: 25rem;
  width: 100%;
}
`

function App() {
  return (
      <div className="App">
        <Layout>
          <CenterArea>
            <Info>
              <div className="fragment">
                <a href="https://techilacon.com/" target="blank">
                  <TechiaImg src={require('./extra/images/techilacon.png')} alt="techila" />
                </a>
                <h2>Welcome to Techila Hackathon</h2>
              </div>
              <ContactUs>Do you have any question? <a href="https://www.codegeist.co/index.html#ContactUs" target="blank">Contact us</a></ContactUs>
            </Info>
            <NewForm>
              <Form />
            </NewForm>
          </CenterArea>
        </Layout>
      </div>
  );
}

export default App;
