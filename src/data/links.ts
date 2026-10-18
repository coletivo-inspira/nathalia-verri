import {
    Mail,
} from 'lucide-react';

import { FaInstagram, FaLinkedin, FaTiktok, FaPinterest } from 'react-icons/fa';

import maxTitanium from '../assets/partnership_maxtitanium.png';
import glam from '../assets/partnership_glam.webp';
import gummy from '../assets/partnership_gummy.jpeg';
import pangeia96 from '../assets//partnership_pangeia96.png';
import ysy from '../assets/partnership_ysy.png';
import korres from '../assets/partnership_korres.png';
import acm from '../assets/partnership_ACM.webp';
import notMe from '../assets/partnership_notMe.webp';
import drpeanut from '../assets/partnership_drpeanut.jpeg';
import bemviver from '../assets/partnership_bemvivertapetearte.jpeg';
import heymu from '../assets/partnership_heymu.png';
import sleepo from '../assets/partnership_sleepo.avif';
import baw from '../assets/partnership_baw.png';
import holyfoods from '../assets/partnership_holyfoods.avif';
import minima from '../assets/partnership_minima.jpg';
import oceane from '../assets/partnership_oceane.jpg';
import cadiveu from '../assets/partnership_cadiveu.png';
import davene from '../assets/partnership_davene.png';
import beonstudio from '../assets/partnership_beonstudio.png';
import aurha from '../assets/partnership_aurha.png';
import superagenciabr from '../assets/partnership_superagenciabr.jpg';
import bizcomunica from '../assets/partnership_bizcomunica.jpg';
import hotmartfire from '../assets/partnership_hotmartfire.jpg';

export const socialLinks = [
    {
        icon: Mail,
        url: 'mailto:contatonanathsday@gmail.com',
    },
    {
        icon: FaInstagram,
        url: 'https://instagram.com/nanathsday',
    },
    {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/nathaliaverri/',
    },
    {
        icon: FaTiktok,
        url: 'https://tiktok.com/@nanathsday',
    },
    {
        icon: FaPinterest,
        url: 'https://pinterest.com/verrimuch',
    },
];

/**
 * Onde cada item aparece:
 *  - 'cupom'    -> só na página de cupons (BioLink)
 *  - 'parceria' -> só nas "Parcerias Recentes" do Media Kit
 *  - 'ambos'    -> nos dois (padrão quando `type` é omitido)
 */
export type CreatorLinkType = 'cupom' | 'parceria' | 'ambos';

export interface CreatorLink {
    title: string;
    code?: string;
    image?: string;
    url: string;
    type?: CreatorLinkType;
}

const allCreatorLinks: CreatorLink[] = [
    {
        title: 'SUPER AGÊNCIA BR',
        image: superagenciabr,
        url: 'https://www.instagram.com/superagenciabr',
        type: 'parceria',
    },
    {
        title: 'BIZ COMUNICA',
        image: bizcomunica,
        url: 'https://www.instagram.com/bizcomunica',
        type: 'parceria',
    },
    {
        title: 'HOTMART FIRE',
        image: hotmartfire,
        url: 'https://www.instagram.com/hotmartfire',
        type: 'parceria',
    },
    {
        title: 'BEON STUDIOS',
        code: 'NANATHSDAY10',
        image: beonstudio,
        url: 'https://beonstudios.com/',
    },
    {
        title: 'HOLY FOODS',
        code: 'NAGALOVE',
        image: holyfoods,
        url: 'https://holyfoods.com.br/',
    },
    {
        title: 'MAX TITANIUM',
        code: 'MAX10NAGALOVE',
        image: maxTitanium,
        url: 'https://www.maxtitanium.com.br/',
    },
    {
        title: 'HEY!MU',
        code: 'NANATHS',
        image: heymu,
        url: 'https://www.heymu.com.br/',
    },
    {
        title: 'MÍNIMA SUPLEMENTOS',
        code: 'NANATHS',
        image: minima,
        url: 'https://minimasuplementos.shop/',
    },
    {
        title: 'SLEEPO',
        code: 'NANATH20',
        image: sleepo,
        url: 'https://sleepo.com.br/',
    },
    {
        title: 'CADIVEU',
        code: 'NANATHS',
        image: cadiveu,
        url: 'https://store.cadiveu.com/',
    },
    {
        title: 'OCEANE',
        code: 'NANATHS',
        image: oceane,
        url: 'https://www.oceane.com.br/',
    },
    {
        title: 'GLAM BEAUTY',
        code: 'NAGALOVE',
        image: glam,
        url: 'https://glam.com.br/favoritos/50641',
    },
    {
        title: 'GUMMY',
        code: 'GUMMYNAGALOVE',
        image: gummy,
        url: 'https://www.gummy.com.br/',
    },
    {
        title: 'PANGEIA96',
        code: 'NAGALOVE10',
        image: pangeia96,
        url: 'https://www.pangeia96.com.br/',
    },
    {
        title: 'AURHA',
        code: 'NANATHSDAY10',
        image: aurha,
        url: 'https://aurha.com.br/',
    },
    {
        title: 'DAVENE',
        code: 'NANATHS',
        image: davene,
        url: 'https://www.davene.net.br/',
    },
    {
        title: 'YSY JOIAS',
        code: 'NAGALOVE',
        image: ysy,
        url: 'https://www.ysyacessorios.com.br/',
    },
    {
        title: 'KORRES',
        code: 'NAGALOVE',
        image: korres,
        url: 'https://www.shopkorres.com.br',
    },
    {
        title: 'ACM FITWEAR',
        code: 'NAGALOVE',
        image: acm,
        url: 'https://acmfitwear.com.br/',
    },
    {
        title: 'NOT ME',
        code: '@NAT10',
        image: notMe,
        url: 'https://not-me.com.br/',
    },
    {
        title: 'DR. PEANUT',
        code: 'BLNANATHS',
        image: drpeanut,
        url: 'https://www.drpeanut.com.br/',
    },



    {
        title: 'BAW CLOTHING',
        code: 'BAWNANATHSDAY',
        image: baw,
        url: 'https://www.bawclothing.com.br/',
    },
    {
        title: 'BEM VIVER',
        code: 'BVNAGALOVE',
        image: bemviver,
        url: 'https://bemvivertapetearte.com.br/',
    },
];

const isType = (l: CreatorLink, t: 'cupom' | 'parceria') =>
    (l.type ?? 'ambos') === 'ambos' || l.type === t;

/** Lista da página de cupons (BioLink) */
export const creatorLinks = allCreatorLinks.filter((l) => isType(l, 'cupom'));

/** Lista de "Parcerias Recentes" do Media Kit */
export const partnerships = allCreatorLinks.filter((l) => isType(l, 'parceria'));