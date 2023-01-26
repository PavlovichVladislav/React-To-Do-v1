import { FC } from 'react';
import './Title.css';

type TitleProps = {
    title: string;
}

const Title: FC<TitleProps> = ({ title }) => (
  <h1 className="title">{title}</h1>
);

export default Title;