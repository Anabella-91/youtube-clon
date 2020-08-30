import React, {Component} from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcons from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import SearchBar from './SearchBar';
import './Header.css';

class Header extends Component {
    render(){
    return(
        <div className='header'>
            <div className='header__left'>
                <img 
                    className='header__logo'
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fe%2Fe1%2FLogo_of_YouTube_%25282015-2017%2529.svg%2F1280px-Logo_of_YouTube_%25282015-2017%2529.svg.png&f=1&nofb=1' 
                    alt='youtube' 
                />
            </div>
            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcons className='header__icon' />
                <Avatar src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tM0tTTV2CBGmvh3vZ8yYaQHaGn%26pid%3DApi&f=1'
                alt='user-youtube'
                />
            </div>
        </div>
    )
    }
};

export default Header;