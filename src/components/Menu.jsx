import React from 'react';

function Menu({ selectedCount, isLoggedIn, toggleLoginState }) {
  return (
    <div className="menu">
      {/* Your other menu content */}
      <div className="selected-count">Selected Products: {selectedCount}</div>
      <div className="login-button">
        {isLoggedIn ? (
          <button onClick={toggleLoginState}>Logout</button>
        ) : (
          <button onClick={toggleLoginState}>Login</button>
        )}
      </div>
    </div>
  );
}

export default Menu;