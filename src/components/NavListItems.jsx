import React from 'react';

function NavListItems({ item, navOnClick }) {
  return (
    <li>
      <a href='#' className={`${item.active ? 'active' : undefined}`}
       onClick={()=>navOnClick(item._id, item.target)}>
        <i className={`bi ${item.icon}`}></i>
        <spam className="navName">{item.name}</spam>
      </a>
    </li>
  );
}

export default NavListItems;
