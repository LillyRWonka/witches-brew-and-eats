//EC: function retrieve saved Items for the order from the user's local storage
export const getSavedMenusIds = () => {
    const savedMenusIds = localStorage.getItem('saved_menus')
      ? JSON.parse(localStorage.getItem('saved_menus'))
      : [];
  
    return savedMenusIds;
  };

//EC: save array of items Id for order
export const saveMenusIds = (menusIdArr) => {
    if (menusIdArr.length) {
      localStorage.setItem('saved_menus', JSON.stringify(menusIdArr));
    } else {
      localStorage.removeItem('saved_menus');
    }
};
  
//EC: function to remove one item ID from the array of saved items for the order
export const removeMenusId = (menusId) => {
    const savedMenusIds = localStorage.getItem('saved_menus')
        ? JSON.parse(localStorage.getItem('saved_menus'))
        : null;
    
    if (!savedMenusIds) {
        return false;
    }
    const updatedSavedMenusIds = savedMenusIds?.filter((savedMenusId) => savedMenusId !== menusId);
    localStorage.setItem('saved_menus', JSON.stringify(updatedSavedMenusIds));
    return true;
}; 