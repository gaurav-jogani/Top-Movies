import './header.css'
import dots3 from '../../assests/icons/Vector.svg';
import backBtn from '../../assests/icons/Arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const Header = ({ page }) => {

    const navigate = useNavigate();
    const [dropdownVisible, setDropdownVisible] = useState(false);

    return (
        <div className="hdrMain">
            {
                page === 'home' ?
                    <span className='titleHeader'>Pop Movies</span>
                    : <div>
                        <img className='backBTn' onClick={() => navigate(-1)} src={backBtn} alt="" />
                        <span className='titleHeader'>Movies Details</span>
                    </div>
            }

            <img onClick={() => setDropdownVisible(!dropdownVisible)} className='dot3' src={dots3} alt="" />
            {dropdownVisible &&
                <div className='drpdwn'>
                    <div className='drpdwnContent'>
                        <p>Menu Item 1</p>
                        <p>Menu Item 2</p>
                        <p>Menu Item 3</p>
                    </div>
                </div>
            }

        </div>
    )
}