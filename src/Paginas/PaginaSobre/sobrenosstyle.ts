import styled from "styled-components";
export const Container = styled.div.attrs({ className: "container" })`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  .container {
    font-family: "Roboto", sans-serif;
    overflow-x: hidden;
    background-color: #ecf3fb;
  }

  .imagem-fundo {
    width: 100vw;
    background-image: url("/images/fotomoto1.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

  .transparencia {
    width: 100vw;
    min-height: 100vh;
    padding: 50px;
    background-color: #333333d8;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  .transparencia .titulo {
    color: #fff;
    margin-bottom: 25px;
  }

  .transparencia h1 {
    color: #333;
    font-size: 38px;
    font-weight: bold;
    text-align: center;
  }

  .MVV {
    max-width: 1125px;
    display: flex;
    flex-direction: column;
  }

  .card li {
    width: 100%;
    margin: 15px 0;
    text-align: left;
    font-size: 1.25em;
  }
  
  .card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;
    height: 325px;
    margin: 5px;
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    background-color: #fff;
  }

  .card div{
    width: 80%;
  }

  .card li{
    text-align: center;
  }
  
  .iconMissao {
    width: 70px;
    height: 70px;
    background-image: url("../../assets/images/icons/Missao.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

  .conteudo {
    padding: 20px;
  }

  .ODS {
    width: 100vw;
    height: 800px;
    background-color: #ecf3fb;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 20px;
  }

  .ODS h1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .cardODS {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    max-width: 1200px;
    width: 95%;
    gap: 20px;
    padding: 10px;
  }

  .cardODS li {
    font-size: 1.25em;
    margin: 2px 15px;
  }

  .ODS4 {
    width: 30%;
    max-width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    border-radius: 30px;
    box-shadow: 10px 0px 4px 1px #f38342c5;
  }

  .iconOds04 {
    width: 102px;
    height: 102px;
  }

  .ODS8 {
    width: 30%;
    max-width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    border-radius: 30px;
    box-shadow: 10px 0px 4px 1px #f38342c5;
  }

  .ODS11 {
    width: 30%;
    max-width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    border-radius: 30px;
    box-shadow: 10px 0px 4px 1px #f38342c5;
  }

  .ODS11 p,
  .ODS8 p,
  .ODS4 p {
    width: 100%;
    padding: 10px;
  }

  .team-section {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin-top: 40px;
    background-color: #005a8d;
    padding: 20px;
  }

  .visaoFuturo {
    display: flex;
    align-items: center;
    max-width: 1200px;
    gap: 50px;
    margin: auto;
  }

  .visaoFuturo img {
    width: 30%;
  }

  .visaoFuturo div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
    font-size: 1.25em;
  }

  .visaoFuturo div h2 {
    text-align: center;
    font-size: 2em;
  }

  .team-section h1 {
    color: #fff;
  }

  .team-container {
    width: 100vw;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    background-color: #005a8d;
  }

  .team-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    text-align: center;
    width: 200px;
  }

  .team-avatar {
    position: relative;
    border-radius: 50%;
    height: 100px;
    margin: 0 auto 10px;
    width: 100px;
  }

  .team-name {
    font-size: 1.2em;
    margin: 10px 0;
  }

  .team-role {
    color: #666;
    font-size: 0.9em;
    margin: 5px 0 15px;
  }

  .team-icons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .team-icon-link {
    color: #333;
    font-size: 1.2em;
  }
`;
