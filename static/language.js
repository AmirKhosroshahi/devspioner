let getCountry = '';
if (typeof window !== 'undefined') {
    
    getCountry = JSON.parse(localStorage.getItem('country'));
}
//Colombia

let menu = [];
let title = [];
let description = [];
let workImage = [];
let projects = [];
let viewProject = [];
let footer = []
let contactUs = [];
switch (getCountry) {
    case "Colombia":
        menu = {Home: 'Hogar', Projects: 'Proyectos', contact: 'Contáctenos'}
        title = {textUp: 'Desarrollo basado', textCenter: 'en el diseño', buttText: 'de su producto web'};
        description = {
            left: 'Impulsando su negocio con productos sólidos',
            right: `Somos un equipo creativo de servicio completo que crea una experiencia inmersiva. Creemos nuestro los clientes merecen lo mejor. Nuestro objetivo es crear nuevas ideas y diseños modernos para diferenciar . Nuestro evaluará completamente sus necesidades y las implementará de la mejor manera.`
        }
        workImage = ['Trabajos recientes'];
        projects = ['Proyectos'];
        viewProject = ['ver Proyecto'];
        footer = {
            title: '¿Necesitas consejo?',
            question: 'Formas de comunicación con nosotros',
            contact: 'Contáctenos'
        };
        contactUs = {title : '¿Entonces qué necesitas?', name: 'nombre', email: 'correo electrónico', nz :'Cuéntanos qué necesitas.'};
        break;
    default :
        menu = {Home: 'Home', Projects: 'Projects', contact: 'Contact us'}
        title = {textUp: ' Design-driven', textCenter: 'development of your', buttText: ' web product'};
        description = {
            left: 'Driving your business forward with strong products',
            right: `We are a full-service creative team that creates an immersive experience. We believe our customers deserve the best. Our goal is to create new ideas and modern designs to differentiate you from your competitors. Our team will fully assess your needs and implement them in the best way.`
        }
        workImage = ['Recent Works'];
        projects = ['Project'];
        viewProject = ['view project'];
        footer = {title: 'Do you need advice?', question: 'Ways of communication with us.', contact: 'Get a quote '};
        contactUs = {title : 'So, what do you need?', name : 'Name', email:'Email', nz :'Tell us what do you need.'};
}


export {
    menu,
    title,
    description,
    workImage,
    projects,
    viewProject,
    footer,
    contactUs
}