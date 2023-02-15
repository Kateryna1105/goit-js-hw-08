import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');


player.on('timeupdate', throttle (onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);

    if (localStorage.getItem('videoplayer-current-time')) {
        player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
    }
}


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')||0);
