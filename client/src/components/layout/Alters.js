import React, { useContext } from 'react';
import alertContext from '../../context/alter/alertContext';

const Alter = () => {
  const AlterContext = useContext(alertContext);
  const { alters } = AlterContext;
  return (
    alters.length > 0 &&
    alters.map((alter) => (
      <div key={alter.id} className={`alter alter-${alter.type}`}>
        <i className='fas fa-info-circle'></i>
        {alter.msg}
      </div>
    ))
  );
};

export default Alter;
