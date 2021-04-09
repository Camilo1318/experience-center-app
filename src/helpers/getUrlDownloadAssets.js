import { storage } from "../firebase/fierabse-config";

export const getUrlDownloadAssets = async (nameImage, nameMarca) => {

    const ImageRef = storage.ref().child(`Images/${nameImage}.png`);
    const MarcaRef = storage.ref().child(`Marcas/${nameMarca}.png`);

    const urlImage = await ImageRef.getDownloadURL();
    const urlMarca = await MarcaRef.getDownloadURL();

    return [urlImage, urlMarca];

}