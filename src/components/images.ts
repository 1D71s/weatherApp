// Импортируем все картинки из папки
function importAll(r: __WebpackModuleApi.RequireContext) {
    let images: { [key: string]: string } = {};
    r.keys().forEach((item: string, index: number) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
}

// Импортируем все картинки из папки
const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg|webp)$/));

export default images;
