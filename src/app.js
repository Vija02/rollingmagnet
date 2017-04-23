import img1 from './assets/img/1.jpg';
import img2 from './assets/img/2.jpg';

import photo1 from './assets/img/photo-01.jpg';
import photo2 from './assets/img/photo-02.jpg';
import photo3 from './assets/img/photo-03.jpg';

export class App {
  goToBot() {
    $('html, body').animate({
      scrollTop: $(document).height() - $(window).height()},
      600
    );
  }

  slide = [photo1, photo2, photo3];

  technologies = [
    {icon: 'icon-csharp', toolTip: 'C#', link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)' },
    {icon: 'icon-javascript', toolTip: 'JS', link: 'https://en.wikipedia.org/wiki/JavaScript' },
    {icon: 'icon-php', toolTip: 'PHP', link: 'http://php.net/' },
    {icon: 'icon-python', toolTip: 'Python', link: 'https://www.python.org/' },
    {icon: 'icon-ubuntu', toolTip: 'Ubuntu', link: 'https://www.ubuntu.com/' },
    {icon: 'icon-unity', toolTip: 'Unity', link: 'https://unity3d.com/' },
    {icon: 'icon-heroku', toolTip: 'Heroku', link: 'https://www.heroku.com/' },
    {icon: 'icon-nginx', toolTip: 'Nginx', link: 'https://www.nginx.com/' },
    {icon: 'icon-html5', toolTip: 'HTML5', link: 'https://en.wikipedia.org/wiki/HTML5' },
    {icon: 'icon-css3', toolTip: 'CSS3', link: 'https://developer.mozilla.org/en/docs/Web/CSS/CSS3' },
    {icon: 'icon-reactjs', toolTip: 'React JS', link: 'https://facebook.github.io/react/' },
    {icon: 'icon-nodejs', toolTip: 'NodeJS', link: 'https://nodejs.org/en/' },
    {icon: 'icon-npm', toolTip: 'NPM', link: 'https://www.npmjs.com/' },
    {icon: 'icon-mysql', toolTip: 'Mysql', link: 'https://www.mysql.com/' },
    {icon: 'icon-postgresql', toolTip: 'Postgresql', link: 'https://www.postgresql.org' }
  ]

  projects = [
    {title: 'Beyond Stars', img: img1, description: 'A visual novel puzzle game unfolding the story of Alex as he goes to a journey of a lifetime. Available on Play Store.', link: 'https://play.google.com/store/apps/details?id=com.beyond.stars&hl=en' },
    {title: 'U-Magnet', img: img2, description: 'An utility website that shortens the url of any website into a memorable link. Never have any troubles with url anymore!', link: 'https://url.rollingmagnet.com' }
  ]

}
