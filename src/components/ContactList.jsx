import React from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import SearchBar from './SearchBar';

const ContactList = () =>{
    const contactList = useSelector((state) => state.contactList);

    return(
        <div>
            <SearchBar/>
            {contactList.map((item) => (
                <ContactItem item={item}/>
            ))}
        </div>
    );
};

export default ContactList;