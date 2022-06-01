import React from 'react';

const ItemList = ({items}) => {
    return(
        items.map( item => <div className= "items" key={item.id}>
            <table>
            <tbody>
            <tr>
                <td>
                    {item.name}
                </td>
            </tr>
            </tbody>    
            </table></div>)
    );
}

export default ItemList;