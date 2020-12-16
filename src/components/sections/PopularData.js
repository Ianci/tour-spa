import {FaMountain} from 'react-icons/fa'
import {RiShipFill} from 'react-icons/ri'
import { FaSnowflake } from 'react-icons/fa'

import cardimage from '../../images/cardimage.jpg'
import bariloche from '../../images/bariloche.jpg'
import barilochee from '../../images/barilochee.jpg'

export const popularData = [
    {
        icon: <FaMountain />,
        title: "Cruce Andino de Argentina a Chile",
        paragraph: "Un magnífico recorrido con paisajes y vistas panorámicas que dejan ver la majestuosa belleza de la patagonia cordillerana.",
        image: cardimage
    },
    {
        icon: <RiShipFill />,
        title: "San Martin de los Andes por Siete Lagos",
        paragraph: "Esta excursión invita a recorrer una de las rutas más famosas de la Patagonia Argentina, la ruta de los 7 lagos. El atractivo de este trayecto que une Villa La Angostura con San Martín de los Andes se concentra en hermosos lagos de aguas cristalinas.",
        image: bariloche
    },
    {
        icon: <FaSnowflake />,
        title: "Villa La Angostura y Cerro Bayo",
        paragraph: "Recorre los paisajes de esta villa turística de ensueño y disfruta de las atractivas propuestas del Cerro Bayo.",
        image: barilochee
    },
   
]
