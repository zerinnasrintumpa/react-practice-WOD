import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import TopMenu from './TopMenu'
import CenterImage from './CenterImage'
import BottomFooter from './BottomFooter'

const Boardroom = () => (
    <div>
      <TopMenu></TopMenu>
      <CenterImage></CenterImage>
      <BottomFooter></BottomFooter>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Boardroom />);
