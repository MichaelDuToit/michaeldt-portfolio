import { useState } from "react";

export default function Carousel({ images })
{
    const imgArray = images.map((img, index) => ({
        index: index,
        url: img
    }));

    const hideArrows = (imgArray.length == 1);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentCarouselImage, setCurrentCarouselImage] = useState(imgArray[0]);

    function changeSlide(direction)
    {
        let nextImageIndex = currentImageIndex - direction;
        const maxImageIndex = imgArray.length - 1;

        if(nextImageIndex < 0)
        {
            nextImageIndex = maxImageIndex;
        }
        else if (nextImageIndex > maxImageIndex)
        {
            nextImageIndex = 0
        }

        setCurrentImageIndex(nextImageIndex);
        setCurrentCarouselImage(imgArray[nextImageIndex]);
    }

    return (
        <div className="carousel">
            <a className={`modalPrev ${hideArrows ? "btnHidden" : ""}`} onClick={() => changeSlide(-1)}>&#10094;</a>
            <img src={`/images/${currentCarouselImage.url}`} />
            <a className={`modalNext ${hideArrows ? "btnHidden" : ""}`} onClick={() => changeSlide(1)}>&#10095;</a>
        </div>
    )
}

