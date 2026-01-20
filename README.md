                                                                    Reflection
                                                                    ----------

1-How did you dynamically create and append new elements to the DOM?

  I used document.createElement('li') to create new list items and set their content using innerHTML. After attaching event listeners for quantity changes and removal, I appended each item to the cart using cart.appendChild(li).
  
2-What steps did you take to ensure accurate updates to the total price?

 I stored each item’s price and total using data-price and data-total attributes. Whenever an item was added, removed, or its quantity changed, I recalculated the difference and updated the total using a dedicated updateTotalPrice() function.
 
3-How did you handle invalid input for product name or price?

 I validated the input by checking for an empty product name, non-numeric values, or prices less than or equal to zero. If the input was invalid, an alert message was shown and the product was not added.
 
4-What challenges did you face when implementing the remove functionality?

 The main challenge was correctly updating the total price when an item was removed. I solved this by retrieving the item’s stored total from a data attribute, subtracting it from the overall total, and then removing the item from the DOM.

