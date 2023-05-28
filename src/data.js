import image1 from './images/tour-1.jpeg'
import image2 from './images/tour-2.jpeg'
import image3 from './images/tour-3.jpeg'
import image4 from './images/tour-4.jpeg'

export const pageLinks = [
    { id: 1, href: '#home', text: 'home'},
    { id: 2, href: '#about', text: 'about'},
    { id: 3, href: '#services', text: 'services'},
    { id: 4, href: '#tours', text: 'tours'}
]

export const socialLinks = [
    {id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
    {id: 3, href: "https://www.linkedin.com", icon: "fab fa-linkedin"}
]

export const services = [
    {id:1, icon: 'fas fa-wallet fa-fw', header: 'saving money', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:2, icon: 'fas fa-tree fa-fw', header: 'endless hiking', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
    {id:3, icon: '"fas fa-socks fa-fw', header: 'amazing comfort', para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},    
]

export const tourDetails = [
    {id:1, img: image1, date: 'august 26th, 2020', title: 'Tibet Adventure', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', icon: 'fas fa-map', day: 6, price: 2100, country: "china"},
    {id:2, img: image2, date: 'august 26th, 2020', title: 'Tibet Adventure', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', icon: 'fas fa-map', day: 6, price: 2100, country: "Indonesia"},
    {id:3, img: image3, date: 'august 26th, 2020', title: 'Tibet Adventure', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', icon: 'fas fa-map', day: 6, price: 2100, country: "HongKong"},
    {id:4, img: image4, date: 'august 26th, 2020', title: 'Tibet Adventure', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', icon: 'fas fa-map', day: 6, price: 2100, country: "Kenya"},
]