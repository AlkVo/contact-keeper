import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { _id, name, email, phone, type } = contact;

  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
        <ul className='list'>
          {email && (
            <li>
              <i className='fas fa-envelope-open' /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='fas fa-phone' /> {phone}
            </li>
          )}
        </ul>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => {
            setCurrent(contact);
          }}
        >
          编辑
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          删除
        </button>
      </h3>
    </div>
  );
};

export default ContactItem;
