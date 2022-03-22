import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  height: 90px;
  border: 2px solid blue;
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 0px 190px 0px 190px;
`;
export const Logo = styled.img`
  width: 40px;
  height: 48.09px;
  margin-right: 12px;
`;
export const Logobar = styled.div`
  display: flex;
  align-items: center;
`;
export const Menubar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 465px;

  .active {
    border-bottom: 5px solid red;
  }
`;

Logobar.Tytle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: #ffffff;
  cursor: pointer;
  :active {
    transform: translateY(1.5px);
  }
`;
Menubar.Menu = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  cursor: pointer;
  :active {
    transform: translateY(1.5px);
  }
`;
