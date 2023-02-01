import { FC } from 'react';

import './Footer.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  }
];

type FooterProps = {
    amount: number;
    activeFilter: string;
    changeFilter: (activeFilter: string) => {type: string; activeFilter: string};
}

const Footer: FC<FooterProps> = ({ amount, activeFilter, changeFilter }) => (
  <div className="footer">
    <span className="amount">{`${amount} Tasks left`}</span>
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button
          onClick={() => changeFilter(id)}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
);

export default Footer;