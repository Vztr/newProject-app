export interface NewProjectModel {
    nav: Nav;
    info: Info;
    photos: Photos;   
}
  
  export interface Nav {
    title: string;
    logo: Img;
  }
  
  export interface Img {
    src: string;
    alt: string;
  }
  
  export interface Info {
    text: string;
  }
  
  export interface Photos {
    title: string;
    images: Img[];
  }
  