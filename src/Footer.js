import React from  'react';
import footImg from './Asstes/restaurant chef B.jpg'

function Footer ()
{
    return(
       <div>
        <table>
            <row>
            <td colSpan={6}><img src={footImg} width={100} height={100}/></td>
            <td>Nav</td>
            <td>Contact</td>
            <td>Social Media</td>
            </row>
            <row>
            <td>Home</td>
            <td>Phone</td>
            <td>phone</td>
            </row>
            <row>
            <td>About</td>
            <td>Email</td>
            <td>Email</td>
            </row>
        </table>
       </div>
    )
}
export default Footer;