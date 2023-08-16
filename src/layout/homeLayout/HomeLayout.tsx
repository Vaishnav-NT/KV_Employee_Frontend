import './styles.css';
import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/Subheader/SubHeader';

export type HomeLayoutPropsType = {
  headerText: string;
  actionButtonText?: string;
  actionButtonlogo?: string;
  handleClickOnActionButton?: () => void;
};

const HomeLayout: React.FC<HomeLayoutPropsType> = ({
  headerText,
  actionButtonText,
  actionButtonlogo,
  handleClickOnActionButton,
  children
}) => {
  return (
    <div className='home-div'>
      <Header />
      <div className='main-body'>
        <NavBar />
        <div className='content-div'>
          <SubHeader
            headerText={headerText}
            actionButtonText={actionButtonText}
            actionButtonlogo={actionButtonlogo}
            onClick={handleClickOnActionButton}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
