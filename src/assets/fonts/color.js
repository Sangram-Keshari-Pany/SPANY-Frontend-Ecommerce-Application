import {Dimensions} from 'react-native';

export const { width, height } = Dimensions.get('window');

export const dynamicMargin = width < 360 ? 10 : width < 600 ? 15 : 20;
export const dynamicPadding = width < 360 ? 10 : width < 600 ? 15 : 20;
export const dynamicFontSize = width < 360 ? 12 : width < 600 ? 14 : 20;
export const dynamicBorderRadius = width < 360 ? 10 : width < 600 ? 15 :20;
export const dynamicWidth = width - dynamicPadding * 2;

export const contentWidth = width - dynamicPadding * 2;
export const dynamicIconSize = contentWidth < 360 ? 20 : contentWidth < 600 ? 35 : 55;


const DarkMood=!false

 export const Themes ={
    color1:DarkMood==true?"#000000":"#FFFFFF", //Dark and white
    color2:DarkMood==true?"#0252FF":"#004BFE", //Blue and Blue
    color3:DarkMood==true?"#2B2C31":"#D9E4FF", //gray and sky
    color4:DarkMood==true?"#FFFFFF":"#000000", //white and dark
    color5:DarkMood==true?"#2B2C31":"#F8F8F8", //gray and whitegray
    color6:DarkMood==true?"#FFFFFF":"#FFFFFF", //white and white
    color7:DarkMood==true?"#5f5f5f":"#D2D2D2", //gray gary
    color8:DarkMood==true?"#ff0070":"#004BFE", //red blue
    color9:DarkMood==true?"#CAC9C9":"#000000", //gray and black
    color10:DarkMood==true?"#434343":"#FFFFFF", //shadow and shadow
}



export const Backgroundcolor={
    backgroundWhite: DarkMood==true?"#000000":"#FFFFFF",
    BackgroundBlue:DarkMood==true?"#0252FF":"#004BFE",
    BackgroundSky:DarkMood==true?"#2B2C31":"#D9E4FF",
    BackgroundGray:DarkMood==true?"#2A2A2B":"#F8F8F8",
    Backgroundred:DarkMood==true?"#000000":"#FA2455",

    Backgroundcolor1:DarkMood==true?"#000000":"#FFFFFF"


}

export const Textcolor={
    TextBlack:DarkMood==true?"#FFFFFF":"#000000",
    TextWhite:DarkMood==true?"#FFFFFF":"#FFFFFF",
    PlaceHolderGray:DarkMood==true?"#5f5f5f":"#D2D2D2",
    TextBlue:DarkMood==true?"#ff0070":"#004BFE",

    Textcolor1:DarkMood==true?"#FFFFFF":"#000000"

}