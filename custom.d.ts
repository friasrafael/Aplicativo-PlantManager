//Vai permitir que uma imagem seja adicionada dentro do React Native
declare module '*.png' {  //Quando surgir qualquer arquivo que tenha a extensão .png
    const content: any;
    export default content;
}