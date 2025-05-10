import './index.scss'
import { X } from "lucide-react";
import type { ReactNode } from 'react';
interface Iprops {
  type: string;
  icon: ReactNode;
  title: string;
  paragraph: string;
}

const Alert = ({ type, icon, title,paragraph}: Iprops) => {
  return (
    <div className={type}>
      <div className= "alert-header" >
        <div className="title">
        <span>
          {icon}
        </span>
          <h4>{title}</h4>
        </div>
          <X className='close' size={20}/>
      </div>
      <p>
       {paragraph}
      </p>
    </div>
  );
};

export default Alert;
